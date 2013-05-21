var Common = {
	version: "03",
	modNames: ["1-2", "4-5", "6-7", "9-10", "11-12", "14-15", "16-17", "19-20"],
	rotations: 14
};

/* PREFERENCE (STORAGE) */
function Pref (key, def)
{
	this.cookieName = Common.version + key;
	
	this.defaultValue = def;
	this.currentValue = this.cookie ();
	
	if (this.currentValue === null)
	{
		this.set (def);
		this.currentValue = this.cookie (); // clone for default
	}
}

Pref.prototype.get = function () { return this.currentValue; };
Pref.prototype.set = function (v) { this.currentValue = v; this.commit (); };
Pref.prototype.cookie = function () { return JSON.parse ($.cookie (this.cookieName)); };
Pref.prototype.commit = function () { $.cookie (this.cookieName,
	JSON.stringify (this.currentValue), {expires: 7}); };
Pref.prototype.reset = function () { this.set (this.defaultValue); };

Pref.classes = new Pref ("classes", []);
Pref.locks = new Pref ("locks", {});
Pref.teachers = new Pref ("teachers", {});

Pref.lunches = new Pref ("lunches", [false, false, false, false, false, false, false, false]);
Pref.pick = new Pref ("pick", 1);
Pref.sort = new Pref ("sort", "score");
Pref.dist = new Pref ("dist", "binomial");

/* OPTIONS INTERFACE */
var OptionsUI = {

	hidden: false,
	animating: false,

	initCoursesList: function () {
		for (var deptKey in DB.base)
		{
			var dept = DB.base[deptKey];
			
			var deptDiv = $("<div>").addClass ("deptSection");
			var deptCourses = $("<ul>").addClass ("deptCourses");
			var deptHeader = $("<div>").addClass ("deptHeader").text (deptKey);
			
			deptDiv.append (deptHeader);
			deptDiv.append (deptCourses);
			
			var courses = [];
			for (var key in dept)
				courses.push (dept[key]);
			
			courses.sort (function (a, b) {
				a = a.name;
				b = b.name;
				
				if (a < b)
					return -1;
				else if (a > b)
					return 1;
				else
					return 0;
			});
			
			
			for (var i = 0; i < courses.length; i++)
				deptCourses.append (OptionsUI.createCourseItem (courses[i]));
			
			$("#courseTab").append (deptDiv);
		}
		
		$("#courseTab").
			delegate (".courseBox", "change", OptionsUI.courseBoxChanged).
			delegate (".courseLock", "click", OptionsUI.lockClicked);
		
		var classes = Pref.classes.get ();
		for (var i = 0; i < classes.length; i++)
			OptionsUI.courseBoxChanged.call ($("#courseBox-" + classes[i]).prop ("checked", true));
	},
	
	initOptions: function () {
		var lunches = Pref.lunches.get ();
		for (var i = 0; i < 8; i++)
			$("#lunchBox-" + i).prop ("checked", lunches[i]);
		$(".lunchDiv input").change (OptionsUI.lunchBoxChanged);
		
		$("#pickSelect").val (Pref.pick.get ()).change (function () {
			Pref.pick.set ($(this).val ());
		});
		
		$.each (["sort", "dist"], function (i, type) {
			var klass = type + "Option";
			$("." + klass +"[value=" + Pref[type].get () + "]").prop ("checked", true);
			$("." + klass).change (function () {
				Pref[type].set ($(this).val ());
			});
		});
	},
	
	initActions: function () {
		$("#tabToggle").click (OptionsUI.tabToggleClicked);
	
		$("#resetActionButton").click (OptionsUI.resetButtonClicked);
		$("#stopActionButton").click (OptionsUI.stopButtonClicked);
		$("#printActionButton").click (OptionsUI.printButtonClicked);
		$("#worksheetActionButton").click (OptionsUI.worksheetButtonClicked);
		$("#schedulesActionButton").click (OptionsUI.schedulesButtonClicked);
	},
	
	createCourseItem: function (course) {
		var ret = $("<li>");
		
		var header = $("<div>").addClass ("courseHeader");
		ret.append (header);
		
		var id = "courseBox-" + course.id;
		var box = $("<input>").attr ("type", "checkbox").attr ("id", id).addClass (
			"courseBox").data ("course", course);
		header.append (box);
		header.append ($("<label>").attr ("for", id).text (course.name));
		header.append ($("<div>").html ("&nbsp;").addClass ("courseLock"));
		
		ret.data ("course", course);
		return ret;
	},
	
	createCourseOptions: function (course) {
		return $("<div>").addClass ("courseOptions");
	},
	
	updateCourseItem: function (li) {
		var course = li.data ("course");
		
		if (Pref.locks.get()[course.id])
			li.addClass ("courseLocked");
		
		/* update options */
		var opts = li.find (".courseOptions");
		
		var tchs = [];
		var slots = course.slots;
		for (var i = 0; i < slots.length; i++)
		{
			var tch = slots[i].teacher;
			if ($.inArray (tch, tchs) == -1)
				tchs.push (tch);
		}
		
		tchs.sort ();
		opts.empty ();
		
		if (li.hasClass ("courseLocked"))
		{
			var select = $("<select>");
			select.change (OptionsUI.lockUpdated);
			opts.append (select);
			
			var slots = course.slots;
			
			for (var i = 0; i < tchs.length; i++)
			{
				var tch = tchs[i];
				
				var mods = [-1];
				for (var j = 0; j < slots.length; j++)
				{
					var slot = slots[j];
					if (slot.teacher == tch && $.inArray (slot.mod, mods) == -1)
						mods.push (slot.mod);
				}
				
				if (mods.length == 2) /* if teacher only teaches one mod, one extra is from mods = [-1] */
					mods.shift ();
				
				for (var j = 0; j < mods.length; j++)
				{
					var mod = mods[j];
					var modName = (mod != -1) ? Common.modNames[mod] : "Any";
					var option = $("<option>").val (mod + ":" + tch).text (tch + " (" + modName + ")");
				
					select.append (option);
				}
			}

			var lock = Pref.locks.get()[course.id];
			if (lock)
				select.val (lock);
			
			Pref.locks.get()[course.id] = select.val ();
			Pref.locks.commit ();
		}
		else
		{
			for (var i = 0; i < tchs.length; i++)
			{
				var tch = tchs[i];
				var key = Util.toKey (tch);
				var pref = Processor.getTeacherPreference (tch);
			
				var item = $("<div>").addClass ("teacherItem");
				opts.append (item);
				
				var left = $("<div>").css ("float", "left").css ("font-weight", "bold");
				left.text (tchs[i]);
				item.append (left);
				
				var right = $("<div>").css ("float", "right");
				right.append ($("<input>").attr ("size", 4).addClass (
					"teacherValue-" + key).attr ("value", pref).prop ("readOnly", true));
				item.append (right);
				
				item.append ($("<div>").css ("height", "4px").css ("clear", "both"));
				
				var slider = $("<div>").data ("teacher", tch).addClass ("teacherSlider-" + key);
				slider.slider ({min: -10, max: 10, step: 2, value: pref,
					slide: OptionsUI.sliderSlid, change: OptionsUI.sliderChanged});
				item.append (slider);
				
				item.append ($("<div>").text ("Bad").css ("float", "left"));
				item.append ($("<div>").text ("Good").css ("float", "right"));
				
				item.append ($("<div>").css ("clear", "both"));
			}
		}
	},
	
	isIntensive: function () {
		return (ResultsUI.worker % 2 == 1 || $("#resultsPage").children ().length > 50);
	},
	
	showOptions: function () {
		var results = $("#resultsPanel");
		
		results.css ("left", "");
		var left = results.position ().left;
		results.css ("left", "0");
		
		var next = function () {
			var options = $("#optionsPanel");
			
			options.css ("height", "");
			options.children ().show ();
		
			options.animate ({top: "0", bottom: "0"},
				{duration: 200, complete: function () { OptionsUI.animating = false; }});
			$("#tabToggle span").fadeOut (100, "linear", function () {
				$(this).text ("(hide)").fadeIn (100, "linear");
			});
		};
		
		OptionsUI.animating = true;
		OptionsUI.hidden = false;
		
		var target = {left: left + "px"};
		if (OptionsUI.isIntensive ())
		{
			results.css (target);
			next.delay (100);
			ResultsUI.calculateColumns ();
		}
		else
		{
			results.animate (target, {duration: 200,
				step: ResultsUI.calculateColumns, complete: next});
		}
	},
	
	hideOptions: function () {
		var options = $("#optionsPanel");
		var tab = $("#tabHeader").height ();
		var offset = options.height () - tab;
		
		var next = function () {
			options.css ("height", tab + "px");
			options.children ().not ("#tabHeader").hide ();
		
			var target = {left: "0"};
			if (OptionsUI.isIntensive ())
			{
				$("#resultsPanel").css (target);
				OptionsUI.animating = false;
				ResultsUI.calculateColumns ();
			}
			else
			{
				$("#resultsPanel").animate (target,
					{duration: 200, step: ResultsUI.calculateColumns,
					complete: function () { OptionsUI.animating = false; }});
			}
		};
		
		OptionsUI.animating = true;
		OptionsUI.hidden = true;
		
		options.animate ({top: offset + "px", bottom: (-offset) + "px"},
			{duration: 200, complete: next });
		$("#tabToggle span").fadeOut (100, "linear", function () {
			$(this).text ("(show)").fadeIn (100, "linear");
		});
	},
	
	buttonOperation: function (run) {
		$("#stopActionButton").prop ("disabled", !run);
		$("#printActionButton").prop ("disabled", run);
		$("#loadingIcon").css ("display", run ? "block" : "none");
	},
	
	beginOperation: function () {
		OptionsUI.buttonOperation (true);
	},
	
	endOperation: function () {
		OptionsUI.buttonOperation (false);
		$("#stopActionButton span").empty ();
	},
	
	trackEvent: function (category, action) {
		if (!window._gaq)
			return;
	
		var lunches = [];
		var data = Pref.lunches.get ();
		for (var i = 0; i < data.length; i++)
		{
			if (data[i])
				lunches.push (Common.modNames[i]);
		}
		lunches = lunches.join (",");
		
		var sort = {score: "By Score", chance: "By Chance"}[Pref.sort.get ()];
		if (!sort)
			sort = "Unknown";
	
		_gaq.push (
			["_setCustomVar", 1, "Lunches", lunches, 3],
			["_setCustomVar", 2, "Pick", String (Pref.pick.get ()), 3],
			["_setCustomVar", 3, "Sorting", sort, 3]
		);
		
		_gaq.push (["_trackEvent", category, action]);
	},
	
	courseBoxChanged: function (e) {
		var boxes = $("#courseTab .courseHeader input");
		boxes.not (":checked").prop ("disabled", boxes.filter (":checked").length >= 8);
		
		var me = $(this);
		var li = me.parents ("li").first ();
		
		if (me.is (":checked"))
		{
			li.append (OptionsUI.createCourseOptions (li.data ("course")));
			OptionsUI.updateCourseItem (li);
			li.addClass ("courseActive");
		}
		else
		{
			li.find (".courseOptions").remove ();
			li.removeClass ("courseActive");
		}
		
		Pref.classes.set ($(".courseBox:checked").map (function () {
			return $(this).data("course").id; }).toArray ());
	},
	
	sliderSlid: function (e, ui) {
		var tch = $(this).data ("teacher");
		var key = Util.toKey (tch);
		
		$(".teacherSlider-" + key).not (this).slider ("value", ui.value);
		$(".teacherValue-" + key).attr ("value", ui.value);
	},
	
	sliderChanged: function (e, ui) {
		var tch = $(this).data ("teacher");
		
		if (ui.value == 0)
			delete Pref.teachers.get()[tch];
		else
			Pref.teachers.get()[tch] = ui.value;
		
		Pref.teachers.commit ();
	},
	
	lockClicked: function (e) {
		var me = $(this);
		
		var li = me.parents ("li").first ();
		var course = li.data ("course");
		
		li.toggleClass ("courseLocked");
		if (!li.hasClass ("courseLocked"))
		{
			delete Pref.locks.get()[course.id];
			Pref.locks.commit ();
		}
		
		OptionsUI.updateCourseItem (li);
	},
	
	lockUpdated: function (e) {
		var me = $(this);
		
		var li = me.parents ("li").first ();
		var course = li.data ("course");
		
		Pref.locks.get()[course.id] = me.val ();
		Pref.locks.commit ();
	},
	
	tabClicked: function (e) {
		var me = $(this);
		me.siblings ("a").removeClass ("tabActive");
		me.addClass ("tabActive");
		
		var id = me.attr ("id");
		id = id.substring (0, id.length - 4);
		
		var tab = $("#" + id);
		tab.siblings ("div").removeClass ("tabActive");
		tab.addClass ("tabActive");
	},
	
	lunchBoxChanged: function (e) {
		Pref.lunches.set (
			$(".lunchDiv input").map (function () { return this.checked; }).toArray ()
		);
	},
	
	tabToggleClicked: function (e) {
		if ($("#startPage").hasClass ("pageActive") || OptionsUI.animating)
			return;
		OptionsUI[OptionsUI.hidden ? "showOptions" : "hideOptions"]();
	},
	
	resetButtonClicked: function (e) {
		if (confirm ("Everything will be reset to default."))
		{
			Pref.classes.reset ();
			Pref.locks.reset ();
			Pref.teachers.reset ();
			Pref.lunches.reset ();
			Pref.pick.reset ();
			Pref.sort.reset ();
			Pref.dist.reset ();
			location.reload ();
		}
	},
	
	stopButtonClicked: function (e) {
		OptionsUI.endOperation ();
		ResultsUI.updateWorker (false);
	},
	
	printButtonClicked: function (e) {
		OptionsUI.trackEvent ("Misc", "Print");
		ResultsUI.printResults ();
	},
	
	worksheetButtonClicked: function (e) {
		if (Processor.populateSchedules ())
		{
			OptionsUI.trackEvent ("Main", "Show Worksheet");
			ResultsUI.showWorksheet ();
			OptionsUI.buttonOperation (false);
		}
	},
	
	schedulesButtonClicked: function (e) {
		if (Processor.populateSchedules ())
		{
			OptionsUI.trackEvent ("Main", "Show Schedules");
			ResultsUI.showSchedules ();
		}
	}
	
};

var ResultsUI = {
	
	worker: 0,

	showSchedules: function () {
		OptionsUI.beginOperation ();
		ResultsUI.showAndEmptyResults ();
		ResultsUI.schedulesWorker (0, ResultsUI.updateWorker (true));
	},
	
	showAndEmptyResults: function () {
		var resultsPage = $("#resultsPage");
		resultsPage.addClass("pageActive").
			siblings ().removeClass ("pageActive");
		
		/* empty it smartly */
		if (resultsPage.has (".scheduleDiv").length > 0)
		{
			resultsPage.children ().detach ();
		}
		else
		{
			resultsPage.empty ();
		}
		
		ResultsUI.calculateColumns ();
	},
	
	createScheduleTable: function (schedule) {
	
		var chances = Processor.chances; // TODO
	
		var td = function (content, rowspan) {
			var ret = $("<td>").text (content);
			if (typeof rowspan === "number" && rowspan > 1)
				ret.attr ("rowspan", rowspan);
			return ret;
		};
		
		var th = function (content) {
			return $("<th>").text (content);
		};

		var thead = $("<thead>");
		var tbody = $("<tbody>");
	
		var header = $("<tr>");
		header.append (th ("Mod"));
		header.append (th ("Class Name / ID"));
		header.append (th ("Code"));
		header.append (th ("Room"));
		header.append (th ("Teacher"));
		header.append (th ("%"));
		header.css ("font-weight", "bold");
		thead.append (header);
		
		for (var mod = 0; mod < 8; mod++)
		{
			var cid = schedule[mod];
			
			var courseKey = "";
			var courseName = "";
			var courseCode = "";
			var courseSlots = [];
		
			if (cid == -1)
			{
				courseKey = "FREE";
				courseName = "Free";
				courseCode = "-";
				courseSlots.push ({
					mod: mod,
					room: "---",
					teacher: "FREE"
				});
			}
			else
			{
				var course = DB.index[cid];
				courseKey = course.key;
				courseName = course.name;
				if (course.code == "BC")
					courseCode = (mod % 2) ? "C" : "B";
				else
					courseCode = course.code;
			
				var slots = course.slots;
				for (var i = 0; i < slots.length; i++)
				{
					var slot = slots[i];
					if (slot.mod == mod && Processor.lockAllows (course, slot))
						courseSlots.push (slot);
				}
			}
		
			var numRows = courseSlots.length;
			for (var i = 0; i < numRows; i++)
			{
				var row = $("<tr>");
				var slot = courseSlots[i];
			
				if (i == 0)
					row.append (
						td (Common.modNames[mod], numRows)
					).append (
						td (courseName, numRows).append ($("<br>")).append (
							document.createTextNode ("(" + courseKey + ")")
						)
					).append (
						td (courseCode, numRows)
					);
			
				row.append (td (slot.room)); /* room */
				row.append (td (slot.teacher));
				
				if (chances[cid] && chances[cid][slot.index])
				{
					var pc = chances[cid][slot.index] * 100;
					row.append (td (pc.toFixed (2) + "%"));
				}
				else
				{
					row.append (td ("---"));
				}
				
				tbody.append (row);
			}
		}

		var table = $("<table>");
		table.append (thead);
		table.append (tbody);
	
		return table;
	},
	
	schedulesWorker: function (index, worker) {
		if (worker != ResultsUI.worker)
			return;
		
		var results = $("#resultsPage");
		
		var end = $.now () + 20;
		var len = Processor.schedules.length;
		
		function createTextCallabck (schedule)
		{
			return function () {
				var div = $("<div>").append (
					$("<pre>").text (ResultsUI.convertScheduleToText (schedule))
				);
				$("body").append (div);
				div.dialog ({
					width: 600,
					height: 400,
					modal: true,
					draggable: false,
					resizable: false,
					close: function () {
						div.dialog ("destroy").remove ();
					}
				});
				return false;
			};
		}
		
		while ($.now () < end)
		{
			var schedule = Processor.schedules[index];
			var percentage = (schedule.chance * 100).toFixed (2);
			
			var root = $("<div>").addClass ("scheduleDiv");
			
			var headerText = "Schedule #" + (index + 1) + " (" + percentage + "%)";
			headerText += " (Score: " + schedule.score + ")";
			
			var header = $("<div>");
			header.text (headerText);
			header.append (" ").append (
				$("<a>").attr ("href", "#").text ("Text").click (
					createTextCallabck (schedule)
				)
			);
			
			root.append (header);
			root.append (ResultsUI.createScheduleTable (schedule));
			
			results.append (root);
			
			if (++index >= len)
			{
				OptionsUI.endOperation ();
				ResultsUI.updateWorker (false);
				return;
			}
		}
		
		$("#stopActionButton span").text ("(" + index + "/" + len + ")");
		
		ResultsUI.schedulesWorker.delay (80, index, worker);
	},
	
	updateWorker: function (running) {
		return (ResultsUI.worker += (ResultsUI.worker % 2) + 2 + Number (running));
	},
	
	convertScheduleToText: function (schedule) {
		var output = [];
	
		for (var mod = 0; mod < 8; mod++)
		{
			var part = Common.modNames[mod] + " : ";
		
			var cid = schedule[mod];
			if (cid == -1)
			{
				part += "FREE";
			}
			else
			{
				var course = DB.index[cid];
				var slots = course.slots;
				part += course.name + " : ";
		
				var teachers = [];
				for (var i = 0; i < slots.length; i++)
				{
					var slot = slots[i];
					if (mod == slot.mod)
						teachers.push (slot.teacher);
				}
				
				part += teachers.join (" / ");
			}
		
			output.push (part);
		}
		
		return output.join ("\n");
	},
	
	showWorksheet: function () {
		ResultsUI.showAndEmptyResults ();
		
		var table = $("<table>").addClass ("worksheetTable").appendTo ($("#resultsPage"));
		var colgroup = $("<colgroup>").appendTo (table);
		var thead = $("<thead>").appendTo (table);
		var tbody = $("<tbody>").appendTo (table);
		
		var headerRow = $("<tr>").append ($("<td>")).appendTo (thead);
		var headerCol = $("<col>").appendTo (colgroup);
		
		var modRows = [];
		for (var mod = 0; mod < 8; mod++)
		{
			var row = $("<tr>").appendTo (tbody);
			row.append ($("<th>").text (Common.modNames[mod]));
			modRows.push (row);
		}
		
		var cids = Pref.classes.get ().slice (0);
		var tbm = Processor.teachersByMod;
		
		for (var i = 0; i < cids.length; i++)
		{
			var cid = cids[i];
			var course = DB.index[cid];
			var slots = course.slots;
			
			headerRow.append ($("<th>").append (
				$("<div>").text (course.name),
				$("<div>").text ("(" + course.key + ")")
			));
			
			for (var mod = 0; mod < 8; mod++)
			{
				var cell = $("<td>").appendTo (modRows[mod]);
				
				for (var j = 0; j < slots.length; j++)
				{
					var slot = slots[j];
					if (
						slot.mod == mod &&
						Processor.lockAllows (course, slot) &&
						slot.teacher in tbm[mod]
					)
					{
						var chance = Processor.chances[cid][j];
						var pc = (chance * 100).toFixed (0);
						
						var pcspan = $("<span>").addClass ("percentageSpan").text (
							"(" + pc + "%" + ")"
						);
						
						pcspan.toggleClass ("percentageSpanBad", pc < 0.1);
						pcspan.toggleClass ("percentageSpanGood", pc > 0.9);

						cell.append ($("<div>").addClass ("teacherLine").append (
							$("<span>").text (slot.teacher), pcspan
						));
					}
				}
			}
		}
	},
	
	printResults: function () {
		window.open ("print", "_blank");
	},
	
	populatePrint: function () {
		return $("#resultsPage").html ();
	},
	
	calculateColumns: function () {
		var max = 8;
		
		var page = $("#resultsPage");
		var columns = Math.floor (page.width () / 330);
		columns = Math.max (1, Math.min (max, columns));
		
		var nextClass = "columnsFit" + columns;
		if (page.hasClass (nextClass))
			return;
		
		for (var i = 1; i <= max; i++)
			page.removeClass ("columnsFit" + i);
		page.addClass (nextClass);
	},

	initColumns: function () {
		$(window).resize (ResultsUI.calculateColumns);
	}
};

function printCallback () { return ResultsUI.populatePrint (); }

var MoreMath = {
	factorial: function (x) {
		var ret = 1;
		while (x > 1)
			ret *= x--;
		return ret;
	},
	normalCDF: function (mean, stddev, x) {
		return 0.5 * (1 + MoreMath.erf (
			(x - mean) / (Math.sqrt (2) * stddev)
		));
	},
	erf: function (x) {
	
		if (x == 0)
			return 0;
	
		/* taken from http://en.wikipedia.org/wiki/Error_function */
		var sgn = x / Math.abs (x);
		x *= sgn;
		
		var p = 0.3275911;
		var a1 = 0.254829592;
		var a2 = -0.284496736;
		var a3 = 1.421413741;
		var a4 = -1.453152027;
		var a5 = 1.061405429;
		
		var t = 1 / (1 + p * x);
		return sgn * (1 - (
			a1 * t +
			a2 * t*t +
			a3 * t*t*t +
			a4 * t*t*t*t +
			a5 * t*t*t*t*t
		) * Math.exp (-x * x));
		
	},
	erfc: function (x) {
		return 1 - MoreMath.erf (x);
	},
	binomialCDF: function (n, p, k) {
		return MoreMath.regIncBetaFunc (1 - p, n - k, 1 + k);
	},
	regIncBetaFunc: function (x, a, b) {
		var sum = 0;
		var m = a + b - 1;
		for (var j = a; j <= m; j++)
		{
			var part = MoreMath.factorial (m);
			part /= (MoreMath.factorial (j) * MoreMath.factorial (m - j));
			part *= Math.pow (x, j);
			part *= Math.pow (1 - x, m - j);
			sum += part;
		}
		return sum;
	}
};

/* DATA PROCESSOR */
var Processor = {

	schedules: null,
	fills: null,
	chances: null,
	teachersByMod: null, /* avoid impossibilities on worksheets */
	
	/*
	modDesirability: [
		0.78, 1.00, 1.00, 0.88,
		0.82, 0.88, 0.94, 0.74
	],
	*/
	
	populateSchedules: function () {
		var schedules;
	
		if ((schedules = Processor.schedules = Processor.permuteSchedules ()).length == 0)
		{
			alert ("No valid schedules could be generated! Loosen your options.\n" +
				"Maybe a schedule with your courses simply isn't possible.");
			return false;
		}
		
		Processor.calculateFills ();
		Processor.calculateChances ();
		
		var tbm = Processor.teachersByMod = [];
		for (var mod = 0; mod < 8; mod++)
			tbm.push ({});
			
		for (var i = 0; i < schedules.length; i++)
		{
			var schedule = schedules[i];
			Processor.rateSchedule (schedule);
			Processor.updateTeachersWithSchedule (schedule);
		}
		
		var prop = Pref.sort.get ();
		schedules.sort (function (a, b) {
			return b[prop] - a[prop];
		}); /* reversed, greatest first */
		
		return true;
	},
	
	permuteSchedules: function () {
		var cids = Pref.classes.get ().slice (0); /* we'll be changing it */
		var lunches = Pref.lunches.get ();
		
		while (cids.length < 8)
			cids.push (-1);

		var ret = [];
		ret.$ = {};

		var p = new Array (8);
		for (var i = 0; i < 8; i++)
			p[i] = 0;
	
		Processor.validatePermutation (cids, lunches, ret);
		
		var i = 1;
		while (i < 8)
		{
			if (p[i] < i)
			{
				var j = i % 2 * p[i];
			
				var tmp = cids[j];
				cids[j] = cids[i];
				cids[i] = tmp;
			
				Processor.validatePermutation (cids, lunches, ret);
			
				p[i]++;
				i = 1;
			}
			else
			{
				p[i] = 0;
				i++;
			}
		}
		
		delete ret.$;
		return ret;
	},
	
	validatePermutation: function (cids, lunches, ret) {
		var key = cids.join ('~');
		if (key in ret.$) return;

		outer:
		for (var mod = 0; mod < 8; mod++)
		{
			var cid = cids[mod];
			if (cid == -1)
				continue;
			if (lunches[mod]) /* current mod has both a class and a lunch */
				return;

			var course = DB.index[cid];
			var slots = course.slots;
		
			for (var i = 0; i < slots.length; i++)
			{
				var slot = slots[i];
				if (slot.mod == mod && Processor.lockAllows (course, slot))
					continue outer;
			}
		
			return; /* class has no slots in the current mod */
		}
	
		ret.$[key] = true;
	
		var ins = cids.slice (0);
		ins.score = 0;
		ret.push (ins);
	},
	
	lockAllows: function (course, slot) {
		var lock = Pref.locks.get()[course.id];
		if (!lock)
			return true;
		
		var colon = lock.indexOf (":");
		var lmod = parseInt (lock.substring (0, colon));
		var ltch = lock.substring (colon + 1);
		
		var mod = slot.mod;
		var tch = slot.teacher;
		
		return (tch == ltch) && (lmod == -1 || lmod == mod);
	},
	
	calculateFills: function () {
		
		var ratingFactor = Math.E;
		
		Processor.fills = {};
		
		var cids = Pref.classes.get ();
		for (var c = 0; c < cids.length; c++)
		{
			var cid = cids[c];
			if (cid == -1)
				continue;
			
			var course = DB.index[cid];
			var slots = course.slots;
			var len = slots.length;
			
			/* classes filling up (0 = empty, 1 = full) */
			var spaces = new Array (len);
			for (var i = 0; i < len; i++)
				spaces[i] = 0;
			
			/* distribution per individual */
			var dist = new Array (len);
			
			/* point in time when filled */
			var filled = new Array (len);
			Processor.fills[cid] = filled;
			
			var total = 0;
			for (var i = 0; i < len; i++)
			{
				var slot = slots[i];
				var mod = slot.mod;
				var tch = slot.teacher;
				
				dist[i] = DB.modDesirability[mod] * MoreMath.normalCDF (
					DB.ratingAverage,
					DB.ratingStandardDeviation,
					DB.ratings[tch] || DB.ratingAverage
				);
				
				total += dist[i];
			}
			
			/* even out the fill rate */
			/*
			for (var i = 0; i < len; i++)
			{
				dist[i] = Math.pow (dist[i], Math.pow (Math.E, -1.5));
				total += dist[i];
			}
			*/
			
			for (var i = 0; i < len; i++)
				dist[i] /= total;
			
			/* interpolate when a slot will be filled, assume (len) students */
			var time = 0; /* time = 1 when done */
			var remaining = len;
			while (remaining > 0)
			{
				var timeDelta = 1;
			
				for (var i = 0; i < len; i++)
				{
					if (dist[i] != 0) /* also prevents div by zero */
						timeDelta = Math.min (timeDelta, (1 - spaces[i]) / (dist[i] * len));
				}
				
				var inRange = len * timeDelta;
				for (var i = 0; i < len; i++)
					spaces[i] += dist[i] * inRange;
					
				time += timeDelta;
				
				var total = 1;
				for (var i = 0; i < len; i++)
				{
					if (dist[i] != 0 && Math.abs (spaces[i] - 1) < 0.0001)
					{
						total -= dist[i];
						dist[i] = 0;
						
						filled[i] = time;
						
						remaining--;
					}
				}
				
				for (var i = 0; i < len; i++)
					dist[i] /= total;
			}
		}
	},
	
	calculateChances: function () {
		var cids = Pref.classes.get ();
		var chances = Processor.chances = {};
		
		for (var c = 0; c < cids.length; c++)
		{
			var cid = cids[c];
			if (cid == -1)
				continue;
			
			var course = DB.index[cid];
			var slots = course.slots;
			
			var cidChances = chances[cid] = [];
			for (var i = 0; i < slots.length; i++)
				cidChances.push (Processor.chanceSlot (course, i));
		}
	},
	
	updateTeachersWithSchedule: function (schedule) {
		
		var tbm = Processor.teachersByMod;
		
		for (var mod = 0; mod < 8; mod++)
		{
			var cid = schedule[mod];
			if (cid == -1)
				continue;
			
			var course = DB.index[cid];
			var slots = course.slots;
			
			for (var i = 0; i < slots.length; i++)
			{
				var slot = slots[i];
				if (slot.mod == mod && Processor.lockAllows (course, slot))
					tbm[mod][slot.teacher] = true;
			}
		}
	},
	
	rateSchedule: function (schedule) {
		var pick = Pref.pick.get ();
	
		var score = 0;
		var chance = 1;
	
		for (var mod = 0; mod < 8; mod++)
		{
			var cid = schedule[mod];
			if (cid == -1)
				continue;
		
			var course = DB.index[cid];
			var slots = course.slots;
			
			/* calculate chance */
			chance *= Processor.chanceMod (course, mod);
			
			/* calculate user score, but not if locked */
			var current = 0;
			if (!Pref.locks.get()[cid])
			{
				current = -1000;
				for (var i = 0; i < slots.length; i++)
				{
					var slot = slots[i];
					if (slot.mod == mod)
					{
						var tch = slot.teacher;
						current = Math.max (current, Processor.getTeacherPreference (tch));
					}
				}
			}
		
			score += current;
		}
	
		schedule.score = score;
		schedule.chance = chance;
	},
	
	chanceSlot: function (course, slotIndex) {
		var distributionFunction = Pref.dist.get ();
		
		var pick = Pref.pick.get ();
		var pickTime = (pick - 1) / Common.rotations;
		
		var standardDeviation = null;
		switch (distributionFunction)
		{
			case "normal1":
				standardDeviation = 1.0 / Common.rotations;
				break;
			case "normal2":
				standardDeviation = 2.0 / Common.rotations;
				break;
		}
		
		var predCloseTime = Processor.fills[course.id][slotIndex];
		
		if (standardDeviation !== null)
		{
			return (1 - MoreMath.normalCDF (
				predCloseTime, standardDeviation, pickTime
			));
		}
		else
		{
			return (1 - MoreMath.binomialCDF (
				Common.rotations, predCloseTime, pick - 1
			));
		}
	},
	
	chanceMod: function (course, mod) {
	
		var cid = course.id;
		var slots = course.slots;
		var chances = [];
		
		for (var i = 0; i < slots.length; i++)
		{
			var slot = slots[i];
			if (slot.mod == mod && Processor.lockAllows (course, slot))
				chances.push (Processor.chances[cid][i]);
		}
		
		var opposite = 1; /* chance of not getting any of them */
		for (var i = 0; i < chances.length; i++)
			opposite *= (1 - chances[i]);
		return 1 - opposite;
	},
	
	getTeacherPreference: function (tch) {
		return (Pref.teachers.get()[tch] || 0);
	}
};

(function () {
	/* set up class index */
	DB.index = [];
	
	var md = DB.modDesirability = [];
	for (var i = 0; i < 8; i++)
		md.push (0);
	
	Util.iterateSortedObject (DB.base, function (deptKey, dept) {
		Util.iterateSortedObject (dept, function (key, course) {
			course.key = key;
			course.id = DB.index.length;
			DB.index.push (course);
			
			var slots = course.slots;
			for (var i = 0; i < slots.length; i++)
			{
				slots[i].index = i;
				md[slots[i].mod]++;
			}
		});
	});
	
	/* give modDesirability less weight */
	for (var i = 0; i < 8; i++)
		md[i] = Math.pow (md[i], Math.pow (Math.E, -2));
	
	/* find average teacher rating */
	
	var ratingTotal = 0, ratings = [];
	Util.iterateSortedObject (DB.ratings, function (teacher, rating) {
		
		ratingTotal += rating;
		ratings.push (rating);
	});
	
	var ratingAvg = DB.ratingAverage = ratingTotal / ratings.length;
	
	/* calculate rating standard deviation */
	var stdDevSum = 0;
	for (var i = 0; i < ratings.length; i++)
	{
		var diff = (ratings[i] - ratingAvg);
		stdDevSum += diff * diff;
	}
	
	DB.ratingStandardDeviation = Math.sqrt (stdDevSum / ratings.length);

	/* in case there are no ratings */
	if (isNaN (DB.ratingAverage) || isNaN (DB.ratingStandardDeviation))
	{
		DB.ratingAverage = 3;
		DB.ratingStandardDeviation = 1;
	}
	
	/* change default easing */
	jQuery.easing.def = "easeInOutCubic";
})();

$(function () {
	$("#tabBar a").click (OptionsUI.tabClicked);
	
	OptionsUI.initCoursesList ();
	OptionsUI.initOptions ();
	OptionsUI.initActions ();
	
	ResultsUI.initColumns ();
});

Function.prototype.delay = function (ms) {
	var me = this, args = Array.prototype.slice.call (arguments, 1);
	setTimeout (function () { me.apply (me, args); }, ms);
};

var Util = {

	toKey: function (x) {
		return x.toUpperCase ().replace (/\W/g, "_");
	},
	
	iterateSortedObject: function (obj, func) {
	
		var keys = [];
		for (var key in obj)
		{
			if (obj.hasOwnProperty (key))
				keys.push (key);
		}
		
		keys.sort ();
		
		for (var i = 0; i < keys.length; i++)
		{
			var key = keys[i];
			if (func (key, obj[key]) === false)
				break
		}
		
	}
	
};

(function () {
	/* google analytics */
	_gaq = (window._gaq || []);
	_gaq.push (["_setAccount", "UA-17882211-6"]);
	_gaq.push (["_trackPageview"]);
	
	var ga = document.createElement ("script");
	ga.type = "text/javascript";
	ga.async = true;
	ga.src = "http://www.google-analytics.com/ga.js";
	
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore (ga, s);
})();

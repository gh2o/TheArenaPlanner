var DB = {};

/* data generated from the announcer */
/* blocks start from 0, not 1 */
DB.base = {
  "World Languages": {
    "FREN151A": {
      "slots": [
        {
          "room": "256", 
          "teacher": "Raya, John G.", 
          "mod": 1
        }, 
        {
          "room": "146", 
          "teacher": "Pang, Lani Nahleen", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "French 1A"
    }, 
    "CHIN350A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Chang, Xiaolin", 
          "mod": 0
        }, 
        {
          "room": "212", 
          "teacher": "Chang, Xiaolin", 
          "mod": 2
        }, 
        {
          "room": "212", 
          "teacher": "Chang, Xiaolin", 
          "mod": 4
        }, 
        {
          "room": "140", 
          "teacher": "Liang, Jing", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Chinese Lang & Culture A"
    }, 
    "ITAL152A": {
      "slots": [
        {
          "room": "S102", 
          "teacher": "Branzburg, Judith Musante", 
          "mod": 6
        }, 
        {
          "room": "S102", 
          "teacher": "Branzburg, Judith Musante", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Italian 2A"
    }, 
    "LATN153A": {
      "slots": [
        {
          "room": "214", 
          "teacher": "Stafff, Stafff", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "Latin 3A"
    }, 
    "FREN253A": {
      "slots": [
        {
          "room": "256", 
          "teacher": "Raya, John G.", 
          "mod": 0
        }, 
        {
          "room": "256", 
          "teacher": "Raya, John G.", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "French 3A Honors"
    }, 
    "KORE152A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Staffb, Staffb", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Korean 2A"
    }, 
    "LATN350A": {
      "slots": [
        {
          "room": "214", 
          "teacher": "Stafff, Stafff", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "AP Latin A"
    }, 
    "LATN151A": {
      "slots": [
        {
          "room": "214", 
          "teacher": "Stafff, Stafff", 
          "mod": 0
        }
      ], 
      "code": "BC", 
      "name": "Latin 1A"
    }, 
    "JAPN152A": {
      "slots": [
        {
          "room": "218", 
          "teacher": "Okada, Naomi", 
          "mod": 1
        }, 
        {
          "room": "218", 
          "teacher": "Okada, Naomi", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Japanese 2A"
    }, 
    "FREN152A": {
      "slots": [
        {
          "room": "256", 
          "teacher": "Raya, John G.", 
          "mod": 2
        }, 
        {
          "room": "256", 
          "teacher": "Raya, John G.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "French 2A"
    }, 
    "SPAN151A": {
      "slots": [
        {
          "room": "215", 
          "teacher": "Collins, Gregory P", 
          "mod": 0
        }, 
        {
          "room": "215", 
          "teacher": "Collins, Gregory P", 
          "mod": 1
        }, 
        {
          "room": "219", 
          "teacher": "Lipman, David J.", 
          "mod": 2
        }, 
        {
          "room": "215", 
          "teacher": "Collins, Gregory P", 
          "mod": 3
        }, 
        {
          "room": "215", 
          "teacher": "Collins, Gregory P", 
          "mod": 5
        }, 
        {
          "room": "219", 
          "teacher": "Lipman, David J.", 
          "mod": 6
        }, 
        {
          "room": "215", 
          "teacher": "Collins, Gregory P", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Spanish 1A"
    }, 
    "HEBW152A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Chang, Xiaolin", 
          "mod": 3
        }
      ], 
      "code": "A", 
      "name": "Hebrew 2A"
    }, 
    "JAPN253A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Yoshimura-Lee, Miyuki", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Japanese 3A Honors"
    }, 
    "SPAN157A": {
      "slots": [
        {
          "room": "T24", 
          "teacher": "Cadoppi, Carole S.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Spanish Native 3A"
    }, 
    "SPAN253A": {
      "slots": [
        {
          "room": "142", 
          "teacher": "Maquinana, Victoria M.", 
          "mod": 0
        }, 
        {
          "room": "T24", 
          "teacher": "Cadoppi, Carole S.", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Spanish 3A Honors"
    }, 
    "SPAN153A": {
      "slots": [
        {
          "room": "214", 
          "teacher": "Billingsly-Ballbe, Cristina", 
          "mod": 1
        }, 
        {
          "room": "T24", 
          "teacher": "Cadoppi, Carole S.", 
          "mod": 2
        }, 
        {
          "room": "T24", 
          "teacher": "Cadoppi, Carole S.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Spanish 3A"
    }, 
    "JAPN350A": {
      "slots": [
        {
          "room": "218", 
          "teacher": "Okada, Naomi", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "AP Japanese Lang & Culture A"
    }, 
    "HEBW154A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Chang, Xiaolin", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "Hebrew 4A"
    }, 
    "CHIN156A": {
      "slots": [
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Chinese Native 2A"
    }, 
    "ITAL254A": {
      "slots": [
        {
          "room": "S102", 
          "teacher": "Branzburg, Judith Musante", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Italian 4A Honors"
    }, 
    "CHIN152A": {
      "slots": [
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 2
        }, 
        {
          "room": "146", 
          "teacher": "Pang, Lani Nahleen", 
          "mod": 3
        }, 
        {
          "room": "146", 
          "teacher": "Pang, Lani Nahleen", 
          "mod": 4
        }, 
        {
          "room": "146", 
          "teacher": "Pang, Lani Nahleen", 
          "mod": 6
        }, 
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Chinese 2A"
    }, 
    "KORE151A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Staffb, Staffb", 
          "mod": 3
        }, 
        {
          "room": "215", 
          "teacher": "Staffb, Staffb", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Korean 1A"
    }, 
    "ITAL153A": {
      "slots": [
        {
          "room": "S102", 
          "teacher": "Branzburg, Judith Musante", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Italian 3A"
    }, 
    "LATN152A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Stafff, Stafff", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Latin 2A"
    }, 
    "KORE153A": {
      "slots": [
        {
          "room": "215", 
          "teacher": "Staffb, Staffb", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "Korean 3A"
    }, 
    "ITAL151A": {
      "slots": [
        {
          "room": "T24", 
          "teacher": "Pelagatti, Chiara", 
          "mod": 3
        }, 
        {
          "room": "T24", 
          "teacher": "Pelagatti, Chiara", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "Italian 1A"
    }, 
    "JAPN151A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Yoshimura-Lee, Miyuki", 
          "mod": 5
        }, 
        {
          "room": "212", 
          "teacher": "Yoshimura-Lee, Miyuki", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Japanese 1A"
    }, 
    "JAPN153A": {
      "slots": [
        {
          "room": "212", 
          "teacher": "Yoshimura-Lee, Miyuki", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Japanese 3A"
    }, 
    "SPAN350A": {
      "slots": [
        {
          "room": "142", 
          "teacher": "Maquinana, Victoria M.", 
          "mod": 2
        }, 
        {
          "room": "142", 
          "teacher": "Maquinana, Victoria M.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Spanish Language A"
    }, 
    "HEBW153A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Chang, Xiaolin", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "Hebrew 3A"
    }, 
    "SPAN156A": {
      "slots": [
        {
          "room": "T24", 
          "teacher": "Cadoppi, Carole S.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Spanish Native 2A"
    }, 
    "SPAN152A": {
      "slots": [
        {
          "room": "219", 
          "teacher": "Lipman, David J.", 
          "mod": 0
        }, 
        {
          "room": "219", 
          "teacher": "Lipman, David J.", 
          "mod": 1
        }, 
        {
          "room": "214", 
          "teacher": "Billingsly-Ballbe, Cristina", 
          "mod": 2
        }, 
        {
          "room": "214", 
          "teacher": "Billingsly-Ballbe, Cristina", 
          "mod": 3
        }, 
        {
          "room": "142", 
          "teacher": "Maquinana, Victoria M.", 
          "mod": 4
        }, 
        {
          "room": "219", 
          "teacher": "Lipman, David J.", 
          "mod": 5
        }, 
        {
          "room": "214", 
          "teacher": "Billingsly-Ballbe, Cristina", 
          "mod": 6
        }, 
        {
          "room": "214", 
          "teacher": "Billingsly-Ballbe, Cristina", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Spanish 2A"
    }, 
    "CHIN151A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Danforth, Brian", 
          "mod": 0
        }, 
        {
          "room": "211", 
          "teacher": "Danforth, Brian", 
          "mod": 1
        }, 
        {
          "room": "211", 
          "teacher": "Danforth, Brian", 
          "mod": 6
        }, 
        {
          "room": "211", 
          "teacher": "Danforth, Brian", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Chinese 1A"
    }, 
    "CHIN157A": {
      "slots": [
        {
          "room": "140", 
          "teacher": "Liang, Jing", 
          "mod": 0
        }
      ], 
      "code": "BC", 
      "name": "Chinese Native 3A"
    }, 
    "CHIN253A": {
      "slots": [
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 1
        }, 
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 3
        }, 
        {
          "room": "216", 
          "teacher": "Li, Yu", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Chinese 3A Honors"
    }, 
    "HEBW151A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Chang, Xiaolin", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Hebrew 1A"
    }, 
    "CHIN153A": {
      "slots": [
        {
          "room": "211", 
          "teacher": "Danforth, Brian", 
          "mod": 2
        }, 
        {
          "room": "140", 
          "teacher": "Liang, Jing", 
          "mod": 3
        }, 
        {
          "room": "140", 
          "teacher": "Liang, Jing", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "Chinese 3A"
    }, 
    "ITAL253A": {
      "slots": [
        {
          "room": "S102", 
          "teacher": "Branzburg, Judith Musante", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "Italian 3A Honors"
    }
  }, 
  "Social Sciences": {
    "ADEM150A": {
      "slots": [
        {
          "room": "141", 
          "teacher": "Steele, William Gabriel", 
          "mod": 0
        }, 
        {
          "room": "236", 
          "teacher": "Michels, Adam G.", 
          "mod": 1
        }, 
        {
          "room": "141", 
          "teacher": "Steele, William Gabriel", 
          "mod": 2
        }, 
        {
          "room": "236", 
          "teacher": "Michels, Adam G.", 
          "mod": 3
        }, 
        {
          "room": "220", 
          "teacher": "Schmidt, Steven P.", 
          "mod": 3
        }, 
        {
          "room": "220", 
          "teacher": "Schmidt, Steven P.", 
          "mod": 4
        }, 
        {
          "room": "231", 
          "teacher": "Miller, Thomas O.", 
          "mod": 5
        }, 
        {
          "room": "220", 
          "teacher": "Schmidt, Steven P.", 
          "mod": 6
        }, 
        {
          "room": "231", 
          "teacher": "Miller, Thomas O.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "American Democracy A"
    }, 
    "GVUS350A": {
      "slots": [
        {
          "room": "254", 
          "teacher": "Schwarz, Alexander J.", 
          "mod": 1
        }, 
        {
          "room": "254", 
          "teacher": "Schwarz, Alexander J.", 
          "mod": 3
        }, 
        {
          "room": "253", 
          "teacher": "Magsanay, Matthew S.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Government & Politics: US  A"
    }, 
    "WHST150A": {
      "slots": [
        {
          "room": "236", 
          "teacher": "Dean, Sara L.", 
          "mod": 0
        }, 
        {
          "room": "217B", 
          "teacher": "Furey, Matthew", 
          "mod": 0
        }, 
        {
          "room": "220", 
          "teacher": "Schmidt, Steven P.", 
          "mod": 0
        }, 
        {
          "room": "217B", 
          "teacher": "Bell, Matthew V.", 
          "mod": 1
        }, 
        {
          "room": "231", 
          "teacher": "Miller, Thomas O.", 
          "mod": 1
        }, 
        {
          "room": "253", 
          "teacher": "Tuason, Jason N.", 
          "mod": 1
        }, 
        {
          "room": "233", 
          "teacher": "Bell, Matthew V.", 
          "mod": 2
        }, 
        {
          "room": "217B", 
          "teacher": "Furey, Matthew", 
          "mod": 2
        }, 
        {
          "room": "254", 
          "teacher": "Miller, Thomas O.", 
          "mod": 2
        }, 
        {
          "room": "220", 
          "teacher": "Schmidt, Steven P.", 
          "mod": 2
        }, 
        {
          "room": "259", 
          "teacher": "Starr, David H.", 
          "mod": 3
        }, 
        {
          "room": "253", 
          "teacher": "Tuason, Jason N.", 
          "mod": 3
        }, 
        {
          "room": "254", 
          "teacher": "Miller, Thomas O.", 
          "mod": 4
        }, 
        {
          "room": "255", 
          "teacher": "Staffg, Staffg", 
          "mod": 4
        }, 
        {
          "room": "238", 
          "teacher": "Bellville, Stephanie Michelle", 
          "mod": 5
        }, 
        {
          "room": "259", 
          "teacher": "Starr, David H.", 
          "mod": 5
        }, 
        {
          "room": "233", 
          "teacher": "Bell, Matthew V.", 
          "mod": 6
        }, 
        {
          "room": "259", 
          "teacher": "Starr, David H.", 
          "mod": 6
        }, 
        {
          "room": "255", 
          "teacher": "Staffg, Staffg", 
          "mod": 6
        }, 
        {
          "room": "238", 
          "teacher": "Bellville, Stephanie Michelle", 
          "mod": 7
        }, 
        {
          "room": "230", 
          "teacher": "Lubenow, Kristin B.", 
          "mod": 7
        }, 
        {
          "room": "259", 
          "teacher": "Staffg, Staffg", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "World History A"
    }, 
    "USHI350A": {
      "slots": [
        {
          "room": "231", 
          "teacher": "Prophet, Matthew W", 
          "mod": 0
        }, 
        {
          "room": "238", 
          "teacher": "Bellville, Stephanie Michelle", 
          "mod": 1
        }, 
        {
          "room": "231", 
          "teacher": "Prophet, Matthew W", 
          "mod": 2
        }, 
        {
          "room": "238", 
          "teacher": "Bellville, Stephanie Michelle", 
          "mod": 3
        }, 
        {
          "room": "217B", 
          "teacher": "Furey, Matthew", 
          "mod": 4
        }, 
        {
          "room": "253", 
          "teacher": "Tuason, Jason N.", 
          "mod": 5
        }, 
        {
          "room": "217B", 
          "teacher": "Furey, Matthew", 
          "mod": 6
        }, 
        {
          "room": "253", 
          "teacher": "Tuason, Jason N.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP United States History A"
    }, 
    "GEOG350A": {
      "slots": [
        {
          "room": "233", 
          "teacher": "Martin, Thomas Michael", 
          "mod": 1
        }, 
        {
          "room": "233", 
          "teacher": "Martin, Thomas Michael", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "AP Human Geography A"
    }, 
    "WHST350A": {
      "slots": [
        {
          "room": "253", 
          "teacher": "Magsanay, Matthew S.", 
          "mod": 0
        }, 
        {
          "room": "255", 
          "teacher": "Girling, Richard W.", 
          "mod": 1
        }, 
        {
          "room": "253", 
          "teacher": "Magsanay, Matthew S.", 
          "mod": 2
        }, 
        {
          "room": "255", 
          "teacher": "Girling, Richard W.", 
          "mod": 3
        }, 
        {
          "room": "253", 
          "teacher": "Magsanay, Matthew S.", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "AP World History A"
    }, 
    "ECON150A": {
      "slots": [
        {
          "room": "141", 
          "teacher": "Staffg, Staffg", 
          "mod": 1
        }, 
        {
          "room": "217B", 
          "teacher": "Staffg, Staffg", 
          "mod": 3
        }, 
        {
          "room": "238", 
          "teacher": "Worth, John H", 
          "mod": 4
        }, 
        {
          "room": "255", 
          "teacher": "Girling, Richard W.", 
          "mod": 5
        }, 
        {
          "room": "238", 
          "teacher": "Worth, John H", 
          "mod": 6
        }, 
        {
          "room": "255", 
          "teacher": "Girling, Richard W.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Economics"
    }, 
    "EUHI350A": {
      "slots": [
        {
          "room": "254", 
          "teacher": "Schwarz, Alexander J.", 
          "mod": 5
        }, 
        {
          "room": "254", 
          "teacher": "Schwarz, Alexander J.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP European History A"
    }, 
    "ECON352A": {
      "slots": [
        {
          "room": "230", 
          "teacher": "Johnson, Rebecca L.", 
          "mod": 0
        }, 
        {
          "room": "230", 
          "teacher": "Lubenow, Kristin B.", 
          "mod": 1
        }, 
        {
          "room": "230", 
          "teacher": "Johnson, Rebecca L.", 
          "mod": 2
        }, 
        {
          "room": "230", 
          "teacher": "Lubenow, Kristin B.", 
          "mod": 3
        }, 
        {
          "room": "230", 
          "teacher": "Johnson, Rebecca L.", 
          "mod": 4
        }, 
        {
          "room": "230", 
          "teacher": "Lubenow, Kristin B.", 
          "mod": 5
        }, 
        {
          "room": "233", 
          "teacher": "Martin, Thomas Michael", 
          "mod": 5
        }, 
        {
          "room": "230", 
          "teacher": "Johnson, Rebecca L.", 
          "mod": 6
        }, 
        {
          "room": "233", 
          "teacher": "Martin, Thomas Michael", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Microeconomics A"
    }, 
    "USHI150A": {
      "slots": [
        {
          "room": "259", 
          "teacher": "Starr, David H.", 
          "mod": 0
        }, 
        {
          "room": "259", 
          "teacher": "Worth, John H", 
          "mod": 1
        }, 
        {
          "room": "259", 
          "teacher": "Starr, David H.", 
          "mod": 2
        }, 
        {
          "room": "255", 
          "teacher": "Worth, John H", 
          "mod": 2
        }, 
        {
          "room": "141", 
          "teacher": "Steele, William Gabriel", 
          "mod": 3
        }, 
        {
          "room": "233", 
          "teacher": "Bell, Matthew V.", 
          "mod": 4
        }, 
        {
          "room": "231", 
          "teacher": "Prophet, Matthew W", 
          "mod": 4
        }, 
        {
          "room": "141", 
          "teacher": "Steele, William Gabriel", 
          "mod": 5
        }, 
        {
          "room": "231", 
          "teacher": "Prophet, Matthew W", 
          "mod": 6
        }, 
        {
          "room": "141", 
          "teacher": "Steele, William Gabriel", 
          "mod": 6
        }, 
        {
          "room": "217B", 
          "teacher": "Bell, Matthew V.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "US History A"
    }, 
    "PSYC350A": {
      "slots": [
        {
          "room": "257", 
          "teacher": "Kwong-Ballard, Alice", 
          "mod": 0
        }, 
        {
          "room": "257", 
          "teacher": "Shimmon, Steven A.", 
          "mod": 1
        }, 
        {
          "room": "236", 
          "teacher": "Dean, Sara L.", 
          "mod": 2
        }, 
        {
          "room": "257", 
          "teacher": "Kwong-Ballard, Alice", 
          "mod": 2
        }, 
        {
          "room": "257", 
          "teacher": "Shimmon, Steven A.", 
          "mod": 3
        }, 
        {
          "room": "236", 
          "teacher": "Dean, Sara L.", 
          "mod": 4
        }, 
        {
          "room": "257", 
          "teacher": "Kwong-Ballard, Alice", 
          "mod": 4
        }, 
        {
          "room": "236", 
          "teacher": "Michels, Adam G.", 
          "mod": 5
        }, 
        {
          "room": "257", 
          "teacher": "Shimmon, Steven A.", 
          "mod": 5
        }, 
        {
          "room": "236", 
          "teacher": "Dean, Sara L.", 
          "mod": 6
        }, 
        {
          "room": "236", 
          "teacher": "Michels, Adam G.", 
          "mod": 7
        }, 
        {
          "room": "257", 
          "teacher": "Shimmon, Steven A.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Psychology A"
    }
  }, 
  "Science": {
    "CHEM150A": {
      "slots": [
        {
          "room": "339", 
          "teacher": "Johnson, Kim D.", 
          "mod": 0
        }, 
        {
          "room": "333", 
          "teacher": "Rotter, Katrina", 
          "mod": 1
        }, 
        {
          "room": "337", 
          "teacher": "Fong, Jonathan", 
          "mod": 1
        }, 
        {
          "room": "339", 
          "teacher": "Johnson, Kim D.", 
          "mod": 2
        }, 
        {
          "room": "337", 
          "teacher": "Fong, Jonathan", 
          "mod": 3
        }, 
        {
          "room": "339", 
          "teacher": "Johnson, Kim D.", 
          "mod": 4
        }, 
        {
          "room": "333", 
          "teacher": "Rotter, Katrina", 
          "mod": 5
        }, 
        {
          "room": "337", 
          "teacher": "Trimble, Michelle", 
          "mod": 5
        }, 
        {
          "room": "337", 
          "teacher": "Trimble, Michelle", 
          "mod": 6
        }, 
        {
          "room": "333", 
          "teacher": "Rotter, Katrina", 
          "mod": 7
        }, 
        {
          "room": "337", 
          "teacher": "Trimble, Michelle", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Chemistry A"
    }, 
    "BIOL150A": {
      "slots": [
        {
          "room": "114", 
          "teacher": "Staffa, Staffa", 
          "mod": 0
        }, 
        {
          "room": "239", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 0
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 0
        }, 
        {
          "room": "241", 
          "teacher": "Bird, Erin B.", 
          "mod": 1
        }, 
        {
          "room": "239", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 1
        }, 
        {
          "room": "114", 
          "teacher": "Killpack, Alena M.", 
          "mod": 1
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 1
        }, 
        {
          "room": "114", 
          "teacher": "Staffa, Staffa", 
          "mod": 2
        }, 
        {
          "room": "241", 
          "teacher": "Bird, Erin B.", 
          "mod": 2
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 2
        }, 
        {
          "room": "114", 
          "teacher": "Killpack, Alena M.", 
          "mod": 3
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 3
        }, 
        {
          "room": "241", 
          "teacher": "Bird, Erin B.", 
          "mod": 4
        }, 
        {
          "room": "114", 
          "teacher": "Killpack, Alena M.", 
          "mod": 4
        }, 
        {
          "room": "239", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 5
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 5
        }, 
        {
          "room": "114", 
          "teacher": "Killpack, Alena M.", 
          "mod": 6
        }, 
        {
          "room": "239", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 6
        }, 
        {
          "room": "S204", 
          "teacher": "Wenning, Mark Conrad", 
          "mod": 6
        }, 
        {
          "room": "114", 
          "teacher": "Killpack, Alena M.", 
          "mod": 7
        }, 
        {
          "room": "241", 
          "teacher": "Bird, Erin B.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Biology A"
    }, 
    "MSCI150A": {
      "slots": [
        {
          "room": "261", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 2
        }, 
        {
          "room": "261", 
          "teacher": "Christensen, Catherine S.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Marine Science 1A"
    }, 
    "ENVS150A": {
      "slots": [
        {
          "room": "241", 
          "teacher": "Bird, Erin B.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Environmental Science A"
    }, 
    "CHEM250A": {
      "slots": [
        {
          "room": "335", 
          "teacher": "Marten, Bryan D.", 
          "mod": 0
        }, 
        {
          "room": "339", 
          "teacher": "Johnson, Kim D.", 
          "mod": 1
        }, 
        {
          "room": "333", 
          "teacher": "Rotter, Katrina", 
          "mod": 2
        }, 
        {
          "room": "335", 
          "teacher": "Marten, Bryan D.", 
          "mod": 4
        }, 
        {
          "room": "339", 
          "teacher": "Johnson, Kim D.", 
          "mod": 5
        }, 
        {
          "room": "333", 
          "teacher": "Rotter, Katrina", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Chemistry A Honors"
    }, 
    "PYSO150A": {
      "slots": [
        {
          "room": "263", 
          "teacher": "Laureyns, Shawn G.", 
          "mod": 2
        }, 
        {
          "room": "263", 
          "teacher": "Laureyns, Shawn G.", 
          "mod": 3
        }, 
        {
          "room": "235", 
          "teacher": "Staffa, Staffa", 
          "mod": 4
        }, 
        {
          "room": "235", 
          "teacher": "Staffa, Staffa", 
          "mod": 5
        }, 
        {
          "room": "235", 
          "teacher": "Staffa, Staffa", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Physiology A"
    }, 
    "ENVS350A": {
      "slots": [
        {
          "room": "261", 
          "teacher": "Melvin, Katherine E.", 
          "mod": 0
        }, 
        {
          "room": "261", 
          "teacher": "Melvin, Katherine E.", 
          "mod": 1
        }, 
        {
          "room": "261", 
          "teacher": "Melvin, Katherine E.", 
          "mod": 4
        }, 
        {
          "room": "261", 
          "teacher": "Melvin, Katherine E.", 
          "mod": 5
        }, 
        {
          "room": "261", 
          "teacher": "Laureyns, Shawn G.", 
          "mod": 6
        }, 
        {
          "room": "261", 
          "teacher": "Laureyns, Shawn G.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Environmental Science A"
    }, 
    "PHYS352A": {
      "slots": [
        {
          "room": "S202", 
          "teacher": "Shapiro, Richard A.", 
          "mod": 1
        }, 
        {
          "room": "S202", 
          "teacher": "Shapiro, Richard A.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "AP Physics C A: Mechanics"
    }, 
    "ROBO150A": {
      "slots": [
        {
          "room": "S203", 
          "teacher": "Cooley, Bryan A.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Robotics 1A"
    }, 
    "PHYX350A": {
      "slots": [
        {
          "room": "S201", 
          "teacher": "Dickerman, Scott I.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Physics 1/2 A Accelerated"
    }, 
    "CHEM350A": {
      "slots": [
        {
          "room": "337", 
          "teacher": "Fong, Jonathan", 
          "mod": 0
        }, 
        {
          "room": "335", 
          "teacher": "Marten, Bryan D.", 
          "mod": 2
        }, 
        {
          "room": "337", 
          "teacher": "Fong, Jonathan", 
          "mod": 4
        }, 
        {
          "room": "335", 
          "teacher": "Marten, Bryan D.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Chemistry A"
    }, 
    "PHYS150A": {
      "slots": [
        {
          "room": "S201", 
          "teacher": "Dickerman, Scott I.", 
          "mod": 0
        }, 
        {
          "room": "S203", 
          "teacher": "De La Riarte, Sirly G.", 
          "mod": 0
        }, 
        {
          "room": "S203", 
          "teacher": "De La Riarte, Sirly G.", 
          "mod": 1
        }, 
        {
          "room": "S201", 
          "teacher": "Dickerman, Scott I.", 
          "mod": 2
        }, 
        {
          "room": "S205", 
          "teacher": "De La Riarte, Sirly G.", 
          "mod": 3
        }, 
        {
          "room": "S202", 
          "teacher": "Shapiro, Richard A.", 
          "mod": 4
        }, 
        {
          "room": "S203", 
          "teacher": "De La Riarte, Sirly G.", 
          "mod": 5
        }, 
        {
          "room": "S203", 
          "teacher": "De La Riarte, Sirly G.", 
          "mod": 6
        }, 
        {
          "room": "S205", 
          "teacher": "Prothro, Randell H.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Physics A"
    }, 
    "GEOL150A": {
      "slots": [
        {
          "room": "S201", 
          "teacher": "Dickerman, Scott I.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Geology A"
    }, 
    "PHYS354A": {
      "slots": [
        {
          "room": "S205", 
          "teacher": "Prothro, Randell H.", 
          "mod": 1
        }, 
        {
          "room": "S203", 
          "teacher": "Cooley, Bryan A.", 
          "mod": 2
        }, 
        {
          "room": "S205", 
          "teacher": "Prothro, Randell H.", 
          "mod": 4
        }, 
        {
          "room": "S205", 
          "teacher": "Prothro, Randell H.", 
          "mod": 5
        }, 
        {
          "room": "S202", 
          "teacher": "Cooley, Bryan A.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Physics 1A"
    }, 
    "PBIO151A": {
      "slots": [
        {
          "room": "263", 
          "teacher": "Johnson, Theodore", 
          "mod": 1
        }, 
        {
          "room": "263", 
          "teacher": "Johnson, Theodore", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "Principles of Biotech 1A"
    }, 
    "BIOL350A": {
      "slots": [
        {
          "room": "235", 
          "teacher": "Swett, Dacotah A.", 
          "mod": 0
        }, 
        {
          "room": "235", 
          "teacher": "Swett, Dacotah A.", 
          "mod": 1
        }, 
        {
          "room": "235", 
          "teacher": "Swett, Dacotah A.", 
          "mod": 3
        }, 
        {
          "room": "263", 
          "teacher": "Johnson, Theodore", 
          "mod": 5
        }, 
        {
          "room": "263", 
          "teacher": "Johnson, Theodore", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Biology A"
    }, 
    "PHYS355A": {
      "slots": [
        {
          "room": "S203", 
          "teacher": "Cooley, Bryan A.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "AP Physics 2A"
    }, 
    "CHMO150A": {
      "slots": [
        {
          "room": "333", 
          "teacher": "Trimble, Michelle", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Organic Chemistry A"
    }
  }, 
  "English": {
    "NOVL100A": {
      "slots": [
        {
          "room": "135", 
          "teacher": "Galang-Mcmahon, Lorna A.", 
          "mod": 2
        }, 
        {
          "room": "T15", 
          "teacher": "Freeland, Anne E.", 
          "mod": 3
        }, 
        {
          "room": "135", 
          "teacher": "Galang-Mcmahon, Lorna A.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Novel"
    }, 
    "ENGL202A": {
      "slots": [
        {
          "room": "130", 
          "teacher": "Santiago, Meredith Chase", 
          "mod": 0
        }, 
        {
          "room": "135", 
          "teacher": "Galang-Mcmahon, Lorna A.", 
          "mod": 1
        }, 
        {
          "room": "T18", 
          "teacher": "Recht, Sydney G.", 
          "mod": 2
        }, 
        {
          "room": "130", 
          "teacher": "Santiago, Meredith Chase", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "English 2A Honors"
    }, 
    "AMLT100A": {
      "slots": [
        {
          "room": "T18", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 1
        }, 
        {
          "room": "134", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "American Literature A"
    }, 
    "ALIT150A": {
      "slots": [
        {
          "room": "139", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Academic Literacy A"
    }, 
    "ENGL102A": {
      "slots": [
        {
          "room": "S108", 
          "teacher": "Yu, Samantha H.", 
          "mod": 0
        }, 
        {
          "room": "T20", 
          "teacher": "Matusek, Sharn L.", 
          "mod": 1
        }, 
        {
          "room": "5", 
          "teacher": "Nickels, Mary Carolyn", 
          "mod": 1
        }, 
        {
          "room": "T15", 
          "teacher": "Yuan, David D.", 
          "mod": 1
        }, 
        {
          "room": "T17", 
          "teacher": "Freeland, Anne E.", 
          "mod": 2
        }, 
        {
          "room": "S108", 
          "teacher": "Yu, Samantha H.", 
          "mod": 2
        }, 
        {
          "room": "T20", 
          "teacher": "Matusek, Sharn L.", 
          "mod": 3
        }, 
        {
          "room": "5", 
          "teacher": "Nickels, Mary Carolyn", 
          "mod": 5
        }, 
        {
          "room": "130", 
          "teacher": "Freeland, Anne E.", 
          "mod": 6
        }, 
        {
          "room": "T15", 
          "teacher": "Yuan, David D.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "English 2A"
    }, 
    "ENGL102B": {
      "slots": [
        {
          "room": "T17", 
          "teacher": "Emerson, Robert W", 
          "mod": 0
        }, 
        {
          "room": "76", 
          "teacher": "Lamarre, Timothy P.", 
          "mod": 0
        }, 
        {
          "room": "130", 
          "teacher": "Santiago, Meredith Chase", 
          "mod": 1
        }, 
        {
          "room": "76", 
          "teacher": "Lamarre, Timothy P.", 
          "mod": 2
        }, 
        {
          "room": "130", 
          "teacher": "Santiago, Meredith Chase", 
          "mod": 3
        }, 
        {
          "room": "76", 
          "teacher": "Lamarre, Timothy P.", 
          "mod": 4
        }, 
        {
          "room": "130", 
          "teacher": "Freeland, Anne E.", 
          "mod": 5
        }, 
        {
          "room": "T20", 
          "teacher": "Matusek, Sharn L.", 
          "mod": 5
        }, 
        {
          "room": "T17", 
          "teacher": "Emerson, Robert W", 
          "mod": 6
        }, 
        {
          "room": "130", 
          "teacher": "Freeland, Anne E.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "English 2B"
    }, 
    "AMLT100B": {
      "slots": [
        {
          "room": "T20", 
          "teacher": "Matusek, Sharn L.", 
          "mod": 0
        }, 
        {
          "room": "T20", 
          "teacher": "Matusek, Sharn L.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "American Literature B"
    }, 
    "JOUR152A": {
      "slots": [
        {
          "room": "S108", 
          "teacher": "Williams, Samuel", 
          "mod": 6
        }, 
        {
          "room": "S108", 
          "teacher": "Yu, Samantha H.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Journalism 2A"
    }, 
    "ELAC305A": {
      "slots": [
        {
          "room": "T15", 
          "teacher": "Yuan, David D.", 
          "mod": 4
        }, 
        {
          "room": "T15", 
          "teacher": "Yuan, David D.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lang & Comp 75A (73)"
    }, 
    "ELIC308A": {
      "slots": [
        {
          "room": "139", 
          "teacher": "Carney, Staci L.", 
          "mod": 2
        }, 
        {
          "room": "139", 
          "teacher": "Carney, Staci L.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lit & Comp 80A (86)"
    }, 
    "YRBK100A": {
      "slots": [
        {
          "room": "5", 
          "teacher": "Nickels, Mary Carolyn", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Yearbook A"
    }, 
    "EMYH100A": {
      "slots": [
        {
          "room": "T19", 
          "teacher": "Lo, Winifred", 
          "mod": 2
        }, 
        {
          "room": "T19", 
          "teacher": "Lo, Winifred", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "Epic & Myth"
    }, 
    "COMD100A": {
      "slots": [
        {
          "room": "139", 
          "teacher": "Carney, Staci L.", 
          "mod": 1
        }, 
        {
          "room": "139", 
          "teacher": "Carney, Staci L.", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "Comedy & Satire"
    }, 
    "ENGL101A": {
      "slots": [
        {
          "room": "T21", 
          "teacher": "Hereford, David H", 
          "mod": 0
        }, 
        {
          "room": "T16", 
          "teacher": "Henares, Nicole N.", 
          "mod": 0
        }, 
        {
          "room": "T18", 
          "teacher": "Bajet, Lael E.", 
          "mod": 0
        }, 
        {
          "room": "T17", 
          "teacher": "Emerson, Robert W", 
          "mod": 1
        }, 
        {
          "room": "S108", 
          "teacher": "Williams, Samuel", 
          "mod": 1
        }, 
        {
          "room": "T15", 
          "teacher": "Williams, Samuel", 
          "mod": 2
        }, 
        {
          "room": "T16", 
          "teacher": "Henares, Nicole N.", 
          "mod": 2
        }, 
        {
          "room": "T21", 
          "teacher": "Wade, Heather J.", 
          "mod": 2
        }, 
        {
          "room": "136", 
          "teacher": "Bajet, Lael E.", 
          "mod": 2
        }, 
        {
          "room": "T17", 
          "teacher": "Emerson, Robert W", 
          "mod": 3
        }, 
        {
          "room": "T16", 
          "teacher": "Henares, Nicole N.", 
          "mod": 3
        }, 
        {
          "room": "T19", 
          "teacher": "Wade, Heather J.", 
          "mod": 3
        }, 
        {
          "room": "76", 
          "teacher": "Lamarre, Timothy P.", 
          "mod": 3
        }, 
        {
          "room": "T21", 
          "teacher": "Hereford, David H", 
          "mod": 4
        }, 
        {
          "room": "T17", 
          "teacher": "Wade, Heather J.", 
          "mod": 4
        }, 
        {
          "room": "T16", 
          "teacher": "Henares, Nicole N.", 
          "mod": 5
        }, 
        {
          "room": "T19", 
          "teacher": "Lo, Winifred", 
          "mod": 5
        }, 
        {
          "room": "76", 
          "teacher": "Williams, Samuel", 
          "mod": 5
        }, 
        {
          "room": "76", 
          "teacher": "Lamarre, Timothy P.", 
          "mod": 6
        }, 
        {
          "room": "T16", 
          "teacher": "Henares, Nicole N.", 
          "mod": 6
        }, 
        {
          "room": "T19", 
          "teacher": "Lo, Winifred", 
          "mod": 7
        }, 
        {
          "room": "76", 
          "teacher": "Williams, Samuel", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "English 1A"
    }, 
    "SHKS100A": {
      "slots": [
        {
          "room": "T21", 
          "teacher": "Hereford, David H", 
          "mod": 1
        }, 
        {
          "room": "135", 
          "teacher": "Galang-Mcmahon, Lorna A.", 
          "mod": 3
        }, 
        {
          "room": "T21", 
          "teacher": "Hereford, David H", 
          "mod": 3
        }, 
        {
          "room": "139", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 4
        }, 
        {
          "room": "135", 
          "teacher": "Galang-Mcmahon, Lorna A.", 
          "mod": 5
        }, 
        {
          "room": "134", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Shakespeare"
    }, 
    "EXWR150A": {
      "slots": [
        {
          "room": "T19", 
          "teacher": "Lo, Winifred", 
          "mod": 1
        }, 
        {
          "room": "5", 
          "teacher": "Nickels, Mary Carolyn", 
          "mod": 2
        }, 
        {
          "room": "134", 
          "teacher": "Bajet, Lael E.", 
          "mod": 3
        }, 
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 3
        }, 
        {
          "room": "5", 
          "teacher": "Nickels, Mary Carolyn", 
          "mod": 4
        }, 
        {
          "room": "T17", 
          "teacher": "Emerson, Robert W", 
          "mod": 5
        }, 
        {
          "room": "T21", 
          "teacher": "Hereford, David H", 
          "mod": 6
        }, 
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Expository Writing A"
    }, 
    "ENGL351A": {
      "slots": [
        {
          "room": "134", 
          "teacher": "Innis, Cathy Ehlen", 
          "mod": 1
        }, 
        {
          "room": "134", 
          "teacher": "Innis, Cathy Ehlen", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lang & Comp A"
    }, 
    "LITP100A": {
      "slots": [
        {
          "room": "137", 
          "teacher": "Ritter, Bryan A.", 
          "mod": 1
        }, 
        {
          "room": "134", 
          "teacher": "Innis, Cathy Ehlen", 
          "mod": 2
        }, 
        {
          "room": "S108", 
          "teacher": "Yu, Samantha H.", 
          "mod": 3
        }, 
        {
          "room": "134", 
          "teacher": "Innis, Cathy Ehlen", 
          "mod": 4
        }, 
        {
          "room": "S108", 
          "teacher": "Yu, Samantha H.", 
          "mod": 5
        }, 
        {
          "room": "137", 
          "teacher": "Ritter, Bryan A.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Literature & Psychology A"
    }, 
    "JOUR151A": {
      "slots": [
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 3
        }, 
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Journalism 1A"
    }, 
    "ELAC308A": {
      "slots": [
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 1
        }, 
        {
          "room": "136", 
          "teacher": "Moffitt, Jennifer L.", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lang & Comp 75A (77)"
    }, 
    "ELAC304A": {
      "slots": [
        {
          "room": "137", 
          "teacher": "Ritter, Bryan A.", 
          "mod": 2
        }, 
        {
          "room": "137", 
          "teacher": "Ritter, Bryan A.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lang & Comp 74A (72)"
    }, 
    "ELIC303A": {
      "slots": [
        {
          "room": "T18", 
          "teacher": "Recht, Sydney G.", 
          "mod": 3
        }, 
        {
          "room": "T18", 
          "teacher": "Recht, Sydney G.", 
          "mod": 5
        }
      ], 
      "code": "BC", 
      "name": "AP Eng Lit & Comp 83A (83)"
    }
  }, 
  "Miscellaneous": {
    "STSK150A": {
      "slots": [
        {
          "room": "S105", 
          "teacher": "Crabtree, Stephanie I.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Study Skills A"
    }, 
    "STSK150B": {
      "slots": [
        {
          "room": "S106", 
          "teacher": "Nager, Norman", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Study Skills B"
    }, 
    "PEER150A": {
      "slots": [
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 2
        }, 
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 3
        }, 
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Peer Helping 1A"
    }, 
    "PEER151A": {
      "slots": [
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 2
        }, 
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 3
        }, 
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Peer Helping 2A"
    }, 
    "COCA150A": {
      "slots": [
        {
          "room": "338", 
          "teacher": "Reller, Ellen M.", 
          "mod": 2
        }
      ], 
      "code": "A", 
      "name": "College/Career"
    }, 
    "MRCH950A": {
      "slots": [
        {
          "room": "S106", 
          "teacher": "Nager, Norman", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Merchandising/Marketing"
    }, 
    "LDRS151A": {
      "slots": [
        {
          "room": "T14", 
          "teacher": "Horn, Adee", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Leadership 1A"
    }, 
    "LDRS151B": {
      "slots": [
        {
          "room": "80A", 
          "teacher": "Dean, Sara L.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Leadership 1B"
    }, 
    "HLTH150A": {
      "slots": [
        {
          "room": "260", 
          "teacher": "Cole, Lisa A.", 
          "mod": 1
        }, 
        {
          "room": "260", 
          "teacher": "Cole, Lisa A.", 
          "mod": 2
        }, 
        {
          "room": "260", 
          "teacher": "Cole, Lisa A.", 
          "mod": 3
        }, 
        {
          "room": "218", 
          "teacher": "Nager, Norman", 
          "mod": 3
        }, 
        {
          "room": "260", 
          "teacher": "Nager, Norman", 
          "mod": 4
        }, 
        {
          "room": "260", 
          "teacher": "Cole, Lisa A.", 
          "mod": 5
        }, 
        {
          "room": "260", 
          "teacher": "Cole, Lisa A.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Health"
    }
  }, 
  "VPA": {
    "BAND152A": {
      "slots": [
        {
          "room": "71", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 3
        }
      ], 
      "code": "A", 
      "name": "Band 2A"
    }, 
    "CERA450B": {
      "slots": [
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "Ceramics Advanced B"
    }, 
    "CERA450A": {
      "slots": [
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "Ceramics Advanced A"
    }, 
    "AARC151B": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 0
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Art In Architecture B"
    }, 
    "AARC151A": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 0
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Art In Architecture A"
    }, 
    "ORCH153A": {
      "slots": [
        {
          "room": "71", 
          "teacher": "Winter, Michele J.", 
          "mod": 2
        }
      ], 
      "code": "A", 
      "name": "Orchestra 3A"
    }, 
    "DANC152A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Jones, Wendy L.", 
          "mod": 4
        }
      ], 
      "code": "A", 
      "name": "Dance 2A"
    }, 
    "MUST350A": {
      "slots": [
        {
          "room": "70", 
          "teacher": "Winter, Michele J.", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "AP Music Theory A"
    }, 
    "DPRD150A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Jones, Wendy L.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Dance Production A"
    }, 
    "TECH152A": {
      "slots": [
        {
          "room": "76", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Theater Tech 2A"
    }, 
    "PIAL151B": {
      "slots": [
        {
          "room": "74", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Piano Lab 1B"
    }, 
    "PIAL151A": {
      "slots": [
        {
          "room": "74", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 4
        }, 
        {
          "room": "74", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Piano Lab 1A"
    }, 
    "SING151A": {
      "slots": [
        {
          "room": "70", 
          "teacher": "Chan, Jason Tai Wai", 
          "mod": 3
        }, 
        {
          "room": "70", 
          "teacher": "Chan, Jason Tai Wai", 
          "mod": 5
        }, 
        {
          "room": "70", 
          "teacher": "Chan, Jason Tai Wai", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Vocal Music 1A"
    }, 
    "SYMB150A": {
      "slots": [
        {
          "room": "71", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Symphonic Band A"
    }, 
    "AARC452A": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 0
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Art In Architecture Advanced A"
    }, 
    "AARC452B": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 0
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Art In Architecture Advanced B"
    }, 
    "DRAM450A": {
      "slots": [
        {
          "room": "110", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 4
        }, 
        {
          "room": "110", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Drama Advanced A"
    }, 
    "FOTO150A": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 5
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Photography A"
    }, 
    "FOTO450A": {
      "slots": [
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Photography Advanced A"
    }, 
    "ARTT450A": {
      "slots": [
        {
          "room": "75", 
          "teacher": "Janssen, Kirsten B.", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Art Advanced A"
    }, 
    "TECH153A": {
      "slots": [
        {
          "room": "76", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Theater Tech 3A"
    }, 
    "VIDO150A": {
      "slots": [
        {
          "room": "76", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Video Production A"
    }, 
    "DRAM151A": {
      "slots": [
        {
          "room": "110", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 3
        }, 
        {
          "room": "110", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 4
        }
      ], 
      "code": "A", 
      "name": "Drama 1A"
    }, 
    "ORCH152A": {
      "slots": [
        {
          "room": "71", 
          "teacher": "Winter, Michele J.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Orchestra 2A"
    }, 
    "TECH151A": {
      "slots": [
        {
          "room": "76", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Theater Tech 1A"
    }, 
    "DANC153A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Jones, Wendy L.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Dance 3A"
    }, 
    "ORCS150A": {
      "slots": [
        {
          "room": "70", 
          "teacher": "Winter, Michele J.", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Symphony Orchestra 1A"
    }, 
    "CERA150A": {
      "slots": [
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 1
        }, 
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 3
        }, 
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 6
        }, 
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Ceramics A"
    }, 
    "CERA150B": {
      "slots": [
        {
          "room": "S01", 
          "teacher": "Rode, Maria T.", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "Ceramics B"
    }, 
    "ARTT150A": {
      "slots": [
        {
          "room": "75", 
          "teacher": "Janssen, Kirsten B.", 
          "mod": 0
        }, 
        {
          "room": "75", 
          "teacher": "Janssen, Kirsten B.", 
          "mod": 1
        }, 
        {
          "room": "330", 
          "teacher": "Pollak, Julian Victor", 
          "mod": 2
        }, 
        {
          "room": "75", 
          "teacher": "Janssen, Kirsten B.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Art A"
    }, 
    "SING153A": {
      "slots": [
        {
          "room": "70", 
          "teacher": "Chan, Jason Tai Wai", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Vocal Music 3A"
    }, 
    "DANC151A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Jones, Wendy L.", 
          "mod": 2
        }, 
        {
          "room": "Gym", 
          "teacher": "Jones, Wendy L.", 
          "mod": 3
        }
      ], 
      "code": "A", 
      "name": "Dance 1A"
    }, 
    "JAZZ150A": {
      "slots": [
        {
          "room": "71", 
          "teacher": "Wagner, Mitchell W.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Jazz Band A"
    }, 
    "ARTT350A": {
      "slots": [
        {
          "room": "75", 
          "teacher": "Janssen, Kirsten B.", 
          "mod": 2
        }
      ], 
      "code": "BC", 
      "name": "AP Studio Art: 3-D Design A"
    }, 
    "DRAM151B": {
      "slots": [
        {
          "room": "110", 
          "teacher": "Bookwalter, Teresa C.", 
          "mod": 4
        }
      ], 
      "code": "A", 
      "name": "Drama 1B"
    }, 
    "SING152A": {
      "slots": [
        {
          "room": "70", 
          "teacher": "Chan, Jason Tai Wai", 
          "mod": 2
        }
      ], 
      "code": "A", 
      "name": "Vocal Music 2A"
    }
  }, 
  "PE": {
    "PEPE152A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Ray, Robert W", 
          "mod": 0
        }, 
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 0
        }, 
        {
          "room": "Gym", 
          "teacher": "Axt Jr, Milton C.", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Geren, Thomas D.", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Axt Jr, Milton C.", 
          "mod": 2
        }, 
        {
          "room": "Gym", 
          "teacher": "Ray, Robert W", 
          "mod": 2
        }, 
        {
          "room": "Gym", 
          "teacher": "Axt Jr, Milton C.", 
          "mod": 3
        }, 
        {
          "room": "Gym", 
          "teacher": "Geren, Thomas D.", 
          "mod": 3
        }, 
        {
          "room": "Gym", 
          "teacher": "Geren, Thomas D.", 
          "mod": 4
        }, 
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 4
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffc, Staffc", 
          "mod": 4
        }, 
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 5
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffc, Staffc", 
          "mod": 5
        }, 
        {
          "room": "Gym", 
          "teacher": "Geren, Thomas D.", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Axt Jr, Milton C.", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Ray, Robert W", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffc, Staffc", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Axt Jr, Milton C.", 
          "mod": 7
        }, 
        {
          "room": "Gym", 
          "teacher": "Geren, Thomas D.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "PE 2A"
    }, 
    "PEPE153A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "PE 3A"
    }, 
    "BSKT150A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Ray, Robert W", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "Basketball A"
    }, 
    "ATHD000A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Ray, Robert W", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Athletic Director"
    }, 
    "RCKT150A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 4
        }
      ], 
      "code": "A", 
      "name": "Racket Sports 1A"
    }, 
    "WGHT150A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 5
        }
      ], 
      "code": "A", 
      "name": "Weight Training A"
    }, 
    "PEPE154A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 6
        }
      ], 
      "code": "A", 
      "name": "PE 4A"
    }, 
    "PEPE151A": {
      "slots": [
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 0
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffc, Staffc", 
          "mod": 0
        }, 
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 0
        }, 
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffc, Staffc", 
          "mod": 1
        }, 
        {
          "room": "Gym", 
          "teacher": "Doherty, Terence Martin", 
          "mod": 2
        }, 
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 2
        }, 
        {
          "room": "Gym", 
          "teacher": "Doherty, Terence Martin", 
          "mod": 3
        }, 
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 3
        }, 
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 4
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffd, Staffd", 
          "mod": 4
        }, 
        {
          "room": "Gym", 
          "teacher": "Lopez, Juan L.", 
          "mod": 5
        }, 
        {
          "room": "Gym", 
          "teacher": "Doherty, Terence Martin", 
          "mod": 5
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffd, Staffd", 
          "mod": 5
        }, 
        {
          "room": "Gym", 
          "teacher": "Hosoda, Christine S.", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Taylor-Ray, Sascha N.", 
          "mod": 6
        }, 
        {
          "room": "Gym", 
          "teacher": "Staffd, Staffd", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "PE 1A"
    }
  }, 
  "JROTC": {
    "JRTC152A": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 2A"
    }, 
    "JRTC151B": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 1B"
    }, 
    "JRTC151A": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 1A"
    }, 
    "JRTC154A": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 4A"
    }, 
    "JRTC154B": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 4B"
    }, 
    "JRTC152B": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Credito, Ronilo P.", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 2B"
    }, 
    "JRTC153B": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 3B"
    }, 
    "JRTC153A": {
      "slots": [
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 4
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 5
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 6
        }, 
        {
          "room": "CvRm", 
          "teacher": "Bullard, Doug", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "JROTC 3A"
    }
  }, 
  "Math": {
    "ALGE151B": {
      "slots": [
        {
          "room": "244", 
          "teacher": "Telep, Laura Eve", 
          "mod": 1
        }
      ], 
      "code": "BC", 
      "name": "Algebra 1B"
    }, 
    "ALGE151A": {
      "slots": [
        {
          "room": "S104", 
          "teacher": "Hong, Lisa M.", 
          "mod": 0
        }, 
        {
          "room": "251", 
          "teacher": "Li, Ernest W.", 
          "mod": 2
        }, 
        {
          "room": "275", 
          "teacher": "Hong, Lisa M.", 
          "mod": 4
        }, 
        {
          "room": "336", 
          "teacher": "Ambrose, Michael A.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Algebra 1A"
    }, 
    "ACMA250A": {
      "slots": [
        {
          "room": "258", 
          "teacher": "Sinn, Wilson", 
          "mod": 1
        }, 
        {
          "room": "270", 
          "teacher": "Evans, Hans M.", 
          "mod": 2
        }, 
        {
          "room": "251", 
          "teacher": "Li, Ernest W.", 
          "mod": 3
        }, 
        {
          "room": "258", 
          "teacher": "Sinn, Wilson", 
          "mod": 5
        }, 
        {
          "room": "251", 
          "teacher": "Li, Ernest W.", 
          "mod": 5
        }, 
        {
          "room": "S104", 
          "teacher": "Evans, Hans M.", 
          "mod": 6
        }, 
        {
          "room": "251", 
          "teacher": "Li, Ernest W.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Accelerated Math A Honors"
    }, 
    "CMSC350A": {
      "slots": [
        {
          "room": "334", 
          "teacher": "Simon, Arthur D.", 
          "mod": 2
        }, 
        {
          "room": "334", 
          "teacher": "Simon, Arthur D.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "AP Computer Science A A"
    }, 
    "PCAL150A": {
      "slots": [
        {
          "room": "274", 
          "teacher": "Fahey, Patrick J.", 
          "mod": 0
        }, 
        {
          "room": "336", 
          "teacher": "Ambrose, Michael A.", 
          "mod": 0
        }, 
        {
          "room": "275", 
          "teacher": "Rosales, Francisco C.", 
          "mod": 1
        }, 
        {
          "room": "340", 
          "teacher": "Karapetyan, Lyudmila S.", 
          "mod": 1
        }, 
        {
          "room": "S104", 
          "teacher": "Hong, Lisa M.", 
          "mod": 1
        }, 
        {
          "room": "275", 
          "teacher": "Rosales, Francisco C.", 
          "mod": 3
        }, 
        {
          "room": "336", 
          "teacher": "Ambrose, Michael A.", 
          "mod": 4
        }, 
        {
          "room": "274", 
          "teacher": "Fahey, Patrick J.", 
          "mod": 4
        }, 
        {
          "room": "271", 
          "teacher": "Portugues Brennan, Mei-Ling", 
          "mod": 5
        }, 
        {
          "room": "275", 
          "teacher": "Hong, Lisa M.", 
          "mod": 5
        }, 
        {
          "room": "274", 
          "teacher": "Fahey, Patrick J.", 
          "mod": 6
        }, 
        {
          "room": "273", 
          "teacher": "Zeeman, David K.", 
          "mod": 6
        }, 
        {
          "room": "275", 
          "teacher": "Rosales, Francisco C.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Pre-Calculus A"
    }, 
    "ALGE152B": {
      "slots": [
        {
          "room": "271", 
          "teacher": "Reller, Ellen M.", 
          "mod": 1
        }, 
        {
          "room": "274", 
          "teacher": "Portugues Brennan, Mei-Ling", 
          "mod": 2
        }, 
        {
          "room": "271", 
          "teacher": "Portugues Brennan, Mei-Ling", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Algebra 2B"
    }, 
    "ALGE152A": {
      "slots": [
        {
          "room": "273", 
          "teacher": "Zeeman, David K.", 
          "mod": 0
        }, 
        {
          "room": "338", 
          "teacher": "Chan, Tom C.", 
          "mod": 0
        }, 
        {
          "room": "336", 
          "teacher": "Ambrose, Michael A.", 
          "mod": 1
        }, 
        {
          "room": "336", 
          "teacher": "Karapetyan, Lyudmila S.", 
          "mod": 2
        }, 
        {
          "room": "336", 
          "teacher": "Ambrose, Michael A.", 
          "mod": 3
        }, 
        {
          "room": "270", 
          "teacher": "Evans, Hans M.", 
          "mod": 3
        }, 
        {
          "room": "273", 
          "teacher": "Zeeman, David K.", 
          "mod": 4
        }, 
        {
          "room": "340", 
          "teacher": "Karapetyan, Lyudmila S.", 
          "mod": 6
        }, 
        {
          "room": "338", 
          "teacher": "Chan, Tom C.", 
          "mod": 6
        }, 
        {
          "room": "273", 
          "teacher": "Staffh, Staffh", 
          "mod": 5
        }, 
        {
          "room": "S104", 
          "teacher": "Evans, Hans M.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "Algebra 2A"
    }, 
    "CALC351A": {
      "slots": [
        {
          "room": "270", 
          "teacher": "Hoffman, Karl E.", 
          "mod": 0
        }, 
        {
          "room": "270", 
          "teacher": "Hoffman, Karl E.", 
          "mod": 1
        }, 
        {
          "room": "S104", 
          "teacher": "Cohen, Bruce I.", 
          "mod": 2
        }, 
        {
          "room": "S104", 
          "teacher": "Cohen, Bruce I.", 
          "mod": 4
        }
      ], 
      "code": "BC", 
      "name": "AP Calculus BC A"
    }, 
    "GEOM250A": {
      "slots": [
        {
          "room": "338", 
          "teacher": "Chan, Tom C.", 
          "mod": 1
        }, 
        {
          "room": "258", 
          "teacher": "Sinn, Wilson", 
          "mod": 2
        }, 
        {
          "room": "258", 
          "teacher": "Sinn, Wilson", 
          "mod": 4
        }, 
        {
          "room": "270", 
          "teacher": "Hoffman, Karl E.", 
          "mod": 5
        }, 
        {
          "room": "270", 
          "teacher": "Hoffman, Karl E.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Geometry Honors A"
    }, 
    "PCMP150A": {
      "slots": [
        {
          "room": "334", 
          "teacher": "Simon, Arthur D.", 
          "mod": 1
        }
      ], 
      "code": "A", 
      "name": "Principles of Computer Sci"
    }, 
    "CALC350A": {
      "slots": [
        {
          "room": "271", 
          "teacher": "Warshaw, Laurence", 
          "mod": 0
        }, 
        {
          "room": "244", 
          "teacher": "Sullivan, Kevin", 
          "mod": 2
        }, 
        {
          "room": "271", 
          "teacher": "Warshaw, Laurence", 
          "mod": 2
        }, 
        {
          "room": "272", 
          "teacher": "Gribler, Jeremy L.", 
          "mod": 3
        }, 
        {
          "room": "244", 
          "teacher": "Sullivan, Kevin", 
          "mod": 4
        }, 
        {
          "room": "272", 
          "teacher": "Gribler, Jeremy L.", 
          "mod": 5
        }, 
        {
          "room": "244", 
          "teacher": "Sullivan, Kevin", 
          "mod": 6
        }, 
        {
          "room": "272", 
          "teacher": "Gribler, Jeremy L.", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Calculus AB A"
    }, 
    "CROB150A": {
      "slots": [
        {
          "room": "334", 
          "teacher": "Simon, Arthur D.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Computers and Robotics Tech"
    }, 
    "PROG150A": {
      "slots": [
        {
          "room": "334", 
          "teacher": "Reller, Ellen M.", 
          "mod": 0
        }, 
        {
          "room": "334", 
          "teacher": "Reller, Ellen M.", 
          "mod": 4
        }, 
        {
          "room": "334", 
          "teacher": "Reller, Ellen M.", 
          "mod": 5
        }, 
        {
          "room": "334", 
          "teacher": "Sinn, Wilson", 
          "mod": 7
        }
      ], 
      "code": "A", 
      "name": "Computer Programming A"
    }, 
    "GEOM160A": {
      "slots": [
        {
          "room": "244", 
          "teacher": "Telep, Laura Eve", 
          "mod": 0
        }, 
        {
          "room": "251", 
          "teacher": "Portugues Brennan, Mei-Ling", 
          "mod": 1
        }, 
        {
          "room": "272", 
          "teacher": "Telep, Laura Eve", 
          "mod": 2
        }, 
        {
          "room": "273", 
          "teacher": "Staffh, Staffh", 
          "mod": 2
        }, 
        {
          "room": "271", 
          "teacher": "Portugues Brennan, Mei-Ling", 
          "mod": 3
        }, 
        {
          "room": "272", 
          "teacher": "Staffh, Staffh", 
          "mod": 4
        }, 
        {
          "room": "S104", 
          "teacher": "Evans, Hans M.", 
          "mod": 5
        }, 
        {
          "room": "272", 
          "teacher": "Staffh, Staffh", 
          "mod": 6
        }, 
        {
          "room": "257", 
          "teacher": "Hong, Lisa M.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Geometry A"
    }, 
    "STAT350A": {
      "slots": [
        {
          "room": "340", 
          "teacher": "Chambers, Thomas R.", 
          "mod": 0
        }, 
        {
          "room": "340", 
          "teacher": "Chambers, Thomas R.", 
          "mod": 2
        }, 
        {
          "room": "340", 
          "teacher": "Chambers, Thomas R.", 
          "mod": 4
        }, 
        {
          "room": "244", 
          "teacher": "Sullivan, Kevin", 
          "mod": 7
        }
      ], 
      "code": "BC", 
      "name": "AP Statistics A"
    }, 
    "GEOM150B": {
      "slots": [
        {
          "room": "273", 
          "teacher": "Zeeman, David K.", 
          "mod": 1
        }, 
        {
          "room": "273", 
          "teacher": "Zeeman, David K.", 
          "mod": 3
        }
      ], 
      "code": "BC", 
      "name": "Geometry B"
    }, 
    "PCAL250A": {
      "slots": [
        {
          "room": "272", 
          "teacher": "Gribler, Jeremy L.", 
          "mod": 1
        }, 
        {
          "room": "338", 
          "teacher": "Chan, Tom C.", 
          "mod": 3
        }, 
        {
          "room": "338", 
          "teacher": "Chan, Tom C.", 
          "mod": 5
        }, 
        {
          "room": "251", 
          "teacher": "Li, Ernest W.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Pre-Calculus A Honors"
    }, 
    "GEOM150A": {
      "slots": [
        {
          "room": "274", 
          "teacher": "Fahey, Patrick J.", 
          "mod": 1
        }, 
        {
          "room": "275", 
          "teacher": "Rosales, Francisco C.", 
          "mod": 2
        }, 
        {
          "room": "340", 
          "teacher": "Karapetyan, Lyudmila S.", 
          "mod": 3
        }, 
        {
          "room": "274", 
          "teacher": "Fahey, Patrick J.", 
          "mod": 5
        }, 
        {
          "room": "340", 
          "teacher": "Karapetyan, Lyudmila S.", 
          "mod": 5
        }, 
        {
          "room": "275", 
          "teacher": "Rosales, Francisco C.", 
          "mod": 6
        }
      ], 
      "code": "BC", 
      "name": "Geometry A"
    }
  }
};

/* ratings from www.ratemyteachers.com, take with a grain of salt */
DB.ratings = {
  "Carney, Staci L.": 3.5, 
  "Miller, Thomas O.": 3.0, 
  "De La Riarte, Sirly G.": 3.1, 
  "Kwong-Ballard, Alice": 3.45, 
  "Galang-Mcmahon, Lorna A.": 3.35, 
  "Emerson, Robert W": 3.15, 
  "Shimmon, Steven A.": 4.3, 
  "Portugues Brennan, Mei-Ling": 3.0, 
  "Cohen, Bruce I.": 3.75, 
  "Marten, Bryan D.": 3.1, 
  "Martin, Thomas Michael": 4.2, 
  "Lo, Winifred": 2.7, 
  "Staffb, Staffb": 3.0, 
  "Schwarz, Alexander J.": 3.7, 
  "Liang, Jing": 3.8, 
  "Rosales, Francisco C.": 2.25, 
  "Yoshimura-Lee, Miyuki": 3.85, 
  "Pang, Lani Nahleen": 2.15, 
  "Wenning, Mark Conrad": 3.95, 
  "Recht, Sydney G.": 3.65, 
  "Williams, Samuel": 3.95, 
  "Lipman, David J.": 3.1, 
  "Crabtree, Stephanie I.": 3.3, 
  "Cooley, Bryan A.": 3.25, 
  "Bookwalter, Teresa C.": 3.95, 
  "Moffitt, Jennifer L.": 4.4, 
  "Cadoppi, Carole S.": 4.2, 
  "Bird, Erin B.": 3.6, 
  "Tuason, Jason N.": 4.05, 
  "Bajet, Lael E.": 3.0, 
  "Telep, Laura Eve": 3.35, 
  "Worth, John H": 4.25, 
  "Li, Yu": 3.45, 
  "Chang, Xiaolin": 4.1, 
  "Yuan, David D.": 3.75, 
  "Matusek, Sharn L.": 2.35, 
  "Michels, Adam G.": 3.6, 
  "Johnson, Theodore": 3.7, 
  "Winter, Michele J.": 4.9, 
  "Starr, David H.": 3.0, 
  "Simon, Arthur D.": 4.25, 
  "Zeeman, David K.": 4.4, 
  "Stafff, Stafff": 3.0, 
  "Melvin, Katherine E.": 2.8, 
  "Trimble, Michelle": 2.55, 
  "Collins, Gregory P": 3.1, 
  "Rode, Maria T.": 2.65, 
  "Maquinana, Victoria M.": 3.7, 
  "Magsanay, Matthew S.": 3.9, 
  "Dickerman, Scott I.": 4.15, 
  "Bell, Matthew V.": 3.6, 
  "Swett, Dacotah A.": 2.6, 
  "Gribler, Jeremy L.": 3.05, 
  "Lamarre, Timothy P.": 3.75, 
  "Christensen, Catherine S.": 4.2, 
  "Johnson, Kim D.": 2.25, 
  "Chan, Tom C.": 3.9, 
  "Okada, Naomi": 3.2, 
  "Ritter, Bryan A.": 4.25, 
  "Hoffman, Karl E.": 3.8, 
  "Raya, John G.": 3.25, 
  "Freeland, Anne E.": 4.0, 
  "Wagner, Mitchell W.": 2.1, 
  "Johnson, Rebecca L.": 3.85, 
  "Janssen, Kirsten B.": 4.05, 
  "Henares, Nicole N.": 2.55, 
  "Warshaw, Laurence": 3.75, 
  "Laureyns, Shawn G.": 3.6, 
  "Nickels, Mary Carolyn": 3.55, 
  "Sullivan, Kevin": 2.6, 
  "Fong, Jonathan": 4.3, 
  "Rotter, Katrina": 3.25, 
  "Hong, Lisa M.": 3.95, 
  "Ambrose, Michael A.": 3.75, 
  "Prothro, Randell H.": 3.4, 
  "Billingsly-Ballbe, Cristina": 3.65, 
  "Li, Ernest W.": 4.2, 
  "Chambers, Thomas R.": 4.05, 
  "Schmidt, Steven P.": 4.05, 
  "Wade, Heather J.": 2.4, 
  "Pelagatti, Chiara": 4.0, 
  "Yu, Samantha H.": 3.4, 
  "Branzburg, Judith Musante": 4.25, 
  "Staffh, Staffh": 3.0, 
  "Bellville, Stephanie Michelle": 4.0, 
  "Sinn, Wilson": 4.45, 
  "Santiago, Meredith Chase": 3.1, 
  "Danforth, Brian": 4.3, 
  "Innis, Cathy Ehlen": 3.9, 
  "Evans, Hans M.": 4.05, 
  "Reller, Ellen M.": 3.65, 
  "Chan, Jason Tai Wai": 3.4, 
  "Jones, Wendy L.": 3.55, 
  "Dean, Sara L.": 3.8, 
  "Staffa, Staffa": 3.0, 
  "Shapiro, Richard A.": 3.65, 
  "Prophet, Matthew W": 4.2, 
  "Furey, Matthew": 2.95, 
  "Fahey, Patrick J.": 2.6, 
  "Killpack, Alena M.": 3.0, 
  "Lubenow, Kristin B.": 3.8, 
  "Staffg, Staffg": 3.0, 
  "Karapetyan, Lyudmila S.": 3.35, 
  "Steele, William Gabriel": 2.6, 
  "Hereford, David H": 4.1, 
  "Girling, Richard W.": 3.95
};

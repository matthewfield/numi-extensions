// unsual time units extension
// Author: Matthew Field, mail@mattfield.com

numi.addUnit({
   "id": "atomus",
   "phrases": "atomus",
   "baseUnitId": "second",
   "format" : "atomus",
   "ratio" : .160
});

numi.addUnit({
   "id": "blink",
   "phrases": "blink, blinks",
   "baseUnitId": "second",
   "format" : "blinks",
   "ratio" : .864
});

numi.addUnit({ // a fortnight is 14 days (UK English)
   "id": "fortnight",
   "phrases": "fortnight, fortnights",
   "baseUnitId": "second",
   "format" : "fortnight",
   "ratio" : 1209600
});

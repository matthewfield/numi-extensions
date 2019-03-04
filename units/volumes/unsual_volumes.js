// unsual volume units extension
// Author: Matthew Field, mail@mattfield.com

numi.addUnit({ // a smidgen is 1/32 of a tsp or 1/2 a pinch
   "id": "smidgen",
   "phrases": "smidgen",
   "baseUnitId": "m3",
   "format" : "smidgen",
   "ratio" : 0.00000011552159985
});

numi.addUnit({
   "id": "bushel",
   "phrases": "bushel",
   "baseUnitId": "gallon",
   "format" : "bushel",
   "ratio" : 8
});

numi.addUnit({ // a dash is 1/64 of a fl oz
    "id": "dash",
   "phrases": "dash, dashes",
   "baseUnitId": "m3",
   "format" : "ds.",
   "ratio" : 0.00000046208639941
});

numi.addUnit({ // a pinch is 1/128 of a fl oz
    "id": "pinch",
   "phrases": "pinch, pinches",
   "baseUnitId": "m3",
   "format" : "pn.",
   "ratio" : 0.00000023104319971
});

numi.addUnit({ // a drop is 1/576 of a fl oz
    "id": "drop",
   "phrases": "drop, drops",
   "baseUnitId": "m3",
   "format" : "dr.",
   "ratio" : 0.000000051342933268
});

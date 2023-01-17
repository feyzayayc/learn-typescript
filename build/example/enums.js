"use strict";
// otomatik değer atar (dizi gibi)
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["black"] = 2] = "black";
})(Colors || (Colors = {}));
console.log(Colors.black); // sayılsal değer döner => 2
var Days;
(function (Days) {
    Days["monday"] = "pazartesi";
    Days["tuesday"] = "sal\u0131";
    Days["wednesday"] = "\u00E7ar\u015Famba";
})(Days || (Days = {}));
console.log(Days.monday); // sayılsal değer döner => 2

"use strict";
var A;
(function (A) {
    A.i = 1;
})(A || (A = {}));
var B;
(function (B) {
    B.i = 2;
})(B || (B = {}));
console.log(A.i);
console.log(B.i);

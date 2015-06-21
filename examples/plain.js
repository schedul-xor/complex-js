goog.require('schedul.math.Complex');


var c1 = new schedul.math.Complex(3, 4);
var c2 = new schedul.math.Complex(4, 5);
var c3 = schedul.math.Complex.add(c1, c2);
console.log(c3);

var c4 = schedul.math.Complex.subtract(c1, c2);
console.log(c4);

var c5 = schedul.math.Complex.multiply(c1, c2);
console.log(c5);

var c6 = schedul.math.Complex.divide(c1, c2);
console.log(c6);

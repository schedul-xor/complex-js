goog.provide('schedul.math.Complex');

goog.require('goog.asserts');



/**
 * @constructor
 * @param {!number} r
 * @param {!number} opt_i
 */
schedul.math.Complex = function(r, opt_i) {
    goog.asserts.assertNumber(r);

    this.r_ = r;
    this.i_ = 0;
    if (goog.isDefAndNotNull(opt_i)) {
	goog.asserts.assertNumber(opt_i);
	this.i_ = opt_i;
    }
};


/**
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.prototype.clone = function() {
    return new schedul.math.Complex(this.r_, this.i_);
};


/**
 * Returns 0 when C=0.
 * http://math.stackexchange.com/questions/739462/what-is-the-argument-of-0
 * @return {!number}
 */
schedul.math.Complex.prototype.argument = function() {
    if (this.r_ === 0 && this.i_ === 0) {
	return 0;
    }
    return Math.atan2(this.i_, this.r_);
};


/**
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.prototype.conjugate = function() {
    return new schedul.math.Complex(this.r_, -this.i_);
};


/**
 * @return {!number}
 */
schedul.math.Complex.prototype.absolute = function() {
    return Math.sqrt(this.r_ * this.r_ + this.i_ * this.i_);
};


/**
 * @return {!number}
 */
schedul.math.Complex.prototype.real = function() {
    return this.r_;
};


/**
 * @return {!number}
 */
schedul.math.Complex.prototype.imaginary = function() {
    return this.i_;
};


/**
 * @param {!number|!schedul.math.Complex} c
 */
schedul.math.Complex.prototype.add = function(c) {
    if (goog.isNumber(c)) {
	this.r_ += c;
    }else {
	goog.asserts.assertInstanceof(c, schedul.math.Complex);

	this.r_ += c.real();
	this.i_ += c.imaginary();
    }
};


/**
 * c1+c2
 * @param {!schedul.math.Complex} c1
 * @param {!schedul.math.Complex} c2
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.add = function(c1, c2) {
    goog.asserts.assertInstanceof(c1, schedul.math.Complex);
    goog.asserts.assertInstanceof(c2, schedul.math.Complex);

    return new schedul.math.Complex(
	c1.real() + c2.real(),
	c1.imaginary() + c2.imaginary()
    );
};


/**
 * @param {!number|!schedul.math.Complex} c
 */
schedul.math.Complex.prototype.subtract = function(c) {
    if (goog.isNumber(c)) {
	this.r_ -= c;
    }else {
	goog.asserts.assertInstanceof(c, schedul.math.Complex);
	this.r_ -= c.real();
	this.i_ -= c.imaginary();
    }
};


/**
 * c1-c2
 * @param {!schedul.math.Complex} c1
 * @param {!schedul.math.Complex} c2
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.subtract = function(c1, c2) {
    goog.asserts.assertInstanceof(c1, schedul.math.Complex);
    goog.asserts.assertInstanceof(c2, schedul.math.Complex);

    return new schedul.math.Complex(c1.real() - c2.real(), c1.imaginary() - c2.imaginary());
};


/**
 * @param {!number|!schedul.math.Complex} c
 */
schedul.math.Complex.prototype.multiply = function(c) {
    if (goog.isNumber(c)) {
	this.r_ *= c;
	this.i_ *= c;
    }else {
	goog.asserts.assertInstanceof(c, schedul.math.Complex);

	var A = this.r_;
	var B = this.i_;
	var C = c.real();
	var D = c.imaginary();
	this.r_ = A * C - B * D;
	this.i_ = A * D + B * C;
    }
};


/**
 * c1*c2
 * @param {!schedul.math.Complex} c1
 * @param {!schedul.math.Complex} c2
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.multiply = function(c1, c2) {
    goog.asserts.assertInstanceof(c1, schedul.math.Complex);
    goog.asserts.assertInstanceof(c2, schedul.math.Complex);

	var A = c1.real();
	var B = c1.imaginary();
	var C = c2.real();
	var D = c2.imaginary();
	var r = A * C - B * D;
    var i = A * D + B * C;
    return new schedul.math.Complex(r, i);
};


/**
 * @param {!number|!schedul.math.Complex} c
 */
schedul.math.Complex.prototype.divide = function(c) {
    if (goog.isNumber(c)) {
	if (c === 0) {
	    goog.asserts.fail('Division by zero');
	}
	this.r_ /= c;
	this.i_ /= c;
    }else {
	goog.asserts.assertInstanceof(c, schedul.math.Complex);

	var A = this.r_;
	var B = this.i_;
	var C = c.real();
	var D = c.imaginary();
	var dom = C * C + D * D;
	this.r_ = (A * C + B * D) / dom;
	this.i_ = (B * C - A * D) / dom;
    }
};


/**
 * c1*c2
 * @param {!schedul.math.Complex} c1
 * @param {!schedul.math.Complex} c2
 * @return {!schedul.math.Complex}
 */
schedul.math.Complex.divide = function(c1, c2) {
    goog.asserts.assertInstanceof(c1, schedul.math.Complex);
    goog.asserts.assertInstanceof(c2, schedul.math.Complex);

	var A = c1.real();
	var B = c1.imaginary();
	var C = c2.real();
	var D = c2.imaginary();
	var dom = C * C + D * D;
	var r = (A * C + B * D) / dom;
	var i = (B * C - A * D) / dom;

    return new schedul.math.Complex(r, i);
};


/**
 * @return {!string}
 */
schedul.math.Complex.prototype.toString = function() {
    return this.r_ + '+' + this.i_ + 'i';
};

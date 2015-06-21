require('nclosure').nclosure({additionalDeps: ['deps.js']});
expect = require('expect.js');

goog.require('schedul.math.Complex');

describe('schedul.math.Complex', function() {
    describe('single operand operations', function() {
	it('should work well for argument', function() {
	    var c = new schedul.math.Complex(1, 1);
	    expect(c.argument()).to.be(Math.PI / 4);
	});

	it('should work well for absolute', function() {
	    var c = new schedul.math.Complex(3, 4);
	    expect(c.absolute()).to.be(5);
	});

	it('should work well for conjugate', function() {
	    var c = new schedul.math.Complex(3, 4);
	    var ccj = c.conjugate();
	    expect(ccj.real()).to.be(3);
	    expect(ccj.imaginary()).to.be(-4);
	});
    });

    describe('complex to complex operation', function() {
	it('should work well for non-destructive addition', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    var c3 = schedul.math.Complex.add(c1, c2); // Non-destruction

	    expect(c3.real()).to.be(7);
	    expect(c3.imaginary()).to.be(9);
	});

	it('should work well for destructive addition', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    c1.add(c2); // Destruct c1

	    expect(c1.real()).to.be(7);
	    expect(c1.imaginary()).to.be(9);
	});

	it('should work well for non-destructive subtraction', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    var c3 = schedul.math.Complex.subtract(c1, c2); // Non-destruction

	    expect(c3.real()).to.be(-1);
	    expect(c3.imaginary()).to.be(-1);
	});

	it('should work well for destructive subtraction', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    c1.subtract(c2); // Destruct c1

	    expect(c1.real()).to.be(-1);
	    expect(c1.imaginary()).to.be(-1);
	});

	it('should work well for non-destructive multiplication', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    var c3 = schedul.math.Complex.multiply(c1, c2); // Non-destruction

	    expect(c3.real()).to.be(-8);
	    expect(c3.imaginary()).to.be(31);
	});

	it('should work well for destructive multiplication', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    c1.multiply(c2); // Destruct c1

	    expect(c1.real()).to.be(-8);
	    expect(c1.imaginary()).to.be(31);
	});

	it('should work well for non-destructive division', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    var c3 = schedul.math.Complex.divide(c1, c2); // Non-destruction

	    expect(c3.real()).to.be(32 / 41);
	    expect(c3.imaginary()).to.be(1 / 41);
	});

	it('should work well for destructive division', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    var c2 = new schedul.math.Complex(4, 5);
	    c1.divide(c2); // Destruct c1

	    expect(c1.real()).to.be(32 / 41);
	    expect(c1.imaginary()).to.be(1 / 41);
	});
    });

    describe('complex to number operation', function() {
	it('should work well for destructive addition', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    c1.add(5); // Destruct c1

	    expect(c1.real()).to.be(8);
	    expect(c1.imaginary()).to.be(4);
	});

	it('should work well for destructive subtraction', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    c1.subtract(5); // Destruct c1

	    expect(c1.real()).to.be(-2);
	    expect(c1.imaginary()).to.be(4);
	});

	it('should work well for destructive multiplication', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    c1.multiply(4); // Destruct c1

	    expect(c1.real()).to.be(12);
	    expect(c1.imaginary()).to.be(16);
	});

	it('should work well for destructive division', function() {
	    var c1 = new schedul.math.Complex(3, 4);
	    c1.divide(2); // Destruct c1

	    expect(c1.real()).to.be(1.5);
	    expect(c1.imaginary()).to.be(2);
	});
    });
});

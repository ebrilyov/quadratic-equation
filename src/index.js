module.exports = function solveEquation(a,b,c) {
var a;
var b;
var c;
var D = +(b*b - 4*a*c);
	if ( D > 0) {
var x1 = +(-b / ( 2 * a ) - Math.sqrt( D ) / ( 2 * a ));
var x2 = +(-b / ( 2 * a ) + Math.sqrt( D ) / ( 2 * a ));
		return [x2, x1];
	} else if (D == 0) {
		var x3 = +(-b / ( 2 * a ));
		return [x3];
	} else {
		x1 = (+(-b / ( 2 * a ) - Math.sqrt( Math.abs(D) ) / ( 2 * a )));
		x2 = (+(-b / ( 2 * a ) + Math.sqrt( Math.abs(D) ) / ( 2 * a )));
		//return [-3667291, -1772586];
		return [x4,x5];
	}	 }


	
/*
 * ~ 3 times faster than using Math.trignonometry
 */
var OptiMath = function () {
	var self = {
		sin: function(deg){
			if(deg<0)deg=360-((-deg)%360);
			return self.sinus[(deg<<0)%360]
		},
		cos: function(deg){
			if(deg<0)deg=360-((-deg)%360);
			return self.cosinus[(deg<<0)%360]
		},
		tan: function(deg){
			if(deg<0)deg=360-((-deg)%360);
			return self.tangens[(deg<<0)%360]
		},
		atan: function (dx, dy) {
			var angle = Math.atan(dy/dx) // Q1/Q4
			if (dx < 0 && dy > 0) angle = Math.PI + angle; // Q2
			else if (dx < 0 && dy < 0) angle = -(Math.PI - angle); // Q3
			return angle * 180/Math.PI; // deg
		},
		normalize: function(deg) {
			return deg>=0 ? deg%360 : 360-((-deg)%360)
		},
		sinus: new Array(360).fill(0).map(function(e,i){return Math.sin(i*Math.PI/180)}),
		cosinus: new Array(360).fill(0).map(function(e,i){return Math.cos(i*Math.PI/180)}),
		tangens: new Array(360).fill(0).map(function(e,i){return Math.tan(i*Math.PI/180)})
	};
	return self;
};

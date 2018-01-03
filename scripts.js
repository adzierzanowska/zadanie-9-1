function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
		return 'Nieprawidłowe dane';
	} 
	return a * h / 2;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(1, 8);
var triangle2Area = getTriangleArea(4, 9);
var triangle3Area = getTriangleArea(7, -5);

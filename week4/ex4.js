/* Task 4
Create a Circle() constructor that takes the radius as a single argument and has the
following properties and methods:
● .radius
● .diameter
● .getC() (get circumference)
● .getA() (get area)
Notes:
● Circumference: 2πr. Area: πr^2.
● Use Math.PI for calculating circumference and area.
● Round the perimeter and area results to the nearest hundredths place.
*/

function Circle(radius) {
    this.radius = radius;
    this.diameter = this.radius * 2;
    this.getC = function() {
        return (Math.PI * this.diameter).toFixed(2);
    };
    this.getA = function() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

let circle = new Circle(4);

console.log(circle.radius, " ", circle.diameter, " ", circle.getC(), " ", circle.getA());

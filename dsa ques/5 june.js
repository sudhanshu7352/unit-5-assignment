//js classes
//Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.

class Polygon{
    constructor(side){
        this.side =side
    }
    perimeter(side){
        let sum=0
        for(let i=0;i<this.side.length;i++){
            sum +=this.side[i]
        }
        return sum
    }
}
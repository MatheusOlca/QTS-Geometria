/*=============================================================

      Grupo: Matheus Caldas, Pedro Botelho, Maria, Roberto

=============================================================*/
/*
      Basic Class for 2D Objects containing Width and Height
*/
class Object2D {

      constructor(w, h){
            this.width = w;
            this.height = h;
      }

      getArea(){}
      getPerimeter(){}
}

/*
      Geometry 2D Objects extending Object2D Class
*/ 
class Rectangle extends Object2D {

      getArea(){
            return this.width * this.height
      }

      getPerimeter(){
            return (this.width * 2) + (this.height * 2)
      }

}

class Circle extends Object2D {

      getArea(){
            return Math.pow(this.width / 2, 2) * Math.PI
      }

      getPerimeter(){
            return (2 * Math.PI) * (this.width / 2)
      }

}

class Triangle extends Object2D {

      constructor(w, h, sides){
            super(w, h)
            this.sides = sides
      }

      getArea(){
            return (this.width * this.height) / 2
      }

      getPerimeter(){
            var perimeter = 0
            this.sides.forEach(side => {
                  perimeter += side
            });
            return perimeter
      }

}

const rect = new Rectangle(10, 5);
const triangle = new Triangle(10, 10, [3, 2, 1]);
console.log("Rectangle area is: "+rect.getArea());
console.log("Reactangle perimeter is: "+rect.getPerimeter());
console.log("Triangle area is: "+triangle.getArea());
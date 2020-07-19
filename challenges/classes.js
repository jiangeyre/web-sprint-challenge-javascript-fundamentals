// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(attr) {
        this.length = attr.length
        this.width = attr.width
        this.height = attr.height
    }
    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker2 { //cubes have equal height width and length
    constructor(cubeAttr) {
        super(cubeAttr);
        this.sideMeasure = cubeAttr.sideMeasure
    }
    volumeCube() {
        return Math.pow(this.sideMeasure, 3);
    }

    surfaceAreaCube() {
        return 6 * (Math.pow(this.sideMeasure, 2));
    }

}

const cuboid = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
})

const cuboid666 = new CuboidMaker2 ({
    length: 6,
    width: 6,
    height: 6
})

const cube = new CubeMaker ({
   sideMeasure: 6
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cuboid666.volume());
console.log(cuboid666.surfaceArea()); //literally the same as my new class extension for a cube

console.log(cube.volumeCube());
console.log(cube.surfaceAreaCube());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
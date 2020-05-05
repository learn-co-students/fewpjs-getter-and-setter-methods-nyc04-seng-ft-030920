class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        let pi = Math.PI
        return this.diameter * pi
    }

    get area() {
        let pi = Math.PI
        return this.radius * this.radius * pi
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        let pi = Math.PI
        this.radius = circumference / pi / 2
    }
}
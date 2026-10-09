
export class Vector2D{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    static dot_product(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y
    }

    distance() {
        return Math.sqrt(this.x **2 + this.y**2)
    }
}

export class Vector3D{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }

    static dot_product(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z 
    }

    static cross_product(vec1, vec2) {
        return new Vector3D((vec1.y * vec2.z - vec1.z * vec2.y), -(vec1.x * vec2.z - vec1.z * vec2.x), (vec1.x * vec2.y - vec1.y * vec2.x))
    }

    distance() {
        return Math.sqrt(this.x **2 + this.y**2 + this.z**2)
    }
}

class Distance {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(point) {
    let distanceX = this.x - point.x;
    let distanceY = this.y - point.y;
    let distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
    return distance;
  }
}

let newDistance = new Distance (5, 50);
let nextDistance = new Distance (20, 15);

console.log(newDistance.distanceTo(nextDistance));

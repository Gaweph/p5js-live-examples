var p = new p5();
var resolution = 25;

let fullRotation: number = p.PI * 2;
let leftStartingAngle = -p.PI;//+ (p.PI/10);
let rightStartingAngle = (p.PI * 2);// - (p.PI/10);
let bottomStartingAngle = p.PI/2;// - (p.PI/5);
let bottomLeftStartingAngle = p.PI/2 + (p.PI/5);
let topStartingAngle = -p.PI/2;
class Sketch {

  private suns: Sun[] = [];

  constructor() {

  }
  setup () {
    var k = 4;
    var change = ((k + 1) * 2);
    var leftAngle = leftStartingAngle + (p.PI/change);

    change = ((k + 1) * 2);
    var rightAngle = rightStartingAngle - (p.PI/change);

    change = ((k + 1));
    console.log(change);
    var bottomAngle = bottomStartingAngle - (p.PI/change);
    
    var topAngle = topStartingAngle;
    var colors = ColorHelper.getColorsArray(5);
    
    for(var i = 1; i <= 1; i++) {
      this.suns.push(new Sun(p.width/4/i, 10/i, -k, leftAngle, colors[0], fullRotation/4));
      this.suns.push(new Sun(p.width/4/i, 10/i, -k, topAngle, colors[1], fullRotation/4));
      this.suns.push(new Sun(p.width/4/i, 10/i, -k, rightAngle, colors[2], fullRotation/4));
      this.suns.push(new Sun(p.width/4/i, 10/i, -k, bottomAngle, colors[3], fullRotation/4));
      this.suns.push(new Sun(p.width/4/i, 10/i, -k, bottomLeftStartingAngle, colors[4], fullRotation/4));
    }
    // this.suns.push(new Sun(p.width/4, 10, k-1, leftAngle, colors[0], fullRotation));
    // this.suns.push(new Sun(p.width/5, 8, k-2, topAngle, colors[1], fullRotation));
    //  this.suns.push(new Sun(p.width/6, 6, k-3, rightAngle, colors[2], fullRotation));
    // this.suns.push(new Sun(p.width/7, 4, k-4, bottomAngle, colors[3], fullRotation));
    // this.suns.push(new Sun(p.width/8, 2, k-5, bottomLeftStartingAngle, colors[5], fullRotation));
    
    // this.suns.push(new Sun(p.width/4, 10, -4, rightStartingAngle, colors[1], fullRotation/2));
    // this.suns.push(new Sun(p.width/4, 10, -4, bottomStartingAngle, colors[2], fullRotation/2));
    // this.suns.push(new Sun(p.width/5, 8, -3, rightStartingAngle, colors[1], fullRotation/2));
    // this.suns.push(new Sun(p.width/6, 6, -2, rightStartingAngle, colors[2], fullRotation/2));
    // this.suns.push(new Sun(p.width/7, 4, -1, rightStartingAngle, colors[3], fullRotation/2));
    // this.suns.push(new Sun(p.width/4, 10, -5, rightStartingAngle, colors[4], fullRotation/2));
    // this.suns.push(new Sun(p.width/4, 10, -6, rightStartingAngle, colors[5], fullRotation/2));
  }

  draw () {
    p.background(51);
    p.strokeWeight(5);
    for (var s of this.suns) {
        s.update();
        s.show();
    }
    
  }
}

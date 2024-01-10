const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); // STATIC_FRAME // ANIMATED_FRAME // STATIC_DISK // ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  pScope.load_image('smooth_test2' , 'png');
  var layer1 = new PLayer(bg);
  layer1.mode(RING);

  var layer2 = new PLayer(ladybirds);
  layer2.mode(SWIRL(5));
  layer2.set_boundary(200, 1050);
}

function bg(x, y, animation, pScope) {
  pScope.draw_image('smooth_test2', 0, -500);
}

function ladybirds(x, y, animation, pScope){
  rotate((animation.wave() * 90) - 45);
  translate(((animation.wave() * 180) - 90) * animation.frame, 0);
  
  // legs
  stroke(color('#302721'));
  strokeWeight(4);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  let xx = Math.sin(PI / 3) * 75;
  let yy = Math.cos(PI / 3) * 75;
  line(xx, yy, -xx, -yy);
  line(xx, -yy, -xx, yy);
  line(-75, 0, 75, 0);

  // head / body / eyes
  noStroke();
  fill(color('#302721'));
  ellipse(0, -30, 90, 90);
  ellipse(0, 0, 90, 90);
  fill(color('#EEE'));
  ellipse(-16, -63, 20, 10); ellipse(16, -63, 20, 10);
  fill(color('#302721'));
  ellipse(-16, -64, 14, 7); ellipse(16, -64, 14, 7);

  // wings
  stroke(color('#302721'));
  strokeWeight(4);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  fill(color('#D83059'));
  arc(0, 0, 110, 110, 100, 270, CHORD);
  arc(0, 0, 110, 110, 270, 80, CHORD);

  // spots
  noStroke();
  fill(color('#302721'));
  ellipse(-30, 0, 25, 25); ellipse(30, 0, 25, 25);
  ellipse(-20, 30, 15, 15); ellipse(20, 30, 15, 15);
  ellipse(-20, -35, 15, 15); ellipse(20, -35, 15, 15);
  ellipse(-35, 25, 8, 8); ellipse(35, 25, 8, 8);
  ellipse(-35, -25, 12, 12); ellipse(35, -25, 12, 12);
  ellipse(-15, -15, 8, 8); ellipse(15, -15, 8, 8);
}

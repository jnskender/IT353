
var keys = {};
keys.UP = 38;
keys.LEFT = 37;
keys.RIGHT = 39;
keys.DOWN = 40;

/// store reference to zombie's position and element
var zombie = {
  x: 100,
  y: 100,
  speedMultiplier: 8,
  orientation: 'left',
  element: document.getElementById('zombie')
};

document.body.onkeyup =
  document.body.onkeydown = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    var kc = e.keyCode || e.which;
    keys[kc] = e.type == 'keydown';
  };

/// zombie movement update
var move_zombie = function(dx, dy) {
  zombie.x += (dx || 0) * zombie.speedMultiplier;
  zombie.y += (dy || 0) * zombie.speedMultiplier;
  zombie.element.style.left = zombie.x + 'px';
  zombie.element.style.top = zombie.y + 'px';
};

/// zombie control
var detect_zombie_movement = function() {
  if (keys[keys.LEFT]) {
    if (zombie.orientation === 'right') {
      zombie.orientation = "left";
      zombie.element.className = 'left';
    }
    move_zombie(-1, 0);
  }
  if (keys[keys.RIGHT]) {
    if (zombie.orientation === 'left') {
      zombie.orientation = 'right';
      zombie.element.className = 'right';
    }
    move_zombie(1, 0);
  }
  if (keys[keys.UP]) {
    move_zombie(0, -10);

    setTimeout(function() {
      move_zombie(0, 10);
    }, 100);

  }

  //if (keys[keys.DOWN]) {
  //  move_zombie(0, 1);
  //  }

};

/// update current position on screen
move_zombie();

/// game loop
setInterval(function() {
  detect_zombie_movement();
}, 1000 / 24);

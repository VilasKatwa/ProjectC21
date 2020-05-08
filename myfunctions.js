function hasCollided(lbullet,lwall) {
bulletRightEdge = lbullet.x+lwall.width;
wallLeftEdge = lwall.x;

    if (bulletRightEdge >= wallLeftEdge) {
      return true;
    } 
    else {
      return false;
    }
    }
var smoothScrolling = (function() {

  //by Peter-Paul Koch & Alex Tingle. 
  //http://blog.firetree.net/2005/07/04/javascript-find-position/
  function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
      while (1) {
        curtop += obj.offsetTop;
        if (!obj.offsetParent) {
          break;
        }
        obj = obj.offsetParent;
      }
    }
    else if (obj.y) {
      curtop += obj.y;
    }
    return curtop;
  }

  function start(element, speed) {
    var time, direction, cnt, id;
    speed = speed || 8;

    element = document.getElementById(element);
    if (!element) {
      return false;
    }
    //number of intervals required
    time = (findPosY(element) - window.pageYOffset)/speed;
    //positive or negative direction
    direction = (time < 0) ? -1: 1;
    //make sure time is positive
    time = direction * time;
    //until you reach number of intervals required, scroll window

    cnt = 1;
    id = setInterval(function() {
      window.scrollBy(0, direction * speed);

      //we reached number of required intervars, clear interval
      if (cnt >= time) {
        clearInterval(id);
      }
      cnt += 1;
    }, 5);
  }

  return {
    start: start
  }
})();

smoothScrolling.start("third", 8);

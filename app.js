var smoothScrolling = (function() {

  //idea by Peter-Paul Koch & Alex Tingle. 
  //http://blog.firetree.net/2005/07/04/javascript-find-position/
  function findPosY(obj) {
    var top = 0;
    while (obj.offsetParent) {
      top += obj.offsetTop;
      obj = obj.offsetParent;
    }

    if (obj.y) {
      top += obj.y;
    }

    return top;
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

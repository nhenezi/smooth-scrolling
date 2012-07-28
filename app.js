var smoothScrolling = (function() {

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

  function start(element) {
    if (!element) {
      return false;
    }
    element = document.getElementById(element);
    var time = (findPosY(element) - window.pageYOffset)/12;
    var direction = (time < 0) ? -1: 1;
    time = direction * time;
    console.log(direction);
    var cnt = 1;
    var id = setInterval(function() {
      window.scrollBy(0, direction * 12);
      if (cnt >= time) {
        clearInterval(id);
      }
      cnt += 1;
    }, 10);
  }


  return {
    start: start
  }
})();

smoothScrolling.start("third");

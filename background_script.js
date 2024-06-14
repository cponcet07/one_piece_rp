function Typewrite() {
    'use strict';
    var el = null;
    var text = "";
    var tempText = "";
    var interval;
    var range = [1];

    var init = function(args) {
      el = args.el || null;
      text = args.el.innerHTML || "";
      range.push(text.length);
      el.innerHTML = ""; // Clear the initial text
      interval = setInterval(animate, 10); // Interval initial ajusté à 10ms
    };

    var setTempText = function() {
      tempText = text.substring(0, range[0]);
      if (tempText.length % 2 == 0) {
        tempText += "_";
      } else {
        tempText = tempText.slice(0, -1); // Remove the underscore at odd positions
      }
      el.setAttribute('data-content', tempText);
      if (range[0] < range[1]) {
        range[0]++;
        return true;
      }
      return false;
    };

    var animate = function() {
      // Do things
      setTempText();
      clearInterval(interval);
      if (text !== tempText) {
        var counter = Math.random() * 20 + 10; // Interval randomisé ajusté entre 10ms et 30ms
        interval = setInterval(animate, counter);
      } else {
        el.setAttribute('data-content', text);
        console.log('done', interval);
      }
    };

    return {
      init: init
    };
  }

  var t = new Typewrite();
  t.init({
    el: document.getElementById("typewrite")
  });

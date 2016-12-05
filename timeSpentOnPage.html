<html>
  <head></head>

  <body>
    <script>
      var hidden, state, visibilityChange,
        _this = this;

      if (document.hidden != null) {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
        state = "visibilityState";
      } else if (document.mozHidden != null) {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
        state = "mozVisibilityState";
      } else if (document.msHidden != null) {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
        state = "msVisibilityState";
      } else if (document.webkitHidden != null) {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
        state = "webkitVisibilityState";
      }

      this.d = new Date();
      this.new_d = new Date();

      // Calculates Time Spent on page upon switching windows

      setInterval((function() {
        if (document.hasFocus() === false) {
          _this.new_d = new Date();
          var time_spent = Math.round((_this.new_d - _this.d) / 1000);
          doSomething("Switched Window", time_spent);
          _this.d = new Date();
        }
      }), 200);

      // Calculates Time Spent on page upon leaving/closing page
      window.onunload = function() {
        _this.new_d = new Date();
        var time_spent = Math.round((_this.new_d - _this.d) / 1000);
        doSomething("Left Page", time_spent);
      };

      // Calculates Time Spent on page upon unfocusing tab
      // http://davidwalsh.name/page-visibility
      document.addEventListener(visibilityChange, function(e) {
        if (document[state] === 'visible') {
          _this.d = new Date();
        } else if (document[hidden]) {
          _this.new_d = new Date();
          var time_spent = Math.round((_this.new_d - _this.d) / 1000);
          doSomething("Changed Tab", time_spent);
        }
      });

      var timeSpentArray = [];

      // Function that adds up the time and prints a message
      var doSomething = function(message, time_spent) {
        if (time_spent >= 1) {
          timeSpentArray.push(time_spent);

          var updatedArray = timeSpentArray.reduce(function(a, b) {
            return a + b;
          }, 0);

          console.log("The total amount spent on the page is", updatedArray);
          console.log(message, time_spent);
        }
      }
    </script>
  </body>
</html>
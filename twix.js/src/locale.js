(function() {
  var locale;

  locale = function(moment, Twix) {
    var before;
    before = moment.locale();
    Twix.registerLocale("fr", {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format(options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    });
    Twix.registerLocale("fr-ca", {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format(options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    });
    return moment.locale(before);
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = locale;
  }

  if (typeof define === "function" && define.amd) {
    define(["moment", "twix"], function(moment, Twix) {
      return locale(moment, Twix);
    });
  }

  if (this.Twix) {
    if (this.moment) {
      locale(this.moment, this.Twix);
    } else if (typeof moment !== "undefined" && moment !== null) {
      locale(moment, this.Twix);
    }
  }

}).call(this);

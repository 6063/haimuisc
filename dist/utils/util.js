'use strict';

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

module.exports = {
  formatTime: formatTime
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0VGltZSIsInllYXIiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWFwIiwiZm9ybWF0TnVtYmVyIiwiam9pbiIsIm4iLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLE9BQVE7QUFDekIsTUFBTUMsT0FBT0MsS0FBS0MsV0FBTCxFQUFiO0FBQ0EsTUFBTUMsUUFBUUYsS0FBS0csUUFBTCxLQUFrQixDQUFoQztBQUNBLE1BQU1DLE1BQU1KLEtBQUtLLE9BQUwsRUFBWjtBQUNBLE1BQU1DLE9BQU9OLEtBQUtPLFFBQUwsRUFBYjtBQUNBLE1BQU1DLFNBQVNSLEtBQUtTLFVBQUwsRUFBZjtBQUNBLE1BQU1DLFNBQVNWLEtBQUtXLFVBQUwsRUFBZjs7QUFFQSxTQUFPLENBQUNaLElBQUQsRUFBT0csS0FBUCxFQUFjRSxHQUFkLEVBQW1CUSxHQUFuQixDQUF1QkMsWUFBdkIsRUFBcUNDLElBQXJDLENBQTBDLEdBQTFDLElBQWlELEdBQWpELEdBQXVELENBQUNSLElBQUQsRUFBT0UsTUFBUCxFQUFlRSxNQUFmLEVBQXVCRSxHQUF2QixDQUEyQkMsWUFBM0IsRUFBeUNDLElBQXpDLENBQThDLEdBQTlDLENBQTlEO0FBQ0QsQ0FURDs7QUFXQSxJQUFNRCxlQUFlLFNBQWZBLFlBQWUsSUFBSztBQUN4QkUsTUFBSUEsRUFBRUMsUUFBRixFQUFKO0FBQ0EsU0FBT0QsRUFBRSxDQUFGLElBQU9BLENBQVAsR0FBVyxNQUFNQSxDQUF4QjtBQUNELENBSEQ7O0FBTUFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnBCO0FBRGUsQ0FBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdFRpbWUgPSBkYXRlID0+IHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKVxuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICsgJyAnICsgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jylcbn1cblxuY29uc3QgZm9ybWF0TnVtYmVyID0gbiA9PiB7XG4gIG4gPSBuLnRvU3RyaW5nKClcbiAgcmV0dXJuIG5bMV0gPyBuIDogJzAnICsgblxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JtYXRUaW1lXG59XG5cbiJdfQ==
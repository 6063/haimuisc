'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$component) {
  _inherits(Example, _wepy$component);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {}, _this.components = {}, _this.methods = {
      // 获取歌单id，跳转到歌单列表页，传送id
      getMusicList: function getMusicList(e) {
        wx.navigateTo({
          url: './musicList?musicListID=' + e.currentTarget.dataset.id
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.component);

exports.default = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljaXRlbS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicHJvcHMiLCJkYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJnZXRNdXNpY0xpc3QiLCJlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPLEUsUUFFUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ1I7QUFDQUMsa0JBRlEsd0JBRUtDLENBRkwsRUFFUTtBQUNkQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsNENBQWdDSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkM7QUFENUMsU0FBZDtBQUdEO0FBTk8sSyxRQVNWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7NkJBRUYsQ0FBRTs7OzZCQUVGLENBQUU7Ozs7RUF4QndCQyxlQUFLQyxTOztrQkFBckJqQixPIiwiZmlsZSI6Im11c2ljaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHt9O1xyXG5cclxuICBkYXRhID0ge307XHJcblxyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8vIOiOt+WPluatjOWNlWlk77yM6Lez6L2s5Yiw5q2M5Y2V5YiX6KGo6aG177yM5Lyg6YCBaWRcclxuICAgIGdldE11c2ljTGlzdChlKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC4vbXVzaWNMaXN0P211c2ljTGlzdElEPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBldmVudHMgPSB7fTtcclxuXHJcbiAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgb25Mb2FkKCkge31cclxuXHJcbiAgb25TaG93KCkge31cclxufVxyXG4iXX0=
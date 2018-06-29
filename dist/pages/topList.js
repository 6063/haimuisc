'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ""
    }, _this.data = {
      offset: 0,
      list: [],
      innerHeight: 0
    }, _this.components = {}, _this.methods = {
      change: function change(opt) {
        if (opt.detail.current == this.list.length - 5) {
          this.offset = this.offset + 20;
          this.getTopList();
        }
      },
      go: function go(opt) {
        wx.navigateTo({
          url: './mvList?id=' + opt.currentTarget.dataset.id + '&name=' + opt.currentTarget.dataset.name
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      this.getTopList();
      // 设置页面高度
      wx.getSystemInfo({
        success: function success(res) {
          _this2.innerHeight = res.windowHeight;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'getTopList',
    value: function getTopList() {
      var _this3 = this;

      _api2.default.getArtisttoplist({
        data: {
          offset: this.offset,
          limit: 20
        },
        success: function success(resp) {
          _this3.list = _this3.list.concat(resp.data.artists);
          _this3.$apply();
        }
      });
    }
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/topList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcExpc3QuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwib2Zmc2V0IiwibGlzdCIsImlubmVySGVpZ2h0IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJjaGFuZ2UiLCJvcHQiLCJkZXRhaWwiLCJjdXJyZW50IiwibGVuZ3RoIiwiZ2V0VG9wTGlzdCIsImdvIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsIm5hbWUiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwib3B0aW9ucyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0IiwiJGFwcGx5IiwiYXBpIiwiZ2V0QXJ0aXN0dG9wbGlzdCIsImxpbWl0IiwiY29uY2F0IiwicmVzcCIsImFydGlzdHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFPLENBREY7QUFFTEMsWUFBSyxFQUZBO0FBR0xDLG1CQUFZO0FBSFAsSyxRQU1QQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDUEMsWUFETyxrQkFDQUMsR0FEQSxFQUNJO0FBQ1IsWUFBSUEsSUFBSUMsTUFBSixDQUFXQyxPQUFYLElBQXNCLEtBQUtQLElBQUwsQ0FBVVEsTUFBVixHQUFpQixDQUEzQyxFQUE2QztBQUMzQyxlQUFLVCxNQUFMLEdBQVksS0FBS0EsTUFBTCxHQUFjLEVBQTFCO0FBQ0EsZUFBS1UsVUFBTDtBQUNEO0FBQ0YsT0FOSztBQU9OQyxRQVBNLGNBT0hMLEdBUEcsRUFPQztBQUNMTSxXQUFHQyxVQUFILENBQWM7QUFDWkMsZ0NBQW9CUixJQUFJUyxhQUFKLENBQWtCQyxPQUFsQixDQUEwQkMsRUFBOUMsY0FBeURYLElBQUlTLGFBQUosQ0FBa0JDLE9BQWxCLENBQTBCRTtBQUR2RSxTQUFkO0FBR0Q7QUFYSyxLLFFBY1ZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OzsyQkFFSEMsTyxFQUFTO0FBQUE7O0FBQ2YsV0FBS1osVUFBTDtBQUNBO0FBQ0FFLFNBQUdXLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsc0JBQU87QUFDZCxpQkFBS3RCLFdBQUwsR0FBaUJ1QixJQUFJQyxZQUFyQjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7NkJBRVEsQ0FBRzs7O2lDQUVBO0FBQUE7O0FBQ1ZDLG9CQUFJQyxnQkFBSixDQUFxQjtBQUNuQjlCLGNBQUs7QUFDSEMsa0JBQVEsS0FBS0EsTUFEVjtBQUVIOEIsaUJBQU87QUFGSixTQURjO0FBS25CTixpQkFBUSx1QkFBTTtBQUNaLGlCQUFLdkIsSUFBTCxHQUFZLE9BQUtBLElBQUwsQ0FBVThCLE1BQVYsQ0FBaUJDLEtBQUtqQyxJQUFMLENBQVVrQyxPQUEzQixDQUFaO0FBQ0EsaUJBQUtOLE1BQUw7QUFDRDtBQVJrQixPQUFyQjtBQVVEOzs7O0VBekRrQ08sZUFBS0MsSTs7a0JBQXJCdkMsTyIsImZpbGUiOiJ0b3BMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBvZmZzZXQ6MCxcclxuICAgICAgbGlzdDpbXSxcclxuICAgICAgaW5uZXJIZWlnaHQ6MFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgIGNoYW5nZShvcHQpe1xyXG4gICAgICAgICAgaWYgKG9wdC5kZXRhaWwuY3VycmVudCA9PSB0aGlzLmxpc3QubGVuZ3RoLTUpe1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldD10aGlzLm9mZnNldCArIDIwXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG9wTGlzdCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnbyhvcHQpeyAgICAgICAgIFxyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC4vbXZMaXN0P2lkPSR7b3B0LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH0mbmFtZT0ke29wdC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZX1gXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG5cclxuICAgIG9uTG9hZCAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLmdldFRvcExpc3QoKVxyXG4gICAgICAvLyDorr7nva7pobXpnaLpq5jluqZcclxuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5uZXJIZWlnaHQ9cmVzLndpbmRvd0hlaWdodFxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkgeyB9O1xyXG5cclxuICAgIGdldFRvcExpc3QoKXtcclxuICAgICAgYXBpLmdldEFydGlzdHRvcGxpc3Qoe1xyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgIGxpbWl0OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczpyZXNwPT57XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KHJlc3AuZGF0YS5hcnRpc3RzKVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==
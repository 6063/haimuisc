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
      id: 0,
      mvs: [],
      innerHeight: 0
    }, _this.components = {}, _this.methods = {
      // 播放视频
      govideoDetai: function govideoDetai(options) {
        wx.navigateTo({
          url: './videoPlay?videoid=' + options.currentTarget.dataset.id
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'loadMV',
    value: function loadMV() {
      var _this2 = this;

      _api2.default.getArtistMV({
        data: { id: this.id },
        success: function success(resp) {
          _this2.mvs = resp.data.mvs;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var _this3 = this;

      // 设置页面高度
      wx.getSystemInfo({
        success: function success(res) {
          _this3.innerHeight = res.windowHeight;
        }
      });
      // 设置顶部名称
      wx.setNavigationBarTitle({
        title: options.name
      });
      this.id = options.id;
      this.loadMV();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/mvList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12TGlzdC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpZCIsIm12cyIsImlubmVySGVpZ2h0IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJnb3ZpZGVvRGV0YWkiLCJvcHRpb25zIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiYXBpIiwiZ2V0QXJ0aXN0TVYiLCJzdWNjZXNzIiwicmVzcCIsIiRhcHBseSIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJsb2FkTVYiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxVQUFJLENBREM7QUFFTEMsV0FBSSxFQUZDO0FBR0xDLG1CQUFZO0FBSFAsSyxRQU1QQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDUDtBQUNDQyxrQkFGTSx3QkFFT0MsT0FGUCxFQUVnQjtBQUNwQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLHdDQUE0QkgsUUFBUUksYUFBUixDQUFzQkMsT0FBdEIsQ0FBOEJYO0FBRDlDLFNBQWQ7QUFHRDtBQU5LLEssUUFtQlZZLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7Ozs2QkFkRjtBQUFBOztBQUNQQyxvQkFBSUMsV0FBSixDQUFnQjtBQUNkakIsY0FBTSxFQUFFQyxJQUFJLEtBQUtBLEVBQVgsRUFEUTtBQUVkaUIsaUJBQVMsdUJBQVE7QUFDZixpQkFBS2hCLEdBQUwsR0FBV2lCLEtBQUtuQixJQUFMLENBQVVFLEdBQXJCO0FBQ0EsaUJBQUtrQixNQUFMO0FBQ0Q7QUFMYSxPQUFoQjtBQU9EOzs7MkJBUU1iLE8sRUFBUztBQUFBOztBQUNaO0FBQ0FDLFNBQUdhLGFBQUgsQ0FBaUI7QUFDZkgsaUJBQVMsc0JBQU87QUFDZCxpQkFBS2YsV0FBTCxHQUFpQm1CLElBQUlDLFlBQXJCO0FBQ0Q7QUFIYyxPQUFqQjtBQUtBO0FBQ0FmLFNBQUdnQixxQkFBSCxDQUF5QjtBQUN2QkMsZUFBT2xCLFFBQVFtQjtBQURRLE9BQXpCO0FBR0EsV0FBS3pCLEVBQUwsR0FBU00sUUFBUU4sRUFBakI7QUFDQSxXQUFLMEIsTUFBTDtBQUNGOzs7NkJBRU8sQ0FBRzs7OztFQXJEdUJDLGVBQUtDLEk7O2tCQUFyQmhDLE8iLCJmaWxlIjoibXZMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgbXZzOltdLFxyXG4gICAgICBpbm5lckhlaWdodDowXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgLy8g5pKt5pS+6KeG6aKRXHJcbiAgICAgICAgZ292aWRlb0RldGFpKG9wdGlvbnMpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAuL3ZpZGVvUGxheT92aWRlb2lkPSR7b3B0aW9ucy5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkTVYoKSB7XHJcbiAgICAgIGFwaS5nZXRBcnRpc3RNVih7XHJcbiAgICAgICAgZGF0YTogeyBpZDogdGhpcy5pZCB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4ge1xyXG4gICAgICAgICAgdGhpcy5tdnMgPSByZXNwLmRhdGEubXZzXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG5cclxuICAgIHdhdGNoID0ge307XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIC8vIOiuvue9rumhtemdoumrmOW6plxyXG4gICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckhlaWdodD1yZXMud2luZG93SGVpZ2h0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g6K6+572u6aG26YOo5ZCN56ewXHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgIHRpdGxlOiBvcHRpb25zLm5hbWVcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pZD0gb3B0aW9ucy5pZFxyXG4gICAgICAgIHRoaXMubG9hZE1WKClcclxuICAgICB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==
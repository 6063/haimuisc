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
            navigationBarTitleText: "推荐mv",
            onReachBottomDistance: 600
        }, _this.data = {
            recommendMVList: [],
            limit: 10
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
        key: 'onLoad',
        value: function onLoad() {
            this.getRecommendMV();
        }
    }, {
        key: 'getRecommendMV',


        // 获取推荐MV
        value: function getRecommendMV() {
            var _this2 = this;

            _api2.default.getRecommendMV({
                data: {
                    limit: this.limit
                },
                success: function success(resp) {
                    _this2.recommendMVList = resp.data.data;
                    _this2.$apply();
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onReachBottom',


        /**
        * 页面上拉触底事件的处理函数
        */
        value: function onReachBottom() {
            this.limit = this.limit + 10;
            this.getRecommendMV();
        }
    }]);

    return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/video'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwib25SZWFjaEJvdHRvbURpc3RhbmNlIiwiZGF0YSIsInJlY29tbWVuZE1WTGlzdCIsImxpbWl0IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJnb3ZpZGVvRGV0YWkiLCJvcHRpb25zIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJnZXRSZWNvbW1lbmRNViIsImFwaSIsInN1Y2Nlc3MiLCJyZXNwIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsbUNBQXVCO0FBRmxCLFMsUUFLVEMsSSxHQUFPO0FBQ0xDLDZCQUFpQixFQURaO0FBRUxDLG1CQUFPO0FBRkYsUyxRQUtQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDUDtBQUNEQyx3QkFGUSx3QkFFS0MsT0FGTCxFQUVhO0FBQ25CQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1pDLGtEQUE0QkgsUUFBUUksYUFBUixDQUFzQkMsT0FBdEIsQ0FBOEJDO0FBRDlDLGlCQUFkO0FBR0Q7QUFOTyxTLFFBU1ZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztpQ0FFRjtBQUNQLGlCQUFLQyxjQUFMO0FBQ0Q7Ozs7O0FBR0M7eUNBQ2lCO0FBQUE7O0FBQ2ZDLDBCQUFJRCxjQUFKLENBQW1CO0FBQ2pCaEIsc0JBQU07QUFDSkUsMkJBQU8sS0FBS0E7QUFEUixpQkFEVztBQUlqQmdCLHlCQUFTLHVCQUFRO0FBQ2YsMkJBQUtqQixlQUFMLEdBQXNCa0IsS0FBS25CLElBQUwsQ0FBVUEsSUFBaEM7QUFDQSwyQkFBS29CLE1BQUw7QUFDRDtBQVBnQixhQUFuQjtBQVNEOzs7aUNBR00sQ0FBRzs7Ozs7QUFFVjs7O3dDQUdnQjtBQUNaLGlCQUFLbEIsS0FBTCxHQUFZLEtBQUtBLEtBQUwsR0FBYSxFQUF6QjtBQUNBLGlCQUFLYyxjQUFMO0FBQ0g7Ozs7RUF2RGdDSyxlQUFLQyxJOztrQkFBckIxQixPIiwiZmlsZSI6InZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5o6o6I2QbXZcIixcclxuICAgICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDYwMFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByZWNvbW1lbmRNVkxpc3Q6IFtdLFxyXG4gICAgICBsaW1pdDogMTBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAvLyDmkq3mlL7op4bpopFcclxuICAgICAgZ292aWRlb0RldGFpKG9wdGlvbnMpe1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgLi92aWRlb1BsYXk/dmlkZW9pZD0ke29wdGlvbnMuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWAsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkgeyBcclxuICAgICAgdGhpcy5nZXRSZWNvbW1lbmRNVigpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgICAvLyDojrflj5bmjqjojZBNVlxyXG4gICAgICBnZXRSZWNvbW1lbmRNVigpIHtcclxuICAgICAgICBhcGkuZ2V0UmVjb21tZW5kTVYoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29tbWVuZE1WTGlzdD0gcmVzcC5kYXRhLmRhdGFcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICBcclxuXHJcbiAgICBvblNob3coKSB7IH07XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgICAgKi9cclxuICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgIHRoaXMubGltaXQ9IHRoaXMubGltaXQgKyAxMFxyXG4gICAgICAgICAgdGhpcy5nZXRSZWNvbW1lbmRNVigpXHJcbiAgICAgIH1cclxuICB9XHJcbiJdfQ==
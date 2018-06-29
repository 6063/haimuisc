'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _musicitem = require('./../components/musicitem.js');

var _musicitem2 = _interopRequireDefault(_musicitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '推荐音乐'
    }, _this.data = {
      bannerImgArr: [],
      iconNav: [{
        name: '私人FM',
        url: '',
        icon: 'iconfont icon-FM'
      }, {
        name: '每日推荐',
        url: '',
        icon: 'iconfont icon-rili'
      }, {
        name: '精品歌单',
        url: './allMusiclist',
        icon: 'iconfont icon-gedan'
      }, {
        name: '排行榜',
        url: '',
        icon: 'iconfont icon-paihang'
      }],
      recommendMusicList: [],
      isPlaying: false
    }, _this.$repeat = { "recommendMusicList": { "com": "musicitem", "props": "item" } }, _this.$props = { "musicitem": { "xmlns:v-bind": { "value": "", "for": "recommendMusicList", "item": "item", "index": "index", "key": "*index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "recommendMusicList", "item": "item", "index": "index", "key": "*index" } } }, _this.$events = {}, _this.components = { musicitem: _musicitem2.default }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getBanner();
      this.getRecommendMusicList();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.isPlaying = this.$parent.isplaying;
    }
  }, {
    key: 'getBanner',


    // 获取banner图片
    value: function getBanner() {
      var _this2 = this;

      _api2.default.getBannerImg({
        success: function success(resp) {
          console.log(resp);
          _this2.bannerImgArr = resp.data.banners;
          console.log(_this2.bannerImgArr);
          _this2.$apply();
        }
      });
    }
    // 获取推荐歌单

  }, {
    key: 'getRecommendMusicList',
    value: function getRecommendMusicList() {
      var _this3 = this;

      _api2.default.getRecommendMusicList({
        success: function success(resp) {
          _this3.recommendMusicList = resp.data.result;
          _this3.$apply();
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXJJbWdBcnIiLCJpY29uTmF2IiwibmFtZSIsInVybCIsImljb24iLCJyZWNvbW1lbmRNdXNpY0xpc3QiLCJpc1BsYXlpbmciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtdXNpY2l0ZW0iLCJtZXRob2RzIiwiZ2V0QmFubmVyIiwiZ2V0UmVjb21tZW5kTXVzaWNMaXN0IiwiJHBhcmVudCIsImlzcGxheWluZyIsImFwaSIsImdldEJhbm5lckltZyIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicmVzcCIsImJhbm5lcnMiLCIkYXBwbHkiLCJyZXN1bHQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxlQUFTLENBQ1A7QUFDRUMsY0FBTSxNQURSO0FBRUVDLGFBQUssRUFGUDtBQUdFQyxjQUFNO0FBSFIsT0FETyxFQU1QO0FBQ0VGLGNBQU0sTUFEUjtBQUVFQyxhQUFLLEVBRlA7QUFHRUMsY0FBTTtBQUhSLE9BTk8sRUFXUDtBQUNFRixjQUFNLE1BRFI7QUFFRUMsYUFBSyxnQkFGUDtBQUdFQyxjQUFNO0FBSFIsT0FYTyxFQWdCUDtBQUNFRixjQUFNLEtBRFI7QUFFRUMsYUFBSyxFQUZQO0FBR0VDLGNBQU07QUFIUixPQWhCTyxDQUZKO0FBd0JMQywwQkFBb0IsRUF4QmY7QUF5QkxDLGlCQUFXO0FBekJOLEssUUE0QlJDLE8sR0FBVSxFQUFDLHNCQUFxQixFQUFDLE9BQU0sV0FBUCxFQUFtQixTQUFRLE1BQTNCLEVBQXRCLEUsUUFDWEMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxvQkFBbEIsRUFBdUMsUUFBTyxNQUE5QyxFQUFxRCxTQUFRLE9BQTdELEVBQXFFLE9BQU0sUUFBM0UsRUFBaEIsRUFBcUcsb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxvQkFBcEMsRUFBeUQsUUFBTyxNQUFoRSxFQUF1RSxTQUFRLE9BQS9FLEVBQXVGLE9BQU0sUUFBN0YsRUFBeEgsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYSxFQUFDQyxXQUFXQSxtQkFBWixFLFFBVVpDLE8sR0FBUSxFOzs7Ozs2QkFUQztBQUNQLFdBQUtDLFNBQUw7QUFDQSxXQUFLQyxxQkFBTDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLUixTQUFMLEdBQWlCLEtBQUtTLE9BQUwsQ0FBYUMsU0FBOUI7QUFDRDs7Ozs7QUFNRDtnQ0FDWTtBQUFBOztBQUNWQyxvQkFBSUMsWUFBSixDQUFpQjtBQUNmQyxpQkFBUyx1QkFBUTtBQUNmQyxrQkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0EsaUJBQUt0QixZQUFMLEdBQW9Cc0IsS0FBS3ZCLElBQUwsQ0FBVXdCLE9BQTlCO0FBQ0FILGtCQUFRQyxHQUFSLENBQVksT0FBS3JCLFlBQWpCO0FBQ0EsaUJBQUt3QixNQUFMO0FBQ0Q7QUFOYyxPQUFqQjtBQVFEO0FBQ0Q7Ozs7NENBQ3dCO0FBQUE7O0FBQ3RCUCxvQkFBSUgscUJBQUosQ0FBMEI7QUFDeEJLLGlCQUFTLHVCQUFRO0FBQ2YsaUJBQUtkLGtCQUFMLEdBQTBCaUIsS0FBS3ZCLElBQUwsQ0FBVTBCLE1BQXBDO0FBQ0EsaUJBQUtELE1BQUw7QUFDRDtBQUp1QixPQUExQjtBQU1EOzs7O0VBcEVnQ0UsZUFBS0MsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnXG5pbXBvcnQgbXVzaWNpdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvbXVzaWNpdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o6o6I2Q6Z+z5LmQJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYmFubmVySW1nQXJyOiBbXSxcbiAgICBpY29uTmF2OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfnp4HkurpGTScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGljb246ICdpY29uZm9udCBpY29uLUZNJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+avj+aXpeaOqOiNkCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGljb246ICdpY29uZm9udCBpY29uLXJpbGknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn57K+5ZOB5q2M5Y2VJyxcbiAgICAgICAgdXJsOiAnLi9hbGxNdXNpY2xpc3QnLFxuICAgICAgICBpY29uOiAnaWNvbmZvbnQgaWNvbi1nZWRhbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfmjpLooYzmppwnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpY29uOiAnaWNvbmZvbnQgaWNvbi1wYWloYW5nJ1xuICAgICAgfVxuICAgIF0sXG4gICAgcmVjb21tZW5kTXVzaWNMaXN0OiBbXSxcbiAgICBpc1BsYXlpbmc6IGZhbHNlXG4gIH1cblxuICRyZXBlYXQgPSB7XCJyZWNvbW1lbmRNdXNpY0xpc3RcIjp7XCJjb21cIjpcIm11c2ljaXRlbVwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJtdXNpY2l0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcInJlY29tbWVuZE11c2ljTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcIippbmRleFwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJyZWNvbW1lbmRNdXNpY0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHttdXNpY2l0ZW06IG11c2ljaXRlbX1cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0QmFubmVyKClcbiAgICB0aGlzLmdldFJlY29tbWVuZE11c2ljTGlzdCgpXG4gIH1cblxuICBvblNob3coKSB7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0aGlzLiRwYXJlbnQuaXNwbGF5aW5nXG4gIH1cblxuICBtZXRob2RzPXtcbiAgXG4gIH1cblxuICAvLyDojrflj5ZiYW5uZXLlm77niYdcbiAgZ2V0QmFubmVyKCkge1xuICAgIGFwaS5nZXRCYW5uZXJJbWcoe1xuICAgICAgc3VjY2VzczogcmVzcCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgICAgIHRoaXMuYmFubmVySW1nQXJyID0gcmVzcC5kYXRhLmJhbm5lcnNcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYW5uZXJJbWdBcnIpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gXG4gICAgfSk7XG4gIH1cbiAgLy8g6I635Y+W5o6o6I2Q5q2M5Y2VXG4gIGdldFJlY29tbWVuZE11c2ljTGlzdCgpIHtcbiAgICBhcGkuZ2V0UmVjb21tZW5kTXVzaWNMaXN0KHtcbiAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4ge1xuICAgICAgICB0aGlzLnJlY29tbWVuZE11c2ljTGlzdCA9IHJlc3AuZGF0YS5yZXN1bHRcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gXG59XG4iXX0=
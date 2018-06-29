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
      navigationBarTitleText: "歌单列表"
    }, _this.data = {
      songListArr: [], //歌曲数组
      playCount: "", //播放量
      listName: "", //歌单名字
      coverImgUrl: "", //封面图片
      creatorName: "", //歌单创建者名字
      usericon: "", //创建者头像
      flag: false,
      cerrentMusic: -1,
      id: 0
    }, _this.components = {}, _this.methods = {
      // 开始播放音乐
      playMusic: function playMusic(e) {
        this.$parent.musicData = e.currentTarget.dataset.musicdata;
        // 得到播放音乐的 index
        this.$parent.musicIndex = e.currentTarget.dataset.musicindex;
        this.cerrentMusic = this.$parent.musicIndex;
        wx.navigateTo({
          url: "./audioPage?musicindex=" + parseInt(e.currentTarget.dataset.musicindex)
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'loadMusicList',


    // 根据接收到的歌单id，请求数据
    value: function loadMusicList(id) {
      var _this2 = this;

      _api2.default.getMusicList({
        data: {
          id: id
        },
        success: function success(resp) {
          var musicList = [];
          if (resp.data.result.trackCount >= 60) {
            musicList = resp.data.result.tracks.slice(0, 60);
          } else {
            musicList = resp.data.result.tracks;
          }
          _this2.songListArr = musicList;
          _this2.playCount = resp.data.result.playCount;
          _this2.listName = resp.data.result.name;
          _this2.coverImgUrl = resp.data.result.coverImgUrl;
          _this2.creatorName = resp.data.result.creator.nickname;
          _this2.usericon = resp.data.result.creator.avatarUrl;
          _this2.flag = true;
          _this2.$parent.musicListArr = musicList;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.loadMusicList(options.musicListID);
      this.id = options.musicListID;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.cerrentMusic = this.$parent.musicIndex;
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$parent.musicIndex = -1;
    }
    /**
    * 用户点击右上角分享
    */

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return {
        title: this.listName,
        imageUrl: this.coverImgUrl,
        path: '/page/musicList/musicList?musicListID=' + this.id,
        success: function success(res) {
          console.log(res);
        }
      };
    }
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/musicList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljTGlzdC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzb25nTGlzdEFyciIsInBsYXlDb3VudCIsImxpc3ROYW1lIiwiY292ZXJJbWdVcmwiLCJjcmVhdG9yTmFtZSIsInVzZXJpY29uIiwiZmxhZyIsImNlcnJlbnRNdXNpYyIsImlkIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJwbGF5TXVzaWMiLCJlIiwiJHBhcmVudCIsIm11c2ljRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibXVzaWNkYXRhIiwibXVzaWNJbmRleCIsIm11c2ljaW5kZXgiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYXJzZUludCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJhcGkiLCJnZXRNdXNpY0xpc3QiLCJzdWNjZXNzIiwibXVzaWNMaXN0IiwicmVzcCIsInJlc3VsdCIsInRyYWNrQ291bnQiLCJ0cmFja3MiLCJzbGljZSIsIm5hbWUiLCJjcmVhdG9yIiwibmlja25hbWUiLCJhdmF0YXJVcmwiLCJtdXNpY0xpc3RBcnIiLCIkYXBwbHkiLCJvcHRpb25zIiwibG9hZE11c2ljTGlzdCIsIm11c2ljTGlzdElEIiwicmVzIiwidGl0bGUiLCJpbWFnZVVybCIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUixFQUNpQjtBQUN0QkMsaUJBQVcsRUFGTixFQUVpQjtBQUN0QkMsZ0JBQVUsRUFITCxFQUdpQjtBQUN0QkMsbUJBQWEsRUFKUixFQUlrQjtBQUN2QkMsbUJBQWEsRUFMUixFQUtrQjtBQUN2QkMsZ0JBQVUsRUFOTCxF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dCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLmrYzljZXliJfooahcIixcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc29uZ0xpc3RBcnI6IFtdLCAgICAgIC8v5q2M5puy5pWw57uEXHJcbiAgICAgIHBsYXlDb3VudDogXCJcIiwgICAgICAgIC8v5pKt5pS+6YePXHJcbiAgICAgIGxpc3ROYW1lOiBcIlwiLCAgICAgICAgIC8v5q2M5Y2V5ZCN5a2XXHJcbiAgICAgIGNvdmVySW1nVXJsOiBcIlwiLCAgICAgICAvL+WwgemdouWbvueJh1xyXG4gICAgICBjcmVhdG9yTmFtZTogXCJcIiwgICAgICAgLy/mrYzljZXliJvlu7rogIXlkI3lrZdcclxuICAgICAgdXNlcmljb246IFwiXCIsICAgICAgICAgICAvL+WIm+W7uuiAheWktOWDj1xyXG4gICAgICBmbGFnOiBmYWxzZSxcclxuICAgICAgY2VycmVudE11c2ljOiAtMSxcclxuICAgICAgaWQ6MFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgIC8vIOW8gOWni+aSreaUvumfs+S5kFxyXG4gICAgICAgIHBsYXlNdXNpYyhlKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQubXVzaWNEYXRhID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubXVzaWNkYXRhO1xyXG4gICAgICAgICAgLy8g5b6X5Yiw5pKt5pS+6Z+z5LmQ55qEIGluZGV4XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQubXVzaWNJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm11c2ljaW5kZXg7XHJcbiAgICAgICAgICB0aGlzLmNlcnJlbnRNdXNpYz10aGlzLiRwYXJlbnQubXVzaWNJbmRleFxyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogXCIuL2F1ZGlvUGFnZT9tdXNpY2luZGV4PVwiICsgcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubXVzaWNpbmRleClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG5cclxuXHJcbiAgICAvLyDmoLnmja7mjqXmlLbliLDnmoTmrYzljZVpZO+8jOivt+axguaVsOaNrlxyXG4gICAgbG9hZE11c2ljTGlzdChpZCkge1xyXG4gICAgICBhcGkuZ2V0TXVzaWNMaXN0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4ge1xyXG4gICAgICAgICAgdmFyIG11c2ljTGlzdCA9IFtdO1xyXG4gICAgICAgICAgaWYgKHJlc3AuZGF0YS5yZXN1bHQudHJhY2tDb3VudCA+PSA2MCl7XHJcbiAgICAgICAgICAgIG11c2ljTGlzdCA9IHJlc3AuZGF0YS5yZXN1bHQudHJhY2tzLnNsaWNlKDAsNjApXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbXVzaWNMaXN0ID0gcmVzcC5kYXRhLnJlc3VsdC50cmFja3NcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5zb25nTGlzdEFycj0gbXVzaWNMaXN0XHJcbiAgICAgICAgICB0aGlzLnBsYXlDb3VudD0gcmVzcC5kYXRhLnJlc3VsdC5wbGF5Q291bnRcclxuICAgICAgICAgIHRoaXMubGlzdE5hbWU9IHJlc3AuZGF0YS5yZXN1bHQubmFtZVxyXG4gICAgICAgICAgdGhpcy5jb3ZlckltZ1VybD0gcmVzcC5kYXRhLnJlc3VsdC5jb3ZlckltZ1VybFxyXG4gICAgICAgICAgdGhpcy5jcmVhdG9yTmFtZT0gcmVzcC5kYXRhLnJlc3VsdC5jcmVhdG9yLm5pY2tuYW1lXHJcbiAgICAgICAgICB0aGlzLnVzZXJpY29uPSByZXNwLmRhdGEucmVzdWx0LmNyZWF0b3IuYXZhdGFyVXJsXHJcbiAgICAgICAgICB0aGlzLmZsYWc9IHRydWUgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQubXVzaWNMaXN0QXJyID0gbXVzaWNMaXN0O1xyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykgeyBcclxuICAgICAgICB0aGlzLmxvYWRNdXNpY0xpc3Qob3B0aW9ucy5tdXNpY0xpc3RJRClcclxuICAgICAgICB0aGlzLmlkPW9wdGlvbnMubXVzaWNMaXN0SURcclxuICAgIH07XHJcblxyXG4gICAgb25TaG93KCkgeyBcclxuICAgICAgdGhpcy5jZXJyZW50TXVzaWM9dGhpcy4kcGFyZW50Lm11c2ljSW5kZXhcclxuICAgIH07XHJcblxyXG4gICAgb25VbmxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lm11c2ljSW5kZXggPSAtMVxyXG4gICAgfVxyXG4gICAgIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IHRoaXMubGlzdE5hbWUsXHJcbiAgICAgICAgaW1hZ2VVcmw6IHRoaXMuY292ZXJJbWdVcmwsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlL211c2ljTGlzdC9tdXNpY0xpc3Q/bXVzaWNMaXN0SUQ9JyArIHRoaXMuaWQsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==
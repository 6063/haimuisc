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
      navigationBarTitleText: "",
      disableScroll: true
    }, _this.data = {
      innerHeight: "",
      playtime: 0,
      isplaying: false,
      musicListArr: [],
      musicIndex: 0,
      musicduration: 0,
      picUrl: '',
      duration: 0
    }, _this.components = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _this.methods = {
      // 开始播放
      palyMusic: function palyMusic() {
        this.palyMusicDo();
      },

      // 音乐暂停
      pauseMusic: function pauseMusic() {
        wx.getBackgroundAudioManager().pause();
      },

      // 下一首
      nextMusic: function nextMusic() {
        this.$parent.musicIndex = parseInt(this.musicIndex) + 1;
        this.musicIndex = parseInt(this.musicIndex) + 1;

        if (parseInt(this.musicIndex) > this.musicListArr.length - 1) {
          this.$parent.musicIndex = 0;
          this.musicIndex = 0;
        }
        this.palyMusicDo();
      },

      // 上一首
      prevMusic: function prevMusic() {
        this.$parent.musicIndex = parseInt(this.musicIndex) - 1;
        this.musicIndex = parseInt(this.musicIndex) - 1;
        // 如果已经是第一首，就跳到列表的最后一首
        if (parseInt(this.musicIndex) < 0) {
          this.$parent.musicIndex = this.musicListArr.length - 1;
          this.musicIndex = this.musicListArr.length - 1;
        }
        this.palyMusicDo();
      },

      // slider 的滑动
      sliderChange: function sliderChange(e) {
        wx.getBackgroundAudioManager().seek(e.detail.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      this.musicListArr = this.$parent.musicListArr;
      this.musicIndex = options.musicindex;
      this.musicduration = options.duration || 0;
      // 设置页面高度
      wx.getSystemInfo({
        success: function success(res) {
          _this2.innerHeight = res.windowHeight;
          _this2.$apply();
        }
      });
      // 开始播放
      this.palyMusicDo();
    }
  }, {
    key: 'palyMusicDo',
    value: function palyMusicDo() {
      var _this3 = this;

      var cerrentMusic = this.musicListArr[parseInt(this.musicIndex)];
      wx.getBackgroundAudioManager().src = 'https://music.163.com/song/media/outer/url?id=' + cerrentMusic.id + '.mp3';
      wx.getBackgroundAudioManager().title = cerrentMusic.name;
      // 来自于歌单
      if (!cerrentMusic.al) {
        wx.getBackgroundAudioManager().coverImgUrl = cerrentMusic.album.picUrl;
        wx.getBackgroundAudioManager().duration = cerrentMusic.duration;
        this.picUrl = cerrentMusic.album.picUrl;
        this.duration = cerrentMusic.duration;
      } else {
        // 来自于搜索
        wx.getBackgroundAudioManager().coverImgUrl = cerrentMusic.al.picUrl;
        wx.getBackgroundAudioManager().duration = parseInt(this.musicduration);
        this.picUrl = cerrentMusic.al.picUrl;
        this.duration = parseInt(this.musicduration);
      }

      // 监听播放器的时间变化
      wx.getBackgroundAudioManager().onTimeUpdate(function () {
        _this3.$parent.isplaying = !wx.getBackgroundAudioManager().paused;
        _this3.isplaying = !wx.getBackgroundAudioManager().paused;
        _this3.playtime = wx.getBackgroundAudioManager().currentTime;
      });
      wx.getBackgroundAudioManager().onStop(function () {
        _this3.$parent.isplaying = !wx.getBackgroundAudioManager().paused;
        _this3.isplaying = !wx.getBackgroundAudioManager().paused;
      });
      // 播放结束后自动下一曲
      wx.getBackgroundAudioManager().onEnded(function () {
        _this3.nextMusic();
      });
      // 设置navbarTitle
      wx.setNavigationBarTitle({
        title: cerrentMusic.name
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/audioPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvUGFnZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRpc2FibGVTY3JvbGwiLCJkYXRhIiwiaW5uZXJIZWlnaHQiLCJwbGF5dGltZSIsImlzcGxheWluZyIsIm11c2ljTGlzdEFyciIsIm11c2ljSW5kZXgiLCJtdXNpY2R1cmF0aW9uIiwicGljVXJsIiwiZHVyYXRpb24iLCJjb21wb25lbnRzIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwYWx5TXVzaWMiLCJwYWx5TXVzaWNEbyIsInBhdXNlTXVzaWMiLCJ3eCIsImdldEJhY2tncm91bmRBdWRpb01hbmFnZXIiLCJwYXVzZSIsIm5leHRNdXNpYyIsIiRwYXJlbnQiLCJwYXJzZUludCIsImxlbmd0aCIsInByZXZNdXNpYyIsInNsaWRlckNoYW5nZSIsImUiLCJzZWVrIiwiZGV0YWlsIiwidmFsdWUiLCJvcHRpb25zIiwibXVzaWNpbmRleCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0IiwiJGFwcGx5IiwiY2VycmVudE11c2ljIiwic3JjIiwiaWQiLCJ0aXRsZSIsIm5hbWUiLCJhbCIsImNvdmVySW1nVXJsIiwiYWxidW0iLCJvblRpbWVVcGRhdGUiLCJwYXVzZWQiLCJjdXJyZW50VGltZSIsIm9uU3RvcCIsIm9uRW5kZWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixFQURqQjtBQUVQQyxxQkFBYztBQUZQLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsZ0JBQVUsQ0FGTDtBQUdMQyxpQkFBVyxLQUhOO0FBSUxDLG9CQUFjLEVBSlQ7QUFLTEMsa0JBQVks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eUJBQUgsR0FBK0J5QixXQUEvQixHQUE2Q04sYUFBYUssRUFBYixDQUFnQm5DLE1BQTdEO0FBQ0FVLFdBQUdDLHlCQUFILEdBQStCVixRQUEvQixHQUEwQ2MsU0FBUyxLQUFLaEIsYUFBZCxDQUExQztBQUNBLGFBQUtDLE1BQUwsR0FBYThCLGFBQWFLLEVBQWIsQ0FBZ0JuQyxNQUE3QjtBQUNBLGFBQUtDLFFBQUwsR0FBZWMsU0FBUyxLQUFLaEIsYUFBZCxDQUFmO0FBQ0Q7O0FBRUQ7QUFDQVcsU0FBR0MseUJBQUgsR0FBK0IyQixZQUEvQixDQUE0QyxZQUFNO0FBQ2hELGVBQUt4QixPQUFMLENBQWFsQixTQUFiLEdBQXlCLENBQUNjLEdBQUdDLHlCQUFILEdBQStCNEIsTUFBekQ7QUFDQSxlQUFLM0MsU0FBTCxHQUFnQixDQUFDYyxHQUFHQyx5QkFBSCxHQUErQjRCLE1BQWhEO0FBQ0EsZUFBSzVDLFFBQUwsR0FBZWUsR0FBR0MseUJBQUgsR0FBK0I2QixXQUE5QztBQUNELE9BSkQ7QUFLQTlCLFNBQUdDLHlCQUFILEdBQStCOEIsTUFBL0IsQ0FBc0MsWUFBTTtBQUMxQyxlQUFLM0IsT0FBTCxDQUFhbEIsU0FBYixHQUF5QixDQUFDYyxHQUFHQyx5QkFBSCxHQUErQjRCLE1BQXpEO0FBQ0EsZUFBSzNDLFNBQUwsR0FBaUIsQ0FBQ2MsR0FBR0MseUJBQUgsR0FBK0I0QixNQUFqRDtBQUNELE9BSEQ7QUFJQTtBQUNBN0IsU0FBR0MseUJBQUgsR0FBK0IrQixPQUEvQixDQUF1QyxZQUFNO0FBQzNDLGVBQUs3QixTQUFMO0FBQ0QsT0FGRDtBQUdBO0FBQ0FILFNBQUdpQyxxQkFBSCxDQUF5QjtBQUN2QlYsZUFBT0gsYUFBYUk7QUFERyxPQUF6QjtBQUdIOzs7NkJBRU0sQ0FBRzs7OztFQXpIdUJVLGVBQUtDLEk7O2tCQUFyQnhELE8iLCJmaWxlIjoiYXVkaW9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxyXG4gICAgICBkaXNhYmxlU2Nyb2xsOnRydWVcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW5uZXJIZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHBsYXl0aW1lOiAwLFxyXG4gICAgICBpc3BsYXlpbmc6IGZhbHNlLFxyXG4gICAgICBtdXNpY0xpc3RBcnI6IFtdLFxyXG4gICAgICBtdXNpY0luZGV4OiAwLFxyXG4gICAgICBtdXNpY2R1cmF0aW9uOjAsXHJcbiAgICAgIHBpY1VybDonJyxcclxuICAgICAgZHVyYXRpb246MCAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgXHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7ICAgICAgXHJcbiAgICAgIHRoaXMubXVzaWNMaXN0QXJyPSB0aGlzLiRwYXJlbnQubXVzaWNMaXN0QXJyXHJcbiAgICAgIHRoaXMubXVzaWNJbmRleD0gb3B0aW9ucy5tdXNpY2luZGV4XHJcbiAgICAgIHRoaXMubXVzaWNkdXJhdGlvbj0gb3B0aW9ucy5kdXJhdGlvbiB8fCAwICAgICAgXHJcbiAgICAgIC8vIOiuvue9rumhtemdoumrmOW6plxyXG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAvLyDlvIDlp4vmkq3mlL5cclxuICAgICAgdGhpcy5wYWx5TXVzaWNEbygpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOW8gOWni+aSreaUvlxyXG4gICAgICBwYWx5TXVzaWMoKXtcclxuICAgICAgICB0aGlzLnBhbHlNdXNpY0RvKClcclxuICAgICAgfSxcclxuICAgICAgICAvLyDpn7PkuZDmmoLlgZxcclxuICAgICAgcGF1c2VNdXNpYygpIHtcclxuICAgICAgICB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkucGF1c2UoKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDkuIvkuIDpppZcclxuICAgICAgbmV4dE11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5tdXNpY0luZGV4ID0gcGFyc2VJbnQodGhpcy5tdXNpY0luZGV4KSArIDFcclxuICAgICAgICB0aGlzLm11c2ljSW5kZXggPSBwYXJzZUludCh0aGlzLm11c2ljSW5kZXgpICsgMSAgICAgICBcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMubXVzaWNJbmRleCkgPiB0aGlzLm11c2ljTGlzdEFyci5sZW5ndGgtMSkge1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lm11c2ljSW5kZXggPSAwO1xyXG4gICAgICAgICAgdGhpcy5tdXNpY0luZGV4PTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWx5TXVzaWNEbygpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOS4iuS4gOmmllxyXG4gICAgICBwcmV2TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lm11c2ljSW5kZXggPSBwYXJzZUludCh0aGlzLm11c2ljSW5kZXgpIC0gMTtcclxuICAgICAgICB0aGlzLm11c2ljSW5kZXggPSBwYXJzZUludCh0aGlzLm11c2ljSW5kZXgpIC0gMSAgICAgICBcclxuICAgICAgICAvLyDlpoLmnpzlt7Lnu4/mmK/nrKzkuIDpppbvvIzlsLHot7PliLDliJfooajnmoTmnIDlkI7kuIDpppZcclxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5tdXNpY0luZGV4KSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5tdXNpY0luZGV4ID0gdGhpcy5tdXNpY0xpc3RBcnIubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIHRoaXMubXVzaWNJbmRleCA9IHRoaXMubXVzaWNMaXN0QXJyLmxlbmd0aCAtIDEgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFseU11c2ljRG8oKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBzbGlkZXIg55qE5ruR5YqoXHJcbiAgICAgIHNsaWRlckNoYW5nZShlKSB7XHJcbiAgICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLnNlZWsoZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwYWx5TXVzaWNEbygpIHtcclxuICAgICAgICAgIGxldCBjZXJyZW50TXVzaWMgPSB0aGlzLm11c2ljTGlzdEFycltwYXJzZUludCh0aGlzLm11c2ljSW5kZXgpXTtcclxuICAgICAgICAgIHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKS5zcmMgPSBgaHR0cHM6Ly9tdXNpYy4xNjMuY29tL3NvbmcvbWVkaWEvb3V0ZXIvdXJsP2lkPSR7Y2VycmVudE11c2ljLmlkfS5tcDNgO1xyXG4gICAgICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLnRpdGxlID0gY2VycmVudE11c2ljLm5hbWU7XHJcbiAgICAgICAgICAvLyDmnaXoh6rkuo7mrYzljZVcclxuICAgICAgICAgIGlmICghY2VycmVudE11c2ljLmFsKXtcclxuICAgICAgICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLmNvdmVySW1nVXJsID0gY2VycmVudE11c2ljLmFsYnVtLnBpY1VybDtcclxuICAgICAgICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLmR1cmF0aW9uID0gY2VycmVudE11c2ljLmR1cmF0aW9uOyAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGljVXJsPSBjZXJyZW50TXVzaWMuYWxidW0ucGljVXJsXHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb249IGNlcnJlbnRNdXNpYy5kdXJhdGlvbiAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8g5p2l6Ieq5LqO5pCc57SiXHJcbiAgICAgICAgICAgIHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKS5jb3ZlckltZ1VybCA9IGNlcnJlbnRNdXNpYy5hbC5waWNVcmw7ICAgIFxyXG4gICAgICAgICAgICB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkuZHVyYXRpb24gPSBwYXJzZUludCh0aGlzLm11c2ljZHVyYXRpb24pOyAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGljVXJsPSBjZXJyZW50TXVzaWMuYWwucGljVXJsXHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb249IHBhcnNlSW50KHRoaXMubXVzaWNkdXJhdGlvbikgICAgICAgIFxyXG4gICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8g55uR5ZCs5pKt5pS+5Zmo55qE5pe26Ze05Y+Y5YyWXHJcbiAgICAgICAgICB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkub25UaW1lVXBkYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmlzcGxheWluZyA9ICF3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkucGF1c2VkICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmlzcGxheWluZz0gIXd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKS5wYXVzZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5dGltZT0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLmN1cnJlbnRUaW1lICAgICAgICAgXHJcbiAgICAgICAgICB9KSAgICAgICAgXHJcbiAgICAgICAgICB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkub25TdG9wKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmlzcGxheWluZyA9ICF3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCkucGF1c2VkXHJcbiAgICAgICAgICAgIHRoaXMuaXNwbGF5aW5nID0gIXd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKS5wYXVzZWQgICAgICAgICAgIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIOaSreaUvue7k+adn+WQjuiHquWKqOS4i+S4gOabslxyXG4gICAgICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpLm9uRW5kZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRNdXNpYygpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8g6K6+572ubmF2YmFyVGl0bGVcclxuICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjZXJyZW50TXVzaWMubmFtZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==
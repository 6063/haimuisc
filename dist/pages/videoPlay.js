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

var _comment = require('./../components/comment.js');

var _comment2 = _interopRequireDefault(_comment);

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
      videoData: {},
      videoUrl: "",
      limit: 10,
      hotComments: [],
      comments: [],
      total: 0,
      videoid: 0
    }, _this.$repeat = { "comments": { "com": "comment", "props": "item" } }, _this.$props = { "comment": { "xmlns:v-bind": { "value": "", "for": "comments", "item": "item", "index": "index", "key": "{{**index}}" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "comments", "item": "item", "index": "index", "key": "{{**index}}" } } }, _this.$events = {}, _this.components = {
      comment: _comment2.default
    }, _this.methods = {
      bindwaiting: function bindwaiting(opt) {
        console.log("缓冲" + opt);
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.videoid = options.videoid;
      this.getVideoData(options.videoid);
      this.getComment();
      // 如果有音乐播放， 就停止音乐
      wx.getBackgroundAudioManager().stop();
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
      this.getComment();
    }

    /**
    * 用户点击右上角分享
    */

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      console.log(options);
      if (options.from === 'button') {
        // 来自页面内转发按钮
        console.log(options);
      }
      return {
        title: this.videoData.name
      };
    }

    // 获取单个视频数据

  }, {
    key: 'getVideoData',
    value: function getVideoData(id) {
      var _this2 = this;

      _api2.default.getVideo({
        data: {
          mvid: this.videoid
        },
        success: function success(resp) {
          _this2.videoData = resp.data.data, _this2.videoUrl = _api2.default.videobaseUrl + resp.data.data.brs[480];
          wx.setNavigationBarTitle({
            title: resp.data.data.name
          });
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'getComment',
    value: function getComment() {
      var _this3 = this;

      _api2.default.getVideoComment({
        data: {
          id: this.videoid,
          limit: this.limit
        },
        success: function success(resp) {
          _this3.comments = resp.data.comments;
          _this3.hotComments = resp.data.hotComments;
          _this3.total = resp.data.total;
          _this3.$apply();
        }
      });
    }
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/videoPlay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvUGxheS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ2aWRlb0RhdGEiLCJ2aWRlb1VybCIsImxpbWl0IiwiaG90Q29tbWVudHMiLCJjb21tZW50cyIsInRvdGFsIiwidmlkZW9pZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbW1lbnQiLCJtZXRob2RzIiwiYmluZHdhaXRpbmciLCJvcHQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIm9wdGlvbnMiLCJnZXRWaWRlb0RhdGEiLCJnZXRDb21tZW50Iiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwic3RvcCIsImZyb20iLCJ0aXRsZSIsIm5hbWUiLCJpZCIsImFwaSIsImdldFZpZGVvIiwibXZpZCIsInN1Y2Nlc3MiLCJyZXNwIiwidmlkZW9iYXNlVXJsIiwiYnJzIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGFwcGx5IiwiZ2V0VmlkZW9Db21tZW50Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsbUJBQWEsRUFKUjtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLGFBQU8sQ0FORjtBQU9MQyxlQUFTO0FBUEosSyxRQVVSQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxTQUFQLEVBQWlCLFNBQVEsTUFBekIsRUFBWixFLFFBQ2JDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sYUFBakUsRUFBaEIsRUFBZ0csb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxhQUFuRixFQUFuSCxFQUFYLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGVBQVFBO0FBREEsSyxRQUlWQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLEdBREosRUFDUTtBQUNkQyxnQkFBUUMsR0FBUixDQUFZLE9BQUtGLEdBQWpCO0FBQ0Q7QUFITyxLLFFBTVZHLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OzsyQkFFSkMsTyxFQUFTO0FBQ1osV0FBS2QsT0FBTCxHQUFjYyxRQUFRZCxPQUF0QjtBQUNBLFdBQUtlLFlBQUwsQ0FBa0JELFFBQVFkLE9BQTFCO0FBQ0EsV0FBS2dCLFVBQUw7QUFDQTtBQUNBQyxTQUFHQyx5QkFBSCxHQUErQkMsSUFBL0I7QUFDSDs7OzZCQUVRLENBQUc7Ozs7O0FBRVY7OztvQ0FHaUI7QUFDZixXQUFLdkIsS0FBTCxHQUFXLEtBQUtBLEtBQUwsR0FBYSxFQUF4QjtBQUNBLFdBQUtvQixVQUFMO0FBQ0Q7O0FBRUQ7Ozs7OztzQ0FHa0JGLE8sRUFBUztBQUN6QkwsY0FBUUMsR0FBUixDQUFZSSxPQUFaO0FBQ0EsVUFBSUEsUUFBUU0sSUFBUixLQUFpQixRQUFyQixFQUErQjtBQUM3QjtBQUNBWCxnQkFBUUMsR0FBUixDQUFZSSxPQUFaO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xPLGVBQU8sS0FBSzNCLFNBQUwsQ0FBZTRCO0FBRGpCLE9BQVA7QUFHRDs7QUFJQTs7OztpQ0FDWUMsRSxFQUFJO0FBQUE7O0FBQ2ZDLG9CQUFJQyxRQUFKLENBQWE7QUFDWGhDLGNBQU07QUFDSmlDLGdCQUFNLEtBQUsxQjtBQURQLFNBREs7QUFJWDJCLGlCQUFTLHVCQUFRO0FBQ2IsaUJBQUtqQyxTQUFMLEdBQWdCa0MsS0FBS25DLElBQUwsQ0FBVUEsSUFBMUIsRUFDQSxPQUFLRSxRQUFMLEdBQWU2QixjQUFJSyxZQUFKLEdBQW1CRCxLQUFLbkMsSUFBTCxDQUFVQSxJQUFWLENBQWVxQyxHQUFmLENBQW1CLEdBQW5CLENBRGxDO0FBRUFiLGFBQUdjLHFCQUFILENBQXlCO0FBQ3ZCVixtQkFBT08sS0FBS25DLElBQUwsQ0FBVUEsSUFBVixDQUFlNkI7QUFEQyxXQUF6QjtBQUdBLGlCQUFLVSxNQUFMO0FBQ0g7QUFYVSxPQUFiO0FBYUQ7OztpQ0FDWTtBQUFBOztBQUNYUixvQkFBSVMsZUFBSixDQUFvQjtBQUNsQnhDLGNBQU07QUFDSjhCLGNBQUksS0FBS3ZCLE9BREw7QUFFSkosaUJBQU8sS0FBS0E7QUFGUixTQURZO0FBS2xCK0IsaUJBQVMsdUJBQVE7QUFDZixpQkFBSzdCLFFBQUwsR0FBZThCLEtBQUtuQyxJQUFMLENBQVVLLFFBQXpCO0FBQ0EsaUJBQUtELFdBQUwsR0FBa0IrQixLQUFLbkMsSUFBTCxDQUFVSSxXQUE1QjtBQUNBLGlCQUFLRSxLQUFMLEdBQVk2QixLQUFLbkMsSUFBTCxDQUFVTSxLQUF0QjtBQUNBLGlCQUFLaUMsTUFBTDtBQUNEO0FBVmlCLE9BQXBCO0FBWUQ7Ozs7RUFqR2dDRSxlQUFLQyxJOztrQkFBckI3QyxPIiwiZmlsZSI6InZpZGVvUGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsLmpzJ1xyXG4gIGltcG9ydCBjb21tZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbWVudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdmlkZW9EYXRhOiB7fSxcclxuICAgICAgdmlkZW9Vcmw6IFwiXCIsXHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgaG90Q29tbWVudHM6IFtdLFxyXG4gICAgICBjb21tZW50czogW10sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICB2aWRlb2lkOiAwXHJcbiAgICB9O1xyXG5cclxuICAgJHJlcGVhdCA9IHtcImNvbW1lbnRzXCI6e1wiY29tXCI6XCJjb21tZW50XCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImNvbW1lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwie3sqKmluZGV4fX1cIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiY29tbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJ7eyoqaW5kZXh9fVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBjb21tZW50OmNvbW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZHdhaXRpbmcob3B0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIue8k+WGslwiK29wdClcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnZpZGVvaWQ9IG9wdGlvbnMudmlkZW9pZFxyXG4gICAgICAgIHRoaXMuZ2V0VmlkZW9EYXRhKG9wdGlvbnMudmlkZW9pZCk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21tZW50KCk7XHJcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Z+z5LmQ5pKt5pS+77yMIOWwseWBnOatoumfs+S5kFxyXG4gICAgICAgIHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKS5zdG9wKClcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7IH07XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgICAgKi9cclxuICAgICAgb25SZWFjaEJvdHRvbSAoKSB7XHJcbiAgICAgICAgdGhpcy5saW1pdD10aGlzLmxpbWl0ICsgMTBcclxuICAgICAgICB0aGlzLmdldENvbW1lbnQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgICAgKi9cclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnZpZGVvRGF0YS5uYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAvLyDojrflj5bljZXkuKrop4bpopHmlbDmja5cclxuICAgICAgZ2V0VmlkZW9EYXRhKGlkKSB7XHJcbiAgICAgICAgYXBpLmdldFZpZGVvKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbXZpZDogdGhpcy52aWRlb2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogcmVzcCA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy52aWRlb0RhdGE9IHJlc3AuZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIHRoaXMudmlkZW9Vcmw9IGFwaS52aWRlb2Jhc2VVcmwgKyByZXNwLmRhdGEuZGF0YS5icnNbNDgwXSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwLmRhdGEuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBnZXRDb21tZW50KCkge1xyXG4gICAgICAgIGFwaS5nZXRWaWRlb0NvbW1lbnQoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZDogdGhpcy52aWRlb2lkLFxyXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzPSByZXNwLmRhdGEuY29tbWVudHNcclxuICAgICAgICAgICAgdGhpcy5ob3RDb21tZW50cz0gcmVzcC5kYXRhLmhvdENvbW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMudG90YWw9IHJlc3AuZGF0YS50b3RhbCAgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gIH1cclxuIl19
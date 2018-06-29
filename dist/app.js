'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/video', 'pages/search', 'pages/musicList', 'pages/audioPage', 'pages/allMusiclist', 'pages/videoPlay', 'pages/topList', 'pages/mvList'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#EA584F',
        navigationBarTitleText: '网易云',
        navigationBarTextStyle: '#fff'
      },
      tabBar: {
        color: "#666",
        selectedColor: "#d81e06",
        borderStyle: "#999",
        backgroundColor: "#fff",
        list: [{
          pagePath: "pages/index",
          iconPath: "images/discover.png",
          selectedIconPath: "images/discover_active.png",
          text: "推 荐"
        }, {
          pagePath: "pages/allMusiclist",
          iconPath: "images/my.png",
          selectedIconPath: "images/my_active.png",
          text: " 精 品"
        }, {
          pagePath: "pages/video",
          iconPath: "images/video.png",
          selectedIconPath: "images/video_active.png",
          text: "M V"
        }, {
          pagePath: "pages/topList",
          iconPath: "images/friend.png",
          selectedIconPath: "images/friend_active.png",
          text: "歌 手"
        }]
      }
    }, _this.globalData = {
      userInfo: "",
      musicListArr: [], //歌单列表
      musicData: {}, //当前播放的歌曲信息
      musicIndex: -1, //当前播放音乐的 index
      isplaying: false //是否正在播放
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJtdXNpY0xpc3RBcnIiLCJtdXNpY0RhdGEiLCJtdXNpY0luZGV4IiwiaXNwbGF5aW5nIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxhQUZLLEVBR0wsY0FISyxFQUlMLGlCQUpLLEVBS0wsaUJBTEssRUFNTCxvQkFOSyxFQU9MLGlCQVBLLEVBUUwsZUFSSyxFQVNMLGNBVEssQ0FEQTtBQVlQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsS0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BWkQ7QUFrQlBDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsTUFIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsYUFEWjtBQUVFQyxvQkFBVSxxQkFGWjtBQUdFQyw0QkFBa0IsNEJBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLG9CQURaO0FBRUVDLG9CQUFVLGVBRlo7QUFHRUMsNEJBQWtCLHNCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxhQURaO0FBRUVDLG9CQUFVLGtCQUZaO0FBR0VDLDRCQUFrQix5QkFIcEI7QUFJRUMsZ0JBQU07QUFKUixTQWJJLEVBbUJKO0FBQ0VILG9CQUFVLGVBRFo7QUFFRUMsb0JBQVUsbUJBRlo7QUFHRUMsNEJBQWtCLDBCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBbkJJO0FBTEE7QUFsQkQsSyxRQW9EVEMsVSxHQUFjO0FBQ1pDLGdCQUFVLEVBREU7QUFFWkMsb0JBQWMsRUFGRixFQUVXO0FBQ3ZCQyxpQkFBVyxFQUhDLEVBR1U7QUFDdEJDLGtCQUFZLENBQUMsQ0FKRCxFQUlZO0FBQ3hCQyxpQkFBVyxLQUxDLENBS1k7QUFMWixLOzs7OzsrQkFRSDtBQUNUQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7O0VBL0QwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvdmlkZW8nLFxuICAgICAgJ3BhZ2VzL3NlYXJjaCcsXG4gICAgICAncGFnZXMvbXVzaWNMaXN0JyxcbiAgICAgICdwYWdlcy9hdWRpb1BhZ2UnLFxuICAgICAgJ3BhZ2VzL2FsbE11c2ljbGlzdCcsXG4gICAgICAncGFnZXMvdmlkZW9QbGF5JyxcbiAgICAgICdwYWdlcy90b3BMaXN0JyxcbiAgICAgICdwYWdlcy9tdkxpc3QnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0VBNTg0RicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn572R5piT5LqRJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogXCIjNjY2XCIsXG4gICAgICBzZWxlY3RlZENvbG9yOiBcIiNkODFlMDZcIixcbiAgICAgIGJvcmRlclN0eWxlOiBcIiM5OTlcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleFwiLFxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9kaXNjb3Zlci5wbmdcIixcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9kaXNjb3Zlcl9hY3RpdmUucG5nXCIsXG4gICAgICAgICAgdGV4dDogXCLmjqgg6I2QXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2FsbE11c2ljbGlzdFwiLFxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9teS5wbmdcIixcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy9teV9hY3RpdmUucG5nXCIsXG4gICAgICAgICAgdGV4dDogXCIg57K+IOWTgVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy92aWRlb1wiLFxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy92aWRlby5wbmdcIixcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlcy92aWRlb19hY3RpdmUucG5nXCIsXG4gICAgICAgICAgdGV4dDogXCJNIFZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdG9wTGlzdFwiLFxuICAgICAgICAgIGljb25QYXRoOiBcImltYWdlcy9mcmllbmQucG5nXCIsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvZnJpZW5kX2FjdGl2ZS5wbmdcIixcbiAgICAgICAgICB0ZXh0OiBcIuatjCDmiYtcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSAgPSB7XG4gICAgdXNlckluZm86IFwiXCIsXG4gICAgbXVzaWNMaXN0QXJyOiBbXSwgICAgICAvL+atjOWNleWIl+ihqFxuICAgIG11c2ljRGF0YToge30sICAgICAgICAvL+W9k+WJjeaSreaUvueahOatjOabsuS/oeaBr1xuICAgIG11c2ljSW5kZXg6IC0xLCAgICAgICAgIC8v5b2T5YmN5pKt5pS+6Z+z5LmQ55qEIGluZGV4XG4gICAgaXNwbGF5aW5nOiBmYWxzZSAgICAgICAgLy/mmK/lkKbmraPlnKjmkq3mlL5cbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbiBsYXVuY2gnKVxuICB9XG59XG4iXX0=
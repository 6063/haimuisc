'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _songList = require('./../components/songList.js');

var _songList2 = _interopRequireDefault(_songList);

var _musicList = require('./../components/musicList.js');

var _musicList2 = _interopRequireDefault(_musicList);

var _singerList = require('./../components/singerList.js');

var _singerList2 = _interopRequireDefault(_singerList);

var _videoList = require('./../components/videoList.js');

var _videoList2 = _interopRequireDefault(_videoList);

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
      navigationBarTitleText: "搜索"
    }, _this.data = {
      haveValue: false,
      keywords: '',
      limit: 60,
      hotsearch: [],
      songArr: [], //歌曲
      musicListArr: [], //歌单
      singerArr: [], //歌手
      videoArr: [], //视频
      showHotsearch: true,
      searchType: 1,
      navLinePosition: '53rpx',
      positionLeft: 0,
      innerHeight: 0
    }, _this.$repeat = { "songArr": { "com": "songList", "props": "item" }, "musicListArr": { "com": "musicList", "props": "item" }, "singerArr": { "com": "singerList", "props": "item" }, "videoArr": { "com": "videoList", "props": "item" } }, _this.$props = { "songList": { "xmlns:v-bind": { "value": "", "for": "songArr", "item": "item", "index": "index", "key": "*index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "songArr", "item": "item", "index": "index", "key": "*index" } }, "musicList": { "v-bind:item.once": { "value": "item", "type": "item", "for": "musicListArr", "item": "item", "index": "index", "key": "%index" } }, "singerList": { "v-bind:item.once": { "value": "item", "type": "item", "for": "singerArr", "item": "item", "index": "index", "key": "%index" } }, "videoList": { "v-bind:item.once": { "value": "item", "type": "item", "for": "videoArr", "item": "item", "index": "index", "key": "%index" } } }, _this.$events = {}, _this.components = {
      songList: _songList2.default,
      musicList: _musicList2.default,
      singerList: _singerList2.default,
      videoList: _videoList2.default
    }, _this.methods = {
      // 清除vlaue
      clearValue: function clearValue() {
        this.haveValue = false;
        this.showHotsearch = true;
      },

      // 返回上一页
      back: function back() {
        wx.navigateBack();
      },

      // 搜索框输入后按搜索按钮时的搜索，参数都应是默认值
      startSearch: function startSearch(opt) {
        var keywords = '';
        if (!opt.detail.value) {
          keywords = opt.currentTarget.dataset.value;
        } else {
          keywords = opt.detail.value;
        }
        // 搜索前先清空每个数组       
        this.haveValue = true, this.keywords = keywords, this.songArr = [], //歌曲
        this.musicListArr = [], //歌单
        this.singerArr = [], //歌手
        this.videoArr = [], //视频         
        this.search();
      },

      // nav点击
      changeNav: function changeNav(opt) {
        switch (opt.currentTarget.dataset.type) {
          case '1':
            this.navLinePosition = '53rpx';
            this.searchType = 1;
            this.positionLeft = 0;
            if (!this.songArr.length) {
              this.search();
            }
            break;
          case '1000':
            this.navLinePosition = '240rpx';
            this.searchType = 1000;
            this.positionLeft = '-750rpx';
            if (!this.musicListArr.length) {
              this.search();
            }
            break;
          case '100':
            this.navLinePosition = '428rpx';
            this.searchType = 100;
            this.positionLeft = '-1500rpx';
            if (!this.singerArr.length) {
              this.search();
            }
            break;
          case '1004':
            this.navLinePosition = '616rpx';
            this.searchType = 1004;
            this.positionLeft = '-2250rpx';
            if (!this.videoArr.length) {
              this.search();
            }
            break;
        }
      },

      // 跳转到播放页
      playSong: function playSong(opt) {
        var _this2 = this;

        _api2.default.getSongDetai({
          data: {
            ids: opt.currentTarget.dataset.itemid
          },
          success: function success(resp) {
            _this2.$parent.musicListArr = resp.data.songs;
            wx.navigateTo({
              url: './audioPage?musicindex=0&duration=' + opt.currentTarget.dataset.duration
            });
            _this2.$apply();
          }
        });
      },


      // 跳转到歌单
      goMusiclist: function goMusiclist(e) {
        wx.navigateTo({
          url: './musicList?musicListID=' + e.currentTarget.dataset.id
        });
      },


      // 跳转到歌手MV
      goSingerMv: function goSingerMv(opt) {
        wx.navigateTo({
          url: './mvList?id=' + opt.currentTarget.dataset.id + '&name=' + opt.currentTarget.dataset.name
        });
      },


      // 播放视频
      govideoDetai: function govideoDetai(opt) {
        wx.navigateTo({
          url: './videoPlay?videoid=' + opt.currentTarget.dataset.id
        });
      },

      // 输入中
      inputC: function inputC(opt) {
        if (opt.detail.value.length) {
          this.haveValue = true;
        } else {
          this.haveValue = false;
          this.showHotsearch = true;
        }
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'search',


    // 实际进行搜索的函数
    value: function search() {
      var _this3 = this;

      _api2.default.searchStart({
        data: {
          keywords: this.keywords,
          limit: this.limit,
          type: this.searchType
        },
        success: function success(resp) {
          switch (_this3.data.searchType) {
            case 1:
              _this3.songArr = resp.data.result.songs;
              _this3.showHotsearch = false;
              _this3.$apply();
              break;
            case 1000:
              _this3.musicListArr = resp.data.result.playlists;
              _this3.showHotsearch = false;
              _this3.$apply();
              break;
            case 100:
              _this3.singerArr = resp.data.result.artists;
              _this3.showHotsearch = false;
              _this3.$apply();

              break;
            case 1004:
              _this3.videoArr = resp.data.result.mvs;
              _this3.showHotsearch = false;
              _this3.$apply();
              break;
          }
        }
      });
    }

    // 热门搜索

  }, {
    key: 'gethotsearch',
    value: function gethotsearch() {
      var _this4 = this;

      _api2.default.getHotSearch({
        success: function success(resp) {
          _this4.hotsearch = resp.data.result;
          _this4.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this5 = this;

      this.gethotsearch();
      wx.getSystemInfo({
        success: function success(res) {
          console.log(res.windowHeight);
          _this5.innerHeight = res.windowHeight * 2 - 160;
          _this5.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoYXZlVmFsdWUiLCJrZXl3b3JkcyIsImxpbWl0IiwiaG90c2VhcmNoIiwic29uZ0FyciIsIm11c2ljTGlzdEFyciIsInNpbmdlckFyciIsInZpZGVvQXJyIiwic2hvd0hvdHNlYXJjaCIsInNlYXJjaFR5cGUiLCJuYXZMaW5lUG9zaXRpb24iLCJwb3NpdGlvbkxlZnQiLCJpbm5lckhlaWdodCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNvbmdMaXN0IiwibXVzaWNMaXN0Iiwic2luZ2VyTGlzdCIsInZpZGVvTGlzdCIsIm1ldGhvZHMiLCJjbGVhclZhbHVlIiwiYmFjayIsInd4IiwibmF2aWdhdGVCYWNrIiwic3RhcnRTZWFyY2giLCJvcHQiLCJkZXRhaWwiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VhcmNoIiwiY2hhbmdlTmF2IiwidHlwZSIsImxlbmd0aCIsInBsYXlTb25nIiwiYXBpIiwiZ2V0U29uZ0RldGFpIiwiaWRzIiwiaXRlbWlkIiwic3VjY2VzcyIsIiRwYXJlbnQiLCJyZXNwIiwic29uZ3MiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZHVyYXRpb24iLCIkYXBwbHkiLCJnb011c2ljbGlzdCIsImUiLCJpZCIsImdvU2luZ2VyTXYiLCJuYW1lIiwiZ292aWRlb0RldGFpIiwiaW5wdXRDIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsInNlYXJjaFN0YXJ0IiwicmVzdWx0IiwicGxheWxpc3RzIiwiYXJ0aXN0cyIsIm12cyIsImdldEhvdFNlYXJjaCIsImdldGhvdHNlYXJjaCIsImdldFN5c3RlbUluZm8iLCJjb25zb2xlIiwibG9nIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFD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QkFBS3dDLE1BQUw7QUFDRjtBQXJCSjtBQXVCRDtBQTlCYSxPQUFoQjtBQWdDRDs7QUFFRDs7OzttQ0FDZTtBQUFBOztBQUNiWCxvQkFBSTJCLFlBQUosQ0FBaUI7QUFDZnZCLGlCQUFTLHVCQUFRO0FBQ2YsaUJBQUt0QyxTQUFMLEdBQWlCd0MsS0FBSzVDLElBQUwsQ0FBVTZELE1BQTNCO0FBQ0EsaUJBQUtaLE1BQUw7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs2QkFTUTtBQUFBOztBQUNQLFdBQUtpQixZQUFMO0FBQ0F6QyxTQUFHMEMsYUFBSCxDQUFpQjtBQUNmekIsaUJBQVEsc0JBQU07QUFDWjBCLGtCQUFRQyxHQUFSLENBQVlDLElBQUlDLFlBQWhCO0FBQ0EsaUJBQUsxRCxXQUFMLEdBQW1CeUQsSUFBSUMsWUFBSixHQUFpQixDQUFqQixHQUFtQixHQUF0QztBQUNBLGlCQUFLdEIsTUFBTDtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OzZCQUNRLENBQUc7Ozs7RUE5TXVCdUIsZUFBS0MsSTs7a0JBQXJCNUUsTyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBpbXBvcnQgc29uZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zb25nTGlzdCdcclxuICBpbXBvcnQgbXVzaWNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXVzaWNMaXN0J1xyXG4gIGltcG9ydCBzaW5nZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2VyTGlzdCdcclxuICBpbXBvcnQgdmlkZW9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdmlkZW9MaXN0J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuaQnOe0olwiLFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGhhdmVWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGtleXdvcmRzOiAnJyxcclxuICAgICAgbGltaXQ6IDYwLFxyXG4gICAgICBob3RzZWFyY2g6IFtdLFxyXG4gICAgICBzb25nQXJyOiBbXSwgICAvL+atjOabslxyXG4gICAgICBtdXNpY0xpc3RBcnI6IFtdLCAgIC8v5q2M5Y2VXHJcbiAgICAgIHNpbmdlckFycjogW10sICAgLy/mrYzmiYtcclxuICAgICAgdmlkZW9BcnI6IFtdLCAvL+inhumikVxyXG4gICAgICBzaG93SG90c2VhcmNoOiB0cnVlLFxyXG4gICAgICBzZWFyY2hUeXBlOiAxLFxyXG4gICAgICBuYXZMaW5lUG9zaXRpb246ICc1M3JweCcsXHJcbiAgICAgIHBvc2l0aW9uTGVmdDogMCxcclxuICAgICAgaW5uZXJIZWlnaHQ6IDBcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7XCJzb25nQXJyXCI6e1wiY29tXCI6XCJzb25nTGlzdFwiLFwicHJvcHNcIjpcIml0ZW1cIn0sXCJtdXNpY0xpc3RBcnJcIjp7XCJjb21cIjpcIm11c2ljTGlzdFwiLFwicHJvcHNcIjpcIml0ZW1cIn0sXCJzaW5nZXJBcnJcIjp7XCJjb21cIjpcInNpbmdlckxpc3RcIixcInByb3BzXCI6XCJpdGVtXCJ9LFwidmlkZW9BcnJcIjp7XCJjb21cIjpcInZpZGVvTGlzdFwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJzb25nTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwic29uZ0FyclwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcIippbmRleFwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJzb25nQXJyXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiKmluZGV4XCJ9fSxcIm11c2ljTGlzdFwiOntcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJtdXNpY0xpc3RBcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIlaW5kZXhcIn19LFwic2luZ2VyTGlzdFwiOntcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJzaW5nZXJBcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIlaW5kZXhcIn19LFwidmlkZW9MaXN0XCI6e1widi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcInZpZGVvQXJyXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiJWluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHNvbmdMaXN0OnNvbmdMaXN0LFxyXG4gICAgICBtdXNpY0xpc3Q6bXVzaWNMaXN0LFxyXG4gICAgICBzaW5nZXJMaXN0OnNpbmdlckxpc3QsXHJcbiAgICAgIHZpZGVvTGlzdDp2aWRlb0xpc3RcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8vIOa4hemZpHZsYXVlXHJcbiAgICAgICAgY2xlYXJWYWx1ZSgpIHtcclxuICAgICAgICAgIHRoaXMuaGF2ZVZhbHVlID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuc2hvd0hvdHNlYXJjaD10cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgLy8g6L+U5Zue5LiK5LiA6aG1XHJcbiAgICAgICAgYmFjaygpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmkJzntKLmoYbovpPlhaXlkI7mjInmkJzntKLmjInpkq7ml7bnmoTmkJzntKLvvIzlj4LmlbDpg73lupTmmK/pu5jorqTlgLxcclxuICAgICAgICBzdGFydFNlYXJjaChvcHQpIHtcclxuICAgICAgICAgIGxldCBrZXl3b3JkcyA9ICcnO1xyXG4gICAgICAgICAgaWYgKCFvcHQuZGV0YWlsLnZhbHVlKXtcclxuICAgICAgICAgICAga2V5d29yZHMgPSBvcHQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAga2V5d29yZHMgPSBvcHQuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDmkJzntKLliY3lhYjmuIXnqbrmr4/kuKrmlbDnu4QgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmhhdmVWYWx1ZT0gdHJ1ZSxcclxuICAgICAgICAgIHRoaXMua2V5d29yZHM9IGtleXdvcmRzLFxyXG4gICAgICAgICAgdGhpcy5zb25nQXJyPSBbXSwgICAvL+atjOabslxyXG4gICAgICAgICAgdGhpcy5tdXNpY0xpc3RBcnI9IFtdLCAgIC8v5q2M5Y2VXHJcbiAgICAgICAgICB0aGlzLnNpbmdlckFycj0gW10sICAgLy/mrYzmiYtcclxuICAgICAgICAgIHRoaXMudmlkZW9BcnI9IFtdLCAvL+inhumikSAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG5hdueCueWHu1xyXG4gICAgICAgIGNoYW5nZU5hdihvcHQpIHtcclxuICAgICAgICAgIHN3aXRjaCAob3B0LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdkxpbmVQb3NpdGlvbj0gJzUzcnB4J1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUeXBlPSAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdD0gMCAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc29uZ0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTAwMCc6ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2TGluZVBvc2l0aW9uPSAnMjQwcnB4J1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUeXBlPSAxMDAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdD0gJy03NTBycHgnICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdXNpY0xpc3RBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTAwJzogICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdkxpbmVQb3NpdGlvbj0gJzQyOHJweCdcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVHlwZT0gMTAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdD0gJy0xNTAwcnB4JyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLnNpbmdlckFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcxMDA0JzogICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5uYXZMaW5lUG9zaXRpb249ICc2MTZycHgnXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUeXBlPSAxMDA0XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkxlZnQ9ICctMjI1MHJweCcgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICghdGhpcy52aWRlb0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6Lez6L2s5Yiw5pKt5pS+6aG1XHJcbiAgICAgICAgcGxheVNvbmcob3B0KSB7XHJcbiAgICAgICAgICBhcGkuZ2V0U29uZ0RldGFpKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGlkczogb3B0LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lm11c2ljTGlzdEFyciA9IHJlc3AuZGF0YS5zb25nc1xyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi9hdWRpb1BhZ2U/bXVzaWNpbmRleD0wJmR1cmF0aW9uPScgKyBvcHQuY3VycmVudFRhcmdldC5kYXRhc2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDot7PovazliLDmrYzljZVcclxuICAgICAgICBnb011c2ljbGlzdChlKSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBgLi9tdXNpY0xpc3Q/bXVzaWNMaXN0SUQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDot7PovazliLDmrYzmiYtNVlxyXG4gICAgICAgIGdvU2luZ2VyTXYob3B0KXtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAuL212TGlzdD9pZD0ke29wdC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9Jm5hbWU9JHtvcHQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWV9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmkq3mlL7op4bpopFcclxuICAgICAgICBnb3ZpZGVvRGV0YWkob3B0KSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBgLi92aWRlb1BsYXk/dmlkZW9pZD0ke29wdC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDovpPlhaXkuK1cclxuICAgICAgICBpbnB1dEMob3B0KSB7XHJcbiAgICAgICAgICBpZiAob3B0LmRldGFpbC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXZlVmFsdWU9IHRydWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuIGhhdmVWYWx1ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0hvdHNlYXJjaCA9IHRydWUgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5a6e6ZmF6L+b6KGM5pCc57Si55qE5Ye95pWwXHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgIGFwaS5zZWFyY2hTdGFydCh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAga2V5d29yZHM6IHRoaXMua2V5d29yZHMsXHJcbiAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMuc2VhcmNoVHlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3AgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEuc2VhcmNoVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvbmdBcnIgPSByZXNwLmRhdGEucmVzdWx0LnNvbmdzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dIb3RzZWFyY2ggPSBmYWxzZSAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCkgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDA6ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNMaXN0QXJyPSByZXNwLmRhdGEucmVzdWx0LnBsYXlsaXN0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SG90c2VhcmNoPSBmYWxzZSAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDogICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2VyQXJyPSByZXNwLmRhdGEucmVzdWx0LmFydGlzdHNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hvdHNlYXJjaD0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQXJyPSByZXNwLmRhdGEucmVzdWx0Lm12c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SG90c2VhcmNoPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDng63pl6jmkJzntKJcclxuICAgIGdldGhvdHNlYXJjaCgpIHtcclxuICAgICAgYXBpLmdldEhvdFNlYXJjaCh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzcCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhvdHNlYXJjaCA9IHJlc3AuZGF0YS5yZXN1bHRcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG5cclxuICAgIHdhdGNoID0ge307XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgICBvbkxvYWQoKSB7IFxyXG4gICAgICB0aGlzLmdldGhvdHNlYXJjaCgpO1xyXG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICBzdWNjZXNzOnJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy53aW5kb3dIZWlnaHQpXHJcbiAgICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodCoyLTE2MCAgXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvblNob3coKSB7IH1cclxuICB9XHJcbiJdfQ==
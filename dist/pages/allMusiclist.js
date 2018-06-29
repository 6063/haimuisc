'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _boutiqueItem = require('./../components/boutiqueItem.js');

var _boutiqueItem2 = _interopRequireDefault(_boutiqueItem);

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
      navigationBarTitleText: "精品歌单"
    }, _this.data = {
      musicList: [],
      limit: 10
    }, _this.$repeat = { "musicList": { "com": "songList", "props": "item" } }, _this.$props = { "songList": { "xmlns:v-bind": { "value": "", "for": "musicList", "item": "item", "index": "index", "key": "*index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "musicList", "item": "item", "index": "index", "key": "*index" } } }, _this.$events = {}, _this.components = {
      songList: _boutiqueItem2.default
    }, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'getBoutiqueList',
    value: function getBoutiqueList() {
      var _this2 = this;

      _api2.default.getBoutiqueList({
        data: {
          limit: this.limit
        },
        success: function success(resp) {
          _this2.musicList = resp.data.playlists;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getBoutiqueList();
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
      this.getBoutiqueList();
    }
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/allMusiclist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbE11c2ljbGlzdC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtdXNpY0xpc3QiLCJsaW1pdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNvbmdMaXN0IiwibWV0aG9kcyIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJhcGkiLCJnZXRCb3V0aXF1ZUxpc3QiLCJzdWNjZXNzIiwicmVzcCIsInBsYXlsaXN0cyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsaUJBQVUsRUFETDtBQUVMQyxhQUFPO0FBRkYsSyxRQUtSQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsTUFBMUIsRUFBYixFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sV0FBbEIsRUFBOEIsUUFBTyxNQUFyQyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sUUFBbEUsRUFBaEIsRUFBNEYsb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxXQUFwQyxFQUFnRCxRQUFPLE1BQXZELEVBQThELFNBQVEsT0FBdEUsRUFBOEUsT0FBTSxRQUFwRixFQUEvRyxFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGdCQUFTQTtBQURELEssUUFJVkMsTyxHQUFVLEUsUUFnQlZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztzQ0FoQlE7QUFBQTs7QUFDZkMsb0JBQUlDLGVBQUosQ0FBb0I7QUFDbEJiLGNBQUs7QUFDSEUsaUJBQU0sS0FBS0E7QUFEUixTQURhO0FBSWxCWSxpQkFBUSx1QkFBTTtBQUNaLGlCQUFLYixTQUFMLEdBQWlCYyxLQUFLZixJQUFMLENBQVVnQixTQUEzQjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0Q7QUFQaUIsT0FBcEI7QUFTRDs7OzZCQVFNO0FBQ1AsV0FBS0osZUFBTDtBQUNEOzs7NkJBRVEsQ0FBRzs7OztBQUNaOzs7b0NBR2dCO0FBQ2QsV0FBS1gsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYSxFQUExQjtBQUNBLFdBQUtXLGVBQUw7QUFDRDs7OztFQWxEa0NLLGVBQUtDLEk7O2tCQUFyQnRCLE8iLCJmaWxlIjoiYWxsTXVzaWNsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgc29uZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ib3V0aXF1ZUl0ZW0nXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIueyvuWTgeatjOWNlVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBtdXNpY0xpc3Q6W10sXHJcbiAgICAgIGxpbWl0OiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICRyZXBlYXQgPSB7XCJtdXNpY0xpc3RcIjp7XCJjb21cIjpcInNvbmdMaXN0XCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcInNvbmdMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJtdXNpY0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCIqaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibXVzaWNMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiKmluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHNvbmdMaXN0OnNvbmdMaXN0XHJcbiAgICB9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAgZ2V0Qm91dGlxdWVMaXN0KCl7XHJcbiAgICAgICAgYXBpLmdldEJvdXRpcXVlTGlzdCh7XHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgbGltaXQ6dGhpcy5saW1pdFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6cmVzcD0+e1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljTGlzdCA9IHJlc3AuZGF0YS5wbGF5bGlzdHNcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkgeyBcclxuICAgICAgdGhpcy5nZXRCb3V0aXF1ZUxpc3QoKVxyXG4gICAgfTtcclxuXHJcbiAgICBvblNob3coKSB7IH07XHJcbiAgICAvKipcclxuICAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICAqL1xyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgdGhpcy5saW1pdCA9IHRoaXMubGltaXQgKyAxMFxyXG4gICAgICB0aGlzLmdldEJvdXRpcXVlTGlzdCgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=
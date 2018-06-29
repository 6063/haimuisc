'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
        }, _this.data = {}, _this.components = {}, _this.methods = {
            godetail: function godetail(options) {
                wx.navigateTo({
                    url: './musicList?musicListID=' + options.currentTarget.dataset.id
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Example, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Example;
}(_wepy2.default.page);

exports.default = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdXRpcXVlSXRlbS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImdvZGV0YWlsIiwib3B0aW9ucyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPLEUsUUFFUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ05DLG9CQURNLG9CQUNHQyxPQURILEVBQ1c7QUFDYkMsbUJBQUdDLFVBQUgsQ0FBYztBQUNkQyx5QkFBSyw2QkFBNkJILFFBQVFJLGFBQVIsQ0FBc0JDLE9BQXRCLENBQThCQztBQURsRCxpQkFBZDtBQUdIO0FBTEssUyxRQVNWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7aUNBRUYsQ0FBRzs7O2lDQUVILENBQUc7Ozs7RUExQnVCQyxlQUFLQyxJOztrQkFBckJsQixPIiwiZmlsZSI6ImJvdXRpcXVlSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge307XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgZ29kZXRhaWwob3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuL211c2ljTGlzdD9tdXNpY0xpc3RJRD0nICsgb3B0aW9ucy5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==
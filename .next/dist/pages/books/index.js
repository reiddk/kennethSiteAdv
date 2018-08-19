"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _axiosBooks = require("../../axiosBooks");

var _axiosBooks2 = _interopRequireDefault(_axiosBooks);

var _reactRenderHtml = require("react-render-html");

var _reactRenderHtml2 = _interopRequireDefault(_reactRenderHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/reid/repos/kennethSiteAdv/pages/books/index.js?entry";


var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IndexPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      url: null,
      title: 'Kenneth Kuttler',
      contents: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IndexPage, [{
    key: "getBook",
    value: function getBook(url) {
      var _this2 = this;

      _axiosBooks2.default.get(url).then(function (res) {
        var contents = res.data;
        _this2.setState({ contents: contents });
      }).catch(function (e) {
        return e;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.theUrl) {
        this.getBook(this.props.theUrl);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.theUrl !== this.props.theUrl) {
        this.getBook(this.props.theUrl);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var bookHtml = null;
      if (this.state.html) {
        bookHtml = this.state.html;
      }
      return _react2.default.createElement("div", { className: "blogpost-component", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.props.appName), _react2.default.createElement("link", { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossorigin: "anonymous", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var query = _ref2.query;

      var nameToTitle = [{ url: 'AdvancedCalculusSV/contentsIndex.json', title: 'Advanced Calculus Single Variable' }, { url: 'Analysis/contentsIndex.json', title: 'Analysis' }, { url: 'ComplexAnalysis/contentsIndex.json', title: 'Complex Analysis' }, { url: 'ElementaryLinearAlgebra/contentsIndex.json', title: 'Elementary Linear Algebra' }, { url: 'EngineeringMath/contentsIndex.json', title: 'Engineering Math' }, { url: 'Linearalgebra/contentsIndex.json', title: 'Linear Algebra' }, { url: 'LinearAlgebraAndAnalysis/contentsIndex.json', title: 'Linear Algebra and Analysis' }, { url: 'TopicsInAnalysis/contentsIndex.json', title: 'Topics In Analysis' }];
      var title = "Kenneth Kuttler";
      var url = null;
      if (query.slug) {
        for (var i = 0; i < nameToTitle.length; i++) {
          if (query.slug.match(new RegExp(nameToTitle[i], 'i'))) {
            title = nameToTitle[i].title;
            url = nameToTitle[i].url;
          }
        }
      }
      var promise = new _promise2.default(function (resolve, reject) {
        resolve({ appName: title, theUrl: url });
      });
      return promise;
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIkhlYWQiLCJheGlvcyIsInJlbmRlckhUTUwiLCJJbmRleFBhZ2UiLCJzdGF0ZSIsInVybCIsInRpdGxlIiwiY29udGVudHMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNldFN0YXRlIiwiY2F0Y2giLCJlIiwicHJvcHMiLCJ0aGVVcmwiLCJnZXRCb29rIiwicHJldlByb3BzIiwiYm9va0h0bWwiLCJodG1sIiwiYXBwTmFtZSIsInF1ZXJ5IiwibmFtZVRvVGl0bGUiLCJzbHVnIiwiaSIsImxlbmd0aCIsIm1hdGNoIiwiUmVnRXhwIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7Ozs7Ozs7O0ksQUFFRDs7Ozs7Ozs7Ozs7Ozs7a05BQ0osQTtXQUFRLEFBQ0QsQUFDTDthQUZNLEFBRUMsQUFDUDtnQixBQUhNLEFBR0k7QUFISixBQUNOOzs7Ozs0QixBQUtNLEtBQUs7bUJBQ1g7OzJCQUFBLEFBQU0sSUFBTixBQUFVLEtBQVYsQUFDRyxLQUFLLGVBQU8sQUFDWDtZQUFNLFdBQVcsSUFBakIsQUFBcUIsQUFDckI7ZUFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQVksQUFDM0I7QUFKSCxTQUFBLEFBS0csTUFBTSxhQUFBO2VBQUEsQUFBSztBQUxkLEFBTUQ7Ozs7d0NBRW9CLEFBQ25CO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxRQUFRLEFBQ3JCO2FBQUEsQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN6QjtBQUNGOzs7O3VDLEFBRWtCLFdBQVcsQUFDNUI7VUFBRyxVQUFBLEFBQVUsV0FBVyxLQUFBLEFBQUssTUFBN0IsQUFBbUMsUUFBUSxBQUN6QzthQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDekI7QUFDRjs7Ozs2QkE2QlEsQUFDUDtVQUFJLFdBQUosQUFBZSxBQUNmO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxNQUFNLEFBQ25CO21CQUFXLEtBQUEsQUFBSyxNQUFoQixBQUFzQixBQUN2QjtBQUNEOzZCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BRGYsQUFDRSxBQUFtQixBQUNuQixrREFBTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qiw0RUFBMkUsV0FBdkcsQUFBaUgsMkVBQTBFLGFBQTNMLEFBQXVNO29CQUF2TTtzQkFKSixBQUNBLEFBQ0UsQUFFRSxBQUlMO0FBSks7Ozs7OzJDQXBDMEI7VUFBUixBQUFRLGNBQVIsQUFBUSxBQUM5Qjs7VUFBSSxjQUFjLENBQ2hCLEVBQUMsS0FBRCxBQUFNLHlDQUF5QyxPQUQvQixBQUNoQixBQUFzRCx1Q0FDdEQsRUFBQyxLQUFELEFBQU0sK0JBQStCLE9BRnJCLEFBRWhCLEFBQTRDLGNBQzVDLEVBQUMsS0FBRCxBQUFNLHNDQUFzQyxPQUg1QixBQUdoQixBQUFtRCxzQkFDbkQsRUFBQyxLQUFELEFBQU0sOENBQThDLE9BSnBDLEFBSWhCLEFBQTJELCtCQUMzRCxFQUFDLEtBQUQsQUFBTSxzQ0FBc0MsT0FMNUIsQUFLaEIsQUFBbUQsc0JBQ25ELEVBQUMsS0FBRCxBQUFNLG9DQUFvQyxPQU4xQixBQU1oQixBQUFpRCxvQkFDakQsRUFBQyxLQUFELEFBQU0sK0NBQStDLE9BUHJDLEFBT2hCLEFBQTRELGlDQUM1RCxFQUFDLEtBQUQsQUFBTSx1Q0FBdUMsT0FSL0MsQUFBa0IsQUFRaEIsQUFBb0QsQUFFdEQ7VUFBSSxRQUFKLEFBQVksQUFDWjtVQUFJLE1BQUosQUFBVSxBQUNWO1VBQUksTUFBSixBQUFVLE1BQU0sQUFDZDthQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBSSxZQUFwQixBQUFnQyxRQUFoQyxBQUF3QyxLQUFLLEFBQzNDO2NBQUksTUFBQSxBQUFNLEtBQU4sQUFBVyxNQUFNLElBQUEsQUFBSSxPQUFPLFlBQVgsQUFBVyxBQUFZLElBQTVDLEFBQUksQUFBaUIsQUFBMkIsT0FBTyxBQUNyRDtvQkFBUSxZQUFBLEFBQVksR0FBcEIsQUFBdUIsQUFDdkI7a0JBQU0sWUFBQSxBQUFZLEdBQWxCLEFBQXFCLEFBQ3RCO0FBQ0Y7QUFDRjtBQUNEO1VBQU0sZ0NBQXNCLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUM3QztnQkFBUSxFQUFFLFNBQUYsQUFBVyxPQUFPLFFBQTFCLEFBQVEsQUFBMEIsQUFDckM7QUFGRCxBQUFnQixBQUdoQixPQUhnQjthQUdoQixBQUFPLEFBQ1I7Ozs7O0FBckRxQixBLEFBdUV4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
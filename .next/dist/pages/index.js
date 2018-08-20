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

var _navbar = require("../components/navbar/navbar");

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/reid/repos/kennethSiteAdv/pages/index.js?entry";


var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "blogpost-component", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Kenneth Kuttler"), _react2.default.createElement("link", { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossorigin: "anonymous", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/styles.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_navbar2.default, { selected: "Home", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(context) {
      var promise = new _promise2.default(function (resolve, reject) {
        resolve({ appName: "Super App" });
      });
      return promise;
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIkhlYWQiLCJOYXZiYXIiLCJJbmRleFBhZ2UiLCJjb250ZXh0IiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcHBOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs2QkFRSyxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO09BQUEsa0JBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREosQUFDSSxBQUNBLDREQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLDRFQUEyRSxXQUF2RyxBQUFpSCwyRUFBMEUsYUFBM0wsQUFBdU07b0JBQXZNO3NCQUZKLEFBRUksQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFISixBQUdJLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBTFIsQUFDSSxBQUlJLEFBRUo7QUFGSTsyQkFFSixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFVBQVIsQUFBaUI7b0JBQWpCO3NCQVZaLEFBQ0UsQUFPSSxBQUNJLEFBQ0UsQUFLYjtBQUxhOzs7OztvQyxBQWxCUyxTQUFTLEFBQzlCO1VBQU0sZ0NBQXNCLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUM3QztnQkFBUSxFQUFFLFNBQVYsQUFBUSxBQUFXLEFBQ3RCO0FBRkQsQUFBZ0IsQUFHaEIsT0FIZ0I7YUFHaEIsQUFBTyxBQUNSOzs7OztBQU5xQixBLEFBMkJ4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
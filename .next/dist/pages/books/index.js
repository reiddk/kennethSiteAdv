"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _index3 = require("../../components/page/index");

var _index4 = _interopRequireDefault(_index3);

var _navbar = require("../../components/navbar/navbar");

var _navbar2 = _interopRequireDefault(_navbar);

var _header = require("../../components/header/header");

var _header2 = _interopRequireDefault(_header);

var _bookNav = require("../../components/bookNav/bookNav");

var _bookNav2 = _interopRequireDefault(_bookNav);

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
      contents: null,
      page: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IndexPage, [{
    key: "render",
    value: function render() {
      var bookHtml = null;
      if (this.props.page) {
        bookHtml = this.props.page;
      }
      if (this.state.page) {
        bookHtml = this.state.page;
      }
      return _react2.default.createElement("div", { className: "blogpost-component", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
      }, this.props.appName), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/bootstrap.min.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/styles.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_navbar2.default, { selected: this.state.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement("div", { className: "col-sm-9", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_index4.default, { html: bookHtml, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), _react2.default.createElement("div", { className: "col-sm-3 d-none d-md-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_bookNav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var nameToTitle, title, book, pageId, i, responseContents, contentsIndex, response, page, promise;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nameToTitle = [{ book: 'AdvancedCalculusSV', title: 'Advanced Calculus Single Variable' }, { book: 'Analysis', title: 'Analysis' }, { book: 'ComplexAnalysis', title: 'Complex Analysis' }, { book: 'ElementaryLinearAlgebra', title: 'Elementary Linear Algebra' }, { book: 'EngineeringMath', title: 'Engineering Math' }, { book: 'Linearalgebra', title: 'Linear Algebra' }, { book: 'LinearAlgebraAndAnalysis', title: 'Linear Algebra and Analysis' }, { book: 'TopicsInAnalysis', title: 'Topics In Analysis' }];
                title = "Kenneth Kuttler";
                book = null;
                pageId = query.page;

                if (query.book) {
                  for (i = 0; i < nameToTitle.length; i++) {
                    if (query.book.match(new RegExp(nameToTitle[i].book, 'i'))) {
                      title = nameToTitle[i].title;
                      book = nameToTitle[i].book;
                    }
                  }
                }
                _context.next = 7;
                return _axiosBooks2.default.get(book + '/contentsIndex.json');

              case 7:
                responseContents = _context.sent;
                contentsIndex = null;

                if (responseContents && responseContents.data) {
                  contentsIndex = responseContents.data;
                }

                _context.next = 12;
                return _axiosBooks2.default.get(book + '/' + pageId + '.html');

              case 12:
                response = _context.sent;
                page = null;

                if (response && response.data) {
                  page = response.data;
                }
                promise = new _promise2.default(function (resolve, reject) {
                  resolve({ appName: title, theBook: book, page: page, contents: contentsIndex });
                });
                return _context.abrupt("return", promise);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIkhlYWQiLCJheGlvcyIsIlBhZ2UiLCJOYXZiYXIiLCJIZWFkZXIiLCJCb29rTmF2IiwiSW5kZXhQYWdlIiwic3RhdGUiLCJ1cmwiLCJ0aXRsZSIsImNvbnRlbnRzIiwicGFnZSIsImJvb2tIdG1sIiwicHJvcHMiLCJhcHBOYW1lIiwicXVlcnkiLCJuYW1lVG9UaXRsZSIsImJvb2siLCJwYWdlSWQiLCJpIiwibGVuZ3RoIiwibWF0Y2giLCJSZWdFeHAiLCJnZXQiLCJyZXNwb25zZUNvbnRlbnRzIiwiY29udGVudHNJbmRleCIsImRhdGEiLCJyZXNwb25zZSIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlQm9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7Ozs7O0lBRWQsQTs7Ozs7Ozs7Ozs7Ozs7a04sQUFDSjtXQUFRLEFBQ0QsQUFDTDthQUZNLEFBRUMsQUFDUDtnQkFITSxBQUdJLEFBQ1Y7WUFKTSxBLEFBSUE7QUFKQSxBQUNOOzs7Ozs2QkE4Q08sQUFDUDtVQUFJLFdBQUosQUFBZSxBQUNmO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxNQUFNLEFBQ25CO21CQUFXLEtBQUEsQUFBSyxNQUFoQixBQUFzQixBQUN2QjtBQUNEO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxNQUFNLEFBQ25CO21CQUFXLEtBQUEsQUFBSyxNQUFoQixBQUFzQixBQUN2QjtBQUNEOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFFSTtBQUZKO09BQUEsa0JBRUksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BRGpCLEFBQ0ksQUFBbUIsQUFDbkIsa0RBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQUZKLEFBRUksQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFISixBQUdJLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBTlIsQUFFSSxBQUlJLEFBR0E7QUFIQTsyQkFHQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFVBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCO29CQUE3QjtzQkFWVixBQVNRLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQWJWLEFBWVEsQUFDRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxBQUFDLGlDQUFLLE1BQU4sQUFBWTtvQkFBWjtzQkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJOzJCQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO3lCQUNJLEFBQUM7O29CQUFEO3NCQXRCbEIsQUFDRSxBQWVRLEFBQ0EsQUFJSSxBQUNJLEFBTW5CO0FBTm1CO0FBQUE7Ozs7OztZQXRFVSxBLGNBQUEsQTs7Ozs7bUJBQ3hCO0EsOEJBQWMsQ0FDaEIsRUFBQyxNQUFELEFBQU8sc0JBQXNCLE9BRGIsQUFDaEIsQUFBb0MsdUNBQ3BDLEVBQUMsTUFBRCxBQUFPLFlBQVksT0FGSCxBQUVoQixBQUEwQixjQUMxQixFQUFDLE1BQUQsQUFBTyxtQkFBbUIsT0FIVixBQUdoQixBQUFpQyxzQkFDakMsRUFBQyxNQUFELEFBQU8sMkJBQTJCLE9BSmxCLEFBSWhCLEFBQXlDLCtCQUN6QyxFQUFDLE1BQUQsQUFBTyxtQkFBbUIsT0FMVixBQUtoQixBQUFpQyxzQkFDakMsRUFBQyxNQUFELEFBQU8saUJBQWlCLE9BTlIsQUFNaEIsQUFBK0Isb0JBQy9CLEVBQUMsTUFBRCxBQUFPLDRCQUE0QixPQVBuQixBQU9oQixBQUEwQyxpQ0FDMUMsRUFBQyxNQUFELEFBQU8sb0JBQW9CLE9BUlgsQUFRaEIsQUFBa0MsQUFHaEMsQTtBLHdCLEFBQVEsQUFDUjtBLHVCQUFPLEFBQ1AsQTtBLHlCQUFTLE1BQU0sQUFDbkIsQTs7b0JBQUksTUFBSixBQUFVLE1BQU0sQUFDZDt1QkFBQSxBQUFTLElBQVQsQUFBYSxHQUFHLElBQUksWUFBcEIsQUFBZ0MsUUFBaEMsQUFBd0MsS0FBSyxBQUMzQzt3QkFBSSxNQUFBLEFBQU0sS0FBTixBQUFXLE1BQU0sSUFBQSxBQUFJLE9BQU8sWUFBQSxBQUFZLEdBQXZCLEFBQTBCLE1BQS9DLEFBQUksQUFBaUIsQUFBZ0MsT0FBTyxBQUMxRDs4QkFBUSxZQUFBLEFBQVksR0FBcEIsQUFBdUIsQUFDdkI7NkJBQU8sWUFBQSxBQUFZLEdBQW5CLEFBQXNCLEFBQ3ZCO0FBQ0Y7QUFDRjs7O3VCQUM4QixxQkFBQSxBQUFNLElBQUksT0FBVixBQUFpQixBOzttQkFBMUM7QSw0Q0FDRjtBLGdDQUFnQixBQUNwQixBOztvQkFBRyxvQkFBb0IsaUJBQXZCLEFBQXdDLE1BQUssQUFDM0M7a0NBQWdCLGlCQUFoQixBQUFpQyxBQUNsQzs7Ozt1QkFFc0IscUJBQUEsQUFBTSxJQUFJLE9BQUEsQUFBTyxNQUFQLEFBQWEsUyxBQUF2QixBQUFnQzs7bUJBQWpEO0Esb0NBQ0Y7QSx1QkFBTyxBLEFBQ1g7O29CQUFHLFlBQVksU0FBZixBQUF3QixNQUFLLEFBQzNCO3lCQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFDSztBLGdEQUFzQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDN0M7MEJBQVEsRUFBRSxTQUFGLEFBQVcsT0FBTyxTQUFsQixBQUEyQixNQUFNLE1BQWpDLEFBQXVDLE1BQU0sVUFBckQsQUFBUSxBQUF1RCxBQUNsRTtBQUZlLEEsaUJBQUE7aURBR1QsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdDYSxBLEFBdUZ4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
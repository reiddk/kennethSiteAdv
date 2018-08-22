"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
          lineNumber: 97
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, this.props.appName), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/bootstrap.min.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/styles.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_navbar2.default, { selected: this.state.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("div", { className: "col-sm-9", __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_index4.default, { html: bookHtml, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), _react2.default.createElement("div", { className: "col-sm-3 d-none d-md-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_bookNav2.default, { contents: this.props.contents, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var nameToTitle, title, book, pageId, i, responseContents, contentsIndex, response, page, builtContents, tree, promise;
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
                builtContents = null;

                if (contentsIndex) {
                  tree = { part: "", chapter: "", section: "", subsection: "" };

                  builtContents = contentsIndex.map(function (page) {
                    if (page.type === 'part') {
                      tree['part'] = page.link;
                      tree['chapter'] = "";
                      tree['section'] = "";
                      tree['subsection'] = "";
                    }
                    if (page.type === 'chapter') {
                      tree['chapter'] = page.link;
                      tree['section'] = "";
                      tree['subsection'] = "";
                    }
                    if (page.type === 'section') {
                      tree['section'] = page.link;
                      tree['subsection'] = "";
                    }
                    if (page.type === 'subsection') {
                      tree['subsection'] = page.link;
                    }
                    var outPage = (0, _extends3.default)({}, page);
                    outPage['tree'] = (0, _extends3.default)({}, tree);
                    return outPage;
                  });
                }
                console.log(builtContents);

                promise = new _promise2.default(function (resolve, reject) {
                  resolve({ appName: title, theBook: book, page: page, contents: builtContents });
                });
                return _context.abrupt("return", promise);

              case 20:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsIkhlYWQiLCJheGlvcyIsIlBhZ2UiLCJOYXZiYXIiLCJIZWFkZXIiLCJCb29rTmF2IiwiSW5kZXhQYWdlIiwic3RhdGUiLCJ1cmwiLCJ0aXRsZSIsImNvbnRlbnRzIiwicGFnZSIsImJvb2tIdG1sIiwicHJvcHMiLCJhcHBOYW1lIiwicXVlcnkiLCJuYW1lVG9UaXRsZSIsImJvb2siLCJwYWdlSWQiLCJpIiwibGVuZ3RoIiwibWF0Y2giLCJSZWdFeHAiLCJnZXQiLCJyZXNwb25zZUNvbnRlbnRzIiwiY29udGVudHNJbmRleCIsImRhdGEiLCJyZXNwb25zZSIsImJ1aWx0Q29udGVudHMiLCJ0cmVlIiwicGFydCIsImNoYXB0ZXIiLCJzZWN0aW9uIiwic3Vic2VjdGlvbiIsIm1hcCIsInR5cGUiLCJsaW5rIiwib3V0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZUJvb2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7Ozs7Ozs7SUFFZCxBOzs7Ozs7Ozs7Ozs7OztrTixBQUNKO1dBQVEsQUFDRCxBQUNMO2FBRk0sQUFFQyxBQUNQO2dCQUhNLEFBR0ksQUFDVjtZQUpNLEFBSUEsQTtBQUpBLEFBQ047Ozs7OzZCQTJFTyxBQUNQO1VBQUksV0FBSixBQUFlLEFBQ2Y7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLE1BQU0sQUFDbkI7bUJBQVcsS0FBQSxBQUFLLE1BQWhC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Q0FBZ0IsQUFDcEIsQTs7b0JBQUcsb0JBQW9CLGlCQUF2QixBQUF3QyxNQUFLLEFBQzNDO2tDQUFnQixpQkFBaEIsQUFBaUMsQUFDbEM7Ozs7dUJBRXNCLHFCQUFBLEFBQU0sSUFBSSxPQUFBLEFBQU8sTUFBUCxBQUFhLFMsQUFBdkIsQUFBZ0M7O21CQUFqRDtBLG9DQUNGO0EsdUIsQUFBTyxBQUNYOztvQkFBRyxZQUFZLFNBQWYsQUFBd0IsTUFBSyxBQUMzQjt5QkFBTyxTQUFQLEFBQWdCLEFBQ2pCO0FBQ0c7QSxnQ0FBZ0IsQSxBQUNwQjs7b0JBQUEsQUFBSSxlQUFlLEFBQ1g7QUFEVyx5QkFDSixFQUFDLE1BQUQsQUFBTyxJQUFJLFNBQVgsQUFBb0IsSUFBSSxTQUF4QixBQUFpQyxJQUFJLFlBRGpDLEFBQ0osQUFBaUQsQUFDM0Q7O2dEQUFnQixBQUFjLElBQUksZ0JBQVEsQUFDekM7d0JBQUksS0FBQSxBQUFLLFNBQVQsQUFBa0IsUUFBUSxBQUN4QjsyQkFBQSxBQUFLLFVBQVUsS0FBZixBQUFvQixBQUNwQjsyQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7MkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCOzJCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDdEI7QUFDRDt3QkFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixXQUFXLEFBQzNCOzJCQUFBLEFBQUssYUFBYSxLQUFsQixBQUF1QixBQUN2QjsyQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7MkJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUN0QjtBQUNEO3dCQUFJLEtBQUEsQUFBSyxTQUFULEFBQWtCLFdBQVcsQUFDM0I7MkJBQUEsQUFBSyxhQUFhLEtBQWxCLEFBQXVCLEFBQ3ZCOzJCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDdEI7QUFDRDt3QkFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixjQUFjLEFBQzlCOzJCQUFBLEFBQUssZ0JBQWdCLEtBQXJCLEFBQTBCLEFBQzNCO0FBQ0Q7d0JBQU0scUNBQU4sQUFBTSxBQUFjLEFBQ3BCOzRCQUFBLEFBQVEscUNBQVIsQUFBc0IsQUFDdEI7MkJBQUEsQUFBTyxBQUNSO0FBdEJBLEFBQWdCLEFBdUJwQixtQkF2Qm9CO0FBd0JuQjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUVSOztBLGdEQUFzQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDN0M7MEJBQVEsRUFBRSxTQUFGLEFBQVcsT0FBTyxTQUFsQixBQUEyQixNQUFNLE1BQWpDLEFBQXVDLE1BQU0sVUFBckQsQUFBUSxBQUF1RCxBQUNsRTtBQUZlLEEsaUJBQUE7aUQsQUFHVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTFFYSxBLEFBb0h4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
webpackHotUpdate(5,{

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(49);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(50);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(52);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(377);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(70);

var _index2 = _interopRequireDefault(_index);

var _head = __webpack_require__(366);

var _head2 = _interopRequireDefault(_head);

var _axiosBooks = __webpack_require__(443);

var _axiosBooks2 = _interopRequireDefault(_axiosBooks);

var _reactRenderHtml = __webpack_require__(463);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/reid/repos/kennethSiteAdv/pages/books/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/reid/repos/kennethSiteAdv/pages/books/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(81)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/books")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43MmI5MzA4MDI0MzZlZTE3NGZmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYm9va3M/MmU2NGJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9heGlvc0Jvb2tzJztcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXJsOiBudWxsLFxuICAgIHRpdGxlOiAnS2VubmV0aCBLdXR0bGVyJyxcbiAgICBjb250ZW50czogbnVsbFxuICB9XG5cbiAgZ2V0Qm9vayh1cmwpIHtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnRzOiBjb250ZW50cyB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiBlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50aGVVcmwpIHtcbiAgICAgIHRoaXMuZ2V0Qm9vayh0aGlzLnByb3BzLnRoZVVybCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmKHByZXZQcm9wcy50aGVVcmwgIT09IHRoaXMucHJvcHMudGhlVXJsKSB7XG4gICAgICB0aGlzLmdldEJvb2sodGhpcy5wcm9wcy50aGVVcmwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGxldCBuYW1lVG9UaXRsZSA9IFtcbiAgICAgIHt1cmw6ICdBZHZhbmNlZENhbGN1bHVzU1YvY29udGVudHNJbmRleC5qc29uJywgdGl0bGU6ICdBZHZhbmNlZCBDYWxjdWx1cyBTaW5nbGUgVmFyaWFibGUnfSxcbiAgICAgIHt1cmw6ICdBbmFseXNpcy9jb250ZW50c0luZGV4Lmpzb24nLCB0aXRsZTogJ0FuYWx5c2lzJ30sXG4gICAgICB7dXJsOiAnQ29tcGxleEFuYWx5c2lzL2NvbnRlbnRzSW5kZXguanNvbicsIHRpdGxlOiAnQ29tcGxleCBBbmFseXNpcyd9LFxuICAgICAge3VybDogJ0VsZW1lbnRhcnlMaW5lYXJBbGdlYnJhL2NvbnRlbnRzSW5kZXguanNvbicsIHRpdGxlOiAnRWxlbWVudGFyeSBMaW5lYXIgQWxnZWJyYSd9LFxuICAgICAge3VybDogJ0VuZ2luZWVyaW5nTWF0aC9jb250ZW50c0luZGV4Lmpzb24nLCB0aXRsZTogJ0VuZ2luZWVyaW5nIE1hdGgnfSxcbiAgICAgIHt1cmw6ICdMaW5lYXJhbGdlYnJhL2NvbnRlbnRzSW5kZXguanNvbicsIHRpdGxlOiAnTGluZWFyIEFsZ2VicmEnfSxcbiAgICAgIHt1cmw6ICdMaW5lYXJBbGdlYnJhQW5kQW5hbHlzaXMvY29udGVudHNJbmRleC5qc29uJywgdGl0bGU6ICdMaW5lYXIgQWxnZWJyYSBhbmQgQW5hbHlzaXMnfSxcbiAgICAgIHt1cmw6ICdUb3BpY3NJbkFuYWx5c2lzL2NvbnRlbnRzSW5kZXguanNvbicsIHRpdGxlOiAnVG9waWNzIEluIEFuYWx5c2lzJ30sXG4gICAgXTtcbiAgICBsZXQgdGl0bGUgPSBcIktlbm5ldGggS3V0dGxlclwiO1xuICAgIGxldCB1cmwgPSBudWxsO1xuICAgIGlmIChxdWVyeS5zbHVnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVUb1RpdGxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChxdWVyeS5zbHVnLm1hdGNoKG5ldyBSZWdFeHAobmFtZVRvVGl0bGVbaV0sICdpJykpKSB7XG4gICAgICAgICAgdGl0bGUgPSBuYW1lVG9UaXRsZVtpXS50aXRsZTtcbiAgICAgICAgICB1cmwgPSBuYW1lVG9UaXRsZVtpXS51cmw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7IGFwcE5hbWU6IHRpdGxlLCB0aGVVcmw6IHVybCB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0h0bWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLmh0bWwpIHtcbiAgICAgIGJvb2tIdG1sID0gdGhpcy5zdGF0ZS5odG1sO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ3Bvc3QtY29tcG9uZW50XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLmFwcE5hbWV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtTUN3OTgvU0ZuR0U4ZkpUM0dYd0VPbmdzVjdadDI3TlhGb2FvQXBtWW04MWl1WG9Qa0ZPSndKOEVSZGtuTFBNT1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYm9va3M/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOzs7O0FBOEJBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUpBOzs7OztBQXBDQTtBQUFBO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
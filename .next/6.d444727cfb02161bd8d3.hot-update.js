webpackHotUpdate(6,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _propTypes = __webpack_require__(59);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(495);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/reid/repos/kennethSiteAdv/components/navbar/navbar.js';


var Navbar = function (_Component) {
	(0, _inherits3.default)(Navbar, _Component);

	function Navbar(props) {
		(0, _classCallCheck3.default)(this, Navbar);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this, props));

		_this.state = {
			showDropDown: false,
			showMobileDown: false
		};

		_this.toggleDropDownHandler = function () {
			var dropDown = _this.state.showDropDown;
			dropDown = !dropDown;
			_this.setState({ showDropDown: dropDown });
		};

		_this.toggleMobileDownHandler = function () {
			var dropDown = _this.state.showMobileDown;
			dropDown = !dropDown;
			_this.setState({ showMobileDown: dropDown });
		};

		_this.hideDropDownHandler = function () {
			_this.setState({ showDropDown: false, showMobileDown: false });
		};

		_this.setWrapperRef = _this.setWrapperRef.bind(_this);
		_this.handleClickOutside = _this.handleClickOutside.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Navbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('mousedown', this.handleClickOutside);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('mousedown', this.handleClickOutside);
		}
	}, {
		key: 'setWrapperRef',
		value: function setWrapperRef(node) {
			this.wrapperRef = node;
		}
	}, {
		key: 'handleClickOutside',
		value: function handleClickOutside(event) {
			if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
				this.hideDropDownHandler();
			}
		}
	}, {
		key: 'render',
		value: function render() {

			var dropDownClasses = ['dropdown-menu'];
			if (this.state && this.state.showDropDown) {
				dropDownClasses.push("showDropDown");
			}
			var wrapperRef = null;
			if (this.setWrapperRef) {
				wrapperRef = this.setWrapperRef;
			}
			var mobileDropDown = ['collapse', 'navbar-collapse'];
			if (this.state && this.state.showMobileDown) {
				mobileDropDown.push('show');
			}

			return _react2.default.createElement('nav', { className: 'navbar navbar-expand-md fixed-top navbar-dark bg-dark', ref: wrapperRef, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, 'Kenneth Kuttler')), _react2.default.createElement('button', { onClick: this.toggleMobileDownHandler, className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement('span', { className: 'navbar-toggler-icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			})), _react2.default.createElement('div', { className: mobileDropDown.join(" "), id: 'navbarSupportedContent', __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('li', { className: 'nav-item active', __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement('a', { className: 'nav-link', href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, 'Home'))), _react2.default.createElement('li', { className: 'nav-item dropdown', __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement('span', { onClick: this.toggleDropDownHandler, className: 'nav-link dropdown-toggle', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, 'Books'), _react2.default.createElement('div', { onClick: this.hideDropDownHandler, className: dropDownClasses.join(" "), 'aria-labelledby': 'navbarDropdown', __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement(_routes.Link, { route: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, 'Advanced Calculus (Single Variable)')), _react2.default.createElement(_routes.Link, { route: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, 'Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, 'Complex Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, 'Elementary Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, 'Engineering Math')), _react2.default.createElement(_routes.Link, { route: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, 'Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, 'Linear Algebra and Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, 'Topics in Analysis')))))));
		}
	}]);

	return Navbar;
}(_react.Component);

;

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkxpbmsiLCJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwic2hvd0Ryb3BEb3duIiwic2hvd01vYmlsZURvd24iLCJ0b2dnbGVEcm9wRG93bkhhbmRsZXIiLCJkcm9wRG93biIsInNldFN0YXRlIiwidG9nZ2xlTW9iaWxlRG93bkhhbmRsZXIiLCJoaWRlRHJvcERvd25IYW5kbGVyIiwic2V0V3JhcHBlclJlZiIsImJpbmQiLCJoYW5kbGVDbGlja091dHNpZGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsIndyYXBwZXJSZWYiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZHJvcERvd25DbGFzc2VzIiwicHVzaCIsIm1vYmlsZURyb3BEb3duIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7aUNBT047O2lCQUFBLEFBQVksT0FBTztzQ0FBQTs7b0lBQUEsQUFDWjs7UUFOUCxBQUttQjtpQkFMWCxBQUNPLEFBQ2Q7bUJBRk8sQUFFUyxBQUdFO0FBTFgsQUFDUDs7UUFJa0IsQUFtQm5CLHdCQUF3QixZQUFNLEFBQzdCO09BQUksV0FBVyxNQUFBLEFBQUssTUFBcEIsQUFBMEIsQUFDMUI7Y0FBVyxDQUFYLEFBQVksQUFDWjtTQUFBLEFBQUssU0FBUyxFQUFDLGNBQWYsQUFBYyxBQUFlLEFBQzdCO0FBdkJrQjs7UUFBQSxBQXlCbkIsMEJBQTBCLFlBQU0sQUFDL0I7T0FBSSxXQUFXLE1BQUEsQUFBSyxNQUFwQixBQUEwQixBQUMxQjtjQUFXLENBQVgsQUFBWSxBQUNaO1NBQUEsQUFBSyxTQUFTLEVBQUMsZ0JBQWYsQUFBYyxBQUFpQixBQUMvQjtBQTdCa0I7O1FBQUEsQUErQm5CLHNCQUFzQixZQUFNLEFBQzNCO1NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBRCxBQUFlLE9BQU8sZ0JBQXBDLEFBQWMsQUFBc0MsQUFDcEQ7QUFqQ2tCLEFBR2xCOztRQUFBLEFBQUssZ0JBQWdCLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBQXhDLEFBQ0E7UUFBQSxBQUFLLHFCQUFxQixNQUFBLEFBQUssbUJBQUwsQUFBd0IsS0FKaEMsQUFJbEI7U0FDQTs7Ozs7c0NBRW1CLEFBQ25CO1lBQUEsQUFBUyxpQkFBVCxBQUEwQixhQUFhLEtBQXZDLEFBQTRDLEFBQzVDOzs7O3lDQUVzQixBQUN0QjtZQUFBLEFBQVMsb0JBQVQsQUFBNkIsYUFBYSxLQUExQyxBQUErQyxBQUMvQzs7OztnQ0FFYSxBLE1BQU0sQUFDbkI7UUFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7Ozs7cUNBa0JrQixBLE9BQU8sQUFDekI7T0FBSSxLQUFBLEFBQUssY0FBYyxDQUFDLEtBQUEsQUFBSyxXQUFMLEFBQWdCLFNBQVMsTUFBakQsQUFBd0IsQUFBK0IsU0FBUyxBQUMvRDtTQUFBLEFBQUssQUFDTDtBQUNEOzs7OzJCQUdRLEFBRVI7O09BQUksa0JBQWtCLENBQXRCLEFBQXNCLEFBQUMsQUFDdkI7T0FBSSxLQUFBLEFBQUssU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkIsY0FBYyxBQUMxQztvQkFBQSxBQUFnQixLQUFoQixBQUFxQixBQUNyQjtBQUNEO09BQUksYUFBSixBQUFpQixBQUNqQjtPQUFJLEtBQUosQUFBUyxlQUFlLEFBQ3ZCO2lCQUFhLEtBQWIsQUFBa0IsQUFDbEI7QUFDRDtPQUFJLGlCQUFpQixDQUFBLEFBQUMsWUFBdEIsQUFBcUIsQUFBYSxBQUNsQztPQUFJLEtBQUEsQUFBSyxTQUFTLEtBQUEsQUFBSyxNQUF2QixBQUE2QixnQkFBZ0IsQUFDNUM7bUJBQUEsQUFBZSxLQUFmLEFBQW9CLEFBQ3BCO0FBRUQ7OzBCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWUseURBQXdELEtBQXZFLEFBQTRFO2VBQTVFO2lCQUFBLEFBQ0E7QUFEQTtJQUFBLGtCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsTUFBNUIsQUFBaUM7ZUFBakM7aUJBQUE7QUFBQTtNQUZGLEFBQ0EsQUFDRSxBQUVBLHFDQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCLHlCQUF5QixXQUEvQyxBQUF5RCxrQkFBaUIsTUFBMUUsQUFBK0UsVUFBUyxlQUF4RixBQUFvRyxZQUFXLGVBQS9HLEFBQTJILDJCQUEwQixpQkFBckosQUFBbUssMEJBQXlCLGlCQUE1TCxBQUEwTSxTQUFRLGNBQWxOLEFBQTZOO2VBQTdOO2lCQUFBLEFBQ0U7QUFERjs4Q0FDUSxXQUFOLEFBQWdCO2VBQWhCO2lCQUxKLEFBSUUsQUFDRSxBQUdGO0FBSEU7d0JBR0YsY0FBQSxTQUFLLFdBQVcsZUFBQSxBQUFlLEtBQS9CLEFBQWdCLEFBQW9CLE1BQU0sSUFBMUMsQUFBNkM7ZUFBN0M7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7ZUFBZDtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztlQUFkO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLFlBQVcsTUFBeEIsQUFBNkI7ZUFBN0I7aUJBQUE7QUFBQTtNQUhKLEFBQ0UsQUFDQSxBQUNFLEFBR0YsMkJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztlQUFkO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLFVBQU0sU0FBUyxLQUFmLEFBQW9CLHVCQUF1QixXQUEzQyxBQUFxRCw0QkFBMkIsSUFBaEYsQUFBbUYsa0JBQWlCLE1BQXBHLEFBQXlHLFVBQVMsZUFBbEgsQUFBOEgsWUFBVyxpQkFBekksQUFBdUosUUFBTyxpQkFBOUosQUFBNEs7ZUFBNUs7aUJBQUE7QUFBQTtNQURGLEFBQ0UsQUFHQSwwQkFBQSxjQUFBLFNBQUssU0FBUyxLQUFkLEFBQW1CLHFCQUFxQixXQUFXLGdCQUFBLEFBQWdCLEtBQW5FLEFBQW1ELEFBQXFCLE1BQU0sbUJBQTlFLEFBQThGO2VBQTlGO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BRkYsQUFDQSxBQUNFLEFBRUYseURBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQUxGLEFBSUEsQUFDRSxBQUVGLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFSRixBQU9BLEFBQ0UsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BWEYsQUFVQSxBQUNFLEFBRUYsK0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQWRGLEFBYUEsQUFDRSxBQUVGLHNDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFqQkYsQUFnQkEsQUFDRSxBQUVGLG9DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFwQkYsQUFtQkEsQUFDRSxBQUVGLGlEQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUEzQ1gsQUFDQyxBQVFFLEFBQ0UsQUFNRSxBQUlFLEFBc0JBLEFBQ0UsQUFRWDs7Ozs7QUFuSG9CLEE7O0FBcUhwQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/reid/repos/kennethSiteAdv/components/navbar/navbar.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/reid/repos/kennethSiteAdv/components/navbar/navbar.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5kNDQ0NzI3Y2ZiMDIxNjFiZDhkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzP2E5NzJhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uL3JvdXRlcydcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuc3RhdGUgPSB7XG5cdHNob3dEcm9wRG93bjogZmFsc2UsXG5cdHNob3dNb2JpbGVEb3duOiBmYWxzZVxufVxuXG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRzdXBlcihwcm9wcyk7XG5cblx0dGhpcy5zZXRXcmFwcGVyUmVmID0gdGhpcy5zZXRXcmFwcGVyUmVmLmJpbmQodGhpcyk7XG5cdHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbn1cblxuY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbn1cblxuY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbn1cblxuc2V0V3JhcHBlclJlZihub2RlKSB7XG5cdHRoaXMud3JhcHBlclJlZiA9IG5vZGU7XG59XG5cbnRvZ2dsZURyb3BEb3duSGFuZGxlciA9ICgpID0+IHtcblx0bGV0IGRyb3BEb3duID0gdGhpcy5zdGF0ZS5zaG93RHJvcERvd247XG5cdGRyb3BEb3duID0gIWRyb3BEb3duO1xuXHR0aGlzLnNldFN0YXRlKHtzaG93RHJvcERvd246IGRyb3BEb3dufSk7XG59XG5cbnRvZ2dsZU1vYmlsZURvd25IYW5kbGVyID0gKCkgPT4ge1xuXHRsZXQgZHJvcERvd24gPSB0aGlzLnN0YXRlLnNob3dNb2JpbGVEb3duO1xuXHRkcm9wRG93biA9ICFkcm9wRG93bjtcblx0dGhpcy5zZXRTdGF0ZSh7c2hvd01vYmlsZURvd246IGRyb3BEb3dufSk7XG59XG5cbmhpZGVEcm9wRG93bkhhbmRsZXIgPSAoKSA9PiB7XG5cdHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wRG93bjogZmFsc2UsIHNob3dNb2JpbGVEb3duOiBmYWxzZX0pO1xufVxuXG5oYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcblx0aWYgKHRoaXMud3JhcHBlclJlZiAmJiAhdGhpcy53cmFwcGVyUmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHR0aGlzLmhpZGVEcm9wRG93bkhhbmRsZXIoKTtcblx0fVxufVxuXG5cbnJlbmRlcigpIHtcblxuXHRsZXQgZHJvcERvd25DbGFzc2VzID0gWydkcm9wZG93bi1tZW51J107XG5cdGlmICh0aGlzLnN0YXRlICYmIHRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duKSB7XG5cdFx0ZHJvcERvd25DbGFzc2VzLnB1c2goXCJzaG93RHJvcERvd25cIik7XG5cdH1cblx0bGV0IHdyYXBwZXJSZWYgPSBudWxsO1xuXHRpZiAodGhpcy5zZXRXcmFwcGVyUmVmKSB7XG5cdFx0d3JhcHBlclJlZiA9IHRoaXMuc2V0V3JhcHBlclJlZlxuXHR9XG5cdGxldCBtb2JpbGVEcm9wRG93biA9IFsnY29sbGFwc2UnLCAnbmF2YmFyLWNvbGxhcHNlJ107XG5cdGlmICh0aGlzLnN0YXRlICYmIHRoaXMuc3RhdGUuc2hvd01vYmlsZURvd24pIHtcblx0XHRtb2JpbGVEcm9wRG93bi5wdXNoKCdzaG93Jyk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmtcIiByZWY9e3dyYXBwZXJSZWZ9PlxuXHRcdDxMaW5rIHJvdXRlPScvJz5cblx0XHQgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+S2VubmV0aCBLdXR0bGVyPC9hPlxuXHRcdDwvTGluaz5cblx0XHQgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb2JpbGVEb3duSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuXHRcdCAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuXHRcdCAgPC9idXR0b24+XG5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPXttb2JpbGVEcm9wRG93bi5qb2luKFwiIFwiKX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG5cdFx0ICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cblx0XHQgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG5cdFx0ICAgICAgPExpbmsgcm91dGU9Jy8nPlxuXHRcdCAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPkhvbWU8L2E+XG5cdFx0ICAgICAgPC9MaW5rPlxuXHRcdCAgICAgIDwvbGk+XG5cdFx0ICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XG5cdFx0ICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3BEb3duSGFuZGxlcn0gY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaWQ9XCJuYXZiYXJEcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHQgICAgICAgICAgQm9va3Ncblx0XHQgICAgICAgIDwvc3Bhbj5cblx0XHQgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oaWRlRHJvcERvd25IYW5kbGVyfSBjbGFzc05hbWU9e2Ryb3BEb3duQ2xhc3Nlcy5qb2luKFwiIFwiKX0gYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cblx0XHQgICAgICAgIDxMaW5rIHJvdXRlPScvYm9va3MvQWR2YW5jZWRDYWxjdWx1c1NWL3gxLTIwMDAxJz5cblx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYm9va3MvQWR2YW5jZWRDYWxjdWx1c1NWL3gxLTIwMDAxXCI+QWR2YW5jZWQgQ2FsY3VsdXMgKFNpbmdsZSBWYXJpYWJsZSk8L2E+XG5cdFx0ICAgICAgICA8L0xpbms+XG5cdFx0ICAgICAgICA8TGluayByb3V0ZT0nL2Jvb2tzL0FuYWx5c2lzL3gxLTIwMDBJJz5cblx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYm9va3MvQW5hbHlzaXMveDEtMjAwMElcIj5BbmFseXNpczwvYT5cblx0XHQgICAgICAgIDwvTGluaz5cblx0XHQgICAgICAgIDxMaW5rIHJvdXRlPScvYm9va3MvQ29tcGxleEFuYWx5c2lzL3gxLTMwMDBJJz5cblx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYm9va3MvQ29tcGxleEFuYWx5c2lzL3gxLTMwMDBJXCI+Q29tcGxleCBBbmFseXNpczwvYT5cblx0XHQgICAgICAgIDwvTGluaz5cblx0XHQgICAgICAgIDxMaW5rIHJvdXRlPScvYm9va3MvRWxlbWVudGFyeUxpbmVhckFsZ2VicmEveDEtMzAwMDEnPlxuXHRcdCAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9ib29rcy9FbGVtZW50YXJ5TGluZWFyQWxnZWJyYS94MS0zMDAwMVwiPkVsZW1lbnRhcnkgTGluZWFyIEFsZ2VicmE8L2E+XG5cdFx0ICAgICAgICA8L0xpbms+XG5cdFx0ICAgICAgICA8TGluayByb3V0ZT0nL2Jvb2tzL0VuZ2luZWVyaW5nTWF0aC94MS0yMDAwMSc+XG5cdFx0ICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2Jvb2tzL0VuZ2luZWVyaW5nTWF0aC94MS0yMDAwMVwiPkVuZ2luZWVyaW5nIE1hdGg8L2E+XG5cdFx0ICAgICAgICA8L0xpbms+XG5cdFx0ICAgICAgICA8TGluayByb3V0ZT0nL2Jvb2tzL0xpbmVhcmFsZ2VicmEveDEtMzAwMDEnPlxuXHRcdCAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9ib29rcy9MaW5lYXJhbGdlYnJhL3gxLTMwMDAxXCI+TGluZWFyIEFsZ2VicmE8L2E+XG5cdFx0ICAgICAgICA8L0xpbms+XG5cdFx0ICAgICAgICA8TGluayByb3V0ZT0nL2Jvb2tzL0xpbmVhckFsZ2VicmFBbmRBbmFseXNpcy94MS0zMDAwMSc+XG5cdFx0ICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2Jvb2tzL0xpbmVhckFsZ2VicmFBbmRBbmFseXNpcy94MS0zMDAwMVwiPkxpbmVhciBBbGdlYnJhIGFuZCBBbmFseXNpczwvYT5cblx0XHQgICAgICAgIDwvTGluaz5cblx0XHQgICAgICAgIDxMaW5rIHJvdXRlPScvYm9va3MvVG9waWNzSW5BbmFseXNpcy94MS0yMDAwSSc+XG5cdFx0ICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiL2Jvb2tzL1RvcGljc0luQW5hbHlzaXMveDEtMjAwMElcIj5Ub3BpY3MgaW4gQW5hbHlzaXM8L2E+XG5cdFx0ICAgICAgICA8L0xpbms+XG5cdFx0ICAgICAgICA8L2Rpdj5cblx0XHQgICAgICA8L2xpPlxuXHRcdCAgICA8L3VsPlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9uYXY+XG5cdCk7XG59XG5cbn07IFxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSEE7QUFHQTtBQUpBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUNBO0FBOEJBO0FBQ0E7QUE3QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFvQkE7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _routes = require('../../routes');

var _Aux = require('../hoc/Aux/Aux');

var _Aux2 = _interopRequireDefault(_Aux);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/reid/repos/kennethSiteAdv/components/navbar/navbar.js';


_index2.default.onRouteChangeStart = function (url) {
	_nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
	return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
	return _nprogress2.default.done();
};

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
			var dropDownClasses = ['dropdown-menu', 'd-none d-md-block'];
			var arrowUpDown = _react2.default.createElement('i', { 'class': 'fa fa-sort-desc', 'aria-hidden': 'true', __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			});
			if (this.state && this.state.showDropDown) {
				dropDownClasses.push("showDropDown");
				arrowUpDown = _react2.default.createElement('i', { 'class': 'fa fa-sort-asc', 'aria-hidden': 'true', __source: {
						fileName: _jsxFileName,
						lineNumber: 72
					}
				});
			}
			var wrapperRef = null;
			if (this.setWrapperRef) {
				wrapperRef = this.setWrapperRef;
			}
			var mobileDropDown = ['collapse', 'navbar-collapse'];
			if (this.state && this.state.showMobileDown) {
				mobileDropDown.push('show');
			}

			return _react2.default.createElement(_Aux2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/nprogress.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			})), _react2.default.createElement('nav', { className: 'navbar navbar-expand-md fixed-top navbar-dark bg-dark', ref: wrapperRef, __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, 'Kenneth Kuttler')), _react2.default.createElement('button', { onClick: this.toggleMobileDownHandler, className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement('span', { className: 'navbar-toggler-icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			})), _react2.default.createElement('div', { className: mobileDropDown.join(" "), id: 'navbarSupportedContent', __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, _react2.default.createElement('li', { className: 'nav-item active', __source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement('a', { className: 'nav-link', href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, 'Home'))), _react2.default.createElement('li', { className: 'nav-item dropdown', __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement('span', { onClick: this.toggleDropDownHandler, className: 'nav-link', id: 'navbarDropdown', role: 'button', __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, 'Books ', arrowUpDown), _react2.default.createElement('div', { onClick: this.hideDropDownHandler, className: dropDownClasses.join(" "), 'aria-labelledby': 'navbarDropdown', __source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement(_routes.Link, { route: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, 'Advanced Calculus (Single Variable)')), _react2.default.createElement(_routes.Link, { route: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, 'Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, 'Complex Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}, 'Elementary Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 121
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			}, 'Engineering Math')), _react2.default.createElement(_routes.Link, { route: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, 'Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, 'Linear Algebra and Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, 'Topics in Analysis'))), _react2.default.createElement('div', { onClick: this.hideDropDownHandler, className: 'd-md-none dropdown-menu showDropDown', 'aria-labelledby': 'navbarDropdown', __source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, _react2.default.createElement(_routes.Link, { route: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/AdvancedCalculusSV/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, 'Advanced Calculus (Single Variable)')), _react2.default.createElement(_routes.Link, { route: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Analysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, 'Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ComplexAnalysis/x1-3000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, 'Complex Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/ElementaryLinearAlgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}, 'Elementary Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/EngineeringMath/x1-20001', __source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, 'Engineering Math')), _react2.default.createElement(_routes.Link, { route: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/Linearalgebra/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}, 'Linear Algebra')), _react2.default.createElement(_routes.Link, { route: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/LinearAlgebraAndAnalysis/x1-30001', __source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}, 'Linear Algebra and Analysis')), _react2.default.createElement(_routes.Link, { route: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			}, _react2.default.createElement('a', { className: 'dropdown-item', href: '/books/TopicsInAnalysis/x1-2000I', __source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, 'Topics in Analysis'))))))));
		}
	}]);

	return Navbar;
}(_react.Component);

;

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkhlYWQiLCJMaW5rIiwiQXV4IiwiTlByb2dyZXNzIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiTmF2YmFyIiwicHJvcHMiLCJzdGF0ZSIsInNob3dEcm9wRG93biIsInNob3dNb2JpbGVEb3duIiwidG9nZ2xlRHJvcERvd25IYW5kbGVyIiwiZHJvcERvd24iLCJzZXRTdGF0ZSIsInRvZ2dsZU1vYmlsZURvd25IYW5kbGVyIiwiaGlkZURyb3BEb3duSGFuZGxlciIsInNldFdyYXBwZXJSZWYiLCJiaW5kIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ3cmFwcGVyUmVmIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRyb3BEb3duQ2xhc3NlcyIsImFycm93VXBEb3duIiwicHVzaCIsIm1vYmlsZURyb3BEb3duIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsZ0JBQUEsQUFBTyxxQkFBcUIsVUFBQSxBQUFDLEtBQVEsQUFDbkM7cUJBQUEsQUFBVSxBQUNYO0FBRkQ7QUFHQSxnQkFBQSxBQUFPLHdCQUF3QixZQUFBO1FBQU0sb0JBQU4sQUFBTSxBQUFVO0FBQS9DO0FBQ0EsZ0JBQUEsQUFBTyxxQkFBcUIsWUFBQTtRQUFNLG9CQUFOLEFBQU0sQUFB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bEM7aUJBQUE7QUFBQTtNQTVCSixBQUtFLEFBc0JBLEFBQ0UsQUFJRix5Q0FBQSxjQUFBLFNBQUssU0FBUyxLQUFkLEFBQW1CLHFCQUFxQixXQUF4QyxBQUFrRCx3Q0FBdUMsbUJBQXpGLEFBQXlHO2VBQXpHO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BRkYsQUFDQSxBQUNFLEFBRUYseURBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQUxGLEFBSUEsQUFDRSxBQUVGLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFSRixBQU9BLEFBQ0UsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BWEYsQUFVQSxBQUNFLEFBRUYsK0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQWRGLEFBYUEsQUFDRSxBQUVGLHNDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFqQkYsQUFnQkEsQUFDRSxBQUVGLG9DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFwQkYsQUFtQkEsQUFDRSxBQUVGLGlEQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUEzRVgsQUFDQyxBQUlBLEFBUUUsQUFDRSxBQU1FLEFBZ0NFLEFBc0JBLEFBQ0UsQUFTWDs7Ozs7QUFySm9CLEE7O0FBdUpwQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
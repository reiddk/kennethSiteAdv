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
	console.log('Loading: ' + url);
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
			}, _react2.default.createElement('span', { onClick: this.toggleDropDownHandler, className: 'nav-link dropdown-toggle', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, 'Books'), _react2.default.createElement('div', { onClick: this.hideDropDownHandler, className: dropDownClasses.join(" "), 'aria-labelledby': 'navbarDropdown', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkhlYWQiLCJMaW5rIiwiQXV4IiwiTlByb2dyZXNzIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiY29uc29sZSIsImxvZyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIk5hdmJhciIsInByb3BzIiwic3RhdGUiLCJzaG93RHJvcERvd24iLCJzaG93TW9iaWxlRG93biIsInRvZ2dsZURyb3BEb3duSGFuZGxlciIsImRyb3BEb3duIiwic2V0U3RhdGUiLCJ0b2dnbGVNb2JpbGVEb3duSGFuZGxlciIsImhpZGVEcm9wRG93bkhhbmRsZXIiLCJzZXRXcmFwcGVyUmVmIiwiYmluZCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub2RlIiwid3JhcHBlclJlZiIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkcm9wRG93bkNsYXNzZXMiLCJwdXNoIiwibW9iaWxlRHJvcERvd24iLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxnQkFBQSxBQUFPLHFCQUFxQixVQUFBLEFBQUMsS0FBUSxBQUNuQztTQUFBLEFBQVEsa0JBQVIsQUFBd0IsQUFDeEI7cUJBQUEsQUFBVSxBQUNYO0FBSEQ7QUFJQSxnQkFBQSxBQUFPLHdCQUF3QixZQUFBO1FBQU0sb0JBQU4sQUFBTSxBQUFVO0FBQS9DO0FBQ0EsZ0JBQUEsQUFBTyxx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ZCxBQUFtQixxQkFBcUIsV0FBeEMsQUFBa0Qsd0NBQXVDLG1CQUF6RixBQUF5RztlQUF6RztpQkFBQSxBQUNBO0FBREE7c0JBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQUZGLEFBQ0EsQUFDRSxBQUVGLHlEQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFMRixBQUlBLEFBQ0UsQUFFRiw4QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BUkYsQUFPQSxBQUNFLEFBRUYsc0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQVhGLEFBVUEsQUFDRSxBQUVGLCtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFkRixBQWFBLEFBQ0UsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BakJGLEFBZ0JBLEFBQ0UsQUFFRixvQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BcEJGLEFBbUJBLEFBQ0UsQUFFRixpREFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BM0VYLEFBQ0MsQUFJQSxBQVFFLEFBQ0UsQUFNRSxBQWdDRSxBQXNCQSxBQUNFLEFBU1g7Ozs7O0FBcEpvQixBOztBQXNKcEIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJuYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmVpZC9yZXBvcy9rZW5uZXRoU2l0ZUFkdiJ9
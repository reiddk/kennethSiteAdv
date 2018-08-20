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

var _routes = require('../../routes');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkxpbmsiLCJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwic2hvd0Ryb3BEb3duIiwic2hvd01vYmlsZURvd24iLCJ0b2dnbGVEcm9wRG93bkhhbmRsZXIiLCJkcm9wRG93biIsInNldFN0YXRlIiwidG9nZ2xlTW9iaWxlRG93bkhhbmRsZXIiLCJoaWRlRHJvcERvd25IYW5kbGVyIiwic2V0V3JhcHBlclJlZiIsImJpbmQiLCJoYW5kbGVDbGlja091dHNpZGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsIndyYXBwZXJSZWYiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZHJvcERvd25DbGFzc2VzIiwicHVzaCIsIm1vYmlsZURyb3BEb3duIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7aUNBT047O2lCQUFBLEFBQVksT0FBTztzQ0FBQTs7b0lBQUEsQUFDWjs7UUFOUCxBQUttQjtpQkFMWCxBQUNPLEFBQ2Q7bUJBRk8sQUFFUyxBQUdFO0FBTFgsQUFDUDs7UUFJa0IsQUFtQm5CLHdCQUF3QixZQUFNLEFBQzdCO09BQUksV0FBVyxNQUFBLEFBQUssTUFBcEIsQUFBMEIsQUFDMUI7Y0FBVyxDQUFYLEFBQVksQUFDWjtTQUFBLEFBQUssU0FBUyxFQUFDLGNBQWYsQUFBYyxBQUFlLEFBQzdCO0FBdkJrQjs7UUFBQSxBQXlCbkIsMEJBQTBCLFlBQU0sQUFDL0I7T0FBSSxXQUFXLE1BQUEsQUFBSyxNQUFwQixBQUEwQixBQUMxQjtjQUFXLENBQVgsQUFBWSxBQUNaO1NBQUEsQUFBSyxTQUFTLEVBQUMsZ0JBQWYsQUFBYyxB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OUosQUFBNEs7ZUFBNUs7aUJBQUE7QUFBQTtNQURGLEFBQ0UsQUFHQSwwQkFBQSxjQUFBLFNBQUssU0FBUyxLQUFkLEFBQW1CLHFCQUFxQixXQUFXLGdCQUFBLEFBQWdCLEtBQW5FLEFBQW1ELEFBQXFCLE1BQU0sbUJBQTlFLEFBQThGO2VBQTlGO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BRkYsQUFDQSxBQUNFLEFBRUYseURBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQUxGLEFBSUEsQUFDRSxBQUVGLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFSRixBQU9BLEFBQ0UsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztlQUFsQztpQkFBQTtBQUFBO01BWEYsQUFVQSxBQUNFLEFBRUYsK0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7ZUFBbEM7aUJBQUE7QUFBQTtNQWRGLEFBYUEsQUFDRSxBQUVGLHNDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFqQkYsQUFnQkEsQUFDRSxBQUVGLG9DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUFwQkYsQUFtQkEsQUFDRSxBQUVGLGlEQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO2VBQWxDO2lCQUFBO0FBQUE7TUEzQ1gsQUFDQyxBQVFFLEFBQ0UsQUFNRSxBQUlFLEFBc0JBLEFBQ0UsQUFRWDs7Ozs7QUFuSG9CLEE7O0FBcUhwQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yZWlkL3JlcG9zL2tlbm5ldGhTaXRlQWR2In0=
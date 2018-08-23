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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/reid/repos/kennethSiteAdv/components/page/index.js';


var Page = function (_Component) {
	(0, _inherits3.default)(Page, _Component);

	function Page() {
		(0, _classCallCheck3.default)(this, Page);

		return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
	}

	(0, _createClass3.default)(Page, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return this.props.html !== nextProps.html;
		}
	}, {
		key: 'render',
		value: function render() {
			var htmlDisplayed = _react2.default.createElement('div', { style: { textAlign: 'center', marginTop: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement('div', { className: 'lds-dual-ring', __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}));

			if (this.props.html) {
				htmlDisplayed = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html }, __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					}
				});
			}
			return _react2.default.createElement('div', { className: 'page section-wrapper', __source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, htmlDisplayed);
		}
	}]);

	return Page;
}(_react.Component);

;

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBhZ2UiLCJuZXh0UHJvcHMiLCJwcm9wcyIsImh0bWwiLCJodG1sRGlzcGxheWVkIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7d0NBRWlCLEEsV0FBVyxBQUMvQjtVQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUEzQixBQUFxQyxBQUN0Qzs7OzsyQkFFUSxBQUNSO09BQUksZ0NBQ0gsY0FBQSxTQUFLLE9BQU8sRUFBQyxXQUFELEFBQVcsVUFBVSxXQUFqQyxBQUFZLEFBQWdDO2VBQTVDO2lCQUFBLEFBQ0E7QUFEQTtJQUFBLHlDQUNLLFdBQUwsQUFBZTtlQUFmO2lCQUZELEFBQ0MsQUFDQSxBQUlEO0FBSkM7OztPQUlHLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNwQjsyREFBcUIseUJBQXlCLEVBQUMsUUFBUSxLQUFBLEFBQUssTUFBNUMsQUFBOEIsQUFBb0I7Z0JBQWxEO2tCQUFoQixBQUFnQixBQUNoQjtBQURnQjtLQUFBO0FBRWpCOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNFO0FBREY7SUFBQSxFQURBLEFBQ0EsQUFJQTs7Ozs7QSxBQXJCaUI7O0FBdUJsQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JlaWQvcmVwb3Mva2VubmV0aFNpdGVBZHYifQ==
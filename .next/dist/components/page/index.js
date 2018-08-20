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

var _reactRenderHtml = require('react-render-html');

var _reactRenderHtml2 = _interopRequireDefault(_reactRenderHtml);

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
					lineNumber: 12
				}
			}, _react2.default.createElement('div', { className: 'lds-dual-ring', __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}));

			if (this.props.html) {
				htmlDisplayed = (0, _reactRenderHtml2.default)(this.props.html);
			}
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, htmlDisplayed);
		}
	}]);

	return Page;
}(_react.Component);

;

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlckhUTUwiLCJQYWdlIiwibmV4dFByb3BzIiwicHJvcHMiLCJodG1sIiwiaHRtbERpc3BsYXllZCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0ksQUFFRDs7Ozs7Ozs7Ozs7d0NBRWlCLEEsV0FBVyxBQUMvQjtVQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUEzQixBQUFxQyxBQUN0Qzs7OzsyQkFFUSxBQUNSO09BQUksZ0NBQ0gsY0FBQSxTQUFLLE9BQU8sRUFBQyxXQUFELEFBQVcsVUFBVSxXQUFqQyxBQUFZLEFBQWdDO2VBQTVDO2lCQUFBLEFBQ0E7QUFEQTtJQUFBLHlDQUNLLFdBQUwsQUFBZTtlQUFmO2lCQUZELEFBQ0MsQUFDQSxBQUlEO0FBSkM7OztPQUlHLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNwQjtvQkFBZ0IsK0JBQVcsS0FBQSxBQUFLLE1BQWhDLEFBQWdCLEFBQXNCLEFBQ3RDO0FBQ0Q7MEJBQ0EsY0FBQTs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxJQUFBLEVBREEsQUFDQSxBQUlBOzs7OztBQXJCaUIsQTs7QUF1QmxCLEFBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmVpZC9yZXBvcy9rZW5uZXRoU2l0ZUFkdiJ9
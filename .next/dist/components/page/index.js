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

var _nextPrev = require('../nextPrev/nextPrev');

var _nextPrev2 = _interopRequireDefault(_nextPrev);

var _Aux = require('../hoc/Aux/Aux');

var _Aux2 = _interopRequireDefault(_Aux);

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
					lineNumber: 13
				}
			}, _react2.default.createElement('div', { className: 'lds-dual-ring', __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}));

			if (this.props.html) {
				htmlDisplayed = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html }, __source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				});
			}
			return _react2.default.createElement(_Aux2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement(_nextPrev2.default, { lastPage: this.props.lastPage, nextPage: this.props.nextPage, book: this.props.book, __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}), _react2.default.createElement('div', { className: 'page section-wrapper', __source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, htmlDisplayed), _react2.default.createElement(_nextPrev2.default, { lastPage: this.props.lastPage, nextPage: this.props.nextPage, book: this.props.book, __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}), _react2.default.createElement('div', { style: { marginBottom: '50px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}));
		}
	}]);

	return Page;
}(_react.Component);

;

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk5leHRQcmV2IiwiQXV4IiwiUGFnZSIsIm5leHRQcm9wcyIsInByb3BzIiwiaHRtbCIsImh0bWxEaXNwbGF5ZWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJfX2h0bWwiLCJsYXN0UGFnZSIsIm5leHRQYWdlIiwiYm9vayIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7d0MsQUFFaUIsV0FBVyxBQUMvQjtVQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUEzQixBQUFxQyxBQUN0Qzs7OzsyQkFFUSxBQUNSO09BQUksZ0NBQ0gsY0FBQSxTQUFLLE9BQU8sRUFBQyxXQUFELEFBQVcsVUFBVSxXQUFqQyxBQUFZLEFBQWdDO2VBQTVDO2lCQUFBLEFBQ0E7QUFEQTtJQUFBLHlDQUNLLFdBQUwsQUFBZTtlQUFmO2lCQUZELEFBQ0MsQUFDQSxBQUlEO0FBSkM7OztPQUlHLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNwQjsyREFBcUIseUJBQXlCLEVBQUMsUUFBUSxLQUFBLEFBQUssTUFBNUMsQUFBOEIsQUFBb0I7Z0JBQWxEO2tCQUFoQixBQUFnQixBQUNoQjtBQURnQjtLQUFBO0FBRWpCOzBCQUNBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLG9DQUFTLFVBQVUsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQVUsVUFBVSxLQUFBLEFBQUssTUFBeEQsQUFBOEQsVUFBVSxNQUFNLEtBQUEsQUFBSyxNQUFuRixBQUF5RjtlQUF6RjtpQkFERCxBQUNDLEFBQ0E7QUFEQTt1QkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDRTtBQURGO01BRkQsQUFFQyxBQUdBLGdDQUFBLEFBQUMsb0NBQVMsVUFBVSxLQUFBLEFBQUssTUFBekIsQUFBK0IsVUFBVSxVQUFVLEtBQUEsQUFBSyxNQUF4RCxBQUE4RCxVQUFVLE1BQU0sS0FBQSxBQUFLLE1BQW5GLEFBQXlGO2VBQXpGO2lCQUxELEFBS0MsQUFDQTtBQURBOzhDQUNLLE9BQU8sRUFBQyxjQUFiLEFBQVksQUFBZTtlQUEzQjtpQkFQRCxBQUNBLEFBTUMsQUFHRDtBQUhDOzs7Ozs7QSxBQXZCZ0I7O0FBNEJsQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JlaWQvcmVwb3Mva2VubmV0aFNpdGVBZHYifQ==
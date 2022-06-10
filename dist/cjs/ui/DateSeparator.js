'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c3cd9899.js');
var React = require('react');
var PropTypes = require('prop-types');
var color = require('../color-11a12dea.js');
var ui_Label = require('../index-0509de40.js');
require('../stringSet-811a1998.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function DateSeparator(_ref) {
  var className = _ref.className,
      children = _ref.children,
      separatorColor = _ref.separatorColor;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-separator']).join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__left', "".concat(color.changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-separator__text"
  }, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__right', "".concat(color.changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].element]),
  separatorColor: PropTypes__default["default"].string
};
DateSeparator.defaultProps = {
  className: '',
  children: /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: color.Colors.ONBACKGROUND_4
};

module.exports = DateSeparator;
//# sourceMappingURL=DateSeparator.js.map

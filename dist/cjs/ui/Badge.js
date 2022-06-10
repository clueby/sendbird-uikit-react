'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c3cd9899.js');
var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-0509de40.js');
var LocalizationContext = require('../LocalizationContext-2d46f2a3.js');
require('../stringSet-811a1998.js');
require('../index-bbeb94cc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Badge(_ref) {
  var count = _ref.count,
      maxLevel = _ref.maxLevel,
      className = _ref.className;

  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  var maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-badge']).join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-badge__text"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONCONTENT_1
  }, count > maximumNumber ? "".concat(maximumNumber).concat(stringSet.BADGE__OVER) : count)));
}
Badge.propTypes = {
  count: PropTypes__default["default"].number.isRequired,
  maxLevel: PropTypes__default["default"].number,
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
};
Badge.defaultProps = {
  maxLevel: 2,
  className: []
};

module.exports = Badge;
//# sourceMappingURL=Badge.js.map

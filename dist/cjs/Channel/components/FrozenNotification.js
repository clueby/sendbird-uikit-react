'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var ui_Label = require('../../index-0509de40.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FrozenNotification = function FrozenNotification() {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-notification sendbird-notification--frozen"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-notification__text",
    type: ui_Label.LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenNotification.js.map

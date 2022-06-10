'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-730f4bbf.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-2d46f2a3.js');
require('./stringSet-811a1998.js');
require('./index-bbeb94cc.js');
require('./index-aae80149.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');
require('./ui/Icon.js');
require('./index-573c23f7.js');
require('./index-0509de40.js');
require('./utils-ef5ae6ef.js');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-982bd4b0.js');
require('./ui/ImageRenderer.js');
require('./uuid-4e1bf80d.js');
require('./ui/TextButton.js');
require('./color-11a12dea.js');
require('./actionTypes-2c34d1bd.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditProfile = function EditProfile(props) {
  var onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  return /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileProvider, {
    onEditProfile: onEditProfile,
    onCancel: onCancel,
    onThemeChange: onThemeChange
  }, /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfile, null));
};

module.exports = EditProfile;
//# sourceMappingURL=EditUserProfile.js.map

import React__default from 'react';
import { E as EditUserProfileProvider, a as EditUserProfile } from './index-11583a00.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './LocalizationContext-d85ba22d.js';
import './stringSet-e852fbe9.js';
import './index-f348c926.js';
import './index-aaafc7c3.js';
import './ui/IconButton.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import './ui/Icon.js';
import './index-3ebecbd4.js';
import './index-dc6b96dc.js';
import './utils-152638cc.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './ui/Input.js';
import './ui/Avatar.js';
import './tslib.es6-460f27dd.js';
import './ui/ImageRenderer.js';
import './uuid-1f0e148d.js';
import './ui/TextButton.js';
import './color-b2f557e0.js';
import './actionTypes-98e01656.js';

var EditProfile = function EditProfile(props) {
  var onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  return /*#__PURE__*/React__default.createElement(EditUserProfileProvider, {
    onEditProfile: onEditProfile,
    onCancel: onCancel,
    onThemeChange: onThemeChange
  }, /*#__PURE__*/React__default.createElement(EditUserProfile, null));
};

export { EditProfile as default };
//# sourceMappingURL=EditUserProfile.js.map

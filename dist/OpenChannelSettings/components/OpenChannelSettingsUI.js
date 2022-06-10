import React__default, { useContext } from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useOpenChannelSettings } from '../context.js';
import { U as UserProfileProvider } from '../../UserProfileContext-7308f635.js';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { P as PlaceHolder, b as PlaceHolderTypes } from '../../index-d50a4eef.js';
import { OperatorUI } from './OperatorUI.js';
import ParticipantsList from './ParticipantUI.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../ui/Loader.js';
import './OpenChannelProfile.js';
import '../../ui/TextButton.js';
import '../../color-b2f557e0.js';
import '../../ui/OpenChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-460f27dd.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-1f0e148d.js';
import '../../utils-74b0a9e7.js';
import './EditDetailsModal.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../index-3ebecbd4.js';
import '../../utils-152638cc.js';
import '../../ui/Input.js';
import '../../ui/Accordion.js';
import '../../ui/AccordionGroup.js';
import '../../context-a442514b.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import '../../ui/SortByRow.js';

function InvalidChannel(_a) {
  var onCloseClick = _a.onCloseClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__placeholder"
  }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.WRONG
  })));
}

var OpenChannelUI = function OpenChannelUI(_a) {
  var _b, _c, _d;

  var renderOperatorUI = _a.renderOperatorUI,
      renderParticipantList = _a.renderParticipantList;

  var _e = useOpenChannelSettings(),
      channel = _e.channel,
      _onCloseClick = _e.onCloseClick;

  var globalStore = useSendbirdStateContext();
  var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
  var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;

  if (!channel) {
    return /*#__PURE__*/React__default.createElement(InvalidChannel, {
      onCloseClick: function onCloseClick() {
        logger.info('OpenChannelSettings: Click close');

        if (_onCloseClick) {
          _onCloseClick();
        }
      }
    });
  }

  return /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    className: "sendbird-openchannel-settings"
  }, (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || /*#__PURE__*/React__default.createElement(OperatorUI, null)), !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || /*#__PURE__*/React__default.createElement(ParticipantsList, null)));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelSettingsUI.js.map

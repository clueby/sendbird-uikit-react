import React__default, { useContext, useState } from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettings } from '../context.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-d50a4eef.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import ChannelProfile from './ChannelProfile.js';
import AdminPannel from './AdminPanel.js';
import LeaveChannel from './LeaveChannel.js';
import UserPanel from './UserPanel.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../UserProfileContext-7308f635.js';
import 'prop-types';
import '../../uuid-1f0e148d.js';
import '../../ui/Loader.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../ui/ChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-460f27dd.js';
import '../../ui/ImageRenderer.js';
import '../../utils-74b0a9e7.js';
import '../../ui/TextButton.js';
import '../../color-b2f557e0.js';
import './EditDetailsModal.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../index-3ebecbd4.js';
import '../../utils-152638cc.js';
import '../../ui/Input.js';
import '../../ui/Accordion.js';
import '../../ui/AccordionGroup.js';
import '../../context-a442514b.js';
import '../../ui/Badge.js';
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import '../../ui/SortByRow.js';
import './UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../ui/UserListItem.js';
import '../../ui/Checkbox.js';
import '../../MemberList-6a8441f4.js';

var ChannelSettingsUI = function ChannelSettingsUI(props) {
  var _a, _b;

  var stringSet = useContext(LocalizationContext).stringSet;
  var state = useSendbirdStateContext();
  var channelSettingStore = useChannelSettings();

  var _c = useState(false),
      showLeaveChannelModal = _c[0],
      setShowLeaveChannelModal = _c[1];

  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var channel = channelSettingStore.channel,
      invalidChannel = channelSettingStore.invalidChannel,
      onCloseClick = channelSettingStore.onCloseClick;
  var renderPlaceholderError = props.renderPlaceholderError,
      renderChannelProfile = props.renderChannelProfile,
      renderModerationPanel = props.renderModerationPanel,
      renderLeaveChannel = props.renderLeaveChannel;

  if (!channel || invalidChannel) {
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-channel-settings__header"
    }, /*#__PURE__*/React__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
      className: "sendbird-channel-settings__close-icon",
      type: IconTypes.CLOSE,
      height: "24px",
      width: "24px",
      onClick: function onClick() {
        logger.info('ChannelSettings: Click close');
        onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
      }
    })), /*#__PURE__*/React__default.createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.WRONG
    })));
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings__header-icon"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    width: "32px",
    height: "32px",
    onClick: function onClick() {
      logger.info('ChannelSettings: Click close');
      onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-channel-settings__close-icon",
    type: IconTypes.CLOSE,
    height: "22px",
    width: "22px"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings__scroll-area"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default.createElement(ChannelProfile, null), (renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 : renderModerationPanel()) || (channel.myRole === 'operator' ? /*#__PURE__*/React__default.createElement(AdminPannel, null) : /*#__PURE__*/React__default.createElement(UserPanel, null)), (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__leave-channel', !isOnline ? 'sendbird-channel-settings__panel-item__disabled' : ''].join(' '),
    role: "button",
    onKeyDown: function onKeyDown() {
      if (!isOnline) {
        return;
      }

      setShowLeaveChannelModal(true);
    },
    onClick: function onClick() {
      if (!isOnline) {
        return;
      }

      setShowLeaveChannelModal(true);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '),
    type: IconTypes.LEAVE,
    fillColor: IconColors.ERROR,
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE)), showLeaveChannelModal && /*#__PURE__*/React__default.createElement(LeaveChannel, {
    onCancel: function onCancel() {
      setShowLeaveChannelModal(false);
    },
    onSubmit: function onSubmit() {
      setShowLeaveChannelModal(false);
      onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
    }
  })));
};

export { ChannelSettingsUI as default };
//# sourceMappingURL=ChannelSettingsUI.js.map

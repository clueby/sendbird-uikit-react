import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import './index-d50a4eef.js';
import 'prop-types';
import './ui/Icon.js';
import './ui/Loader.js';
import './LocalizationContext-d85ba22d.js';
import './stringSet-e852fbe9.js';
import './index-f348c926.js';
import './index-dc6b96dc.js';
import './ui/IconButton.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-460f27dd.js';
import './ui/ImageRenderer.js';
import './uuid-1f0e148d.js';
import './utils-74b0a9e7.js';
import './ui/TextButton.js';
import './color-b2f557e0.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-aaafc7c3.js';
import './index-3ebecbd4.js';
import './utils-152638cc.js';
import './ui/Input.js';
import './ChannelSettings/components/AdminPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-a442514b.js';
import './ui/Badge.js';
import './ui/ContextMenu.js';
import './index-49a49008.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './UserProfileContext-7308f635.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './topics-8423cf3b.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './MemberList-6a8441f4.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';

var ChannelSettings = function ChannelSettings(props) {
  return /*#__PURE__*/React__default.createElement(ChannelSettingsProvider, {
    channelUrl: props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile
  }, /*#__PURE__*/React__default.createElement(ChannelSettingsUI, {
    renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError,
    renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile,
    renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel,
    renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel
  }));
};

export { ChannelSettings as default };
//# sourceMappingURL=ChannelSettings.js.map

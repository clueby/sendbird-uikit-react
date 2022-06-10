import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-aae461a3.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-460f27dd.js';
import './topics-8423cf3b.js';
import './uuid-1f0e148d.js';
import './utils-152638cc.js';
import './UserProfileContext-7308f635.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import './index-49a49008.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-d85ba22d.js';
import './stringSet-e852fbe9.js';
import './index-f348c926.js';
import './index-dc6b96dc.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-187faafe.js';
import './sendBirdSelectors.js';
import './CreateChannel/components/InviteMembers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-aaafc7c3.js';
import './index-3ebecbd4.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-74b0a9e7.js';
import './ui/Badge.js';
import './index-194a02ea.js';
import './index-64b01d1d.js';
import './index-dd65c23d.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-d0a85b10.js';
import './compareIds-42884444.js';
import './const-2af9e794.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-11583a00.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-b2f557e0.js';
import './actionTypes-98e01656.js';
import './index-d50a4eef.js';

var ChannelList = function ChannelList(props) {
  return /*#__PURE__*/React__default.createElement(ChannelListProvider, {
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit,
    onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel,
    onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange,
    onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess,
    onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect,
    sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect,
    isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled,
    isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled
  }, /*#__PURE__*/React__default.createElement(ChannelListUI, {
    renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { ChannelList as default };
//# sourceMappingURL=ChannelList.js.map

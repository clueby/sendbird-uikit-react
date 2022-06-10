import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-d8f6e3d8.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-d85ba22d.js';
import './stringSet-e852fbe9.js';
import './index-f348c926.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import 'stream';
import 'prop-types';
import './const-83a690ac.js';
import './const-2af9e794.js';
import './ui/IconButton.js';
import './index-3ebecbd4.js';
import './index-dc6b96dc.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-49a49008.js';
import './tslib.es6-460f27dd.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-1f0e148d.js';
import './index-d50a4eef.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-64b01d1d.js';
import './index-dd65c23d.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendBird.js';
import './sendBirdSelectors.js';
import './topics-8423cf3b.js';
import './UserProfileContext-7308f635.js';
import './utils-cea76dc6.js';
import './openChannelUtils-56eeddf2.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-b2f557e0.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-aaafc7c3.js';
import './ui/Modal.js';
import './utils-152638cc.js';
import './useSendbirdStateContext.js';
import './compareIds-42884444.js';

var OpenChannel = function OpenChannel(props) {
  return /*#__PURE__*/React__default.createElement(OpenChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    useMessageGrouping: props === null || props === void 0 ? void 0 : props.useMessageGrouping,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default.createElement(OpenChannelUI, {
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderInput: props === null || props === void 0 ? void 0 : props.renderInput,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { OpenChannel as default };
//# sourceMappingURL=OpenChannel.js.map

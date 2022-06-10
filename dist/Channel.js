import React__default from 'react';
import { C as ChannelProvider } from './ChannelProvider-d0a85b10.js';
import ChannelUI from './Channel/components/ChannelUI.js';
import './UserProfileContext-7308f635.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import './index-dd65c23d.js';
import './index-f348c926.js';
import './topics-8423cf3b.js';
import './index-49a49008.js';
import './tslib.es6-460f27dd.js';
import './compareIds-42884444.js';
import './const-2af9e794.js';
import './uuid-1f0e148d.js';
import './ui/ContextMenu.js';
import './index-dc6b96dc.js';
import './stringSet-e852fbe9.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/ReactionButton.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './index-d50a4eef.js';
import './ui/Loader.js';
import './LocalizationContext-d85ba22d.js';
import './ui/ConnectionStatus.js';
import './Channel/components/ChannelHeader.js';
import './ui/IconButton.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './utils-74b0a9e7.js';
import './Channel/components/MessageList.js';
import './index-64b01d1d.js';
import './Channel/components/Message.js';
import './Channel/components/SuggestedMentionList.js';
import './const-83a690ac.js';
import './ui/DateSeparator.js';
import './color-b2f557e0.js';
import './ui/MessageInput.js';
import 'stream';
import './index-3ebecbd4.js';
import './ui/MentionUserLabel.js';
import './ui/MessageContent.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './ui/MessageStatus.js';
import './ui/MessageItemMenu.js';
import './ui/MessageItemReactionMenu.js';
import './ui/EmojiReactions.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './ui/ReactionBadge.js';
import './ui/AdminMessage.js';
import './ui/TextMessageItemBody.js';
import './index-bc9b9fbc.js';
import './ui/LinkLabel.js';
import './ui/MentionLabel.js';
import './ui/FileMessageItemBody.js';
import './ui/TextButton.js';
import './ui/ThumbnailMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/UnknownMessageItemBody.js';
import './ui/QuoteMessage.js';
import './Channel/components/FileViewer.js';
import './index-aaafc7c3.js';
import './Channel/components/RemoveMessageModal.js';
import './ui/Modal.js';
import './utils-152638cc.js';
import './Channel/components/TypingIndicator.js';
import './Channel/components/FrozenNotification.js';
import './Channel/components/UnreadCount.js';
import './Channel/components/MessageInput.js';
import './ui/QuoteMessageInput.js';

var Channel = function Channel(props) {
  return /*#__PURE__*/React__default.createElement(ChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    useMessageGrouping: props === null || props === void 0 ? void 0 : props.useMessageGrouping,
    useReaction: props === null || props === void 0 ? void 0 : props.useReaction,
    showSearchIcon: props === null || props === void 0 ? void 0 : props.showSearchIcon,
    highlightedMessage: props === null || props === void 0 ? void 0 : props.highlightedMessage,
    startingPoint: props === null || props === void 0 ? void 0 : props.startingPoint,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onBeforeUpdateUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeUpdateUserMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    onSearchClick: props === null || props === void 0 ? void 0 : props.onSearchClick,
    replyType: props === null || props === void 0 ? void 0 : props.replyType,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default.createElement(ChannelUI, {
    renderPlaceholderLoader: props === null || props === void 0 ? void 0 : props.renderPlaceholderLoader,
    renderPlaceholderInvalid: props === null || props === void 0 ? void 0 : props.renderPlaceholderInvalid,
    renderPlaceholderEmpty: props === null || props === void 0 ? void 0 : props.renderPlaceholderEmpty,
    renderChannelHeader: props === null || props === void 0 ? void 0 : props.renderChannelHeader,
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput,
    renderTypingIndicator: props === null || props === void 0 ? void 0 : props.renderTypingIndicator,
    renderCustomSeparator: props === null || props === void 0 ? void 0 : props.renderCustomSeparator
  }));
};

export { Channel as default };
//# sourceMappingURL=Channel.js.map

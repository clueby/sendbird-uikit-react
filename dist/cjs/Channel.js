'use strict';

var React = require('react');
var Channel_context = require('./ChannelProvider-09e67e43.js');
var Channel_components_ChannelUI = require('./Channel/components/ChannelUI.js');
require('./UserProfileContext-620fcca0.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');
require('./index-8a33a65e.js');
require('./index-bbeb94cc.js');
require('./topics-c134dcfd.js');
require('./index-bc9077cd.js');
require('./tslib.es6-982bd4b0.js');
require('./compareIds-d1989cff.js');
require('./const-6a2e7b51.js');
require('./uuid-4e1bf80d.js');
require('./ui/ContextMenu.js');
require('./index-0509de40.js');
require('./stringSet-811a1998.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/ReactionButton.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./index-524a238c.js');
require('./ui/Loader.js');
require('./LocalizationContext-2d46f2a3.js');
require('./ui/ConnectionStatus.js');
require('./Channel/components/ChannelHeader.js');
require('./ui/IconButton.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./utils-3bff255e.js');
require('./Channel/components/MessageList.js');
require('./index-e89c50ba.js');
require('./Channel/components/Message.js');
require('./Channel/components/SuggestedMentionList.js');
require('./const-e068a55a.js');
require('./ui/DateSeparator.js');
require('./color-11a12dea.js');
require('./ui/MessageInput.js');
require('stream');
require('./index-573c23f7.js');
require('./ui/MentionUserLabel.js');
require('./ui/MessageContent.js');
require('./ui/UserProfile.js');
require('./sendBirdSelectors.js');
require('./ui/MessageStatus.js');
require('./ui/MessageItemMenu.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/EmojiReactions.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./ui/ReactionBadge.js');
require('./ui/AdminMessage.js');
require('./ui/TextMessageItemBody.js');
require('./index-f5ea7fba.js');
require('./ui/LinkLabel.js');
require('./ui/MentionLabel.js');
require('./ui/FileMessageItemBody.js');
require('./ui/TextButton.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/QuoteMessage.js');
require('./Channel/components/FileViewer.js');
require('./index-aae80149.js');
require('./Channel/components/RemoveMessageModal.js');
require('./ui/Modal.js');
require('./utils-ef5ae6ef.js');
require('./Channel/components/TypingIndicator.js');
require('./Channel/components/FrozenNotification.js');
require('./Channel/components/UnreadCount.js');
require('./Channel/components/MessageInput.js');
require('./ui/QuoteMessageInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Channel = function Channel(props) {
  return /*#__PURE__*/React__default["default"].createElement(Channel_context.ChannelProvider, {
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
  }, /*#__PURE__*/React__default["default"].createElement(Channel_components_ChannelUI, {
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

module.exports = Channel;
//# sourceMappingURL=Channel.js.map

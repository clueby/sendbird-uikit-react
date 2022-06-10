'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../../ChannelProvider-09e67e43.js');
var ui_PlaceHolder = require('../../index-524a238c.js');
var ui_ConnectionStatus = require('../../ui/ConnectionStatus.js');
var Channel_components_ChannelHeader = require('./ChannelHeader.js');
var Channel_components_MessageList = require('./MessageList.js');
var Channel_components_TypingIndicator = require('./TypingIndicator.js');
var Channel_components_FrozenNotification = require('./FrozenNotification.js');
var Channel_components_UnreadCount = require('./UnreadCount.js');
var Channel_components_MessageInput = require('./MessageInput.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../UserProfileContext-620fcca0.js');
require('prop-types');
require('../../index-8a33a65e.js');
require('../../index-bbeb94cc.js');
require('../../topics-c134dcfd.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('../../compareIds-d1989cff.js');
require('../../const-6a2e7b51.js');
require('../../uuid-4e1bf80d.js');
require('../../ui/ContextMenu.js');
require('../../index-0509de40.js');
require('../../stringSet-811a1998.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../ui/Loader.js');
require('../../LocalizationContext-2d46f2a3.js');
require('../../ui/IconButton.js');
require('../../ui/ChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../utils-3bff255e.js');
require('../../index-e89c50ba.js');
require('./Message.js');
require('./SuggestedMentionList.js');
require('../../const-e068a55a.js');
require('../../ui/DateSeparator.js');
require('../../color-11a12dea.js');
require('../../ui/MessageInput.js');
require('stream');
require('../../index-573c23f7.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/MessageContent.js');
require('../../ui/UserProfile.js');
require('../../sendBirdSelectors.js');
require('../../ui/MessageStatus.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/EmojiReactions.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../ui/ReactionBadge.js');
require('../../ui/AdminMessage.js');
require('../../ui/TextMessageItemBody.js');
require('../../index-f5ea7fba.js');
require('../../ui/LinkLabel.js');
require('../../ui/MentionLabel.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/QuoteMessage.js');
require('./FileViewer.js');
require('../../index-aae80149.js');
require('./RemoveMessageModal.js');
require('../../ui/Modal.js');
require('../../utils-ef5ae6ef.js');
require('../../ui/QuoteMessageInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelUI = function ChannelUI(_a) {
  var _b, _c, _d, _e;

  var renderPlaceholderLoader = _a.renderPlaceholderLoader,
      renderPlaceholderInvalid = _a.renderPlaceholderInvalid,
      renderPlaceholderEmpty = _a.renderPlaceholderEmpty,
      renderChannelHeader = _a.renderChannelHeader,
      renderMessage = _a.renderMessage,
      renderMessageInput = _a.renderMessageInput,
      renderTypingIndicator = _a.renderTypingIndicator,
      renderCustomSeparator = _a.renderCustomSeparator;

  var _f = Channel_context.useChannel(),
      currentGroupChannel = _f.currentGroupChannel,
      channelUrl = _f.channelUrl,
      isInvalid = _f.isInvalid,
      unreadSince = _f.unreadSince,
      loading = _f.loading,
      setInitialTimeStamp = _f.setInitialTimeStamp,
      setAnimatedMessageId = _f.setAnimatedMessageId,
      setHighLightedMessageId = _f.setHighLightedMessageId,
      scrollRef = _f.scrollRef,
      messagesDispatcher = _f.messagesDispatcher;

  var _g = React.useState(0),
      unreadCount = _g[0],
      setUnreadCount = _g[1];

  React.useEffect(function () {
    setUnreadCount(currentGroupChannel.unreadMessageCount);
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount]);
  var globalStore = useSendbirdStateContext();
  var sdkError = (_c = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.error;
  var logger = (_d = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _d === void 0 ? void 0 : _d.logger;
  var isOnline = (_e = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _e === void 0 ? void 0 : _e.isOnline;

  if (!channelUrl) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (isInvalid) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    }));
  }

  if (sdkError) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG,
      retryToConnect: function retryToConnect() {
        logger.info('Channel: reconnecting'); // reconnect();
      }
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderChannelHeader === null || renderChannelHeader === void 0 ? void 0 : renderChannelHeader()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_ChannelHeader, null), (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && /*#__PURE__*/React__default["default"].createElement(Channel_components_FrozenNotification, null), unreadCount > 0 && /*#__PURE__*/React__default["default"].createElement(Channel_components_UnreadCount, {
    count: unreadCount,
    time: unreadSince,
    onClick: function onClick() {
      var _a, _b, _c;

      setUnreadCount(0);

      if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) {
        scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
      }

      currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.markAsRead();
      messagesDispatcher({
        type: Channel_context.MARK_AS_READ,
        payload: {
          channel: currentGroupChannel
        }
      });
      setInitialTimeStamp(null);
      setAnimatedMessageId(null);
      setHighLightedMessageId(null);
    }
  }), loading ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderPlaceholderLoader === null || renderPlaceholderLoader === void 0 ? void 0 : renderPlaceholderLoader()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.LOADING
  })) : /*#__PURE__*/React__default["default"].createElement(Channel_components_MessageList, {
    renderMessage: renderMessage,
    renderPlaceholderEmpty: renderPlaceholderEmpty,
    renderCustomSeparator: renderCustomSeparator
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer"
  }, (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_MessageInput, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer__typing-indicator"
  }, (renderTypingIndicator === null || renderTypingIndicator === void 0 ? void 0 : renderTypingIndicator()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_TypingIndicator["default"], null), !isOnline && /*#__PURE__*/React__default["default"].createElement(ui_ConnectionStatus, null))));
};

module.exports = ChannelUI;
//# sourceMappingURL=ChannelUI.js.map

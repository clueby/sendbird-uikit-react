'use strict';

var React = require('react');
var index = require('../../index-e89c50ba.js');
var Channel_context = require('../../ChannelProvider-09e67e43.js');
var ui_PlaceHolder = require('../../index-524a238c.js');
var ui_Icon = require('../../ui/Icon.js');
var Channel_components_Message = require('./Message.js');
var uuid = require('../../uuid-4e1bf80d.js');
require('../../index-8a33a65e.js');
require('../../index-bbeb94cc.js');
require('../../UserProfileContext-620fcca0.js');
require('prop-types');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../topics-c134dcfd.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('../../compareIds-d1989cff.js');
require('../../const-6a2e7b51.js');
require('../../ui/ContextMenu.js');
require('../../index-0509de40.js');
require('../../stringSet-811a1998.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../LocalizationContext-2d46f2a3.js');
require('./SuggestedMentionList.js');
require('../../ui/Avatar.js');
require('../../const-e068a55a.js');
require('../../ui/DateSeparator.js');
require('../../color-11a12dea.js');
require('../../ui/MessageInput.js');
require('stream');
require('../../ui/IconButton.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SCROLL_REF_CLASS_NAME = '.sendbird-msg--scroll-ref';

var MessageList = function MessageList(props) {
  var renderMessage = props.renderMessage,
      renderPlaceholderEmpty = props.renderPlaceholderEmpty,
      renderCustomSeparator = props.renderCustomSeparator;

  var _a = Channel_context.useChannel(),
      allMessages = _a.allMessages,
      hasMorePrev = _a.hasMorePrev,
      setInitialTimeStamp = _a.setInitialTimeStamp,
      setAnimatedMessageId = _a.setAnimatedMessageId,
      setHighLightedMessageId = _a.setHighLightedMessageId,
      useMessageGrouping = _a.useMessageGrouping,
      scrollRef = _a.scrollRef,
      onScrollCallback = _a.onScrollCallback,
      onScrollDownCallback = _a.onScrollDownCallback,
      messagesDispatcher = _a.messagesDispatcher,
      messageActionTypes = _a.messageActionTypes,
      currentGroupChannel = _a.currentGroupChannel;

  var _b = React.useState(0),
      scrollBottom = _b[0],
      setScrollBottom = _b[1];

  var onScroll = function onScroll(e) {
    var element = e.target;
    var scrollTop = element.scrollTop,
        clientHeight = element.clientHeight,
        scrollHeight = element.scrollHeight;

    if (scrollTop === 0) {
      if (!hasMorePrev) {
        return;
      }

      var nodes = scrollRef.current.querySelectorAll(SCROLL_REF_CLASS_NAME);
      var first_1 = nodes && nodes[0];
      onScrollCallback(function (_a) {
        var messages = _a[0];

        if (messages) {
          // https://github.com/scabbiaza/react-scroll-position-on-updating-dom
          // Set block to nearest to prevent unexpected scrolling from outer components
          try {
            first_1.scrollIntoView({
              block: "start",
              inline: "nearest"
            });
          } catch (error) {//
          }
        }
      });
    }

    if (Channel_context.isAboutSame(clientHeight + scrollTop, scrollHeight, 10)) {
      onScrollDownCallback(function (_a) {
        var messages = _a[0];

        if (messages) {
          try {
            element.scrollTop = scrollHeight - clientHeight;
          } catch (error) {//
          }
        }
      });
    } // save the lastest scroll bottom value


    if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
      var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
      setScrollBottom(current.scrollHeight - current.scrollTop - current.offsetHeight);
    } // do this later


    setTimeout(function () {
      // mark as read if scroll is at end
      if (clientHeight + scrollTop === scrollHeight) {
        messagesDispatcher({
          type: messageActionTypes.MARK_AS_READ,
          payload: {
            channel: currentGroupChannel
          }
        });
        currentGroupChannel.markAsRead();
      }
    }, 500);
  };

  var onClickScrollBot = function onClickScrollBot() {
    var _a, _b, _c;

    setInitialTimeStamp === null || setInitialTimeStamp === void 0 ? void 0 : setInitialTimeStamp(null);
    setAnimatedMessageId === null || setAnimatedMessageId === void 0 ? void 0 : setAnimatedMessageId(null);
    setHighLightedMessageId === null || setHighLightedMessageId === void 0 ? void 0 : setHighLightedMessageId(null);

    if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) {
      scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
    }
  }; // Because every message components are re-rendered everytime by every scroll events


  var memoizedAllMessages = React.useMemo(function () {
    return allMessages.map(function (m, idx) {
      var previousMessage = allMessages[idx - 1];
      var nextMessage = allMessages[idx + 1];

      var _a = useMessageGrouping ? Channel_context.compareMessagesForGrouping(previousMessage, m, nextMessage) : [false, false],
          chainTop = _a[0],
          chainBottom = _a[1];

      var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
      var currentCreatedAt = m.createdAt; // https://stackoverflow.com/a/41855608

      var hasSeparator = !(previousMessageCreatedAt && index.isSameDay(currentCreatedAt, previousMessageCreatedAt));

      var handleScroll = function handleScroll() {
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;

        if (current) {
          var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;

          if (scrollBottom < bottom) {
            current.scrollTop += bottom - scrollBottom;
          }
        }
      };

      return /*#__PURE__*/React__default["default"].createElement(Channel_components_Message, {
        handleScroll: handleScroll,
        renderMessage: renderMessage,
        message: m,
        hasSeparator: hasSeparator,
        chainTop: chainTop,
        chainBottom: chainBottom,
        renderCustomSeparator: renderCustomSeparator,
        key: m.messageId + uuid.uuidv4()
      });
    });
  }, [allMessages]);

  if (allMessages.length < 1) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (renderPlaceholderEmpty === null || renderPlaceholderEmpty === void 0 ? void 0 : renderPlaceholderEmpty()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      className: "sendbird-conversation__no-messages",
      type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__messages"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__scroll-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__padding"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__messages-padding",
    ref: scrollRef,
    onScroll: onScroll
  }, memoizedAllMessages)), // This flag is an unmatched variable
  scrollBottom > 1 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__scroll-bottom-button",
    onClick: onClickScrollBot,
    onKeyDown: onClickScrollBot,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    width: "24px",
    height: "24px",
    type: ui_Icon.IconTypes.CHEVRON_DOWN,
    fillColor: ui_Icon.IconColors.PRIMARY
  })));
};

module.exports = MessageList;
//# sourceMappingURL=MessageList.js.map

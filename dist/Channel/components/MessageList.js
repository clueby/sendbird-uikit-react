import React__default, { useState, useMemo } from 'react';
import { i as isSameDay } from '../../index-64b01d1d.js';
import { u as useChannel, c as compareMessagesForGrouping, i as isAboutSame } from '../../ChannelProvider-d0a85b10.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-d50a4eef.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Message from './Message.js';
import { u as uuidv4 } from '../../uuid-1f0e148d.js';
import '../../index-dd65c23d.js';
import '../../index-f348c926.js';
import '../../UserProfileContext-7308f635.js';
import 'prop-types';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../topics-8423cf3b.js';
import '../../index-49a49008.js';
import '../../tslib.es6-460f27dd.js';
import '../../compareIds-42884444.js';
import '../../const-2af9e794.js';
import '../../ui/ContextMenu.js';
import '../../index-dc6b96dc.js';
import '../../stringSet-e852fbe9.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../LocalizationContext-d85ba22d.js';
import './SuggestedMentionList.js';
import '../../ui/Avatar.js';
import '../../const-83a690ac.js';
import '../../ui/DateSeparator.js';
import '../../color-b2f557e0.js';
import '../../ui/MessageInput.js';
import 'stream';
import '../../ui/IconButton.js';
import '../../index-3ebecbd4.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/MessageContent.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../ui/MessageStatus.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/EmojiReactions.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../ui/ReactionBadge.js';
import '../../ui/AdminMessage.js';
import '../../ui/TextMessageItemBody.js';
import '../../index-bc9b9fbc.js';
import '../../ui/LinkLabel.js';
import '../../ui/MentionLabel.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/QuoteMessage.js';
import './FileViewer.js';
import '../../index-aaafc7c3.js';
import './RemoveMessageModal.js';
import '../../ui/Modal.js';
import '../../utils-152638cc.js';

var SCROLL_REF_CLASS_NAME = '.sendbird-msg--scroll-ref';

var MessageList = function MessageList(props) {
  var renderMessage = props.renderMessage,
      renderPlaceholderEmpty = props.renderPlaceholderEmpty,
      renderCustomSeparator = props.renderCustomSeparator;

  var _a = useChannel(),
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

  var _b = useState(0),
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

    if (isAboutSame(clientHeight + scrollTop, scrollHeight, 10)) {
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


  var memoizedAllMessages = useMemo(function () {
    return allMessages.map(function (m, idx) {
      var previousMessage = allMessages[idx - 1];
      var nextMessage = allMessages[idx + 1];

      var _a = useMessageGrouping ? compareMessagesForGrouping(previousMessage, m, nextMessage) : [false, false],
          chainTop = _a[0],
          chainBottom = _a[1];

      var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
      var currentCreatedAt = m.createdAt; // https://stackoverflow.com/a/41855608

      var hasSeparator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

      var handleScroll = function handleScroll() {
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;

        if (current) {
          var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;

          if (scrollBottom < bottom) {
            current.scrollTop += bottom - scrollBottom;
          }
        }
      };

      return /*#__PURE__*/React__default.createElement(Message, {
        handleScroll: handleScroll,
        renderMessage: renderMessage,
        message: m,
        hasSeparator: hasSeparator,
        chainTop: chainTop,
        chainBottom: chainBottom,
        renderCustomSeparator: renderCustomSeparator,
        key: m.messageId + uuidv4()
      });
    });
  }, [allMessages]);

  if (allMessages.length < 1) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, (renderPlaceholderEmpty === null || renderPlaceholderEmpty === void 0 ? void 0 : renderPlaceholderEmpty()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
      className: "sendbird-conversation__no-messages",
      type: PlaceHolderTypes.NO_MESSAGES
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__messages"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__scroll-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__padding"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__messages-padding",
    ref: scrollRef,
    onScroll: onScroll
  }, memoizedAllMessages)), // This flag is an unmatched variable
  scrollBottom > 1 && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__scroll-bottom-button",
    onClick: onClickScrollBot,
    onKeyDown: onClickScrollBot,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.PRIMARY
  })));
};

export { MessageList as default };
//# sourceMappingURL=MessageList.js.map

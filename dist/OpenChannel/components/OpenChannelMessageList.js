import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../index-64b01d1d.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-d50a4eef.js';
import { u as useOpenChannel, c as compareMessagesForGrouping } from '../../OpenChannelProvider-d8f6e3d8.js';
import MessagOpenChannelMessageeHoc from './OpenChannelMessage.js';
import '../../index-dd65c23d.js';
import '../../index-f348c926.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../ui/Loader.js';
import '../../LocalizationContext-d85ba22d.js';
import '../../stringSet-e852fbe9.js';
import '../../index-dc6b96dc.js';
import '../../UserProfileContext-7308f635.js';
import '../../tslib.es6-460f27dd.js';
import '../../compareIds-42884444.js';
import '../../topics-8423cf3b.js';
import '../../uuid-1f0e148d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/IconButton.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../index-3ebecbd4.js';
import '../../utils-cea76dc6.js';
import '../../openChannelUtils-56eeddf2.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-b2f557e0.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import 'stream';
import '../../const-83a690ac.js';
import '../../const-2af9e794.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/FileViewer.js';
import '../../index-aaafc7c3.js';
import '../../ui/Modal.js';
import '../../utils-152638cc.js';

function OpenchannelMessageList(props, ref) {
  var _a;

  var _b = useOpenChannel(),
      _c = _b.useMessageGrouping,
      useMessageGrouping = _c === void 0 ? true : _c,
      allMessages = _b.allMessages,
      hasMore = _b.hasMore,
      onScroll = _b.onScroll;

  var scrollRef = ref || useRef(null);

  var _d = useState(false),
      showScrollDownButton = _d[0],
      setShowScrollDownButton = _d[1];

  var handleOnScroll = function handleOnScroll(e) {
    var element = e.target;
    var scrollTop = element.scrollTop,
        scrollHeight = element.scrollHeight,
        clientHeight = element.clientHeight;

    if (scrollHeight > scrollTop + clientHeight && window.navigator.userAgent.indexOf('MSIE ') < 0 // don't show button in IE
    ) {
      setShowScrollDownButton(true);
    } else {
      setShowScrollDownButton(false);
    }

    if (!hasMore) {
      return;
    }

    if (scrollTop === 0) {
      var nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');
      var first_1 = nodes && nodes[0];
      onScroll(function () {
        try {
          first_1.scrollIntoView();
        } catch (error) {}
      });
    }
  };

  var scrollToBottom = function scrollToBottom() {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
      setShowScrollDownButton(false);
    }
  };

  var hasMessage = useMemo(function () {
    return allMessages.length > 0;
  }, [allMessages.length]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll",
    onScroll: handleOnScroll,
    ref: scrollRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__padding"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__item-container" + (hasMessage ? '' : '--no-messages')
  }, hasMessage ? allMessages.map(function (message, index) {
    var previousMessage = allMessages[index - 1];
    var nextMessage = allMessages[index - 1];
    var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
    var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

    var hasSeparator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

    var _a = useMessageGrouping ? compareMessagesForGrouping(previousMessage, message, nextMessage) : [false, false],
        chainTop = _a[0],
        chainBottom = _a[1];

    return /*#__PURE__*/React__default.createElement(MessagOpenChannelMessageeHoc, {
      key: (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId),
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom,
      hasSeparator: hasSeparator,
      renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage
    });
  }) : ((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
    className: "sendbird-openchannel-conversation-scroll__container__place-holder",
    type: PlaceHolderTypes.NO_MESSAGES
  })), showScrollDownButton && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
    onClick: scrollToBottom,
    onKeyDown: scrollToBottom,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.CONTENT
  }))));
}

var OpenChannelMessageList = /*#__PURE__*/React__default.forwardRef(OpenchannelMessageList);

export { OpenChannelMessageList as default };
//# sourceMappingURL=OpenChannelMessageList.js.map

import { a as __spreadArray } from '../../tslib.es6-460f27dd.js';
import React__default, { useContext, useState, useEffect } from 'react';
import { u as useChannel, a as isDisabledBecauseFrozen, b as isDisabledBecauseMuted, d as isOperator } from '../../ChannelProvider-d0a85b10.js';
import MessageInput from '../../ui/MessageInput.js';
import QuoteMessageInput from '../../ui/QuoteMessageInput.js';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import SuggestedMentionList from './SuggestedMentionList.js';
import { M as MessageInputKeys } from '../../const-83a690ac.js';
import '../../UserProfileContext-7308f635.js';
import 'prop-types';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../index-dd65c23d.js';
import '../../index-f348c926.js';
import '../../topics-8423cf3b.js';
import '../../index-49a49008.js';
import '../../compareIds-42884444.js';
import '../../const-2af9e794.js';
import '../../uuid-1f0e148d.js';
import '../../ui/ContextMenu.js';
import '../../index-dc6b96dc.js';
import '../../stringSet-e852fbe9.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import 'stream';
import '../../ui/IconButton.js';
import '../../index-3ebecbd4.js';
import '../../ui/MentionUserLabel.js';
import '../../withSendBird.js';
import '../../ui/Avatar.js';

var MessageInputWrapper = function MessageInputWrapper() {
  var _a = useChannel(),
      currentGroupChannel = _a.currentGroupChannel,
      initialized = _a.initialized,
      quoteMessage = _a.quoteMessage,
      sendMessage = _a.sendMessage,
      sendFileMessage = _a.sendFileMessage,
      setQuoteMessage = _a.setQuoteMessage,
      messageInputRef = _a.messageInputRef,
      renderUserMentionItem = _a.renderUserMentionItem;

  var globalStore = useSendbirdStateContext();
  var channel = currentGroupChannel;

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15;
  var stringSet = useContext(LocalizationContext).stringSet;

  var _c = useState(''),
      mentionNickname = _c[0],
      setMentionNickname = _c[1];

  var _d = useState([]),
      mentionedUsers = _d[0],
      setMentionedUsers = _d[1];

  var _e = useState([]),
      mentionedUserIds = _e[0],
      setMentionedUserIds = _e[1];

  var _f = useState(null),
      selectedUser = _f[0],
      setSelectedUser = _f[1];

  var _g = useState([]),
      mentionSuggestedUsers = _g[0],
      setMentionSuggestedUsers = _g[1];

  var _h = useState(true),
      ableMention = _h[0],
      setAbleMention = _h[1];

  var _j = useState(null),
      messageInputEvent = _j[0],
      setMessageInputEvent = _j[1];

  var disabled = !initialized || isDisabledBecauseFrozen(channel) || isDisabledBecauseMuted(channel) || !isOnline;
  var isOperator$1 = isOperator(channel);
  var isBroadcast = channel.isBroadcast;
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !isDisabledBecauseFrozen(channel) && !isDisabledBecauseMuted(channel); // Reset when channel changes

  useEffect(function () {
    setMentionNickname('');
    setMentionedUsers([]);
    setMentionedUserIds([]);
    setSelectedUser(null);
    setMentionSuggestedUsers([]);
    setAbleMention(true);
    setMessageInputEvent(null);
  }, [channel === null || channel === void 0 ? void 0 : channel.url]);
  useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  useEffect(function () {
    setMentionedUsers(mentionedUsers.filter(function (_a) {
      var userId = _a.userId;
      var i = mentionedUserIds.indexOf(userId);

      if (i < 0) {
        return false;
      } else {
        mentionedUserIds.splice(i, 1);
        return true;
      }
    }));
  }, [mentionedUserIds]); // broadcast channel + not operator

  if (isBroadcast && !isOperator$1) {
    return null;
  } // other conditions


  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-input-wrapper"
  }, displaySuggestedMentionList && /*#__PURE__*/React__default.createElement(SuggestedMentionList, {
    targetNickname: mentionNickname,
    inputEvent: messageInputEvent,
    renderUserMentionItem: renderUserMentionItem,
    onUserItemClick: function onUserItemClick(user) {
      if (user) {
        setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
      }

      setMentionNickname('');
      setSelectedUser(user);
      setMessageInputEvent(null);
    },
    onFocusItemChange: function onFocusItemChange() {
      setMessageInputEvent(null);
    },
    onFetchUsers: function onFetchUsers(users) {
      setMentionSuggestedUsers(users);
    },
    ableAddMention: ableMention,
    maxMentionCount: maxUserMentionCount,
    maxSuggestionCount: maxUserSuggestionCount
  }), quoteMessage && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-input-wrapper__quote-message-input"
  }, /*#__PURE__*/React__default.createElement(QuoteMessageInput, {
    replyingMessage: quoteMessage,
    onClose: function onClose() {
      return setQuoteMessage(null);
    }
  })), /*#__PURE__*/React__default.createElement(MessageInput, {
    className: "sendbird-message-input-wrapper__message-input",
    channelUrl: channel === null || channel === void 0 ? void 0 : channel.url,
    mentionSelectedUser: selectedUser,
    isMentionEnabled: isMentionEnabled,
    placeholder: quoteMessage && stringSet.MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER || isDisabledBecauseFrozen(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED || isDisabledBecauseMuted(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED,
    ref: messageInputRef,
    disabled: disabled,
    onStartTyping: function onStartTyping() {
      channel === null || channel === void 0 ? void 0 : channel.startTyping();
    },
    onSendMessage: function onSendMessage(_a) {
      var message = _a.message,
          mentionTemplate = _a.mentionTemplate;
      sendMessage({
        message: message,
        quoteMessage: quoteMessage,
        mentionedUsers: mentionedUsers,
        mentionTemplate: mentionTemplate
      });
      setMentionNickname('');
      setMentionedUsers([]);
      setQuoteMessage(null);
      channel === null || channel === void 0 ? void 0 : channel.endTyping();
    },
    onFileUpload: function onFileUpload(file) {
      sendFileMessage(file, quoteMessage);
      setQuoteMessage(null);
    },
    onUserMentioned: function onUserMentioned(user) {
      if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
        setSelectedUser(null);
        setMentionNickname('');
      }
    },
    onMentionStringChange: function onMentionStringChange(mentionText) {
      setMentionNickname(mentionText);
    },
    onMentionedUserIdsUpdated: function onMentionedUserIdsUpdated(userIds) {
      setMentionedUserIds(userIds);
    },
    onKeyDown: function onKeyDown(e) {
      if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === MessageInputKeys.Enter && ableMention || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
        setMessageInputEvent(e);
        return true;
      }

      return false;
    }
  }));
};

var MessageInputWrapper$1 = /*#__PURE__*/React__default.forwardRef(MessageInputWrapper);

export { MessageInputWrapper$1 as default };
//# sourceMappingURL=MessageInput.js.map

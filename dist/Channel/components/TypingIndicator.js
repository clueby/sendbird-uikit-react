import React__default, { useContext, useState, useEffect } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import { u as uuidv4 } from '../../uuid-1f0e148d.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import { u as useChannel } from '../../ChannelProvider-d0a85b10.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../UserProfileContext-7308f635.js';
import '../../index-dd65c23d.js';
import '../../topics-8423cf3b.js';
import '../../index-49a49008.js';
import '../../tslib.es6-460f27dd.js';
import '../../compareIds-42884444.js';
import '../../const-2af9e794.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../withSendBird.js';

var TypingIndicatorText = function TypingIndicatorText(_a) {
  var members = _a.members;
  var stringSet = useContext(LocalizationContext).stringSet;

  if (!members || members.length === 0) {
    return '';
  }

  if (members && members.length === 1) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__IS_TYPING;
  }

  if (members && members.length === 2) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__AND + " " + members[1].nickname + " " + stringSet.TYPING_INDICATOR__ARE_TYPING;
  }

  return stringSet.TYPING_INDICATOR__MULTIPLE_TYPING;
};

var TypingIndicator = function TypingIndicator() {
  var _a, _b, _c;

  var channelUrl = useChannel().channelUrl;
  var globalStore = useSendbirdStateContext();
  var sb = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = useState(uuidv4()),
      handlerId = _d[0],
      setHandlerId = _d[1];

  var _e = useState([]),
      typingMembers = _e[0],
      setTypingMembers = _e[1];

  useEffect(function () {
    if (sb && sb.ChannelHandler) {
      sb.removeChannelHandler(handlerId);
      var newHandlerId = uuidv4();
      var handler = new sb.ChannelHandler(); // there is a possible warning in here - setState called after unmount

      handler.onTypingStatusUpdated = function (groupChannel) {
        logger.info('Channel > Typing Indicator: onTypingStatusUpdated', groupChannel);

        if (groupChannel.url === channelUrl) {
          var members = groupChannel.getTypingMembers();
          setTypingMembers(members);
        }
      };

      sb.addChannelHandler(newHandlerId, handler);
      setHandlerId(newHandlerId);
    }

    return function () {
      setTypingMembers([]);

      if (sb && sb.removeChannelHandler) {
        sb.removeChannelHandler(handlerId);
      }
    };
  }, [channelUrl]);
  return /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-conversation__footer__typing-indicator__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, /*#__PURE__*/React__default.createElement(TypingIndicatorText, {
    members: typingMembers
  }));
};

export { TypingIndicatorText, TypingIndicator as default };
//# sourceMappingURL=TypingIndicator.js.map

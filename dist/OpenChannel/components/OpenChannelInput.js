import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannel } from '../../OpenChannelProvider-d8f6e3d8.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'stream';
import 'prop-types';
import '../../const-83a690ac.js';
import '../../const-2af9e794.js';
import '../../ui/IconButton.js';
import '../../index-3ebecbd4.js';
import '../../index-dc6b96dc.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-49a49008.js';
import '../../tslib.es6-460f27dd.js';
import '../../index-dd65c23d.js';
import '../../UserProfileContext-7308f635.js';
import '../../compareIds-42884444.js';
import '../../topics-8423cf3b.js';
import '../../uuid-1f0e148d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';

var MessageInputWrapper = function MessageInputWrapper(props, ref) {
  var _a = useOpenChannel(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default.createElement(MessageInput, {
    ref: ref,
    disabled: disabled,
    onSendMessage: handleSendMessage,
    onFileUpload: handleFileUpload,
    placeholder: disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

  }));
};

var OpenChannelInput = /*#__PURE__*/React__default.forwardRef(MessageInputWrapper);

export { OpenChannelInput as default };
//# sourceMappingURL=OpenChannelInput.js.map

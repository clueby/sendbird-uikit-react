'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-c6c9924f.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('stream');
require('prop-types');
require('../../const-e068a55a.js');
require('../../const-6a2e7b51.js');
require('../../ui/IconButton.js');
require('../../index-573c23f7.js');
require('../../index-0509de40.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('../../index-8a33a65e.js');
require('../../UserProfileContext-620fcca0.js');
require('../../compareIds-d1989cff.js');
require('../../topics-c134dcfd.js');
require('../../uuid-4e1bf80d.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageInputWrapper = function MessageInputWrapper(props, ref) {
  var _a = OpenChannel_context.useOpenChannel(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    ref: ref,
    disabled: disabled,
    onSendMessage: handleSendMessage,
    onFileUpload: handleFileUpload,
    placeholder: disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

  }));
};

var OpenChannelInput = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

module.exports = OpenChannelInput;
//# sourceMappingURL=OpenChannelInput.js.map

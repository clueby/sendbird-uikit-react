'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-573c23f7.js');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var Channel_context = require('../../ChannelProvider-09e67e43.js');
require('prop-types');
require('react-dom');
require('../../index-aae80149.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../ui/Icon.js');
require('../../index-0509de40.js');
require('../../stringSet-811a1998.js');
require('../../utils-ef5ae6ef.js');
require('../../index-bbeb94cc.js');
require('../../UserProfileContext-620fcca0.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../index-8a33a65e.js');
require('../../topics-c134dcfd.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('../../compareIds-d1989cff.js');
require('../../const-6a2e7b51.js');
require('../../uuid-4e1bf80d.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RemoveMessage = function RemoveMessage(props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var deleteMessage = Channel_context.useChannel().deleteMessage;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    type: ui_Button.ButtonTypes.DANGER,
    disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0,
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      deleteMessage(message).then(function () {
        onCancel();
      });
    },
    submitText: stringSet.MESSAGE_MENU__DELETE,
    titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
  });
};

module.exports = RemoveMessage;
//# sourceMappingURL=RemoveMessageModal.js.map

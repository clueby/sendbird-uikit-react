import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-3ebecbd4.js';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import { u as useChannel } from '../../ChannelProvider-d0a85b10.js';
import 'prop-types';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../ui/Icon.js';
import '../../index-dc6b96dc.js';
import '../../stringSet-e852fbe9.js';
import '../../utils-152638cc.js';
import '../../index-f348c926.js';
import '../../UserProfileContext-7308f635.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../index-dd65c23d.js';
import '../../topics-8423cf3b.js';
import '../../index-49a49008.js';
import '../../tslib.es6-460f27dd.js';
import '../../compareIds-42884444.js';
import '../../const-2af9e794.js';
import '../../uuid-1f0e148d.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';

var RemoveMessage = function RemoveMessage(props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = useContext(LocalizationContext).stringSet;
  var deleteMessage = useChannel().deleteMessage;
  return /*#__PURE__*/React__default.createElement(Modal, {
    type: ButtonTypes.DANGER,
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

export { RemoveMessage as default };
//# sourceMappingURL=RemoveMessageModal.js.map

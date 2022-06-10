import React__default, { useContext, useMemo, useState, useRef } from 'react';
import { f as format } from '../../index-dd65c23d.js';
import OpenchannelUserMessage from '../../ui/OpenchannelUserMessage.js';
import OpenChannelAdminMessage from '../../ui/OpenChannelAdminMessage.js';
import OpenchannelOGMessage from '../../ui/OpenchannelOGMessage.js';
import OpenchannelThumbnailMessage from '../../ui/OpenchannelThumbnailMessage.js';
import OpenchannelFileMessage from '../../ui/OpenchannelFileMessage.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import MessageInput from '../../ui/MessageInput.js';
import FileViewer from '../../ui/FileViewer.js';
import Modal from '../../ui/Modal.js';
import { a as LocalizationContext, u as useLocalization } from '../../LocalizationContext-d85ba22d.js';
import { u as useOpenChannel } from '../../OpenChannelProvider-d8f6e3d8.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../index-f348c926.js';
import '../../tslib.es6-460f27dd.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../ui/Icon.js';
import '../../uuid-1f0e148d.js';
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../stringSet-e852fbe9.js';
import '../../ui/IconButton.js';
import '../../ui/Loader.js';
import '../../ui/UserProfile.js';
import '../../withSendBird.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../index-3ebecbd4.js';
import '../../UserProfileContext-7308f635.js';
import '../../utils-cea76dc6.js';
import '../../openChannelUtils-56eeddf2.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextButton.js';
import '../../color-b2f557e0.js';
import 'stream';
import '../../const-83a690ac.js';
import '../../const-2af9e794.js';
import '../../ui/MentionUserLabel.js';
import '../../index-aaafc7c3.js';
import '../../utils-152638cc.js';
import '../../compareIds-42884444.js';

function RemoveMessageModal(_a) {
  var onCloseModal = _a.onCloseModal,
      onDeleteMessage = _a.onDeleteMessage;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement(Modal, {
    onCancel: onCloseModal,
    onSubmit: onDeleteMessage,
    submitText: stringSet.MESSAGE_MENU__DELETE,
    titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
  });
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
var SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp' // not supported in IE
  ],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
};
var isImage = function isImage(type) {
  return SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0;
};
var isVideo = function isVideo(type) {
  return SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0;
};

var MessageTypes = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  FILE: 'FILE',
  THUMBNAIL: 'THUMBNAIL',
  OG: 'OG',
  UNKNOWN: 'UNKNOWN'
};
var SendingMessageStatus = {
  NONE: 'none',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  PENDING: 'pending'
};
var getMessageType = function getMessageType(message) {
  if (message.isUserMessage && message.isUserMessage() || message.messageType === 'user') {
    return message.ogMetaData ? MessageTypes.OG : MessageTypes.USER;
  }

  if (message.isAdminMessage && message.isAdminMessage()) {
    return MessageTypes.ADMIN;
  }

  if (message.messageType === 'file') {
    return isImage(message.type) || isVideo(message.type) ? MessageTypes.THUMBNAIL : MessageTypes.FILE;
  }

  return MessageTypes.UNKNOWN;
};

function MessagOpenChannelMessageeHoc(props) {
  var _a;

  var _b;

  var message = props.message,
      chainTop = props.chainTop,
      chainBottom = props.chainBottom,
      hasSeparator = props.hasSeparator,
      renderMessage = props.renderMessage;

  var _c = useOpenChannel(),
      currentOpenChannel = _c.currentOpenChannel,
      deleteMessage = _c.deleteMessage,
      updateMessage = _c.updateMessage,
      resendMessage = _c.resendMessage;

  var dateLocale = useLocalization().dateLocale;
  var editDisabled = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen;
  var globalState = useSendbirdStateContext();
  var userId = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.userId;
  var sender = null;

  if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    sender = message === null || message === void 0 ? void 0 : message.sender;
  }

  var RenderedMessage = useMemo(function () {
    if (renderMessage) {
      return renderMessage({
        message: message,
        chainBottom: chainBottom,
        chainTop: chainTop
      });
    }

    return null;
  }, [message, renderMessage]);

  var _d = useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var editMessageInputRef = useRef(null);
  var isByMe = false;

  if (sender && (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    // pending and failed messages are by me
    isByMe = userId === sender.userId || (message === null || message === void 0 ? void 0 : message.requestState) === SendingMessageStatus.PENDING || (message === null || message === void 0 ? void 0 : message.requestState) === SendingMessageStatus.FAILED;
  }

  if (RenderedMessage) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
    }, /*#__PURE__*/React__default.createElement(RenderedMessage, null));
  }

  if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user' && showEdit) {
    return /*#__PURE__*/React__default.createElement(MessageInput, {
      isEdit: true,
      disabled: editDisabled,
      ref: editMessageInputRef,
      name: message === null || message === void 0 ? void 0 : message.messageId,
      onSendMessage: updateMessage,
      onCancelEdit: function onCancelEdit() {
        setShowEdit(false);
      },
      value: message === null || message === void 0 ? void 0 : message.message
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
  }, hasSeparator && /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, format(message === null || message === void 0 ? void 0 : message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  }))), (_a = {}, _a[MessageTypes.ADMIN] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
      return /*#__PURE__*/React__default.createElement(OpenChannelAdminMessage, {
        message: message
      });
    }
  }(), _a[MessageTypes.FILE] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
      return /*#__PURE__*/React__default.createElement(OpenchannelFileMessage, {
        message: message,
        disabled: editDisabled,
        userId: userId,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.OG] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
      return /*#__PURE__*/React__default.createElement(OpenchannelOGMessage, {
        message: message,
        userId: userId,
        showEdit: setShowEdit,
        disabled: editDisabled,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.THUMBNAIL] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
      return /*#__PURE__*/React__default.createElement(OpenchannelThumbnailMessage, {
        message: message,
        disabled: editDisabled,
        userId: userId,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        onClick: setShowFileViewer,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.USER] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
      return /*#__PURE__*/React__default.createElement(OpenchannelUserMessage, {
        message: message,
        userId: userId,
        disabled: editDisabled,
        showEdit: setShowEdit,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.UNKNOWN] = function () {
    return; // return (
    //   <OpenChannelUnknownMessage message={message} />
    // );
  }(), _a)[getMessageType(message)], showRemove && /*#__PURE__*/React__default.createElement(RemoveMessageModal, {
    onCloseModal: function onCloseModal() {
      return setShowRemove(false);
    },
    onDeleteMessage: function onDeleteMessage() {
      if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        deleteMessage(message);
      }
    }
  }), showFileViewer && (message === null || message === void 0 ? void 0 : message.messageType) === 'file' && /*#__PURE__*/React__default.createElement(FileViewer, {
    onClose: function onClose() {
      return setShowFileViewer(false);
    },
    message: message,
    onDelete: function onDelete() {
      return deleteMessage(message);
    },
    isByMe: isByMe
  }));
}

export { MessagOpenChannelMessageeHoc as default };
//# sourceMappingURL=OpenChannelMessage.js.map

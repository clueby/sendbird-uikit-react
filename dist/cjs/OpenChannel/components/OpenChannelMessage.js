'use strict';

var React = require('react');
var index = require('../../index-8a33a65e.js');
var ui_OpenchannelUserMessage = require('../../ui/OpenchannelUserMessage.js');
var ui_OpenChannelAdminMessage = require('../../ui/OpenChannelAdminMessage.js');
var ui_OpenchannelOGMessage = require('../../ui/OpenchannelOGMessage.js');
var ui_OpenchannelThumbnailMessage = require('../../ui/OpenchannelThumbnailMessage.js');
var ui_OpenchannelFileMessage = require('../../ui/OpenchannelFileMessage.js');
var ui_DateSeparator = require('../../ui/DateSeparator.js');
var ui_Label = require('../../index-0509de40.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var ui_FileViewer = require('../../ui/FileViewer.js');
var ui_Modal = require('../../ui/Modal.js');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var OpenChannel_context = require('../../OpenChannelProvider-c6c9924f.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../index-bbeb94cc.js');
require('../../tslib.es6-982bd4b0.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../../ui/Icon.js');
require('../../uuid-4e1bf80d.js');
require('../../ui/ContextMenu.js');
require('../../index-bc9077cd.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../stringSet-811a1998.js');
require('../../ui/IconButton.js');
require('../../ui/Loader.js');
require('../../ui/UserProfile.js');
require('../../withSendBird.js');
require('../../sendBirdSelectors.js');
require('../../topics-c134dcfd.js');
require('../../index-573c23f7.js');
require('../../UserProfileContext-620fcca0.js');
require('../../utils-04e2dc74.js');
require('../../openChannelUtils-a681bd70.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextButton.js');
require('../../color-11a12dea.js');
require('stream');
require('../../const-e068a55a.js');
require('../../const-6a2e7b51.js');
require('../../ui/MentionUserLabel.js');
require('../../index-aae80149.js');
require('../../utils-ef5ae6ef.js');
require('../../compareIds-d1989cff.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function RemoveMessageModal(_a) {
  var onCloseModal = _a.onCloseModal,
      onDeleteMessage = _a.onDeleteMessage;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
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

  var _c = OpenChannel_context.useOpenChannel(),
      currentOpenChannel = _c.currentOpenChannel,
      deleteMessage = _c.deleteMessage,
      updateMessage = _c.updateMessage,
      resendMessage = _c.resendMessage;

  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var editDisabled = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen;
  var globalState = useSendbirdStateContext();
  var userId = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.userId;
  var sender = null;

  if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    sender = message === null || message === void 0 ? void 0 : message.sender;
  }

  var RenderedMessage = React.useMemo(function () {
    if (renderMessage) {
      return renderMessage({
        message: message,
        chainBottom: chainBottom,
        chainTop: chainTop
      });
    }

    return null;
  }, [message, renderMessage]);

  var _d = React.useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = React.useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = React.useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var editMessageInputRef = React.useRef(null);
  var isByMe = false;

  if (sender && (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    // pending and failed messages are by me
    isByMe = userId === sender.userId || (message === null || message === void 0 ? void 0 : message.requestState) === SendingMessageStatus.PENDING || (message === null || message === void 0 ? void 0 : message.requestState) === SendingMessageStatus.FAILED;
  }

  if (RenderedMessage) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
    }, /*#__PURE__*/React__default["default"].createElement(RenderedMessage, null));
  }

  if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user' && showEdit) {
    return /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
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

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
  }, hasSeparator && /*#__PURE__*/React__default["default"].createElement(ui_DateSeparator, null, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index.format(message === null || message === void 0 ? void 0 : message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  }))), (_a = {}, _a[MessageTypes.ADMIN] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
      return /*#__PURE__*/React__default["default"].createElement(ui_OpenChannelAdminMessage, {
        message: message
      });
    }
  }(), _a[MessageTypes.FILE] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
      return /*#__PURE__*/React__default["default"].createElement(ui_OpenchannelFileMessage, {
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
      return /*#__PURE__*/React__default["default"].createElement(ui_OpenchannelOGMessage, {
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
      return /*#__PURE__*/React__default["default"].createElement(ui_OpenchannelThumbnailMessage, {
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
      return /*#__PURE__*/React__default["default"].createElement(ui_OpenchannelUserMessage, {
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
  }(), _a)[getMessageType(message)], showRemove && /*#__PURE__*/React__default["default"].createElement(RemoveMessageModal, {
    onCloseModal: function onCloseModal() {
      return setShowRemove(false);
    },
    onDeleteMessage: function onDeleteMessage() {
      if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        deleteMessage(message);
      }
    }
  }), showFileViewer && (message === null || message === void 0 ? void 0 : message.messageType) === 'file' && /*#__PURE__*/React__default["default"].createElement(ui_FileViewer["default"], {
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

module.exports = MessagOpenChannelMessageeHoc;
//# sourceMappingURL=OpenChannelMessage.js.map

'use strict';

var React = require('react');
var OpenChannel_context = require('../../OpenChannelProvider-c6c9924f.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../index-524a238c.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../index-8a33a65e.js');
require('../../index-bbeb94cc.js');
require('../../UserProfileContext-620fcca0.js');
require('prop-types');
require('../../tslib.es6-982bd4b0.js');
require('../../compareIds-d1989cff.js');
require('../../topics-c134dcfd.js');
require('../../uuid-4e1bf80d.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../LocalizationContext-2d46f2a3.js');
require('../../stringSet-811a1998.js');
require('../../ui/MessageInput.js');
require('stream');
require('../../const-e068a55a.js');
require('../../const-6a2e7b51.js');
require('../../ui/IconButton.js');
require('../../index-573c23f7.js');
require('../../index-0509de40.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-bc9077cd.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../index-e89c50ba.js');
require('./OpenChannelMessage.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendBirdSelectors.js');
require('../../utils-04e2dc74.js');
require('../../openChannelUtils-a681bd70.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../color-11a12dea.js');
require('../../ui/DateSeparator.js');
require('../../ui/FileViewer.js');
require('../../index-aae80149.js');
require('../../ui/Modal.js');
require('../../utils-ef5ae6ef.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';

var OpenChannelUI = function OpenChannelUI(_a) {
  var renderMessage = _a.renderMessage,
      renderHeader = _a.renderHeader,
      renderInput = _a.renderInput,
      renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList,
      renderPlaceHolderError = _a.renderPlaceHolderError,
      renderPlaceHolderLoading = _a.renderPlaceHolderLoading;

  var _b = OpenChannel_context.useOpenChannel(),
      currentOpenChannel = _b.currentOpenChannel,
      amIBanned = _b.amIBanned,
      loading = _b.loading,
      isInvalid = _b.isInvalid,
      messageInputRef = _b.messageInputRef;

  if (!currentOpenChannel || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url) || amIBanned) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (loading) {
    return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.LOADING
    }));
  }

  if (isInvalid) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelHeader, null), (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_FrozenChannelNotification, null), /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelMessageList, {
    renderMessage: renderMessage,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList
  }), (renderInput === null || renderInput === void 0 ? void 0 : renderInput()) || /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelInput, {
    ref: messageInputRef
  }));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelUI.js.map

'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-c6c9924f.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-2d46f2a3.js');
require('./stringSet-811a1998.js');
require('./index-bbeb94cc.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');
require('stream');
require('prop-types');
require('./const-e068a55a.js');
require('./const-6a2e7b51.js');
require('./ui/IconButton.js');
require('./index-573c23f7.js');
require('./index-0509de40.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-bc9077cd.js');
require('./tslib.es6-982bd4b0.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-4e1bf80d.js');
require('./index-524a238c.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-e89c50ba.js');
require('./index-8a33a65e.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendBird.js');
require('./sendBirdSelectors.js');
require('./topics-c134dcfd.js');
require('./UserProfileContext-620fcca0.js');
require('./utils-04e2dc74.js');
require('./openChannelUtils-a681bd70.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-11a12dea.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-aae80149.js');
require('./ui/Modal.js');
require('./utils-ef5ae6ef.js');
require('./useSendbirdStateContext.js');
require('./compareIds-d1989cff.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OpenChannel = function OpenChannel(props) {
  return /*#__PURE__*/React__default["default"].createElement(OpenChannel_context.OpenChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    useMessageGrouping: props === null || props === void 0 ? void 0 : props.useMessageGrouping,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelUI, {
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderInput: props === null || props === void 0 ? void 0 : props.renderInput,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

module.exports = OpenChannel;
//# sourceMappingURL=OpenChannel.js.map

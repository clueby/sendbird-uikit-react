'use strict';

var React = require('react');
var ChannelList_context = require('./ChannelListProvider-802b4925.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./tslib.es6-982bd4b0.js');
require('./topics-c134dcfd.js');
require('./uuid-4e1bf80d.js');
require('./utils-ef5ae6ef.js');
require('./UserProfileContext-620fcca0.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');
require('./index-bc9077cd.js');
require('./ChannelList/components/ChannelListHeader.js');
require('./LocalizationContext-2d46f2a3.js');
require('./stringSet-811a1998.js');
require('./index-bbeb94cc.js');
require('./index-0509de40.js');
require('./ui/IconButton.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./ChannelList/components/AddChannel.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./CreateChannelProvider-9bfe7826.js');
require('./sendBirdSelectors.js');
require('./CreateChannel/components/InviteMembers.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-aae80149.js');
require('./index-573c23f7.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ui/ChannelAvatar.js');
require('./utils-3bff255e.js');
require('./ui/Badge.js');
require('./index-762c8cf0.js');
require('./index-e89c50ba.js');
require('./index-8a33a65e.js');
require('./ui/MentionUserLabel.js');
require('./Channel/components/TypingIndicator.js');
require('./ChannelProvider-09e67e43.js');
require('./compareIds-d1989cff.js');
require('./const-6a2e7b51.js');
require('./ui/ReactionButton.js');
require('./ui/MessageStatus.js');
require('./ui/Loader.js');
require('./ChannelList/components/ChannelPreviewAction.js');
require('./EditUserProfile.js');
require('./index-730f4bbf.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./color-11a12dea.js');
require('./actionTypes-2c34d1bd.js');
require('./index-524a238c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelList = function ChannelList(props) {
  return /*#__PURE__*/React__default["default"].createElement(ChannelList_context.ChannelListProvider, {
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit,
    onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel,
    onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange,
    onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess,
    onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect,
    sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect,
    isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled,
    isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList_components_ChannelListUI, {
    renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

module.exports = ChannelList;
//# sourceMappingURL=ChannelList.js.map

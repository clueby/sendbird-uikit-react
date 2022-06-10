'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-c3cd9899.js');
var React = require('react');
var PropTypes = require('prop-types');
var SendbirdProvider = require('./SendbirdProvider.js');
var ChannelList = require('./ChannelList.js');
var Channel = require('./Channel.js');
var ChannelSettings = require('./ChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
require('./withSendBird.js');
require('sendbird');
require('./actionTypes-2c34d1bd.js');
require('./index-bc9077cd.js');
require('./tslib.es6-982bd4b0.js');
require('css-vars-ponyfill');
require('./uuid-4e1bf80d.js');
require('./LocalizationContext-2d46f2a3.js');
require('./stringSet-811a1998.js');
require('./index-bbeb94cc.js');
require('./ChannelListProvider-802b4925.js');
require('./topics-c134dcfd.js');
require('./utils-ef5ae6ef.js');
require('./UserProfileContext-620fcca0.js');
require('./useSendbirdStateContext.js');
require('./ChannelList/components/ChannelListUI.js');
require('./ChannelList/components/ChannelListHeader.js');
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
require('./index-524a238c.js');
require('./Channel/components/ChannelUI.js');
require('./ui/ConnectionStatus.js');
require('./Channel/components/ChannelHeader.js');
require('./Channel/components/MessageList.js');
require('./Channel/components/Message.js');
require('./Channel/components/SuggestedMentionList.js');
require('./const-e068a55a.js');
require('./ui/DateSeparator.js');
require('./ui/MessageInput.js');
require('stream');
require('./ui/MessageContent.js');
require('./ui/MessageItemMenu.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/EmojiReactions.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./ui/ReactionBadge.js');
require('./ui/AdminMessage.js');
require('./ui/TextMessageItemBody.js');
require('./index-f5ea7fba.js');
require('./ui/LinkLabel.js');
require('./ui/MentionLabel.js');
require('./ui/FileMessageItemBody.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/QuoteMessage.js');
require('./Channel/components/FileViewer.js');
require('./Channel/components/RemoveMessageModal.js');
require('./Channel/components/FrozenNotification.js');
require('./Channel/components/UnreadCount.js');
require('./Channel/components/MessageInput.js');
require('./ui/QuoteMessageInput.js');
require('./ChannelSettings/components/ChannelSettingsUI.js');
require('./ChannelSettings/context.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ChannelSettings/components/AdminPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./context-e4103477.js');
require('./ChannelSettings/components/UserListItem.js');
require('./MemberList-62c4790e.js');
require('./ChannelSettings/components/LeaveChannel.js');
require('./ChannelSettings/components/UserPanel.js');
require('./MessageSearch/components/MessageSearchUI.js');
require('./MessageSearch/context.js');
require('./ui/MessageSearchItem.js');
require('./ui/MessageSearchFileItem.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function App(props) {
  var appId = props.appId,
      userId = props.userId,
      accessToken = props.accessToken,
      theme = props.theme,
      userListQuery = props.userListQuery,
      nickname = props.nickname,
      profileUrl = props.profileUrl,
      dateLocale = props.dateLocale,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      useReaction = props.useReaction,
      isMentionEnabled = props.isMentionEnabled,
      replyType = props.replyType,
      useMessageGrouping = props.useMessageGrouping,
      colorSet = props.colorSet,
      stringSet = props.stringSet,
      allowProfileEdit = props.allowProfileEdit,
      disableUserProfile = props.disableUserProfile,
      renderUserProfile = props.renderUserProfile,
      showSearchIcon = props.showSearchIcon,
      onProfileEditSuccess = props.onProfileEditSuccess,
      imageCompression = props.imageCompression,
      disableAutoSelect = props.disableAutoSelect,
      isTypingIndicatorEnabledOnChannelList = props.isTypingIndicatorEnabledOnChannelList,
      isMessageReceiptStatusEnabledOnChannelList = props.isMessageReceiptStatusEnabledOnChannelList;

  var _useState = React.useState(null),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      currentChannelUrl = _useState2[0],
      setCurrentChannelUrl = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _rollupPluginBabelHelpers._slicedToArray(_useState3, 2),
      showSettings = _useState4[0],
      setShowSettings = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _rollupPluginBabelHelpers._slicedToArray(_useState5, 2),
      showSearch = _useState6[0],
      setShowSearch = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _rollupPluginBabelHelpers._slicedToArray(_useState7, 2),
      highlightedMessage = _useState8[0],
      setHighlightedMessage = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _rollupPluginBabelHelpers._slicedToArray(_useState9, 2),
      startingPoint = _useState10[0],
      setStartingPoint = _useState10[1];

  return /*#__PURE__*/React__default["default"].createElement(SendbirdProvider, {
    stringSet: stringSet,
    appId: appId,
    userId: userId,
    accessToken: accessToken,
    theme: theme,
    nickname: nickname,
    profileUrl: profileUrl,
    dateLocale: dateLocale,
    userListQuery: userListQuery,
    config: config,
    colorSet: colorSet,
    disableUserProfile: disableUserProfile,
    renderUserProfile: renderUserProfile,
    imageCompression: imageCompression,
    useReaction: useReaction,
    isMentionEnabled: isMentionEnabled,
    isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__wrap"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__channellist-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList, {
    allowProfileEdit: allowProfileEdit,
    onProfileEditSuccess: onProfileEditSuccess,
    disableAutoSelect: disableAutoSelect,
    onChannelSelect: function onChannelSelect(channel) {
      setStartingPoint(null);
      setHighlightedMessage(null);

      if (channel && channel.url) {
        setCurrentChannelUrl(channel.url);
      } else {
        setCurrentChannelUrl('');
      }
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "\n            ".concat(showSettings ? 'sendbird-app__conversation--settings-open' : '', "\n            ").concat(showSearch ? 'sendbird-app__conversation--search-open' : '', "\n            sendbird-app__conversation-wrap\n          ")
  }, /*#__PURE__*/React__default["default"].createElement(Channel, {
    channelUrl: currentChannelUrl,
    onChatHeaderActionClick: function onChatHeaderActionClick() {
      setShowSearch(false);
      setShowSettings(!showSettings);
    },
    onSearchClick: function onSearchClick() {
      setShowSettings(false);
      setShowSearch(!showSearch);
    },
    showSearchIcon: showSearchIcon,
    startingPoint: startingPoint,
    highlightedMessage: highlightedMessage,
    useReaction: useReaction,
    replyType: replyType,
    useMessageGrouping: useMessageGrouping
  })), showSettings && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__settingspanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelSettings, {
    className: "sendbird-channel-settings",
    channelUrl: currentChannelUrl,
    onCloseClick: function onCloseClick() {
      setShowSettings(false);
    }
  })), showSearch && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__searchpanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(MessageSearch, {
    channelUrl: currentChannelUrl,
    onResultClick: function onResultClick(message) {
      if (message.messageId === highlightedMessage) {
        setHighlightedMessage(null);
        setTimeout(function () {
          setHighlightedMessage(message.messageId);
        });
      } else {
        setStartingPoint(message.createdAt);
        setHighlightedMessage(message.messageId);
      }
    },
    onCloseClick: function onCloseClick() {
      setShowSearch(false);
    }
  }))));
}
App.propTypes = {
  appId: PropTypes__default["default"].string.isRequired,
  userId: PropTypes__default["default"].string.isRequired,
  accessToken: PropTypes__default["default"].string,
  theme: PropTypes__default["default"].string,
  userListQuery: PropTypes__default["default"].func,
  nickname: PropTypes__default["default"].string,
  profileUrl: PropTypes__default["default"].string,
  allowProfileEdit: PropTypes__default["default"].bool,
  disableUserProfile: PropTypes__default["default"].bool,
  renderUserProfile: PropTypes__default["default"].func,
  onProfileEditSuccess: PropTypes__default["default"].func,
  dateLocale: PropTypes__default["default"].shape({}),
  config: PropTypes__default["default"].shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
  }),
  useReaction: PropTypes__default["default"].bool,
  replyType: PropTypes__default["default"].oneOf(['NONE', 'QUOTE_REPLY', 'THREAD']),
  showSearchIcon: PropTypes__default["default"].bool,
  useMessageGrouping: PropTypes__default["default"].bool,
  stringSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  colorSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  imageCompression: PropTypes__default["default"].shape({
    compressionRate: PropTypes__default["default"].number,
    resizingWidth: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
    resizingHeight: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }),
  disableAutoSelect: PropTypes__default["default"].bool,
  isMentionEnabled: PropTypes__default["default"].bool,
  isTypingIndicatorEnabledOnChannelList: PropTypes__default["default"].bool,
  isMessageReceiptStatusEnabledOnChannelList: PropTypes__default["default"].bool
};
App.defaultProps = {
  accessToken: '',
  theme: 'light',
  nickname: '',
  profileUrl: '',
  userListQuery: null,
  dateLocale: null,
  allowProfileEdit: false,
  onProfileEditSuccess: null,
  disableUserProfile: false,
  showSearchIcon: false,
  renderUserProfile: null,
  config: {},
  useReaction: true,
  isMentionEnabled: false,
  replyType: 'NONE',
  useMessageGrouping: true,
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  disableAutoSelect: false,
  isTypingIndicatorEnabledOnChannelList: false,
  isMessageReceiptStatusEnabledOnChannelList: false
};

module.exports = App;
//# sourceMappingURL=App.js.map

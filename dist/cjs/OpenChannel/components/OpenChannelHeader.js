'use strict';

var React = require('react');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Label = require('../../index-0509de40.js');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var OpenChannel_context = require('../../OpenChannelProvider-c6c9924f.js');
require('../../tslib.es6-982bd4b0.js');
require('../../ui/ImageRenderer.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../../uuid-4e1bf80d.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../index-8a33a65e.js');
require('../../UserProfileContext-620fcca0.js');
require('../../compareIds-d1989cff.js');
require('../../topics-c134dcfd.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenchannelConversationHeader() {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _a = OpenChannel_context.useOpenChannel(),
      currentOpenChannel = _a.currentOpenChannel,
      onChatHeaderActionClick = _a.onChatHeaderActionClick,
      amIOperator = _a.amIOperator;

  var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
  var subTitle = OpenChannel_context.kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount) + " " + stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS;
  var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__left"
  }, coverImage ? /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    className: "sendbird-openchannel-conversation-header__left__cover-image",
    src: coverImage,
    alt: "channel cover image",
    width: "32px",
    height: "32px"
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__left__cover-image--icon",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CHANNELS,
    fillColor: ui_Icon.IconColors.CONTENT,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-conversation-header__left__title",
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, title || stringSet.NO_TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-conversation-header__left__sub-title",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, subTitle || stringSet.NO_TITLE)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    className: "sendbird-openchannel-conversation-header__right__trigger",
    width: "32px",
    height: "32px",
    onClick: onChatHeaderActionClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: amIOperator ? ui_Icon.IconTypes.INFO : ui_Icon.IconTypes.MEMBERS,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenChannelHeader.js.map

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var uuid = require('../../uuid-4e1bf80d.js');
var ui_Label = require('../../index-0509de40.js');
var Channel_context = require('../../ChannelProvider-09e67e43.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../../UserProfileContext-620fcca0.js');
require('../../index-8a33a65e.js');
require('../../topics-c134dcfd.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('../../compareIds-d1989cff.js');
require('../../const-6a2e7b51.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../withSendBird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TypingIndicatorText = function TypingIndicatorText(_a) {
  var members = _a.members;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  if (!members || members.length === 0) {
    return '';
  }

  if (members && members.length === 1) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__IS_TYPING;
  }

  if (members && members.length === 2) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__AND + " " + members[1].nickname + " " + stringSet.TYPING_INDICATOR__ARE_TYPING;
  }

  return stringSet.TYPING_INDICATOR__MULTIPLE_TYPING;
};

var TypingIndicator = function TypingIndicator() {
  var _a, _b, _c;

  var channelUrl = Channel_context.useChannel().channelUrl;
  var globalStore = useSendbirdStateContext();
  var sb = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = React.useState(uuid.uuidv4()),
      handlerId = _d[0],
      setHandlerId = _d[1];

  var _e = React.useState([]),
      typingMembers = _e[0],
      setTypingMembers = _e[1];

  React.useEffect(function () {
    if (sb && sb.ChannelHandler) {
      sb.removeChannelHandler(handlerId);
      var newHandlerId = uuid.uuidv4();
      var handler = new sb.ChannelHandler(); // there is a possible warning in here - setState called after unmount

      handler.onTypingStatusUpdated = function (groupChannel) {
        logger.info('Channel > Typing Indicator: onTypingStatusUpdated', groupChannel);

        if (groupChannel.url === channelUrl) {
          var members = groupChannel.getTypingMembers();
          setTypingMembers(members);
        }
      };

      sb.addChannelHandler(newHandlerId, handler);
      setHandlerId(newHandlerId);
    }

    return function () {
      setTypingMembers([]);

      if (sb && sb.removeChannelHandler) {
        sb.removeChannelHandler(handlerId);
      }
    };
  }, [channelUrl]);
  return /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-conversation__footer__typing-indicator__text",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, /*#__PURE__*/React__default["default"].createElement(TypingIndicatorText, {
    members: typingMembers
  }));
};

exports.TypingIndicatorText = TypingIndicatorText;
exports["default"] = TypingIndicator;
//# sourceMappingURL=TypingIndicator.js.map

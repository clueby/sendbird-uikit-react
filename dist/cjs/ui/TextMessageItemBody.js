'use strict';

var React = require('react');
var ui_Label = require('../index-0509de40.js');
var index = require('../index-bc9077cd.js');
var LocalizationContext = require('../LocalizationContext-2d46f2a3.js');
var uuid = require('../uuid-4e1bf80d.js');
var index$1 = require('../index-f5ea7fba.js');
require('../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../stringSet-811a1998.js');
require('../tslib.es6-982bd4b0.js');
require('../index-bbeb94cc.js');
require('./LinkLabel.js');
require('./MentionLabel.js');
require('./ContextMenu.js');
require('react-dom');
require('./SortByRow.js');
require('./UserProfile.js');
require('../withSendBird.js');
require('../sendBirdSelectors.js');
require('../topics-c134dcfd.js');
require('./Avatar.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../index-573c23f7.js');
require('../useSendbirdStateContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TextMessageItemBody(_a) {
  var _b, _c, _d;

  var className = _a.className,
      message = _a.message,
      _e = _a.isByMe,
      isByMe = _e === void 0 ? false : _e,
      _f = _a.mouseHover,
      mouseHover = _f === void 0 ? false : _f,
      _g = _a.isMentionEnabled,
      isMentionEnabled = _g === void 0 ? false : _g;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
  var sentences = React.useMemo(function () {
    var _a;

    return (_a = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _a === void 0 ? void 0 : _a.split(/\n/).map(function (sentence) {
      return sentence.split(/\s/);
    });
  }, [message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate]);
  return /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: index.getClassName([className, 'sendbird-text-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : ''])
  }, isMessageMentioned ? sentences.map(function (sentence, index) {
    return [sentence.map(function (word) {
      return /*#__PURE__*/React__default["default"].createElement(index$1.Word, {
        key: uuid.uuidv4(),
        word: word,
        message: message,
        isByMe: isByMe
      });
    }), (sentences === null || sentences === void 0 ? void 0 : sentences[index + 1]) ? /*#__PURE__*/React__default["default"].createElement("br", null) : null];
  }) : message === null || message === void 0 ? void 0 : message.message, index.isEditedMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-text-message-item-body__message edited",
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2
  }, " " + stringSet.MESSAGE_EDITED + " ")));
}

module.exports = TextMessageItemBody;
//# sourceMappingURL=TextMessageItemBody.js.map

'use strict';

var React = require('react');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-0509de40.js');
var ui_UserProfile = require('./UserProfile.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../index-bc9077cd.js');
require('../tslib.es6-982bd4b0.js');
require('react-dom');
require('./SortByRow.js');
require('../stringSet-811a1998.js');
require('../LocalizationContext-2d46f2a3.js');
require('../index-bbeb94cc.js');
require('../withSendBird.js');
require('../sendBirdSelectors.js');
require('../topics-c134dcfd.js');
require('./Avatar.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../uuid-4e1bf80d.js');
require('../index-573c23f7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MentionLabel(props) {
  var _a, _b, _c;

  var mentionTemplate = props.mentionTemplate,
      mentionedUserId = props.mentionedUserId,
      isByMe = props.isByMe;
  var mentionRef = React.useRef();
  var sendbirdState = useSendbirdStateContext();
  var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var amIBeingMentioned = userId === mentionedUserId;

  var _d = React.useState(),
      user = _d[0],
      setUser = _d[1];

  var fetchUser = React.useCallback(function (toggleDropdown) {
    if (user) {
      toggleDropdown();
    }

    var query = sdk.createApplicationUserListQuery();
    query.userIdsFilter = [mentionedUserId];
    query.next(function (members) {
      if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
        setUser(members[0]);
      }

      toggleDropdown();
    });
  }, [sdk, mentionedUserId]);
  return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement("a", {
        className: "\n            sendbird-word__mention\n            " + (amIBeingMentioned ? 'sendbird-word__mention--me' : '') + "\n          ",
        onClick: function onClick() {
          return fetchUser(toggleDropdown);
        },
        ref: mentionRef
      }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.CAPTION_1,
        color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
      }, "" + mentionTemplate + mentionedUserId));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems
      /**
      * parentRef: For catching location(x, y) of MenuItems
      * parentContainRef: For toggling more options(menus & reactions)
      */
      , {
        parentRef: mentionRef,
        parentContainRef: mentionRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        disableMessaging: true,
        user: user,
        onSuccess: closeDropdown
      }));
    }
  });
}

module.exports = MentionLabel;
//# sourceMappingURL=MentionLabel.js.map

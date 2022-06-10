import React__default, { useRef, useState, useCallback } from 'react';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import ConnectedUserProfile from './UserProfile.js';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import '../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../index-49a49008.js';
import '../tslib.es6-460f27dd.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-e852fbe9.js';
import '../LocalizationContext-d85ba22d.js';
import '../index-f348c926.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-8423cf3b.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../uuid-1f0e148d.js';
import '../index-3ebecbd4.js';

function MentionLabel(props) {
  var _a, _b, _c;

  var mentionTemplate = props.mentionTemplate,
      mentionedUserId = props.mentionedUserId,
      isByMe = props.isByMe;
  var mentionRef = useRef();
  var sendbirdState = useSendbirdStateContext();
  var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var amIBeingMentioned = userId === mentionedUserId;

  var _d = useState(),
      user = _d[0],
      setUser = _d[1];

  var fetchUser = useCallback(function (toggleDropdown) {
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
  return /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement("a", {
        className: "\n            sendbird-word__mention\n            " + (amIBeingMentioned ? 'sendbird-word__mention--me' : '') + "\n          ",
        onClick: function onClick() {
          return fetchUser(toggleDropdown);
        },
        ref: mentionRef
      }, /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.CAPTION_1,
        color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
      }, "" + mentionTemplate + mentionedUserId));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems
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
      }, /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        disableMessaging: true,
        user: user,
        onSuccess: closeDropdown
      }));
    }
  });
}

export { MentionLabel as default };
//# sourceMappingURL=MentionLabel.js.map

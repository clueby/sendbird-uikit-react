import { a as __spreadArray } from '../../tslib.es6-460f27dd.js';
import React__default, { useRef, useContext, useState, useEffect } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import { a as UserProfileContext } from '../../UserProfileContext-7308f635.js';
import '../../index-3ebecbd4.js';
import '../../context-a442514b.js';
import Avatar from '../../ui/Avatar.js';
import '../../ui/Modal.js';
import '../../ui/UserListItem.js';
import ConnectedUserProfile from '../../ui/UserProfile.js';
import ContextMenu, { MenuItems } from '../../ui/ContextMenu.js';
import { useOpenChannelSettings } from '../context.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../utils-152638cc.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-1f0e148d.js';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../withSendBird.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../index-49a49008.js';
import '../../ui/SortByRow.js';

var UserListItem = function UserListItem(_a) {
  var member = _a.member,
      currentUser = _a.currentUser;
  var avatarRef = useRef(null);

  var _b = useContext(UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-participants-accordion__member"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-participants-accordion__member-avatar"
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        onClick: function onClick() {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        },
        ref: avatarRef,
        src: member.profileUrl,
        width: 24,
        height: 24
      });
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems, {
        openLeft: true,
        parentRef: avatarRef // for catching location(x, y) of MenuItems
        ,
        parentContainRef: avatarRef // for toggling more options(menus & reactions)
        ,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: member,
        currentUserId: currentUser,
        close: closeDropdown
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        disableMessaging: true,
        user: member,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  })), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, member.nickname || stringSet.NO_NAME, currentUser === member.userId && stringSet.CHANNEL_SETTING__MEMBERS__YOU));
};

function ParticipantsList() {
  var _a;

  var globalState = useSendbirdStateContext();
  var currentUser = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.userId;

  var _b = useOpenChannelSettings(),
      channel = _b.channel,
      onCloseClick = _b.onCloseClick;

  var stringSet = useContext(LocalizationContext).stringSet;

  var _c = useState([]),
      participants = _c[0],
      setParticipants = _c[1];

  var _d = useState(null),
      participantListQuery = _d[0],
      setParticipantListQuery = _d[1];

  useEffect(function () {
    if (!channel || !channel.createParticipantListQuery) {
      return;
    }

    var participantListQuery = channel.createParticipantListQuery();
    setParticipantListQuery(participantListQuery);
    participantListQuery.next(function (participantList, error) {
      if (error) {
        return;
      }

      setParticipants(participantList);
    });
  }, [channel]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__participant"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__participants-list",
    onScroll: function onScroll(e) {
      var hasNext = participantListQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        participantListQuery.next(function (fetchedParticipants, error) {
          if (error) {
            return;
          }

          setParticipants(__spreadArray(__spreadArray([], participants, true), fetchedParticipants, true));
        });
      }
    }
  }, /*#__PURE__*/React__default.createElement("div", null, participants.map(function (p) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      member: p,
      currentUser: currentUser,
      key: p.userId
    });
  }), participants && participants.length === 0 ? /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-settings__empty-list",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_3
  }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST) : null)));
}

export { ParticipantsList as default };
//# sourceMappingURL=ParticipantUI.js.map

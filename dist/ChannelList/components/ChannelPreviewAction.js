import { a as _slicedToArray } from '../../_rollupPluginBabelHelpers-ad900775.js';
import React__default, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import ContextMenu, { MenuItems, MenuItem } from '../../ui/ContextMenu.js';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { n as noop } from '../../utils-152638cc.js';
import Modal from '../../ui/Modal.js';
import { u as useChannelListContext } from '../../ChannelListProvider-aae461a3.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../index-dc6b96dc.js';
import '../../index-49a49008.js';
import '../../tslib.es6-460f27dd.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../withSendBird.js';
import '../../index-aaafc7c3.js';
import '../../index-3ebecbd4.js';
import '../../topics-8423cf3b.js';
import '../../uuid-1f0e148d.js';
import '../../UserProfileContext-7308f635.js';

var LeaveChannel = function LeaveChannel(props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      _onSubmit = _d === void 0 ? noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? noop : _e;

  var channel = (_a = useChannelListContext()) === null || _a === void 0 ? void 0 : _a.currentChannel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default.createElement(Modal, {
      disabled: !isOnline,
      onCancel: onCancel,
      onSubmit: function onSubmit() {
        logger.info('ChannelSettings: Leaving channel', channel);
        channel.leave().then(function () {
          logger.info('ChannelSettings: Leaving channel successful!', channel);

          _onSubmit();
        });
      },
      submitText: "Leave",
      titleText: "Leave this channel?"
    });
  }
};

function ChannelPreviewAction(_ref) {
  var disabled = _ref.disabled,
      onLeaveChannel = _ref.onLeaveChannel;
  var parentRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useContext = useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default.createElement("div", {
    role: "button",
    style: {
      display: 'inline-block'
    },
    onKeyDown: function onKeyDown(e) {
      e.stopPropagation();
    },
    tabIndex: 0,
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(IconButton, {
        ref: parentRef,
        onClick: toggleDropdown,
        height: "32px",
        width: "32px"
      }, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MORE,
        fillColor: IconColors.PRIMARY,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems, {
        parentRef: parentRef,
        parentContainRef: parentRef,
        closeDropdown: closeDropdown
      }, /*#__PURE__*/React__default.createElement(MenuItem, {
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          setShowModal(true);
          closeDropdown();
        }
      }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE));
    }
  }), showModal && /*#__PURE__*/React__default.createElement(LeaveChannel, {
    onSubmit: function onSubmit() {
      setShowModal(false);
      onLeaveChannel();
    },
    onCancel: function onCancel() {
      return setShowModal(false);
    }
  }));
}
ChannelPreviewAction.propTypes = {
  disabled: PropTypes.bool,
  onLeaveChannel: PropTypes.func.isRequired
};
ChannelPreviewAction.defaultProps = {
  disabled: false
};

export { ChannelPreviewAction as default };
//# sourceMappingURL=ChannelPreviewAction.js.map

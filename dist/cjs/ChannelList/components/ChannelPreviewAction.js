'use strict';

var _rollupPluginBabelHelpers = require('../../_rollupPluginBabelHelpers-c3cd9899.js');
var React = require('react');
var PropTypes = require('prop-types');
var LocalizationContext = require('../../LocalizationContext-2d46f2a3.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var utils = require('../../utils-ef5ae6ef.js');
var ui_Modal = require('../../ui/Modal.js');
var ChannelList_context = require('../../ChannelListProvider-802b4925.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../index-0509de40.js');
require('../../index-bc9077cd.js');
require('../../tslib.es6-982bd4b0.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../withSendBird.js');
require('../../index-aae80149.js');
require('../../index-573c23f7.js');
require('../../topics-c134dcfd.js');
require('../../uuid-4e1bf80d.js');
require('../../UserProfileContext-620fcca0.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var LeaveChannel = function LeaveChannel(props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      _onSubmit = _d === void 0 ? utils.noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? utils.noop : _e;

  var channel = (_a = ChannelList_context.useChannelListContext()) === null || _a === void 0 ? void 0 : _a.currentChannel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
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
  var parentRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default["default"].createElement("div", {
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
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
        ref: parentRef,
        onClick: toggleDropdown,
        height: "32px",
        width: "32px"
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MORE,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        parentRef: parentRef,
        parentContainRef: parentRef,
        closeDropdown: closeDropdown
      }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          setShowModal(true);
          closeDropdown();
        }
      }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE));
    }
  }), showModal && /*#__PURE__*/React__default["default"].createElement(LeaveChannel, {
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
  disabled: PropTypes__default["default"].bool,
  onLeaveChannel: PropTypes__default["default"].func.isRequired
};
ChannelPreviewAction.defaultProps = {
  disabled: false
};

module.exports = ChannelPreviewAction;
//# sourceMappingURL=ChannelPreviewAction.js.map

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var CreateChannel = require('../../CreateChannel.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../CreateChannelProvider-9bfe7826.js');
require('../../sendBirdSelectors.js');
require('../../topics-c134dcfd.js');
require('../../CreateChannel/components/InviteMembers.js');
require('../../tslib.es6-982bd4b0.js');
require('../../LocalizationContext-2d46f2a3.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-aae80149.js');
require('../../index-573c23f7.js');
require('../../index-0509de40.js');
require('../../utils-ef5ae6ef.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-620fcca0.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-4e1bf80d.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../withSendBird.js');
require('../../ui/ContextMenu.js');
require('../../index-bc9077cd.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var AddChannel = function AddChannel() {
  var _a;

  var _b = React.useState(false),
      showModal = _b[0],
      setShowModal = _b[1];

  var state = useSendbirdStateContext();
  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var disabled = !isOnline;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    height: "32px",
    width: "32px",
    onClick: function onClick() {
      setShowModal(true);
    },
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CREATE,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), showModal && /*#__PURE__*/React__default["default"].createElement(CreateChannel, {
    onCancel: function onCancel() {
      setShowModal(false);
    },
    onCreateChannel: function onCreateChannel() {
      setShowModal(false);
    }
  }));
};

exports.AddChannel = AddChannel;
exports["default"] = AddChannel;
//# sourceMappingURL=AddChannel.js.map

'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-9bfe7826.js');
require('./CreateChannel/components/InviteMembers.js');
require('./tslib.es6-982bd4b0.js');
require('./LocalizationContext-2d46f2a3.js');
require('./stringSet-811a1998.js');
require('./index-bbeb94cc.js');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-aae80149.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-573c23f7.js');
require('./index-0509de40.js');
require('./utils-ef5ae6ef.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-620fcca0.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-4e1bf80d.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendBirdSelectors.js');
require('./topics-c134dcfd.js');
require('./ui/ContextMenu.js');
require('./index-bc9077cd.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function CreateChannel(props) {
  var onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery,
      onCreateChannel = props.onCreateChannel,
      onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  return /*#__PURE__*/React__default["default"].createElement(CreateChannel_context.CreateChannelProvider, {
    onBeforeCreateChannel: onBeforeCreateChannel,
    userListQuery: userListQuery,
    onCreateChannel: onCreateChannel
  }, /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_CreateChannelUI, {
    renderStepOne: renderStepOne,
    onCancel: onCancel
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannel.js.map

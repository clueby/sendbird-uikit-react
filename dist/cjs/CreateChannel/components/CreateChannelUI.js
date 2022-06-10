'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-9bfe7826.js');
var CreateChannel_components_InviteMembers = require('./InviteMembers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendBirdSelectors.js');
require('../../topics-c134dcfd.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../tslib.es6-982bd4b0.js');
require('../../LocalizationContext-2d46f2a3.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-aae80149.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
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
require('../../ui/ContextMenu.js');
require('../../index-bc9077cd.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function CreateChannel(props) {
  var _onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = CreateChannel_context.useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_SelectChannelType, {
    onCancel: _onCancel
  })), step === 1 && /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_InviteMembers, {
    onCancel: function onCancel() {
      setStep(0);

      _onCancel();
    }
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map

import React__default, { useState } from 'react';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import CreateChannel from '../../CreateChannel.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-187faafe.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../CreateChannel/components/InviteMembers.js';
import '../../tslib.es6-460f27dd.js';
import '../../LocalizationContext-d85ba22d.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../index-3ebecbd4.js';
import '../../index-dc6b96dc.js';
import '../../utils-152638cc.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-7308f635.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-1f0e148d.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendBird.js';
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import '../../ui/SortByRow.js';
import '../../CreateChannel/components/SelectChannelType.js';

var AddChannel = function AddChannel() {
  var _a;

  var _b = useState(false),
      showModal = _b[0],
      setShowModal = _b[1];

  var state = useSendbirdStateContext();
  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var disabled = !isOnline;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
    height: "32px",
    width: "32px",
    onClick: function onClick() {
      setShowModal(true);
    },
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CREATE,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), showModal && /*#__PURE__*/React__default.createElement(CreateChannel, {
    onCancel: function onCancel() {
      setShowModal(false);
    },
    onCreateChannel: function onCreateChannel() {
      setShowModal(false);
    }
  }));
};

export { AddChannel, AddChannel as default };
//# sourceMappingURL=AddChannel.js.map

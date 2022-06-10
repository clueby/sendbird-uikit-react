import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-187faafe.js';
import './CreateChannel/components/InviteMembers.js';
import './tslib.es6-460f27dd.js';
import './LocalizationContext-d85ba22d.js';
import './stringSet-e852fbe9.js';
import './index-f348c926.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-ad900775.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-aaafc7c3.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-3ebecbd4.js';
import './index-dc6b96dc.js';
import './utils-152638cc.js';
import './ui/UserListItem.js';
import './UserProfileContext-7308f635.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-1f0e148d.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './topics-8423cf3b.js';
import './ui/ContextMenu.js';
import './index-49a49008.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';

var CreateChannel = function CreateChannel(props) {
  var onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery,
      onCreateChannel = props.onCreateChannel,
      onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  return /*#__PURE__*/React__default.createElement(CreateChannelProvider, {
    onBeforeCreateChannel: onBeforeCreateChannel,
    userListQuery: userListQuery,
    onCreateChannel: onCreateChannel
  }, /*#__PURE__*/React__default.createElement(CreateChannel$1, {
    renderStepOne: renderStepOne,
    onCancel: onCancel
  }));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannel.js.map

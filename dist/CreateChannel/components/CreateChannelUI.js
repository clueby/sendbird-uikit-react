import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-187faafe.js';
import InviteMembers from './InviteMembers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendBirdSelectors.js';
import '../../topics-8423cf3b.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../tslib.es6-460f27dd.js';
import '../../LocalizationContext-d85ba22d.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
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
import '../../ui/ContextMenu.js';
import '../../index-49a49008.js';
import '../../ui/SortByRow.js';

var CreateChannel = function CreateChannel(props) {
  var _onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default.createElement(SelectChannelType, {
    onCancel: _onCancel
  })), step === 1 && /*#__PURE__*/React__default.createElement(InviteMembers, {
    onCancel: function onCancel() {
      setStep(0);

      _onCancel();
    }
  }));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannelUI.js.map

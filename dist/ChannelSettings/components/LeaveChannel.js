import React__default from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettings } from '../context.js';
import { n as noop } from '../../utils-152638cc.js';
import Modal from '../../ui/Modal.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../UserProfileContext-7308f635.js';
import 'prop-types';
import '../../uuid-1f0e148d.js';
import 'react-dom';
import '../../LocalizationContext-d85ba22d.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-3ebecbd4.js';
import '../../index-dc6b96dc.js';

var LeaveChannel = function LeaveChannel(props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      _onSubmit = _d === void 0 ? noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? noop : _e;

  var channel = (_a = useChannelSettings()) === null || _a === void 0 ? void 0 : _a.channel;
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

export { LeaveChannel as default };
//# sourceMappingURL=LeaveChannel.js.map

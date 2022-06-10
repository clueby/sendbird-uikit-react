'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../utils-ef5ae6ef.js');
var ui_Modal = require('../../ui/Modal.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-c3cd9899.js');
require('../../UserProfileContext-620fcca0.js');
require('prop-types');
require('../../uuid-4e1bf80d.js');
require('react-dom');
require('../../LocalizationContext-2d46f2a3.js');
require('../../stringSet-811a1998.js');
require('../../index-bbeb94cc.js');
require('../../index-aae80149.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-573c23f7.js');
require('../../index-0509de40.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LeaveChannel = function LeaveChannel(props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      _onSubmit = _d === void 0 ? utils.noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? utils.noop : _e;

  var channel = (_a = ChannelSettings_context.useChannelSettings()) === null || _a === void 0 ? void 0 : _a.channel;
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

module.exports = LeaveChannel;
//# sourceMappingURL=LeaveChannel.js.map

import { a as __spreadArray } from '../tslib.es6-460f27dd.js';
import React__default, { useMemo } from 'react';
import { f as format } from '../index-dd65c23d.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import Loader from './Loader.js';
import { a as getOutgoingMessageStates, e as getOutgoingMessageState, h as isSentStatus } from '../index-49a49008.js';
import { u as useLocalization } from '../LocalizationContext-d85ba22d.js';
import '../index-f348c926.js';
import '../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../stringSet-e852fbe9.js';

var MessageStatusTypes = getOutgoingMessageStates();
function MessageStatus(_a) {
  var _b, _c;

  var _d, _e;

  var className = _a.className,
      message = _a.message,
      channel = _a.channel;
  var dateLocale = useLocalization().dateLocale;
  var status = useMemo(function () {
    return getOutgoingMessageState(channel, message);
  }, [(_d = channel === null || channel === void 0 ? void 0 : channel.getUnreadMemberCount) === null || _d === void 0 ? void 0 : _d.call(channel, message), (_e = channel === null || channel === void 0 ? void 0 : channel.getUndeliveredMemberCount) === null || _e === void 0 ? void 0 : _e.call(channel, message)]);
  var showMessageStatusIcon = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isSuper) && !(channel === null || channel === void 0 ? void 0 : channel.isPublic) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast);
  var iconType = (_b = {}, _b[MessageStatusTypes.SENT] = IconTypes.DONE, _b[MessageStatusTypes.DELIVERED] = IconTypes.DONE_ALL, _b[MessageStatusTypes.READ] = IconTypes.DONE_ALL, _b[MessageStatusTypes.FAILED] = IconTypes.ERROR, _b);
  var iconColor = (_c = {}, _c[MessageStatusTypes.SENT] = IconColors.SENT, _c[MessageStatusTypes.DELIVERED] = IconColors.SENT, _c[MessageStatusTypes.READ] = IconColors.READ, _c[MessageStatusTypes.FAILED] = IconColors.ERROR, _c);
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-status'], false).join(' ')
  }, status === MessageStatusTypes.PENDING ? /*#__PURE__*/React__default.createElement(Loader, {
    className: "sendbird-message-status__icon " + (showMessageStatusIcon ? '' : 'hide-icon'),
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })) : /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-message-status__icon " + (showMessageStatusIcon ? '' : 'hide-icon'),
    type: iconType[status] || IconTypes.ERROR,
    fillColor: iconColor[status],
    width: "16px",
    height: "16px"
  }), isSentStatus(status) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-status__text",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })));
}

export { MessageStatusTypes, MessageStatus as default };
//# sourceMappingURL=MessageStatus.js.map

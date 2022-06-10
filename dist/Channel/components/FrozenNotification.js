import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import { L as Label, a as LabelTypography } from '../../index-dc6b96dc.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';

var FrozenNotification = function FrozenNotification() {
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-notification sendbird-notification--frozen"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-notification__text",
    type: LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenNotification.js.map

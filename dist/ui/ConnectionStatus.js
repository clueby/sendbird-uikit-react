import React__default, { useContext } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import { a as LocalizationContext } from '../LocalizationContext-d85ba22d.js';
import '../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import '../stringSet-e852fbe9.js';
import '../index-f348c926.js';

function ConnectionStatus() {
  var _useContext = useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-connection-status"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.TRYING_TO_CONNECT), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DISCONNECTED,
    fillColor: IconColors.SENT,
    width: "14px",
    height: "14px"
  }));
}

export { ConnectionStatus as default };
//# sourceMappingURL=ConnectionStatus.js.map

import React__default, { useContext, useMemo } from 'react';
import Avatar from './Avatar.js';
import { a as LocalizationContext } from '../LocalizationContext-d85ba22d.js';
import { b as getOpenChannelAvatar } from '../utils-74b0a9e7.js';
import '../tslib.es6-460f27dd.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import './Icon.js';
import '../uuid-1f0e148d.js';
import '../stringSet-e852fbe9.js';
import '../index-f348c926.js';

function ChannelAvatar(_a) {
  var channel = _a.channel,
      theme = _a.theme,
      _b = _a.height,
      height = _b === void 0 ? 56 : _b,
      _c = _a.width,
      width = _c === void 0 ? 56 : _c;
  var stringSet = useContext(LocalizationContext).stringSet;
  var memoizedAvatar = useMemo(function () {
    return /*#__PURE__*/React__default.createElement(Avatar, {
      className: "sendbird-chat-header__avatar--open-channel",
      src: getOpenChannelAvatar(channel),
      width: width + "px",
      height: height + "px",
      alt: channel.name || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE
    });
  }, [channel.coverUrl, theme]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, memoizedAvatar);
}

export { ChannelAvatar as default };
//# sourceMappingURL=OpenChannelAvatar.js.map

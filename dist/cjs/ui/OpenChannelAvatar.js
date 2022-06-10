'use strict';

var React = require('react');
var ui_Avatar = require('./Avatar.js');
var LocalizationContext = require('../LocalizationContext-2d46f2a3.js');
var utils = require('../utils-3bff255e.js');
require('../tslib.es6-982bd4b0.js');
require('./ImageRenderer.js');
require('../_rollupPluginBabelHelpers-c3cd9899.js');
require('prop-types');
require('./Icon.js');
require('../uuid-4e1bf80d.js');
require('../stringSet-811a1998.js');
require('../index-bbeb94cc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ChannelAvatar(_a) {
  var channel = _a.channel,
      theme = _a.theme,
      _b = _a.height,
      height = _b === void 0 ? 56 : _b,
      _c = _a.width,
      width = _c === void 0 ? 56 : _c;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var memoizedAvatar = React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
      className: "sendbird-chat-header__avatar--open-channel",
      src: utils.getOpenChannelAvatar(channel),
      width: width + "px",
      height: height + "px",
      alt: channel.name || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE
    });
  }, [channel.coverUrl, theme]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, memoizedAvatar);
}

module.exports = ChannelAvatar;
//# sourceMappingURL=OpenChannelAvatar.js.map

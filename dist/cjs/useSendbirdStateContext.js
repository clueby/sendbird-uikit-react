'use strict';

var React = require('react');
var withSendBird = require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-c3cd9899.js');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(withSendBird.SendbirdSdkContext);
  return context;
}

module.exports = useSendbirdStateContext;
//# sourceMappingURL=useSendbirdStateContext.js.map

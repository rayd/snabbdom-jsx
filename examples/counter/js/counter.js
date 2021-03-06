/** @jsx html */

import { html } from '../../../snabbdom-jsx';
import Type from 'union-type';

const Action = Type({
  Increment : [],
  Decrement : [],
});
  

const view = ({model, handler}) =>
  <div>
    <button
      on-click={ [handler, Action.Increment()] }>+</button>
    <button
      on-click={ [handler, Action.Decrement()] }>-</button>
    <div>Count : {model}</div>
  </div>;

function init() {
  return 0;
}

function update(count, action) {
  return  Action.case({
    Increment : () => count + 1,
    Decrement : () => count - 1,
  }, action);
}

export default { view, init, update, Action };
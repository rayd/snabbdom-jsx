/** @jsx html */

import { html } from '../../snabbdom-jsx';
import snabbdom from 'snabbdom';

import MySvg from './svg';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners')
]);

const view = animate =>
  <div>
    <MySvg animate={animate} />
    <button on-click={toggleAnimate}>
      { animate ? 'Stop animation' : 'Start animation' }
    </button>
  </div>;

var vnode = document.getElementById('placeholder');
var animate = false;
function toggleAnimate() {
  animate = !animate;
  vnode = patch(vnode, view(animate));
}

toggleAnimate();

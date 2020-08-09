import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';


customElements.define('demo-sub',
  class extends LWElement {  // LWElement extends HTMLElement
    constructor() {
      super(ast);
    }

    sub() {
      this.listener = leanweb.eventBus.addEventListener('time', event => {
        this.time = event.data;
        this.update();
      });
      this.subscribed = true;
      this.update();
    }

    unsub() {
      leanweb.eventBus.removeEventListener(this.listener);
      this.subscribed = false;
      this.update();
    }
  }
);

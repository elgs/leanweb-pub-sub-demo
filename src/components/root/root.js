import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';


customElements.define('demo-root',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      name = 'demo-root';

      // connectedCallback() {
      //    console.log(this.isConnected);
      //    console.log('Element added to page.');
      // }

      // disconnectedCallback() {
      //    console.log('Element removed from page.');
      // }

      // adoptedCallback() {
      //    console.log('Element moved to new page.');
      // }

      // static get observedAttributes() {
      //    return [];
      // }

      // attributeChangedCallback(name, oldValue, newValue) {
      //    console.log(name, oldValue, newValue);
      // }
   }
);

import LWElement from './../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'demo-root', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
      }

      name = component.id;

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

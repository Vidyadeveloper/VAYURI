
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class RetailCustomerOrderFulfillmentPickPackPrepare extends DynamicHtmlElement {
   constructor() {
    super();
  }


  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-data" context="data"></blaze-field-group>
      
    `;

    
      const fgdata = this.shadowRoot.getElementById("fg-data");
      fgdata.context = "data";
      fgdata.model = {};
      
    
          // 1️⃣ Render fields immediately with default labels
    fgdata.fields = [{"id":"production_id","name":"Production ID","type":"text","required":false,"description":"Identifier for a production run or sample batch.","label":"Production ID"},{"id":"factory","name":"Factory / Atelier","type":"text","required":false,"description":"Name and location of the production partner or in-house atelier.","label":"Factory / Atelier"},{"id":"quantity","name":"Quantity","type":"number","required":false,"description":"Number of units ordered.","label":"Quantity"},{"id":"production_cost","name":"Production Cost","type":"number","required":false,"description":"Manufacturing cost for the run (per unit or total).","label":"Production Cost"}];

    // 2️⃣ Apply translations later (if available)
    this.updateFieldLabels();
      
      fgdata.data = { "data": this._formData.data || {} };
   

  }

  populateForm() {
    
    const fgdata = this.shadowRoot?.getElementById("fg-data");
    if (fgdata) {
      fgdata.data = { "data": this._formData["data"] || {} };
    }
  
  }
}

customElements.define("retail-customer-order-fulfillment-pick-pack-prepare", RetailCustomerOrderFulfillmentPickPackPrepare);
export default RetailCustomerOrderFulfillmentPickPackPrepare;


import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BespokeCommissionAgreementPricingAgreementPricing extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"order_id","name":"Order ID","type":"text","required":false,"description":"Unique order or PO number.","label":"Order ID"},{"id":"total_value","name":"Total Value","type":"number","required":false,"description":"Monetary value of the order.","label":"Total Value"},{"id":"quantity","name":"Quantity","type":"number","required":false,"description":"Number of units ordered.","label":"Quantity"},{"id":"status","name":"Order Status","type":"text","required":false,"description":"Current status (e.g., Draft, Confirmed, In Production, Shipped, Delivered).","label":"Order Status"},{"id":"production_cost","name":"Production Cost","type":"number","required":false,"description":"Manufacturing cost for the run (per unit or total).","label":"Production Cost"}];

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

customElements.define("bespoke-commission-agreement-pricing-agreement-pricing", BespokeCommissionAgreementPricingAgreementPricing);
export default BespokeCommissionAgreementPricingAgreementPricing;


import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BespokeCommissionDeliveryFinalDeliveryAftercare extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"delivery_date","name":"Delivery Date","type":"date","required":false,"description":"Promised or actual delivery date.","label":"Delivery Date"},{"id":"status","name":"Order Status","type":"text","required":false,"description":"Current status (e.g., Draft, Confirmed, In Production, Shipped, Delivered).","label":"Order Status"},{"id":"commission_history","name":"Commission History","type":"text","required":false,"description":"Summary of past bespoke commissions and relevant notes.","label":"Commission History"},{"id":"notes","name":"Notes","type":"text","required":false,"description":"Additional production notes, vendors and logistics.","label":"Notes"}];

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

customElements.define("bespoke-commission-delivery-final-delivery-aftercare", BespokeCommissionDeliveryFinalDeliveryAftercare);
export default BespokeCommissionDeliveryFinalDeliveryAftercare;

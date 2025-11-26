
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class RetailCustomerOrderPurchaseOrderCapture extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"order_id","name":"Order ID","type":"text","required":false,"description":"Unique order or PO number.","label":"Order ID"},{"id":"client_id","name":"Client ID","type":"text","required":false,"description":"Internal client identifier.","label":"Client ID"},{"id":"client_name","name":"Client Name","type":"text","required":false,"description":"Full name of the client or buyer.","label":"Client Name"},{"id":"contact_email","name":"Contact Email","type":"email","required":false,"description":"Primary client email.","label":"Contact Email"},{"id":"order_date","name":"Order Date","type":"date","required":false,"description":"Date the order was placed.","label":"Order Date"},{"id":"order_type","name":"Order Type","type":"text","required":false,"description":"Type of order (e.g., Bespoke, Wholesale, Retail).","label":"Order Type"}];

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

customElements.define("retail-customer-order-purchase-order-capture", RetailCustomerOrderPurchaseOrderCapture);
export default RetailCustomerOrderPurchaseOrderCapture;

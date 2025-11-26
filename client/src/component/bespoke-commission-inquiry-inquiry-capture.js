
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BespokeCommissionInquiryInquiryCapture extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"client_id","name":"Client ID","type":"text","required":false,"description":"Internal client identifier.","label":"Client ID"},{"id":"client_name","name":"Client Name","type":"text","required":false,"description":"Full name of the client or buyer.","label":"Client Name"},{"id":"contact_email","name":"Contact Email","type":"email","required":false,"description":"Primary client email.","label":"Contact Email"},{"id":"phone","name":"Phone","type":"text","required":false,"description":"Primary contact phone number.","label":"Phone"},{"id":"order_type","name":"Order Type","type":"text","required":false,"description":"Type of order (e.g., Bespoke, Wholesale, Retail).","label":"Order Type"},{"id":"order_date","name":"Order Date","type":"date","required":false,"description":"Date the order was placed.","label":"Order Date"}];

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

customElements.define("bespoke-commission-inquiry-inquiry-capture", BespokeCommissionInquiryInquiryCapture);
export default BespokeCommissionInquiryInquiryCapture;

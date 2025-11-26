
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class WholesaleOrderQualityCheckQualityControlSignOff extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"quality_checks","name":"Quality Checks","type":"text","required":false,"description":"QC notes, checkpoints and pass/fail outcomes.","label":"Quality Checks"},{"id":"completion_date","name":"Completion Date","type":"date","required":false,"description":"Actual completion date for the production run.","label":"Completion Date"},{"id":"status","name":"Order Status","type":"text","required":false,"description":"Current status (e.g., Draft, Confirmed, In Production, Shipped, Delivered).","label":"Order Status"}];

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

customElements.define("wholesale-order-quality-check-quality-control-sign-off", WholesaleOrderQualityCheckQualityControlSignOff);
export default WholesaleOrderQualityCheckQualityControlSignOff;

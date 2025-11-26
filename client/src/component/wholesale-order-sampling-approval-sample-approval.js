
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class WholesaleOrderSamplingApprovalSampleApproval extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"product_id","name":"Product ID","type":"text","required":false,"description":"Unique SKU or internal product identifier.","label":"Product ID"},{"id":"fabric","name":"Fabric","type":"text","required":false,"description":"Main fabric composition and supplier notes.","label":"Fabric"},{"id":"embroidery_details","name":"Embroidery & Artisanal Details","type":"text","required":false,"description":"Description of handwork, beads, motifs and technique notes.","label":"Embroidery & Artisanal Details"},{"id":"production_id","name":"Production ID","type":"text","required":false,"description":"Identifier for a production run or sample batch.","label":"Production ID"},{"id":"quality_checks","name":"Quality Checks","type":"text","required":false,"description":"QC notes, checkpoints and pass/fail outcomes.","label":"Quality Checks"}];

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

customElements.define("wholesale-order-sampling-approval-sample-approval", WholesaleOrderSamplingApprovalSampleApproval);
export default WholesaleOrderSamplingApprovalSampleApproval;


import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductDevelopmentProductionHandoverProductionHandover extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"factory","name":"Factory / Atelier","type":"text","required":false,"description":"Name and location of the production partner or in-house atelier.","label":"Factory / Atelier"},{"id":"production_cost","name":"Production Cost","type":"number","required":false,"description":"Manufacturing cost for the run (per unit or total).","label":"Production Cost"},{"id":"production_id","name":"Production ID","type":"text","required":false,"description":"Identifier for a production run or sample batch.","label":"Production ID"},{"id":"lead_time_days","name":"Lead Time (days)","type":"number","required":false,"description":"Estimated production lead time in days.","label":"Lead Time (days)"}];

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

customElements.define("product-development-production-handover-production-handover", ProductDevelopmentProductionHandoverProductionHandover);
export default ProductDevelopmentProductionHandoverProductionHandover;

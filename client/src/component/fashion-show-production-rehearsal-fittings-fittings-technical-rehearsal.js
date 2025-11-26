
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FashionShowProductionRehearsalFittingsFittingsTechnicalRehearsal extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"product_id","name":"Product ID","type":"text","required":false,"description":"Unique SKU or internal product identifier.","label":"Product ID"},{"id":"measurements","name":"Measurements","type":"text","required":false,"description":"Client measurements and fit notes for bespoke garments.","label":"Measurements"},{"id":"production_id","name":"Production ID","type":"text","required":false,"description":"Identifier for a production run or sample batch.","label":"Production ID"},{"id":"quality_checks","name":"Quality Checks","type":"text","required":false,"description":"QC notes, checkpoints and pass/fail outcomes.","label":"Quality Checks"}];

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

customElements.define("fashion-show-production-rehearsal-fittings-fittings-technical-rehearsal", FashionShowProductionRehearsalFittingsFittingsTechnicalRehearsal);
export default FashionShowProductionRehearsalFittingsFittingsTechnicalRehearsal;

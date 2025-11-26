
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class BespokeCommissionMeasurementDesignMeasurementsDesignApproval extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"measurements","name":"Measurements","type":"text","required":false,"description":"Client measurements and fit notes for bespoke garments.","label":"Measurements"},{"id":"silhouette","name":"Silhouette","type":"text","required":false,"description":"Primary silhouette or shape (e.g., draped gown, bias slip).","label":"Silhouette"},{"id":"fabric","name":"Fabric","type":"text","required":false,"description":"Main fabric composition and supplier notes.","label":"Fabric"},{"id":"embroidery_details","name":"Embroidery & Artisanal Details","type":"text","required":false,"description":"Description of handwork, beads, motifs and technique notes.","label":"Embroidery & Artisanal Details"},{"id":"designer_notes","name":"Designer Notes","type":"text","required":false,"description":"Creative direction, storytelling and styling guidance.","label":"Designer Notes"}];

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

customElements.define("bespoke-commission-measurement-design-measurements-design-approval", BespokeCommissionMeasurementDesignMeasurementsDesignApproval);
export default BespokeCommissionMeasurementDesignMeasurementsDesignApproval;

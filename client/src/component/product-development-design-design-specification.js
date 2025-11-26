
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductDevelopmentDesignDesignSpecification extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"fabric","name":"Fabric","type":"text","required":false,"description":"Main fabric composition and supplier notes.","label":"Fabric"},{"id":"embroidery_details","name":"Embroidery & Artisanal Details","type":"text","required":false,"description":"Description of handwork, beads, motifs and technique notes.","label":"Embroidery & Artisanal Details"},{"id":"target_price","name":"Target Price","type":"number","required":false,"description":"Retail or target price point for the product.","label":"Target Price"},{"id":"designer_notes","name":"Designer Notes","type":"text","required":false,"description":"Creative direction, storytelling and styling guidance.","label":"Designer Notes"}];

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

customElements.define("product-development-design-design-specification", ProductDevelopmentDesignDesignSpecification);
export default ProductDevelopmentDesignDesignSpecification;

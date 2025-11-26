
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class ProductDevelopmentConceptConceptBrief extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"product_id","name":"Product ID","type":"text","required":false,"description":"Unique SKU or internal product identifier.","label":"Product ID"},{"id":"name","name":"Product Name","type":"text","required":false,"description":"Commercial name of the design or style.","label":"Product Name"},{"id":"silhouette","name":"Silhouette","type":"text","required":false,"description":"Primary silhouette or shape (e.g., draped gown, bias slip).","label":"Silhouette"},{"id":"designer_notes","name":"Designer Notes","type":"text","required":false,"description":"Creative direction, storytelling and styling guidance.","label":"Designer Notes"},{"id":"launch_date","name":"Launch Date","type":"date","required":false,"description":"Planned market or show launch date.","label":"Launch Date"}];

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

customElements.define("product-development-concept-concept-brief", ProductDevelopmentConceptConceptBrief);
export default ProductDevelopmentConceptConceptBrief;

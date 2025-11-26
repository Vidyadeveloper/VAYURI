
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FashionShowProductionConceptCastingCreativeConceptCasting extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"show_id","name":"Show ID","type":"text","required":false,"description":"Unique identifier for the show or event.","label":"Show ID"},{"id":"theme","name":"Theme","type":"text","required":false,"description":"Creative theme or collection story for the show.","label":"Theme"},{"id":"creative_director","name":"Creative Director","type":"text","required":false,"description":"Name of the creative director or lead stylist.","label":"Creative Director"},{"id":"budget","name":"Budget","type":"number","required":false,"description":"Allocated budget for the event.","label":"Budget"},{"id":"notes","name":"Notes","type":"text","required":false,"description":"Additional production notes, vendors and logistics.","label":"Notes"}];

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

customElements.define("fashion-show-production-concept-casting-creative-concept-casting", FashionShowProductionConceptCastingCreativeConceptCasting);
export default FashionShowProductionConceptCastingCreativeConceptCasting;

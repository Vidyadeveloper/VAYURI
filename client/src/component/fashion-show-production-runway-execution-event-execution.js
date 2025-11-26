
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FashionShowProductionRunwayExecutionEventExecution extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"venue","name":"Venue","type":"text","required":false,"description":"Event location or venue details.","label":"Venue"},{"id":"date","name":"Event Date","type":"date","required":false,"description":"Planned event or runway date.","label":"Event Date"},{"id":"production_id","name":"Production ID","type":"text","required":false,"description":"Identifier for a production run or sample batch.","label":"Production ID"},{"id":"status","name":"Order Status","type":"text","required":false,"description":"Current status (e.g., Draft, Confirmed, In Production, Shipped, Delivered).","label":"Order Status"},{"id":"notes","name":"Notes","type":"text","required":false,"description":"Additional production notes, vendors and logistics.","label":"Notes"}];

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

customElements.define("fashion-show-production-runway-execution-event-execution", FashionShowProductionRunwayExecutionEventExecution);
export default FashionShowProductionRunwayExecutionEventExecution;

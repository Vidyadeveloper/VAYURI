
import {DynamicHtmlElement} from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/dynamic-html-element.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class FashionShowProductionPostShowArchivingArchiveFollowUpOrders extends DynamicHtmlElement {
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
    fgdata.fields = [{"id":"show_id","name":"Show ID","type":"text","required":false,"description":"Unique identifier for the show or event.","label":"Show ID"},{"id":"order_id","name":"Order ID","type":"text","required":false,"description":"Unique order or PO number.","label":"Order ID"},{"id":"total_value","name":"Total Value","type":"number","required":false,"description":"Monetary value of the order.","label":"Total Value"},{"id":"commission_history","name":"Commission History","type":"text","required":false,"description":"Summary of past bespoke commissions and relevant notes.","label":"Commission History"},{"id":"notes","name":"Notes","type":"text","required":false,"description":"Additional production notes, vendors and logistics.","label":"Notes"}];

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

customElements.define("fashion-show-production-post-show-archiving-archive-follow-up-orders", FashionShowProductionPostShowArchivingArchiveFollowUpOrders);
export default FashionShowProductionPostShowArchivingArchiveFollowUpOrders;

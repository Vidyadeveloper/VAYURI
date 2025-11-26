const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class RetailCustomerOrderCase extends BlazeCase {
  constructor() {
    super(
      "retail-customer-order",
      "Retail Customer Order",
      [
{
      id: "Purchase",
      label: "Purchase",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "retail-customer-order-purchase-start",
          dataModelReference: { models: [] }
        },
{
          id: "retail-purchase",
          label: "Order Capture",
          type: "manual",
          status: "pending",
          view: "retail-customer-order-purchase-order-capture",
          dataModelReference: { models: ["order_id", "client_id", "client_name", "contact_email", "order_date", "order_type"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "retail-customer-order-purchase-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Fulfillment",
      label: "Fulfillment",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "retail-customer-order-fulfillment-start",
          dataModelReference: { models: [] }
        },
{
          id: "retail-fulfill",
          label: "Pick, Pack & Prepare",
          type: "manual",
          status: "pending",
          view: "retail-customer-order-fulfillment-pick-pack-prepare",
          dataModelReference: { models: ["production_id", "factory", "quantity", "production_cost"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "retail-customer-order-fulfillment-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Delivery",
      label: "Delivery",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "retail-customer-order-delivery-start",
          dataModelReference: { models: [] }
        },
{
          id: "retail-delivery",
          label: "Dispatch & Delivery",
          type: "manual",
          status: "pending",
          view: "retail-customer-order-delivery-dispatch-delivery",
          dataModelReference: { models: ["delivery_date", "status", "address", "order_id"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "retail-customer-order-delivery-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Aftercare",
      label: "Aftercare",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "retail-customer-order-aftercare-start",
          dataModelReference: { models: [] }
        },
{
          id: "retail-aftercare",
          label: "Aftercare & Alterations",
          type: "manual",
          status: "pending",
          view: "retail-customer-order-aftercare-aftercare-alterations",
          dataModelReference: { models: ["commission_history", "measurements", "status", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "retail-customer-order-aftercare-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new RetailCustomerOrderCase();
const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class WholesaleOrderCase extends BlazeCase {
  constructor() {
    super(
      "wholesale-order",
      "Wholesale Order",
      [
{
      id: "Order_Received",
      label: "Order Received",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "wholesale-order-order-received-start",
          dataModelReference: { models: [] }
        },
{
          id: "wholesale-receipt",
          label: "Order Receipt & Validation",
          type: "manual",
          status: "pending",
          view: "wholesale-order-order-received-order-receipt-validation",
          dataModelReference: { models: ["order_id", "order_type", "quantity", "total_value", "order_date", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "wholesale-order-order-received-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Sampling_Approval",
      label: "Sampling Approval",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "wholesale-order-sampling-approval-start",
          dataModelReference: { models: [] }
        },
{
          id: "sample-approval",
          label: "Sample Approval",
          type: "manual",
          status: "pending",
          view: "wholesale-order-sampling-approval-sample-approval",
          dataModelReference: { models: ["product_id", "fabric", "embroidery_details", "production_id", "quality_checks"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "wholesale-order-sampling-approval-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Manufacturing",
      label: "Manufacturing",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "wholesale-order-manufacturing-start",
          dataModelReference: { models: [] }
        },
{
          id: "wholesale-production",
          label: "Manufacturing Run",
          type: "manual",
          status: "pending",
          view: "wholesale-order-manufacturing-manufacturing-run",
          dataModelReference: { models: ["factory", "lead_time_days", "production_cost", "production_id"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "wholesale-order-manufacturing-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Quality_Check",
      label: "Quality Check",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "wholesale-order-quality-check-start",
          dataModelReference: { models: [] }
        },
{
          id: "wholesale-qc",
          label: "Quality Control & Sign-off",
          type: "manual",
          status: "pending",
          view: "wholesale-order-quality-check-quality-control-sign-off",
          dataModelReference: { models: ["quality_checks", "completion_date", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "wholesale-order-quality-check-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Shipping_&_Invoice",
      label: "Shipping & Invoice",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "wholesale-order-shipping-invoice-start",
          dataModelReference: { models: [] }
        },
{
          id: "wholesale-ship",
          label: "Shipping, Billing & Close",
          type: "manual",
          status: "pending",
          view: "wholesale-order-shipping-invoice-shipping-billing-close",
          dataModelReference: { models: ["delivery_date", "total_value", "order_id", "status"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "wholesale-order-shipping-invoice-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new WholesaleOrderCase();
const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class BespokeCommissionCase extends BlazeCase {
  constructor() {
    super(
      "bespoke-commission",
      "Bespoke Commission",
      [
{
      id: "Inquiry",
      label: "Inquiry",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "bespoke-commission-inquiry-start",
          dataModelReference: { models: [] }
        },
{
          id: "inquiry-capture",
          label: "Inquiry Capture",
          type: "manual",
          status: "pending",
          view: "bespoke-commission-inquiry-inquiry-capture",
          dataModelReference: { models: ["client_id", "client_name", "contact_email", "phone", "order_type", "order_date"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "bespoke-commission-inquiry-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Measurement_&_Design",
      label: "Measurement & Design",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "bespoke-commission-measurement-design-start",
          dataModelReference: { models: [] }
        },
{
          id: "measure-design",
          label: "Measurements & Design Approval",
          type: "manual",
          status: "pending",
          view: "bespoke-commission-measurement-design-measurements-design-approval",
          dataModelReference: { models: ["measurements", "silhouette", "fabric", "embroidery_details", "designer_notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "bespoke-commission-measurement-design-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Agreement_&_Pricing",
      label: "Agreement & Pricing",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "bespoke-commission-agreement-pricing-start",
          dataModelReference: { models: [] }
        },
{
          id: "agreement-signoff",
          label: "Agreement & Pricing",
          type: "manual",
          status: "pending",
          view: "bespoke-commission-agreement-pricing-agreement-pricing",
          dataModelReference: { models: ["order_id", "total_value", "quantity", "status", "production_cost"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "bespoke-commission-agreement-pricing-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Production",
      label: "Production",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "bespoke-commission-production-start",
          dataModelReference: { models: [] }
        },
{
          id: "bespoke-production",
          label: "Production & Quality Control",
          type: "manual",
          status: "pending",
          view: "bespoke-commission-production-production-quality-control",
          dataModelReference: { models: ["production_id", "factory", "quality_checks", "completion_date", "lead_time_days"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "bespoke-commission-production-end",
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
          view: "bespoke-commission-delivery-start",
          dataModelReference: { models: [] }
        },
{
          id: "delivery-final",
          label: "Final Delivery & Aftercare",
          type: "manual",
          status: "pending",
          view: "bespoke-commission-delivery-final-delivery-aftercare",
          dataModelReference: { models: ["delivery_date", "status", "commission_history", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "bespoke-commission-delivery-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new BespokeCommissionCase();
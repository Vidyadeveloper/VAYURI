const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class ProductDevelopmentCase extends BlazeCase {
  constructor() {
    super(
      "product-development",
      "Product Development",
      [
{
      id: "Concept",
      label: "Concept",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-development-concept-start",
          dataModelReference: { models: [] }
        },
{
          id: "concept-brief",
          label: "Concept Brief",
          type: "manual",
          status: "pending",
          view: "product-development-concept-concept-brief",
          dataModelReference: { models: ["product_id", "name", "silhouette", "designer_notes", "launch_date"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-development-concept-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Design",
      label: "Design",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-development-design-start",
          dataModelReference: { models: [] }
        },
{
          id: "design-spec",
          label: "Design Specification",
          type: "manual",
          status: "pending",
          view: "product-development-design-design-specification",
          dataModelReference: { models: ["fabric", "embroidery_details", "target_price", "designer_notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-development-design-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Sampling",
      label: "Sampling",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-development-sampling-start",
          dataModelReference: { models: [] }
        },
{
          id: "sample-creation",
          label: "Sample Creation & Review",
          type: "manual",
          status: "pending",
          view: "product-development-sampling-sample-creation-review",
          dataModelReference: { models: ["production_id", "lead_time_days", "quality_checks", "completion_date"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-development-sampling-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Production_Handover",
      label: "Production Handover",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-development-production-handover-start",
          dataModelReference: { models: [] }
        },
{
          id: "produce-handover",
          label: "Production Handover",
          type: "manual",
          status: "pending",
          view: "product-development-production-handover-production-handover",
          dataModelReference: { models: ["factory", "production_cost", "production_id", "lead_time_days"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-development-production-handover-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Launch",
      label: "Launch",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "product-development-launch-start",
          dataModelReference: { models: [] }
        },
{
          id: "market-launch",
          label: "Launch & Commercialization",
          type: "manual",
          status: "pending",
          view: "product-development-launch-launch-commercialization",
          dataModelReference: { models: ["product_id", "launch_date", "target_price"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "product-development-launch-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new ProductDevelopmentCase();
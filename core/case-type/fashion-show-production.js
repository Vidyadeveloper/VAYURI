const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class FashionShowProductionCase extends BlazeCase {
  constructor() {
    super(
      "fashion-show-production",
      "Fashion Show Production",
      [
{
      id: "Concept_&_Casting",
      label: "Concept & Casting",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "fashion-show-production-concept-casting-start",
          dataModelReference: { models: [] }
        },
{
          id: "show-concept",
          label: "Creative Concept & Casting",
          type: "manual",
          status: "pending",
          view: "fashion-show-production-concept-casting-creative-concept-casting",
          dataModelReference: { models: ["show_id", "theme", "creative_director", "budget", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "fashion-show-production-concept-casting-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Rehearsal_&_Fittings",
      label: "Rehearsal & Fittings",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "fashion-show-production-rehearsal-fittings-start",
          dataModelReference: { models: [] }
        },
{
          id: "show-fittings",
          label: "Fittings & Technical Rehearsal",
          type: "manual",
          status: "pending",
          view: "fashion-show-production-rehearsal-fittings-fittings-technical-rehearsal",
          dataModelReference: { models: ["product_id", "measurements", "production_id", "quality_checks"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "fashion-show-production-rehearsal-fittings-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Runway_Execution",
      label: "Runway Execution",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "fashion-show-production-runway-execution-start",
          dataModelReference: { models: [] }
        },
{
          id: "show-execute",
          label: "Event Execution",
          type: "manual",
          status: "pending",
          view: "fashion-show-production-runway-execution-event-execution",
          dataModelReference: { models: ["venue", "date", "production_id", "status", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "fashion-show-production-runway-execution-end",
          dataModelReference: { models: [] }
        }
      ]
    },
{
      id: "Post-Show_Archiving",
      label: "Post-Show Archiving",
      steps: [
{
          id: "start",
          label: "Start",
          type: "start",
          status: "pending",
          view: "fashion-show-production-post-show-archiving-start",
          dataModelReference: { models: [] }
        },
{
          id: "show-archive",
          label: "Archive & Follow-up Orders",
          type: "manual",
          status: "pending",
          view: "fashion-show-production-post-show-archiving-archive-follow-up-orders",
          dataModelReference: { models: ["show_id", "order_id", "total_value", "commission_history", "notes"] }
        },
{
          id: "end",
          label: "End",
          type: "end",
          status: "pending",
          view: "fashion-show-production-post-show-archiving-end",
          dataModelReference: { models: [] }
        }
      ]
    }
      ]
    );
  }
}

module.exports = new FashionShowProductionCase();
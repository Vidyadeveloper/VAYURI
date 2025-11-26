// Data Model: product_model
module.exports = {
  "id": "product_model",
  "label": "Product",
  "description": "Core product definition for garments: silhouettes, fabrics, embroidery and commercial targets.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "product_id",
      "label": "Product ID",
      "type": "text",
      "description": "Unique SKU or internal product identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "name",
      "label": "Product Name",
      "type": "text",
      "description": "Commercial name of the design or style.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "silhouette",
      "label": "Silhouette",
      "type": "text",
      "description": "Primary silhouette or shape (e.g., draped gown, bias slip).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "fabric",
      "label": "Fabric",
      "type": "text",
      "description": "Main fabric composition and supplier notes.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "embroidery_details",
      "label": "Embroidery & Artisanal Details",
      "type": "text",
      "description": "Description of handwork, beads, motifs and technique notes.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "designer_notes",
      "label": "Designer Notes",
      "type": "text",
      "description": "Creative direction, storytelling and styling guidance.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "target_price",
      "label": "Target Price",
      "type": "number",
      "description": "Retail or target price point for the product.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "launch_date",
      "label": "Launch Date",
      "type": "date",
      "description": "Planned market or show launch date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};
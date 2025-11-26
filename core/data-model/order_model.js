// Data Model: order_model
module.exports = {
  "id": "order_model",
  "label": "Order",
  "description": "Order-level data for retail, wholesale and bespoke fulfillment.",
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
      "id": "order_id",
      "label": "Order ID",
      "type": "text",
      "description": "Unique order or PO number.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "order_type",
      "label": "Order Type",
      "type": "text",
      "description": "Type of order (e.g., Bespoke, Wholesale, Retail).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "quantity",
      "label": "Quantity",
      "type": "number",
      "description": "Number of units ordered.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "total_value",
      "label": "Total Value",
      "type": "number",
      "description": "Monetary value of the order.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "order_date",
      "label": "Order Date",
      "type": "date",
      "description": "Date the order was placed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "delivery_date",
      "label": "Delivery Date",
      "type": "date",
      "description": "Promised or actual delivery date.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "status",
      "label": "Order Status",
      "type": "text",
      "description": "Current status (e.g., Draft, Confirmed, In Production, Shipped, Delivered).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};
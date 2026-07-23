# Hangar 13 Table Component

Enterprise data display table.

## Uses

- Repair Orders
- Customers
- Vehicles
- Inventory
- Technicians
- Invoices
- Reports


## Features

- Responsive scrolling
- Hover states
- Status indicators
- Dynamic rows


## JavaScript


```javascript

const table=

new H13Table(

document.querySelector(
".h13-table"
)

);


table.addRow([

"#10455",

"Customer",

"Vehicle",

"Tech",

"Complete",

"$500"

]);


# Hangar 13 Database Service


## Purpose

Central data management layer.


## Core Tables


Customers

Vehicles

Repair Orders

Technicians

Parts

Inventory

Invoices

Inspections



## Example


Create customer:


```javascript

h13Database.insert(

"customers",

{

id:1,

name:"John Smith",

phone:"555-5555"

}

);


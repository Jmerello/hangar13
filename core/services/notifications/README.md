# Hangar 13 Notification Service


## Purpose

Central notification system.


## Used By


- Customer Portal
- Technician Portal
- Admin Dashboard
- Fleet Portal
- Mobile App



## Example


Send notification:


```javascript

h13Notifications.send({

type:"VEHICLE_READY",

recipient:"customer",

message:

"Your Silverado is ready for pickup"

});


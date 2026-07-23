# Hangar 13 Storage Service


## Purpose

Local data persistence.


Used for:


- Offline mode
- Cached records
- Device storage
- Temporary data


## Examples


Save customer:


```javascript

h13Storage.saveRecord(

"customers",

101,

{

id:101,

name:"John Smith",

phone:"555-5555"

}

);

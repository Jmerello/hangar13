# Hangar 13 Authentication Service


## Purpose

Controls:

- Login
- Logout
- User identity
- Roles
- Sessions


## Current Mode

Local prototype authentication.


## Future Mode

Connects to:


- Hangar Server
- Local database
- Encrypted credentials
- Device authentication



## Example


```javascript

h13Auth.login({

username:"John",

role:"technician"

});


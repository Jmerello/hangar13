# Hangar Avatar Component

Used for:

- Customers
- Technicians
- Employees
- Fleet Contacts
- Admin Users


## Features

- Initials fallback
- Profile images
- Status indicators
- Multiple sizes
- Avatar groups


## JavaScript


```javascript

const avatar =
new H13Avatar(
document.querySelector(".h13-avatar")
);


avatar.setInitials(
"John Merello"
);


avatar.setStatus(
"online"
);

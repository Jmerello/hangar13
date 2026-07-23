# Hangar Badge Component

Used for displaying status information.

## Examples

Repair Orders:

- Pending
- Approved
- In Progress
- Complete
- Cancelled

Vehicles:

- Active
- Archived
- Warranty

Technicians:

- Online
- Offline
- Busy


## JavaScript

```javascript
const badge =
new H13Badge(
document.querySelector(".h13-badge")
);


badge.setText("Complete");

badge.setType("success");

```

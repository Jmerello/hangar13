# Hangar Progress Component

Used for visual completion states.

## Uses

- Repair order completion
- Inspection progress
- Vehicle health score
- Inventory levels
- Technician workload
- AI analysis completion


## JavaScript


```javascript

const progress =

new H13Progress(

document.querySelector(
".h13-progress-group"
)

);


progress.set(85);


progress.increase(5);


progress.decrease(10);

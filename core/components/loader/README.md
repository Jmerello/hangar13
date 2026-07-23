# Hangar Loader Component

Loading states used throughout Hangar 13.

## Uses

- Login processing
- AI diagnostics
- Database syncing
- Repair order loading
- Server communication
- Upload processing


## JavaScript


```javascript

const loader = new H13Loader();


loader.show(
"Running AI Diagnostics..."
);


loader.hide();

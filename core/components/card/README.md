
# Hangar Card

The standard card component used throughout Hangar 13.

---

## Features

- Header
- Body
- Footer
- Primary Variant
- Success Variant
- Warning Variant
- Danger Variant
- Compact Mode
- Shadow Levels
- Hover Animation

---

## JavaScript

```javascript
const card = new H13Card(
    document.querySelector(".h13-card")
);

card.toggle();
```

---

## Example

```html
<div class="h13-card primary">

    <div class="h13-card-header">

        <div>

            <div class="h13-card-title">

                Vehicle

            </div>

        </div>

    </div>

    <div class="h13-card-body">

        Card Content

    </div>

</div>
```

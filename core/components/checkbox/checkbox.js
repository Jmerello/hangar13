class H13Checkbox{

    static check(box){

        box.checked=true;

    }

    static uncheck(box){

        box.checked=false;

    }

    static toggle(box){

        box.checked=!box.checked;

    }

    static enable(box){

        box.disabled=false;

    }

    static disable(box){

        box.disabled=true;

    }

    static isChecked(box){

        return box.checked;

    }

}

class H13Switch{

    static on(element){

        element.checked=true;

    }

    static off(element){

        element.checked=false;

    }

    static toggle(element){

        element.checked=!element.checked;

    }

    static state(element){

        return element.checked;

    }

    static enable(element){

        element.disabled=false;

    }

    static disable(element){

        element.disabled=true;

    }

}

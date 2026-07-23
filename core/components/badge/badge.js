class H13Badge{

    constructor(element){

        this.element=element;

    }


    setText(text){

        this.element.textContent=text;

    }


    setType(type){

        this.element.className=

        `h13-badge ${type}`;

    }


    addClass(className){

        this.element.classList.add(className);

    }


    removeClass(className){

        this.element.classList.remove(className);

    }


    static create(text,type="primary"){

        const badge=document.createElement("span");

        badge.className=`h13-badge ${type}`;

        badge.innerText=text;

        return badge;

    }

}

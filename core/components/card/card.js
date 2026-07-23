
class H13Card{

    constructor(element){

        this.card = element;

    }

    collapse(){

        const body =
            this.card.querySelector(".h13-card-body");

        body.style.display="none";

    }

    expand(){

        const body =
            this.card.querySelector(".h13-card-body");

        body.style.display="block";

    }

    toggle(){

        const body =
            this.card.querySelector(".h13-card-body");

        if(body.style.display==="none"){

            body.style.display="block";

        }else{

            body.style.display="none";

        }

    }

}

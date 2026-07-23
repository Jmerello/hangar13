class H13Progress{


    constructor(element){

        this.element=element;

        this.bar=

        element.querySelector(
            ".h13-progress-bar"
        );

    }



    set(value){


        if(value < 0){

            value=0;

        }


        if(value > 100){

            value=100;

        }


        this.bar.style.width=

        value+"%";


        const label=

        this.element.querySelector(
            ".h13-progress-value"
        );


        if(label){

            label.innerText=

            value+"%";

        }


    }



    increase(amount=10){


        let current=

        parseInt(
            this.bar.style.width
        )
        ||0;


        this.set(
            current+amount
        );


    }



    decrease(amount=10){


        let current=

        parseInt(
            this.bar.style.width
        )
        ||0;


        this.set(
            current-amount
        );


    }


}

class H13Loader{


    constructor(){

        this.overlay=null;

    }



    show(message="Loading..."){


        if(!this.overlay){


            this.overlay=

            document.createElement("div");


            this.overlay.className=

            "h13-loading-overlay";


            this.overlay.innerHTML=`

                <div class="h13-spinner lg"></div>

                <div class="h13-loading-text">

                ${message}

                </div>

            `;


            document.body.appendChild(
                this.overlay
            );

        }


        this.overlay.classList.add(
            "show"
        );


    }




    hide(){


        if(this.overlay){

            this.overlay.classList.remove(
                "show"
            );

        }


    }




    static button(button){


        button.disabled=true;


        button.dataset.original=

        button.innerHTML;


        button.innerHTML=`

        <span class="h13-spinner sm"></span>

        `;


    }




    static restore(button){


        button.disabled=false;


        button.innerHTML=

        button.dataset.original;


    }


}

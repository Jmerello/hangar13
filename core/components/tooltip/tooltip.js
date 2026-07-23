/* ==========================================================
   HANGAR 13 TOOLTIP ENGINE
========================================================== */


class H13Tooltip{


    constructor(element){


        this.element=element;


        this.bind();


    }



    bind(){


        this.element.addEventListener(

            "click",

            ()=>{


                this.toggle();


            }

        );


    }




    show(){


        this.element.classList.add(
            "active"
        );


    }




    hide(){


        this.element.classList.remove(
            "active"
        );


    }




    toggle(){


        this.element.classList.toggle(
            "active"
        );


    }




    static init(){


        document

        .querySelectorAll(
            ".h13-tooltip"
        )

        .forEach(element=>{


            new H13Tooltip(
                element
            );


        });


    }



}

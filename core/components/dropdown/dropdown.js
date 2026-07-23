/* ==========================================================
   HANGAR 13 DROPDOWN ENGINE
========================================================== */


class H13Dropdown{


    constructor(element){


        this.dropdown=element;


        this.button=

        element.querySelector(
            ".h13-dropdown-toggle"
        );


        this.bind();


    }



    bind(){


        this.button.addEventListener(

            "click",

            (event)=>{


                event.stopPropagation();

                this.toggle();


            }

        );



        document.addEventListener(

            "click",

            ()=>{


                this.close();


            }

        );


    }



    open(){


        this.dropdown.classList.add(
            "open"
        );


    }



    close(){


        this.dropdown.classList.remove(
            "open"
        );


    }



    toggle(){


        this.dropdown.classList.toggle(
            "open"
        );


    }



    static init(){


        document

        .querySelectorAll(
            ".h13-dropdown"
        )

        .forEach(element=>{


            new H13Dropdown(
                element
            );


        });


    }

}

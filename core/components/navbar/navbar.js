/* ==========================================================
   HANGAR 13 NAVBAR ENGINE
========================================================== */


class H13Navbar{


    constructor(element){


        this.navbar=element;


        this.toggle=

        element.querySelector(
            ".h13-navbar-toggle"
        );


        this.menu=

        element.querySelector(
            ".h13-navbar-menu"
        );


        this.bind();


    }



    bind(){


        if(this.toggle){


            this.toggle.addEventListener(

                "click",

                ()=>{


                    this.menu.classList.toggle(
                        "open"
                    );


                }

            );


        }


    }



    activate(link){


        this.navbar

        .querySelectorAll(
            ".h13-navbar-link"
        )

        .forEach(item=>{


            item.classList.remove(
                "active"
            );


        });



        link.classList.add(
            "active"
        );


    }



    static init(){


        document

        .querySelectorAll(
            ".h13-navbar"
        )

        .forEach(element=>{


            new H13Navbar(
                element
            );


        });


    }


}

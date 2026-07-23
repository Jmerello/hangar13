/* ==========================================================
   HANGAR 13 SIDEBAR ENGINE
========================================================== */


class H13Sidebar{


    constructor(element){


        this.sidebar=element;


        this.toggle=

        document.querySelector(
            ".h13-sidebar-toggle"
        );


        this.bind();


    }



    bind(){


        if(this.toggle){


            this.toggle.addEventListener(

                "click",

                ()=>{


                    this.open();


                }

            );


        }



        document

        .querySelectorAll(
            ".h13-sidebar-link"
        )

        .forEach(link=>{


            link.addEventListener(

                "click",

                ()=>{


                    this.activate(link);


                }

            );


        });


    }




    open(){


        this.sidebar.classList.toggle(
            "open"
        );


    }



    close(){


        this.sidebar.classList.remove(
            "open"
        );


    }




    activate(link){


        this.sidebar

        .querySelectorAll(
            ".h13-sidebar-link"
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
            ".h13-sidebar"
        )

        .forEach(element=>{


            new H13Sidebar(
                element
            );


        });


    }

}

/* ==========================================================
   HANGAR 13 PORTAL ENGINE
========================================================== */


class H13Portal{


    constructor(element){


        this.portal=element;


        this.role=

        element.dataset.role;


        this.loadRole();


    }





    loadRole(){


        if(!this.role){

            return;

        }



        this.portal.classList.add(

            this.role

        );


    }





    setRole(role){


        this.portal.classList.remove(

            this.role

        );


        this.role=role;


        this.portal.classList.add(

            role

        );


    }





    static init(){


        document

        .querySelectorAll(
            ".h13-portal"
        )

        .forEach(element=>{


            new H13Portal(
                element
            );


        });


    }


}

/* ==========================================================
   HANGAR 13 SESSION MANAGER
========================================================== */


class H13Session{


    constructor(){


        this.timeout=

        60 * 60 * 1000;


    }





    start(){


        localStorage.setItem(

            "h13_session_start",

            Date.now()

        );


    }





    expired(){


        const start=

        localStorage.getItem(

            "h13_session_start"

        );



        if(!start){

            return true;

        }



        return (

            Date.now()

            -

            start

        )

        >

        this.timeout;


    }





    end(){


        localStorage.clear();


    }



}




const h13Session=

new H13Session();

/* ==========================================================
   HANGAR 13 AUTHENTICATION SERVICE
========================================================== */


class H13Auth{


    constructor(){


        this.user=null;


    }





    login(credentials){


        /*
            Temporary local login.

            Later this connects to:

            - Local Hangar Server
            - Database
            - Authentication API

        */



        this.user={


            id:1,


            name:

            credentials.username,


            role:

            credentials.role || "customer"



        };



        this.save();


        return this.user;


    }





    logout(){


        this.user=null;


        localStorage.removeItem(

            "h13_session"

        );


    }





    save(){


        localStorage.setItem(

            "h13_session",

            JSON.stringify(
                this.user
            )

        );


    }






    restore(){


        const session=

        localStorage.getItem(

            "h13_session"

        );



        if(session){


            this.user=

            JSON.parse(session);


        }



        return this.user;


    }





    isLoggedIn(){


        return this.user!==null;


    }





    getUser(){


        return this.user;


    }





    hasRole(role){


        return (

            this.user &&

            this.user.role===role

        );


    }



}




const h13Auth=

new H13Auth();

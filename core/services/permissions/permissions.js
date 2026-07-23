/* ==========================================================
   HANGAR 13 PERMISSION ENGINE
========================================================== */


class H13Permissions{


    constructor(){


        this.roles=

        H13Roles;


    }






    can(

        role,

        permission

    ){


        const userRole=

        this.roles[role];



        if(!userRole){


            return false;


        }





        if(

            userRole.permissions.includes("*")

        ){


            return true;


        }






        return (

            userRole.permissions.includes(

                permission

            )

        );


    }







    getPermissions(role){


        const userRole=

        this.roles[role];



        return userRole

        ?

        userRole.permissions

        :

        [];


    }







    getRoleName(role){


        return (

            this.roles[role]?.name

            ||

            "Unknown"

        );


    }



}





const h13Permissions=

new H13Permissions();

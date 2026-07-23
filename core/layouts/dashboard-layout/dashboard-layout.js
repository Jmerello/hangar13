/* ==========================================================
   HANGAR 13 DASHBOARD LAYOUT ENGINE
========================================================== */


class H13DashboardLayout{


    constructor(element){


        this.dashboard=element;


        this.refreshCallbacks=[];


    }





    refresh(){


        this.refreshCallbacks

        .forEach(callback=>{


            callback();


        });


    }




    registerRefresh(callback){


        this.refreshCallbacks.push(
            callback
        );


    }




    static init(){


        document

        .querySelectorAll(
            ".h13-dashboard"
        )

        .forEach(element=>{


            new H13DashboardLayout(
                element
            );


        });


    }


}

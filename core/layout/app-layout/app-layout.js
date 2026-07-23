/* ==========================================================
   HANGAR 13 APP LAYOUT ENGINE
========================================================== */


class H13AppLayout{


    constructor(){


        this.sidebar=

        document.querySelector(
            ".h13-sidebar"
        );


        this.main=

        document.querySelector(
            ".h13-app-main"
        );


    }




    collapse(){


        this.sidebar.classList.add(
            "collapsed"
        );


    }




    expand(){


        this.sidebar.classList.remove(
            "collapsed"
        );


    }





    toggle(){


        this.sidebar.classList.toggle(
            "collapsed"
        );


    }





    static init(){


        return new H13AppLayout();


    }


}

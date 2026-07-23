/* ==========================================================
   HANGAR 13 TABS ENGINE
========================================================== */


class H13Tabs{


    constructor(element){


        this.element=element;


        this.tabs=

        element.querySelectorAll(
            ".h13-tab"
        );


        this.panels=

        element.querySelectorAll(
            ".h13-tab-panel"
        );


        this.bind();


    }



    bind(){


        this.tabs.forEach(tab=>{


            tab.addEventListener(

                "click",

                ()=>{


                    this.activate(
                        tab.dataset.tab
                    );


                }

            );


        });


    }



    activate(id){


        this.tabs.forEach(tab=>{


            tab.classList.toggle(

                "active",

                tab.dataset.tab===id

            );


        });



        this.panels.forEach(panel=>{


            panel.classList.toggle(

                "active",

                panel.dataset.panel===id

            );


        });


    }




    static init(){


        document

        .querySelectorAll(
            ".h13-tabs"
        )

        .forEach(element=>{


            new H13Tabs(
                element
            );


        });


    }


}

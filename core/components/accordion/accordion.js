/* ==========================================================
   HANGAR 13 ACCORDION ENGINE
========================================================== */


class H13Accordion{


    constructor(element){


        this.element=element;


        this.items=

        element.querySelectorAll(
            ".h13-accordion-item"
        );


        this.bind();


    }



    bind(){


        this.items.forEach(item=>{


            const header=

            item.querySelector(
                ".h13-accordion-header"
            );


            header.addEventListener(

                "click",

                ()=>{


                    this.toggle(item);


                }

            );


        });


    }



    toggle(item){


        const content=

        item.querySelector(
            ".h13-accordion-content"
        );


        const isOpen=

        item.classList.contains(
            "active"
        );



        this.items.forEach(other=>{


            other.classList.remove(
                "active"
            );


            const panel=

            other.querySelector(
                ".h13-accordion-content"
            );


            panel.style.maxHeight=null;


        });



        if(!isOpen){


            item.classList.add(
                "active"
            );


            content.style.maxHeight=

            content.scrollHeight+"px";


        }


    }



    static init(){


        document

        .querySelectorAll(
            ".h13-accordion"
        )

        .forEach(element=>{


            new H13Accordion(
                element
            );


        });


    }


}

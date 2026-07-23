/* ==========================================================
   HANGAR 13 DATA GRID ENGINE
========================================================== */


class H13DataGrid{


    constructor(element,data=[]){


        this.element=element;

        this.data=data;

        this.filtered=data;


        this.table=

        element.querySelector(
            "tbody"
        );


        this.search=

        element.querySelector(
            ".h13-grid-search"
        );


        this.render();


        this.bind();


    }





    render(){


        this.table.innerHTML="";


        this.filtered.forEach(row=>{


            const tr=

            document.createElement(
                "tr"
            );


            row.forEach(cell=>{


                const td=

                document.createElement(
                    "td"
                );


                td.innerHTML=cell;


                tr.appendChild(td);


            });



            this.table.appendChild(tr);


        });


    }





    bind(){


        if(this.search){


            this.search.addEventListener(

                "input",

                e=>{


                    this.filter(
                        e.target.value
                    );


                }

            );


        }


    }




    filter(value){


        const search=

        value.toLowerCase();



        this.filtered=

        this.data.filter(row=>{


            return row

            .join(" ")

            .toLowerCase()

            .includes(search);


        });



        this.render();


    }





    add(row){


        this.data.push(row);


        this.filtered=this.data;


        this.render();


    }




    clear(){


        this.data=[];

        this.filtered=[];

        this.render();


    }



}

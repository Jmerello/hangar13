/* ==========================================================
   HANGAR 13 TABLE ENGINE
========================================================== */


class H13Table{


    constructor(element){


        this.table=element;


    }



    addRow(data){


        const tbody=

        this.table.querySelector(
            "tbody"
        );


        const row=

        document.createElement(
            "tr"
        );


        data.forEach(value=>{


            const cell=

            document.createElement(
                "td"
            );


            cell.innerHTML=value;


            row.appendChild(cell);


        });



        tbody.appendChild(row);


    }





    clear(){


        this.table

        .querySelector(
            "tbody"
        )

        .innerHTML="";


    }




    static init(){


        document

        .querySelectorAll(
            ".h13-table"
        )

        .forEach(table=>{


            new H13Table(
                table
            );


        });


    }


}

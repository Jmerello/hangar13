/* ==========================================================
   HANGAR 13 DATABASE SERVICE
========================================================== */


class H13Database{


    constructor(){


        this.tables={};


    }





    createTable(name){


        if(!this.tables[name]){


            this.tables[name]=[];


        }


    }






    insert(

        table,

        record

    ){


        this.createTable(

            table

        );



        this.tables[table]

        .push(record);



        return record;


    }






    find(

        table,

        id

    ){


        return (

            this.tables[table]

            ||

            []

        )

        .find(

            item=>item.id===id

        );


    }





    findAll(table){


        return (

            this.tables[table]

            ||

            []

        );


    }






    update(

        table,

        id,

        changes

    ){


        const record=

        this.find(

            table,

            id

        );



        if(record){


            Object.assign(

                record,

                changes

            );


        }



        return record;


    }







    delete(

        table,

        id

    ){


        this.tables[table]=


        (

            this.tables[table]

            ||

            []

        )

        .filter(

            item=>item.id!==id

        );


    }



}




const h13Database=

new H13Database();

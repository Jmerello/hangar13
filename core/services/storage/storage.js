/* ==========================================================
   HANGAR 13 STORAGE SERVICE
========================================================== */


class H13Storage{


    constructor(){


        this.prefix="H13_";


    }





    key(name){


        return this.prefix + name;


    }





    save(name,data){


        localStorage.setItem(


            this.key(name),


            JSON.stringify(data)


        );


    }






    get(name){


        const data =

        localStorage.getItem(

            this.key(name)

        );



        if(!data){


            return null;


        }



        return JSON.parse(data);


    }






    remove(name){


        localStorage.removeItem(

            this.key(name)

        );


    }






    exists(name){


        return (

            localStorage.getItem(

                this.key(name)

            )

            !== null

        );


    }





    clear(){


        Object.keys(

            localStorage

        )

        .filter(key=>{


            return key.startsWith(

                this.prefix

            );


        })

        .forEach(key=>{


            localStorage.removeItem(

                key

            );


        });


    }





    saveRecord(

        module,

        id,

        data

    ){


        let records=

        this.get(module) || [];



        const index=

        records.findIndex(

            item=>item.id===id

        );



        if(index>=0){


            records[index]=data;


        }

        else{


            records.push(data);


        }



        this.save(

            module,

            records

        );


    }





    getRecords(module){


        return (

            this.get(module)

            ||

            []

        );


    }



}




const h13Storage=

new H13Storage();

/* ==========================================================
   HANGAR 13 API ENGINE
========================================================== */


class H13API{


    constructor(){


        this.baseURL=

        H13_API.baseURL;


    }





    async request(

        endpoint,

        options={}

    ){


        const response=

        await fetch(

            this.baseURL + endpoint,

            {


                headers:{


                    "Content-Type":

                    "application/json",


                    ...options.headers


                },


                ...options


            }

        );



        if(!response.ok){


            throw new Error(

                "API Request Failed"

            );


        }



        return await response.json();


    }






    get(endpoint){


        return this.request(

            endpoint

        );


    }






    post(endpoint,data){


        return this.request(

            endpoint,

            {


                method:"POST",


                body:

                JSON.stringify(data)


            }


        );


    }





    put(endpoint,data){


        return this.request(

            endpoint,

            {


                method:"PUT",


                body:

                JSON.stringify(data)


            }


        );


    }






    delete(endpoint){


        return this.request(

            endpoint,

            {


                method:"DELETE"


            }


        );


    }




}




const h13API=

new H13API();

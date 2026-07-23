/* ==========================================================
   HANGAR 13 API CONFIGURATION
========================================================== */


const H13_API_CONFIG = {


    development:{


        baseURL:

        "http://localhost:3000/api",


        timeout:10000


    },



    production:{


        baseURL:

        "https://api.hangar13services.com",


        timeout:15000


    }



};





const H13_ENV = "development";



const H13_API =

H13_API_CONFIG[H13_ENV];

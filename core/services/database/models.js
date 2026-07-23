/* ==========================================================
   HANGAR 13 DATA MODELS
========================================================== */


/*
    These are the core business objects.

    Every module will eventually
    connect to these.
*/



const H13Models={



    Customer:{


        id:null,

        firstName:"",

        lastName:"",

        phone:"",

        email:"",

        vehicles:[]


    },




    Vehicle:{


        id:null,

        customerId:null,

        year:"",

        make:"",

        model:"",

        vin:"",

        mileage:0,


        serviceHistory:[]


    },





    RepairOrder:{


        id:null,

        vehicleId:null,

        technicianId:null,


        complaint:"",

        diagnosis:"",

        repairs:[],


        status:"open",


        total:0


    },





    Technician:{


        id:null,

        name:"",

        certifications:[],


        activeJobs:[]


    },





    Part:{


        id:null,

        number:"",

        description:"",

        quantity:0,


        price:0


    }



};

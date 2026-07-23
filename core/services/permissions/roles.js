/* ==========================================================
   HANGAR 13 USER ROLES
========================================================== */


const H13Roles={



    OWNER:{


        name:"Owner",


        permissions:[

            "*"

        ]


    },





    ADMIN:{


        name:"Administrator",


        permissions:[


            "users.manage",

            "customers.view",

            "customers.edit",

            "vehicles.view",

            "repair-orders.view",

            "repair-orders.edit",

            "inventory.manage",

            "reports.view",

            "finance.view"


        ]


    },






    SERVICE_ADVISOR:{


        name:"Service Advisor",


        permissions:[


            "customers.view",

            "customers.edit",

            "vehicles.view",

            "appointments.manage",

            "repair-orders.create",

            "repair-orders.edit",

            "inspections.view"


        ]


    },






    TECHNICIAN:{


        name:"Technician",


        permissions:[


            "repair-orders.view-assigned",

            "repair-orders.update",

            "inspections.create",

            "timeclock.manage",

            "parts.request"


        ]


    },






    CUSTOMER:{


        name:"Customer",


        permissions:[


            "profile.view",

            "vehicles.own",

            "appointments.create",

            "messages.send"


        ]


    },





    FLEET_MANAGER:{


        name:"Fleet Manager",


        permissions:[


            "fleet.view",

            "fleet.manage",

            "vehicles.view",

            "reports.view"


        ]


    }



};

/* ==========================================================
   HANGAR 13 NOTIFICATION SERVICE
========================================================== */


class H13Notifications{


    constructor(){


        this.notifications=[];


        this.listeners=[];


    }





    send(notification){



        const message={


            id:

            Date.now(),


            timestamp:

            new Date(),


            read:false,


            ...notification



        };



        this.notifications.push(

            message

        );



        this.broadcast(

            message

        );



        return message;


    }







    getAll(){


        return this.notifications;


    }






    getUnread(){


        return this.notifications.filter(

            item=>!item.read

        );


    }







    markRead(id){


        const item=

        this.notifications.find(

            n=>n.id===id

        );



        if(item){


            item.read=true;


        }


    }







    subscribe(callback){


        this.listeners.push(

            callback

        );


    }






    broadcast(notification){


        this.listeners.forEach(

            callback=>{


                callback(

                    notification

                );


            }


        );


    }





    clear(){


        this.notifications=[];


    }



}





const h13Notifications=

new H13Notifications();

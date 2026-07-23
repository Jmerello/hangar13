class H13Avatar{


    constructor(element){

        this.element=element;

    }


    setImage(url){

        this.element.innerHTML=`

        <img src="${url}" alt="Avatar">

        `;

    }


    setInitials(name){

        const initials=name

        .split(" ")

        .map(word=>word[0])

        .join("")

        .substring(0,2);


        this.element.innerHTML=initials;

    }


    setStatus(status){


        let wrapper=this.element.parentElement;


        let indicator=

        wrapper.querySelector(".h13-avatar-status");


        if(!indicator){

            indicator=document.createElement("span");

            indicator.className="h13-avatar-status";

            wrapper.appendChild(indicator);

        }


        indicator.className=

        `h13-avatar-status ${status}`;


    }


    static initials(name){


        return name

        .split(" ")

        .map(word=>word[0])

        .join("")

        .substring(0,2)

        .toUpperCase();


    }

}

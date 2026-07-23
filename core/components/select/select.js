class H13Select{

    constructor(id){

        this.container=document.getElementById(id);

        this.search=this.container.querySelector(".h13-select-search");

        this.list=this.container.querySelector(".h13-select-list");

        this.options=this.list.querySelectorAll(".h13-option");

        this.bind();

    }

    bind(){

        this.search.addEventListener("focus",()=>{

            this.container.classList.add("open");

        });

        this.search.addEventListener("keyup",()=>{

            this.filter();

        });

        this.options.forEach(option=>{

            option.addEventListener("click",()=>{

                this.search.value=option.innerText;

                this.container.classList.remove("open");

            });

        });

        document.addEventListener("click",(event)=>{

            if(!this.container.contains(event.target)){

                this.container.classList.remove("open");

            }

        });

    }

    filter(){

        const value=this.search.value.toLowerCase();

        this.options.forEach(option=>{

            option.style.display=

                option.innerText.toLowerCase().includes(value)

                ? "block"

                : "none";

        });

    }

}

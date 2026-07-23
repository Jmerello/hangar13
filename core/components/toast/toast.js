class H13Toast{

    static show({

        title="Notification",

        message="",

        type="primary",

        duration=4000

    }){

        let container=document.querySelector(".h13-toast-container");

        if(!container){

            container=document.createElement("div");

            container.className="h13-toast-container";

            document.body.appendChild(container);

        }

        const toast=document.createElement("div");

        toast.className=`h13-toast ${type}`;

        toast.innerHTML=`

            <div class="h13-toast-icon">${this.icon(type)}</div>

            <div class="h13-toast-content">

                <div class="h13-toast-title">${title}</div>

                <div class="h13-toast-message">${message}</div>

            </div>

            <button class="h13-toast-close">&times;</button>

        `;

        container.appendChild(toast);

        requestAnimationFrame(()=>{

            toast.classList.add("show");

        });

        toast.querySelector(".h13-toast-close")

        .onclick=()=>this.remove(toast);

        setTimeout(()=>{

            this.remove(toast);

        },duration);

    }

    static remove(toast){

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    }

    static icon(type){

        switch(type){

            case "success":

                return "✅";

            case "warning":

                return "⚠️";

            case "error":

                return "❌";

            default:

                return "ℹ️";

        }

    }

}

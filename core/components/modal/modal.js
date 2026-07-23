class H13Modal{

    constructor(id){

        this.modal=document.getElementById(id);

    }

    open(){

        this.modal.classList.add("show");

    }

    close(){

        this.modal.classList.remove("show");

    }

    toggle(){

        this.modal.classList.toggle("show");

    }

}

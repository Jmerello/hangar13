class H13Input{

    static validateRequired(input){

        if(input.value.trim()===""){

            input.classList.remove("success");

            input.classList.add("error");

            return false;

        }

        input.classList.remove("error");

        input.classList.add("success");

        return true;

    }

    static clear(input){

        input.value="";

        input.classList.remove(
            "success",
            "warning",
            "error"
        );

    }

    static disable(input){

        input.disabled=true;

    }

    static enable(input){

        input.disabled=false;

    }

}

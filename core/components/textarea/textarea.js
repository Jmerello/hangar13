class H13Textarea{

    static autoResize(textarea){

        textarea.style.height="auto";

        textarea.style.height=textarea.scrollHeight+"px";

    }

    static characterCounter(textarea,counter,max){

        counter.innerHTML=
            textarea.value.length+" / "+max;

        if(textarea.value.length>max){

            textarea.classList.add("error");

        }else{

            textarea.classList.remove("error");

        }

    }

}

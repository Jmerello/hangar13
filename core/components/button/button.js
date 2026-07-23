
class H13Button {

    static loading(button){

        button.classList.add("loading");

        button.disabled = true;

        button.dataset.original = button.innerHTML;

        button.innerHTML = "Loading...";

    }

    static finished(button){

        button.classList.remove("loading");

        button.disabled = false;

        button.innerHTML = button.dataset.original;

    }

}

document.querySelector(".get").addEventListener("click", async () => {
        const isSingle = document.querySelector("#single").checked;
        const isTwopart = document.querySelector("#twopart").checked;
    
        let apiUrl = "https://v2.jokeapi.dev/joke/Any?type=";
    
        const getData = async () => {
                const response = await axios.get(apiUrl);
                if (isSingle) {
                    document.querySelector(".joker").innerHTML = response.data.joke;
                } else  {
                    document.querySelector(".joker").innerHTML = "<b>Question:</b> " + response.data.setup + "<br><b>Answer:</b> " + response.data.delivery;
                }
        };
    
        if (isSingle) {
            apiUrl += "single";
            getData();
        } else if (isTwopart) {
            apiUrl += "twopart";
            getData();
        } else {
                document.querySelector(".joker").innerHTML = "secimivi et";
        }
    });
    
    
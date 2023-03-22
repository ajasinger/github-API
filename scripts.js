const buttonRepo = document.getElementById('buttonRepo');
buttonRepo.addEventListener("click",getRepo);

async function getRepo() {
    //call clear function so you can only fetch results once
    clear();
    // fetch from github API 
    //change this link 
    const url = "https://api.github.com/search/repositories?q=stars:>100000";
    const response = await fetch(url);

    //display results 
    const result = await response.json();
    result.items.forEach(i => {
        //create new link element called anchor
        const anchor = document.createElement("a");
        //linked pulled from github API
        anchor.href = i.html_url;
        //this will be the link text 
        anchor.textContent = i.full_name;
        //adds anchor to element with divResults id
        divResult.appendChild(anchor)
        //add line br between links
        divResult.appendChild(document.createElement("br"));

        //this displays results with no styling (how to use innerHTML instead?) 
        //results.appendChild(document.createTextNode(i.full_name));
    });

    console.log(result);
}

//function so results are not added after every button click (only first)
function clear() {
    while(divResult.firstChild) {
        divResult.removeChild(divResult.firstChild);
    }
}
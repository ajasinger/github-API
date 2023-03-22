const buttonRepo = document.getElementById('buttonRepo');
buttonRepo.addEventListener("click",getRepo);

async function getRepo() {
    // fetch from github API 
    //change this link 
    const url = "https://api.github.com/search/repositories?q=stars:>100000";
    const response = await fetch(url);

    //display results 
    const result = await response.json();
    result.items.forEach(i => {
        //use innerHTML instead 
        results.appendChild(document.createTextNode(i.full_name));
    });

    console.log(result);
}
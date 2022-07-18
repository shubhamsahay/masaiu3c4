// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
const api="https://masai-api.herokuapp.com/news/top-headlines?country=in";
const si=async()=>{
    try{
        const que=document.getElementById("search_input").value;
        const res=await fetch(`https://masai-api.herokuapp.com/news?q=${que}`)
        const data=await res.json();
        append(data.items);
    }catch(err){
        console.log(err)
    }
};
const append=(news)=>{
    let results= document.getElementById("results");
    results.innerText=null;
    news.forEach(({id:{newsId},snippet:{title}})=>{
        let img =document.createElement("img");
        img.url=urlToImage;
        let descriptions=document.createElement("h3");
        descriptions.innerText=description;
        let titles=document.createElement("h4");
        titles.innerText=title;
        let data = {
            descriptions,titles
        }
        div.onclick=()=>{
            results(data);
        };
        results.append(div);
    });

};


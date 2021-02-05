/* Fill your code*/
class Blog{
    constuctor(title,detail){
        this.title = title;
        this.detail = detail;
        this.addTitle();
        this.addDescription();

        addTitle()
        {
            var title_card = document.createElement('h1');
            title_card.setAttribute("id","blog-title");
            console.log(title_card);
            document.getElementById('card-text').appendChild(title_card);
            title_card.innerHTML += this.title;
        }

        addDescription()
        {
            var description_card=document.createElement("p");
            description_card.setAttribute("id","blog-descr");
            document.getElementById("card-text").appendChild(description_card);
            console.log(this.details);
            description_card.innerHTML +=this.details;
            console.log(description_card);
        }
    }
}
var addNewPostButton = document.getElementById("addBlog");
addNewPostBtn.addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "block";
});

var closeButton = document.getElementById("close");
closeButton.addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "none";
});

var postButton = document.getElementById("post");
postButton.addEventListener("click",function(){
    document.getElementById("popupContact").style.display="none";
    var $img =document.createElement("img");
    $img.setAttribute("src","./assets/java card image.svg")
    document.getElementById("card-text").appendChild($img);
    var $title =document.getElementById("title").value;
    console.log($title);
    var $detail =document.getElementById("detail").value;
    console.log($detail);
    var objBlog = new Blog($title,$detail);
});
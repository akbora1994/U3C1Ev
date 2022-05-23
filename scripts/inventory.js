var data1 = JSON.parse(localStorage.getItem("products"))||[];

data1.map(function(e,i){
    let box = document.createElement("div");
    let imgg = document.createElement("img");
    imgg.src = e.image;
    imgg.setAttribute("class", "imagee")
    let typee = document.createElement("div");
    typee.innerText = e.type;

    let descriptionn = document.createElement("div");
    descriptionn.innerText = e.desc;
    let pri = document.createElement("div");
    pri.innerText = e.price;
    let btn = document.createElement("button");
    btn.setAttribute("id","remove_product")
    btn.innerText = "Remove Product";
    btn.addEventListener("click",function(){
        removeProducts(e,i)
    })
    box.append(imgg,typee,descriptionn,pri,btn);
    document.querySelector("#all_products").append(box);


})

function removeProducts(e,i){
    data1.splice(i,1);
    localStorage.setItem("products",JSON.stringify(data1));
    window.location.reload();
}
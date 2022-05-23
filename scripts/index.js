//store the products array in localstorage as "products"
var productsdata = JSON.parse(localStorage.getItem("products"))||[];

function products(a,b,c,d){
    this.type = a;
    this.desc = b;
    this.price = c;
    this.image = d;

}

function submitProduct(e){
    //console.log("hii")
    e.preventDefault();
    let form = document.querySelector("#products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;
    let p1 = new products(type,desc,price,image)
    productsdata.push(p1)
    //console.log(productsdata)
    localStorage.setItem("products",JSON.stringify(productsdata))
    console.log(p1);


}


var nameProduct=document.getElementById("name")
var priceProduct=document.getElementById("price")
var descProduct=document.getElementById("desc")
var catogryProduct=document.getElementById("catogry")

var productContainer=[];

 if(localStorage.getItem("products")!=null){
 

   productContainer=JSON.parse(localStorage.getItem("products"))
   display()

 }

 function addProduct(){
    var product={
        name:nameProduct.value,
        price:priceProduct.value,
        desc:descProduct.value,
        catogry:catogryProduct.value
    }

    productContainer.push(product)
    localStorage.setItem("products" ,JSON.stringify(productContainer))
    display()
   //  clearForm()
   
 display()
    
 }
 function display(){
   var cartoona='';
   for(var i=0;i<productContainer.length;i++){
      cartoona +=
      `<div class="col-3">
      <div class="card rounded-4">
        <img src="img/WhatsApp Image 2024-04-15 at 2.51.53 PM (2).jpeg" class="rounded-top w-100" alt="">
        <div class="content p-2">
          <h2>`+productContainer[i].name +`</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eaque quaerat obcaecati aspernatur,
            eligendi iste si</p>
            <div class="d-flex justify-content-around ">
            <button class="btn btn-outline-primary w-100" onclick="deleteProduct(${i})">delete </button>
            
            </div>
          
        </div>
      </div>
    </div>`
   }
   document.getElementById("row").innerHTML=cartoona;
 }

//  function clearForm(){
//     nameProduct.value=""
//     priceProduct.value=""
//     descProduct.value=""
//     catogryProduct.value=""
//  }

function deleteProduct(index){
   productContainer.splice(index,1);
   localStorage.setItem("products" ,JSON.stringify(productContainer))
   display()
}

 
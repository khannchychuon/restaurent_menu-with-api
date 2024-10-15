const food_fish_items=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res=>res.json())
    .then(res=> food_fish(res.meals))
}
food_fish_items()

const food_fish=fish=>{
const fish_food_section=document.getElementById('fish-food-section')
fish.forEach(element => {
    const div=document.createElement('div');

    div.innerHTML=`
        <div class="card h-100">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strMeal}</h5>
                <p class="card-text">${element.strInstructions.slice(0,100)}</p>
            </div>
            <button class='my-btn w-50 mx-auto my-3' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="orderNow('${element.idMeal}')">Order Now</button>
        </div>
    `
    fish_food_section.appendChild(div)
});

}

// fish food items code end now



// our best selling food strat now

const ourBestSellingFood=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res=>res.json())
    .then(res=> bestSellingFood(res.meals))
}

ourBestSellingFood()

const bestSellingFood=food=>{
    const best_selling_food_section=document.getElementById('best-selling-food-section');
    food.forEach(foods=>{
        
        const div=document.createElement('div');

        div.innerHTML=`
            <div class="card h-100">
                <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${foods.strMeal}</h5>
                </div>
                <button  class='my-btn w-50 mx-auto my-3'  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="orderNow('${foods.idMeal}')">Order Now</button>
            </div>
            `
        best_selling_food_section.appendChild(div)

    })
}
// our best selling food ends now




// order page

function orderNow(id){

const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

fetch(url)
.then(res=>res.json())
.then(data=>orderPages(data)) 

}


const orderPages=(data)=>{
const product_page=document.getElementById('product-page');

product_page.textContent='';
  const div=document.createElement('div')

  div.innerHTML=`
  <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
  <div class="d-flex m-2 justify-content-center align-items-center ">
  <div class="card border-0 shadow-none  w-50">
  <img src="${data.meals[0].strMealThumb}" class=" img-fluied rounded-start" alt="...">
      
  </div>
  <div class="ms-5 w-50">
      <h3  >Title: ${data.meals[0].strIngredient2}</h3>
      <h3>Price: $10</h3>
      <p  ><span class='h4'>Description:</span> ${data.meals[0].strInstructions.slice(0,107)}</p>
      <p ><span class='h3'>Review: </span> <span class='text-warning'> <i class="fa-solid fa-star "></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> </span> </p>
     
  </div>
</div>
  </div>

</div>
  `

  product_page.appendChild(div)
  // document.body.appendChild(div)

  
}
 
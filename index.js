
  const dishes= [
    {
      "id": 1,
      "name": "Chicken Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 2,
      "name": "Ham Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 3,
      "name": "Cheese Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 4,
      "name": "Fries",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 5,
      "name": "Egg Muffin",
      "restaurant": "Mc Donalds",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 6,
      "name": "Burrito",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 7,
      "name": "Tacos",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 8,
      "name": "Quesadilla",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 9,
      "name": "Steak",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 10,
      "name": "Yakitori",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 11,
      "name": "Nankotsu",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 12,
      "name": "Piman",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 13,
      "name": "Vegan Bento",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch"]
    },
    {
      "id": 14,
      "name": "Coleslaw Sandwich",
      "restaurant": "Vege Deli",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 15,
      "name": "Grilled Sandwich",
      "restaurant": "Vege Deli",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 16,
      "name": "Veg. Salad",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 17,
      "name": "Fruit Salad",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 18,
      "name": "Corn Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 19,
      "name": "Tomato Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 20,
      "name": "Minestrone Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 21,
      "name": "Pepperoni Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 22,
      "name": "Pepperoni Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 23,
      "name": "Hawaiian Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 24,
      "name": "Seafood Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 25,
      "name": "Deep Dish Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["dinner"]
    },
    {
      "id": 26,
      "name": "Chow Mein",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 27,
      "name": "Mapo Tofu",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 28,
      "name": "Kung Pao",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 29,
      "name": "Wontons",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 30,
      "name": "Garlic Bread",
      "restaurant": "Olive Garden",
      "availableMeals": ["breakfast", "lunch", "dinner"]
    },
    {
      "id": 31,
      "name": "Ravioli",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 32,
      "name": "Rigatoni Spaghetti",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 33,
      "name": "Fettucine Pasta",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    }
  ]
  var mealArray=[]

const meal = dishes.map(data=>(data.availableMeals))
meal.map(data=>{
  data.map(mealdata=>{
    mealArray.push(mealdata)
  })

})
var row=""
const uniquemeal=[...new Set(mealArray)]
uniquemeal.map(data=>{
 row+=`<option>${data}</option>`
})
document.getElementById("meals").innerHTML=row
console.log(mealArray,'meal')



//const unique = dishes.filter((restaurant,index)=> dishes.indexOf(restaurant) == index);
//console.log(unique);


//function selectmeal( ){
 //let selectedmeal=document.getElementById('meals').value;
 //localStorage.setItem('selectedmeal',JSON.stringify(selectedmeal))
//}
//for next step

//document.getElementById('next1').addEventListener('click',(e)=>{
 // e.preventDefault()
//var resturantaccording=''
//let selectedmeal= JSON.parse(localStorage.getItem('selectedmeal'))
//dishes.map(data=>{
 // data.availableMeals.map(meal=>{
  //if(meal==selectedmeal){
  //  console.log(data.restaurant,'data.restaurant')
    //  resturantaccording+=`<option>${data.restaurant}</option>`
  //  }
  //})
//})
//document.getElementById("restaurant").innerHTML=resturantaccording
//console.log(resturantaccording,'restaurant')

//}) 
const unique = dishes.filter((restaurants,index)=>dishes.indexOf(restaurants)==index);
console.log(unique)
document.getElementById("restaurant").innerHTML=`${dishes.map(data=>{
  return `<option>${data.restaurant}</option>`
})}`




const uniques = dishes.filter((name,index)=>dishes.indexOf(name)==index);
console.log(uniques)

document.getElementById("dish").innerHTML=`${dishes.map(value=>{
  return `<option>${value.name}</option>`
})}`;







const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

var meals=document.getElementById("meals").value;
localStorage.setItem("selectd meal",meals)
var pos=document.getElementById("position").value;
localStorage.setItem("no. of people",pos)
var restaurants = document.getElementById("restaurant").value;
localStorage.setItem("restaurant",restaurants)

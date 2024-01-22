/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const doublesixroll = function(num1,num2,arr,doublearr){
   arr.push(num1+num2)
   doublearr.push(num1,num2)
   
}


/*******************
 * EVENT LISTENERS *
 *******************/
let sixroll = document.querySelector("#d6-roll")
sixroll.addEventListener("click",()=>{
  sixes.push(getRandomNumber(6))
  document.getElementById("d6-roll").src = `./images/d6/${sixes[sixes.length-1]}.png`
  let sixmean = mean(sixes)
  document.querySelector("#d6-rolls-mean").innerHTML = `${sixmean}`
  let sixmedian = median(sortByNumber(sixes))
  document.querySelector("#d6-rolls-median").innerHTML = `${sixmedian}`
  let sixmode = mode(sortByNumber(sixes))
  document.querySelector("#d6-rolls-mode").innerHTML = `${sixmode}`
})

let d1sixroll = document.querySelector("#double-d6-roll-1")
let d2sixroll = document.querySelector("#double-d6-roll-2")
let dtotal = []
let dseperate = []
d1sixroll.addEventListener("click",()=>{
  doublesixroll(getRandomNumber(6),getRandomNumber(6),dtotal,dseperate)
  document.getElementById("double-d6-roll-1").src = `./images/d6/${dseperate[dseperate.length-2]}.png`
  document.getElementById("double-d6-roll-2").src = `./images/d6/${dseperate[dseperate.length-1]}.png`
  document.querySelector("#double-d6-rolls-mean").innerHTML = `${mean(dtotal)}`
  document.querySelector("#double-d6-rolls-median").innerHTML = `${median(sortByNumber(dtotal))}`
  document.querySelector("#double-d6-rolls-mode").innerHTML = `${mode(dtotal)}`
  console.log(dseperate)
})
d2sixroll.addEventListener("click",()=>{
  doublesixroll(getRandomNumber(6),getRandomNumber(6),dtotal,dseperate)
  document.getElementById("double-d6-roll-1").src = `./images/d6/${dseperate[dseperate.length-2]}.png`
  document.getElementById("double-d6-roll-2").src = `./images/d6/${dseperate[dseperate.length-1]}.png`
  document.querySelector("#double-d6-rolls-mean").innerHTML = `${mean(dtotal)}`
  document.querySelector("#double-d6-rolls-median").innerHTML = `${median(sortByNumber(dtotal))}`
  document.querySelector("#double-d6-rolls-mode").innerHTML = `${mode(dtotal)}`
  console.log(dseperate)
})

let d12roll = document.querySelector("#d12-roll")
d12roll.addEventListener("click",()=>{
   twelves.push(getRandomNumber(12))
   document.getElementById("d12-roll").src = `images/numbers/${twelves[twelves.length-1]}.png`
   document.getElementById("d12-rolls-mean").innerHTML = `${mean(twelves)}`
   document.getElementById("d12-rolls-median").innerHTML = `${median(twelves)}`
   document.getElementById("d12-rolls-mode").innerHTML = `${mode(twelves)}`
})

let d20roll = document.querySelector("#d20-roll")
d20roll.addEventListener("click",()=>{
  twenties.push(getRandomNumber(20))
  document.getElementById("d20-roll").src = `images/numbers/${twenties[twenties.length-1]}.png`
  document.getElementById("d20-rolls-mean").innerHTML = `${mean(twenties)}`
  document.getElementById("d20-rolls-median").innerHTML = `${median(twenties)}`
  document.getElementById("d20-rolls-mode").innerHTML = `${mode(twenties)}`
})

/******************
 * RESET FUNCTION *
 ******************/
document.querySelector("#reset-button").addEventListener("click",()=>{
  sixes.length = 0
  doubleSixes.length = 0
  twelves.length = 0
  twenties.length = 0
  dseperate.length = 0
  dtotal.length = 0
  document.getElementById("d6-roll").src = "./images/start/d6.png"
  document.getElementById("double-d6-roll-1").src = "./images/start/d6.png"
  document.getElementById("double-d6-roll-2").src = "./images/start/d6.png"
  document.getElementById("d12-roll").src = "./images/start/d12.jpeg"
  document.getElementById("d20-roll").src = "./images/start/d20.jpg"
  document.getElementById("d6-rolls-mean").innerHTML = ""
  document.getElementById("d6-rolls-median").innerHTML = ""
  document.getElementById("d6-rolls-mode").innerHTML = ""
  document.getElementById("double-d6-rolls-mean").innerHTML = ""
  document.getElementById("double-d6-rolls-median").innerHTML = ""
  document.getElementById("double-d6-rolls-mode").innerHTML = ""
  document.getElementById("d12-rolls-mean").innerHTML = ""
  document.getElementById("d12-rolls-median").innerHTML = ""
  document.getElementById("d12-rolls-mode").innerHTML = ""
  document.getElementById("d20-rolls-mean").innerHTML = ""
  document.getElementById("d20-rolls-median").innerHTML = ""
  document.getElementById("d20-rolls-mode").innerHTML = ""
})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
const mean = function(arr){
  let total = 0
  for(let i = 0;i < arr.length; i++){
    total = total + arr[i]
  }
  return (total / arr.length).toFixed(3)
}

const median = function(arr){
  if(arr.length === 0){
  }else if(arr.length % 2 === 0){
    return (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2
  } else {
    return arr[arr.length / 2 -.5] 
  }
}

const mode = function(arr){
  let obj = {}
  for(let key of arr){
    if(obj[key] === undefined){
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  let highestarr = []
  let highest = 0
  for(let key in obj){
    if(obj[key]=== highest){
      highestarr.push(key)
    } else if(obj[key] > highest){
      highest = obj[key]
      highestarr = [key]
    }
  }
  return highestarr.join(", ")
}

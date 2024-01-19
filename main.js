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


// images/d6/1.png

/******************
 * RESET FUNCTION *
 ******************/



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

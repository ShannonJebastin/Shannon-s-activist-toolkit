/* .js files add interaction to your website */

var factList=[
  "There are 796 million illiterate people in the world, and women make up more than 2/3s of them.",
  "In India, 48 percent of rural women are illiterate compared to 14 percent of rural men.",
  "A third of the world's poorest girls from the ages 10 to 18 have never been to school."];

var fact= document.getElementById("fact");
var myButton= document.getElementById("myButton");
var count= 0;


myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML=factList [count];
  count++;
  if (count== factList.length){count=0;
    }
}
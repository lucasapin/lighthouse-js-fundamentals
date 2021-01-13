for(var count = 100; count <=200; count++){
  if(count % 4 === 0 && count % 3 === 0){
    console.log("LoopyLighthouse");
  } else if(count % 4 === 0){
    console.log("Lighthouse");
  } else if (count % 3 === 0){
    console.log("Loopy");
  } else {
    console.log(count);
  }
}
var count = 100
while(count <= 200){
  if(count % 4 === 0 && count % 3 === 0){
    console.log("LoopyLighthouse");
  } else if(count % 4 === 0){
    console.log("Lighthouse");
  } else if (count % 3 === 0){
    console.log("Loopy");
  } else {
    console.log(count);
  }
  count = count + 1;
}
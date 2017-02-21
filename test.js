function nextPal (num){
  num++
  var pal = num.toString().split("")
  var reversePal = pal.slice().reverse()
  var bool = true;
  while (bool){
    if(pal.join("") == reversePal.join("")){
      bool = false
      return num;
    }
    num++
    pal = num.toString().split("")
    reversePal = pal.slice().reverse()
  }
  return num
}
console.log(nextPal(12123124124124123))

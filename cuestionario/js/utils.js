



function isEqual(array1,array2){
  var equal = true;
  if (array1 instanceof Array && array2 instanceof Array) {
    if (array1.length == array2.length) {
      for (var i = 0,len = array1.length; i < len; i++) {
        if (typeof(array1[i]) != typeof(array2[i])) {
          equal = false;
          break;
        }
        if(JSON.stringify(array1[i]) != JSON.stringify(array2[i])){
          equal = false;
          break;
        }
      }
    }else{
      equal = false;
    }
  }else{
    equal = false;
  }

  return equal;

}
//Ordena array o map de forma aleatoria.
function shuffle(input) {
  var result;
  var sort = function(input){
    var result = input.slice(0);
    do{
      result.sort(function() {
        return 0.5 - Math.random();
      });
    }while(isEqual(input,result));
    return result;
  }

  if (input.constructor.toString().match(/object/i)) {
    var keys = Object.keys(input);
    keys = sort(keys);
    result = {};
    for (var i = 0,len = keys.length; i < len; i++) {
       result[keys[i]] =  input[keys[i]];
    }
  }else if(input instanceof Array){
    result = sort(input);
  }
  return result;
}

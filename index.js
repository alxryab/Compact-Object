function compactObject(obj){
  if(Array.isArray(obj)){
    return obj.filter(val=>!isFalsy(val)).map(compactObject);
  }
  if(isObject(obj)){
    return Object.fromEntries(
        Object.entries(obj)
        .filter(([,value])=> !isFalsy(value))
        .map(([key,value])=> [key,compactObject(value)])
    );
  }
  return obj;
}

function isFalsy(obj){
    return Boolean(obj) === false;
}

function isObject(obj){
    return (
        typeof obj === "object"
            && obj !== null
            && !Array.isArray(obj)
    );
}

console.log(compactObject({"a": null, "b": [false, 1]}))

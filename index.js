// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {

    return Object.assign({}, obj, {
        [key]: value
    });

}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {
        [key]: value
    });
}

function deleteFromDriverByKey(obj, key) {

    const newObj = Object.assign({}, obj);

    delete newObj['key'];
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj['key'];
}

let driver={firstName:"driver1",lasttName:"ku"}

function updateDriverWithKeyAndValue(obj,key,val){
  return Object.assign({},obj,{ [key]: val })
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,val){
   return Object.assign(obj,{ [key]: val })
}
function deleteFromDriverByKey(obj,key){
 const newObj = Object.assign({}, obj);
 delete newObj[key];
 return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}

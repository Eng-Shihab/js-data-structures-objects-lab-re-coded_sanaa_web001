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


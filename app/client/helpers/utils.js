Utils = {};

Utils.removeByAttr = function (arr, attr, value) {
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
            arr.splice(i, 1);
        }
    }
    return arr;
};
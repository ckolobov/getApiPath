function getApiPath(obj, template) {
    let tempArr = template.split('%');
    for (let i = 0; i < tempArr.length; i++) {
        if ( obj.hasOwnProperty(tempArr[i]) ) {
            tempArr[i] = encodeURIComponent(obj[tempArr[i]]);
        }
    }
    return tempArr.join('');
}
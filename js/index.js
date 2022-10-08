function showWarning(){
    console.log("Downloading...!");
}

let a = '{"name":"John", "age":30, "car":null}';

function convertJSONToJS(input){
    return JSON.parse(input);
}

function convertJSToJSON(input){
    return JSON.stringify(input);
}

console.log(convertJSONToJS(a));
console.log(convertJSToJSON(convertJSONToJS(a)));
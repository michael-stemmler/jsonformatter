function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 0;
    
    if (currentVal > 0){
        newVal = currentVal-1;
    }
    document.getElementById("countDownButton").innerHTML = newVal; 
}

function formatJson(){
    const input = document.getElementById("textField").value;
    let isJson = true;
    let jsonObj = null;
    try {
        jsonObj= JSON.parse(input);
    } catch (error) {
        isJson = false;
    }
    
    if(isJson) {
        const output = JSON.stringify(jsonObj,null, 2);
        document.getElementById("textField").value=output;
    }
    else{
        document.getElementById("textField").value="Not a valid Json String!";
    }
}

function removeSpaces(){
    const input = document.getElementById("textField").value;
    let isJson = true;
    let jsonObj = null;
    try {
        jsonObj= JSON.parse(input);
    } catch (error) {
        isJson = false;
    }
    
    if(isJson) {
        const output = JSON.stringify(jsonObj);
        document.getElementById("textField").value=output;
    }
    else{
        document.getElementById("textField").value="Not a valid Json String!";
    }
}

function formatJson() {
    writeOutputString(spaces = 2);
}

function removeSpaces() {
    writeOutputString(spaces = 0);
}

function writeOutputString(spaces) {
    const jsonObj = toJson(document.getElementById("textField").value)

    if (jsonObj) {
        const output = JSON.stringify(jsonObj, null, spaces);
        document.getElementById("textField").value = output;
    }
    else {
        document.getElementById("textField").value = "Not a valid Json String!";
    }
}

function cleanUp() {
    document.getElementById("textField").value = "";
}

/////////////////////////////////////
function toJson(input) {
    try {
        return JSON.parse(input);
    } catch (error) {
        return null;
    }
}

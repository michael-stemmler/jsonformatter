let configuredNumOfSpaces = Number(document.getElementById("spaces").value);

document.getElementById("spaces").addEventListener("input", updateSpaces);

function formatJson() {
    writeOutputString(spaces = configuredNumOfSpaces);
}

function removeSpaces() {
    writeOutputString();
}

function writeOutputString(spaces=0, writeErrorMsg=true) {
    const jsonObj = toJson(document.getElementById("textField").value)

    if (jsonObj) {
        const output = JSON.stringify(jsonObj, null, spaces);
        document.getElementById("textField").value = output;
    }
    else if (writeErrorMsg) {
        document.getElementById("textField").value = "Not a valid Json String!";
    }
}

function cleanUp() {
    document.getElementById("textField").value = "";
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(document.getElementById("textField").value);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function updateSpaces(e) {
    configuredNumOfSpaces = Number(e.target.value);
    writeOutputString(spaces=configuredNumOfSpaces, writeErrorMsg=false);
}

/////////////////////////////////////
function toJson(input) {
    try {
        r = input.replace(/'/g, '"');
        return JSON.parse(r);
    } catch (error) {
        return null;
    }
}

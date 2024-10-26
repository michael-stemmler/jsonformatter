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

async function copyContent() {
    try {
        await navigator.clipboard.writeText(document.getElementById("textField").value);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
}

/////////////////////////////////////
function toJson(input) {
    try {
        return JSON.parse(input);
    } catch (error) {
        return null;
    }
}

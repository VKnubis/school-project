document.getElementById("ent").addEventListener("click", function() {
    var messageElement = document.getElementById("mess");
    var a = document.getElementById("a");
    if (a.checked) {
        messageElement.textContent = "Apgalvojums ir pareizs ";
    }
});
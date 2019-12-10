var count = 0;

function initCount(init) {
    count = init;
}

function incrementAtt() {
    count++;
    document.getElementById("count").innerHTML = count;
    document.getElementById("count-form-input").value = count;
}

function editAtt() {
    if (document.getElementById("count").style.display == "none") {
        document.getElementById("count").style.display = "inline-block";
        document.getElementById("count-edit").style.display = "none";
    } else {
        document.getElementById("count").style.display = "none";
        document.getElementById("count-edit").style.display = "inline-block";
    }
    count = document.getElementById("count-form-input").value;
    document.getElementById("count").innerHTML = count;
    document.getElementById("count-edit").value = count;
}

function updateEditAtt() {
    document.getElementById("count-form-input").value = document.getElementById("count-edit").value;
}
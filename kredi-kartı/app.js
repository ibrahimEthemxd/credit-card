document.querySelector('.card-nu-i').oninput = () => {
    document.querySelector("#card-nu-b").innerText =
        document.querySelector(".card-nu-i").value;
}

document.querySelector('.card-na-i').oninput = () => {
    document.querySelector("#card-na-b").innerText =
        document.querySelector(".card-na-i").value;
}

document.querySelector('#month-i').oninput = () => {
    document.querySelector("#exp-m").innerText =
        document.querySelector("#month-i").value + " /";
}
document.querySelector('#year-i').oninput = () => {
    document.querySelector("#exp-y").innerText =
        document.querySelector("#year-i").value;
}

//cvv
document.querySelector('.cvv-i').onmouseenter = () => {
    document.querySelector(".card-container").style.display =
        "none";
    document.querySelector(".card-container2").style.display =
        "block";
}
document.querySelector('.cvv-i').onmouseleave = () => {
    document.querySelector(".card-container").style.display =
        "block";
    document.querySelector(".card-container2").style.display =
        "none";
}

document.querySelector(".cvv-i").oninput = () => {
    document.querySelector(".cvv-back-p").innerText =
        document.querySelector(".cvv-i").value;
}
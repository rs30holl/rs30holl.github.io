function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showhide(whichDiv) {
    var div = document.getElementById(whichDiv);
    div.classList.toggle('hidden');
}

function showModal() {
    var modal = document.getElementById("modal-1");
    modal.classList.toggle('md-show');
}

function closeModal() {
    var modal = document.getElementById("modal-1");
    modal.classList.toggle('md-show');
}
function validateForm() {
    if (document.forms["formContact"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formContact"]["nama"].focus();
        return false;
    }
    if (document.forms["formContact"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formContact"]["email"].focus();
        return false;
    }
    if (document.forms["formContact"]["interest"].selectedIndex < 1) {
        alert("Pilih interest.");
        document.forms["formContact"]["interest"].focus();
        return false;
    }
}
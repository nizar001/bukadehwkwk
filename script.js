function filterMusic() {
    let input = document.getElementById('musicSearch').value.toLowerCase();
    let items = document.getElementsByClassName('music-item');

    for (let i = 0; i < items.length; i++) {
        let title = items[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

function tanyaPindah() {
    let konfirmasi = confirm("Iya pindah halaman atau tidak tetap di sini?");
    if (konfirmasi) {
        window.location.href = "kado.html"; 
    }
}
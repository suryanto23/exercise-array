// Soal nomor 5

let post = [];
let isiText = document.querySelector("#text");
let tombol = document.querySelector("#tekan");


tombol.addEventListener("click", () => {

    if (isiText.value == null || isiText.value == ""){

        // Pengaman untuk text kosong
        isiText.value = "";

    } else {

        // Membaca dan Kirimkan data text area ke array
        post.unshift(isiText.value);
        // Tampilkan data dari array
        document.querySelector("#display").innerHTML = post.join('<br><br><br>');
        // Mengosongkan text area
        isiText.value = "";
    }

});
// Soal nomor 1
let pekerjaanIT = [
    "Front End Developer" ,
    "Back End Developer" ,
    "Full Stack Developer" ,
    "UI / UX" ,
    "DevOps" ,
],

/* Membuat ul didalam tag div */
ul = document.createElement('ul');

document.getElementById('itemList').appendChild(ul);

pekerjaanIT.forEach(function (pekerjaanIT) {

let li = document.createElement('li');
/* Membuat li didalam tag ul */
ul.appendChild(li);

li.innerHTML += pekerjaanIT;
});


// Soal nomor 2
let timUtama = ["Budi", "David",  "Steven", "Evan", "Randy", "Samsul"];

console.log(timUtama);

let a = timUtama.slice(0,3);
console.log(a);
console.log("Leader dari tim 1 adalah " +a[0] );

let b = timUtama.slice(3);
console.log(b);
console.log("Leader dari tim 2 adalah " +b[0] );

document.querySelector("#tim1").innerHTML = "Anggota Tim 1 : " +a+ "  (Leader " +a[0]+ ")";
document.querySelector("#tim2").innerHTML = "Anggota Tim 2 : " +b+ "  (Leader " +b[0]+ ")";

// Soal nomor 3
let deretAngka = [3,5,7,9,11];

let hasilKali = deretAngka.map( z => {
    return z * 5;
});

document.querySelector("#deretAwal").innerHTML ="Array awal adalah : " +deretAngka;
document.querySelector("#deretHasil").innerHTML ="Array dikalikan 5 menjadi : " +hasilKali;



// Soal nomor 4
const arrayPertama = ["Math", "English", "Progamming"];
const arrayKedua = ["Geography", "Spanish", "Progamming"];


for(i=0 ; i < 3 ; i++){

    arrayPertama[i];

    for(n=0 ; n < 3 ; n++){

        arrayKedua[n];
        if (arrayPertama[i] == arrayKedua[n]){
           document.querySelector("#banding").innerHTML = arrayPertama[i] === arrayKedua [n] ;
           document.querySelector("#keterangan").innerHTML = "Data yang sama pada array adalah : " +arrayPertama[i] ;
        };    
    };

};












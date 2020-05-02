let div = document.querySelectorAll('.gambar-slider .slider');
div[0].classList.add('gambar')
div[1].classList.add('slideDiKanan');
div[3].classList.add('slideKeKiri');
div[2].classList.add('display');
div[3].classList.add('display');
let urutan = 40; //karena kalo dari 0 masih error

setInterval(function(){
    //Gambar tengah ke kiri
    div[urutan%4].classList.remove('slideDiKanan'); //Pastikan tidak ada class slideDiKanan agar tidak lompat
    div[urutan%4].classList.add('slideKeKiri'); //Slide gerakan gambar ke kanan
    setTimeout(function(){ //tunggu slide selesai kemudian hapus class gambar dan tetap di kiri layar
        div[(urutan-1)%4].classList.remove('gambar');
        div[(urutan-1)%4].classList.add('display'); //class display ditambahkan agar tidak menimpa slide yang tampil ditengah
    },1000)
    urutan += 1; //pindah ke index berikutnya
    //gambar kanan ke tengah
    div[urutan%4].classList.remove('slideDiKanan'); 
    div[urutan%4].classList.add('gambar'); //Hapus class slideDiKanan dan tambah class gambar agar tetap standby di tengah
    //Siapkan gambar di sebelah kanan
    div[(urutan+1)%4].classList.add('slideDiKanan'); //Persiapkan gambar berikutnya di sebelah kanan layar
    div[(urutan+1)%4].classList.remove('slideKeKiri'); //Pastikan tidak ada class slideKeKiri agar tidak bertabrakan dan tetap standby di kanan
    div[(urutan+1)%4].classList.remove('display'); //hilangkan class display agar slide bisa tampil
    div[(urutan-2)%4].classList.remove('slideKeKiri');
}, 4000)
    
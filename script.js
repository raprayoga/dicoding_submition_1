// Untuk Interaktif Aside
const aboutUs = document.querySelector('.menu ul a:nth-child(5)');
const aside = document.getElementsByClassName('container-aside')[0];

aboutUs.addEventListener('click', function(){
    aside.classList.toggle('aside-on');
});


// Untuk Interaktif Produk List
const product = document.querySelectorAll('.product-list ul li');
const listProduct = document.querySelectorAll('.product-detail div');

function hapus (){
    for (i=0; i<=5; i++){
        listProduct[i].style.display = 'none';
    }
}

product[0].addEventListener('click',function(){
    hapus ();
    listProduct[0].style.display = 'block'
});
product[1].addEventListener('click',function(){
    hapus ();
    listProduct[1].style.display = 'block'
});
product[2].addEventListener('click',function(){
    hapus ();
    listProduct[2].style.display = 'block'
});
product[3].addEventListener('click',function(){
    hapus ();
    listProduct[3].style.display = 'block'
});
product[4].addEventListener('click',function(){
    hapus ();
    listProduct[4].style.display = 'block'
});
product[5].addEventListener('click',function(){
    hapus ();
    listProduct[5].style.display = 'block'
});

// Untuk Interaktif navigasi
const nProduct = document.querySelector('.menu ul li:nth-child(2) a');

nProduct.addEventListener('click', function(){
    let target = this.getAttribute('href');
    var pTarget = document.querySelector(target);
    console.log(pTarget);
})
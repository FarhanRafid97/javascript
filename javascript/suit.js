
var p = prompt('Gajah, Semut, Orang')



var comp = Math.random();
if(comp < 34){
	comp = 'semut'
}else if (comp >= 34 && comp < 67){
	comp = 'gajah'
}else{
	comp ='orang'
}

var hasil = '';
if(comp == p ){
hasil = "Seri";
}else if(p =='semut'){
hasil = (comp == 'orang') ? 'Menang!' : 'Kalah!';
}else if(p == 'gajah' ){
	hasil =(comp == 'semut') ? 'Menang' : 'Kalah!';
}else if (p== 'orang'){
	hasil = (comp == 'gajah') ? 'menang' : 'Kalah!';
}else{
	hasil = 'memasukan pilihan yang salah'
}

alert('Kompuetr memilih :'+comp+'\nKamu memilih :'+p+'\nMakah Hasilnya :'+hasil)






























alert('terimkasi');

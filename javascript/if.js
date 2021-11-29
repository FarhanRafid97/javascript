/*var angka = prompt('masukan nilai:');
if (angka % 2 == 0  ){
	alert('angka genap');
}else if (angka % 2 == 1){
	alert("angka ganjil");
}else{
	alert('angka tolol ');
}


for(var noangkot=1; noangkot <=10; noangkot++){
	if(noangkot <= 6){
		console.log('ANgkot No'+noangkot+ ' Berjalan dengan baik');
	}else {
		console.log('ANgkot No'+noangkot+ ' Tidak berjalan dengan baik');
	}
	
}*/

var jmlangkot = prompt('masukan jumlah angkot');
var	angkotbaik = prompt('Masukan Angkot Baerjalan baik');
var noangkot = 1;
for (noangkot <= angkotbaik; noangkot <=jmlangkot; noangkot++){
	if(noangkot <= angkotbaik){
	console.log('angkot baik'+noangkot);
}else{
	console.log('angkot rusak'+noangkot);
}
}

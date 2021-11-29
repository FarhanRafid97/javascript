function jumlahduabilangan(a,b){
	var total;
	var volumeA;
	var volumeB;
	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;
	return total;
}

var a = prompt('Angka 1');
var b = prompt('Angka ke 2');
var hasil = jumlahduabilangan(a,b);
alert(hasil);
alert('Selamat datang!')
var jmlangkot = prompt('Berapa angkot yang ingin anda cek?');
    angkotaberkerja = prompt('Berapa angkot dalam kondisi baik?');
    noangkot = 1;

while(noangkot <= angkotaberkerja){
	console.log('Angkot No ' +  noangkot +' Bekerja dengan baik');

noangkot++;
}

for (noangkot >= angkotaberkerja; noangkot <= jmlangkot; noangkot++){
	console.log('Angkot No ' +  noangkot +' Tidak Bekerja dengan baik');
}






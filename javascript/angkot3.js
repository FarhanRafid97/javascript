var jmlangkot = 10;
var angkotberoperasi = 6;


for(var noangkot = 1; noangkot <=jmlangkot; noangkot++){

	if(noangkot <= angkotberoperasi && noangkot !== 5){
		console.log('angkot No '+noangkot+ ' Sedang beroperasi');
	}	
	else if(noangkot === 8 || noangkot === 10 || noangkot === 5){
		console.log('angkot No '+noangkot+' Sedang Lembur');
	}
	else{
	console.log('angkot No '+noangkot+'sedang rusak');
}
}

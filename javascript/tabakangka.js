var nyawa = 3;
var kes = 0;
var comp = Math.floor(Math.random() * 26) + 1;
while(p == comp != nyawa > kes ){
var p = prompt('isikan Angka');

var kk = '';
if(p < comp){
	kk='Diatas'
}else{
	kk='dibawah'
}


if(p == comp){
	alert('Selamat Angka Anda Benar');
}else{
	alert('Angkanya :'+kk+' '+p+'\nTebakan Angka salah \nAngkanya adalah :'+comp+'\n Nyawa anda Tinggal :'+nyawa);

}

	nyawa--;


}

var item = prompt('Masukan nama makanan / Makanan \n (cth:nasi,daging,susu,softdrink,coca')

switch(item){
	case 'nasi':
	case 'daging':
	case 'susu':
	alert('Makasan sehat');
	break;
	case 'softdrink':
	case 'coca':
	alert('makanan tidak sehat');
	break;
	default:
	alert('makanan tidak tersedia');
	break;
}

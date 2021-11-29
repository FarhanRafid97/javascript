/*var string ='';
for(var i=5; i > 0; i--){
	for(var j = 1;j < i; j++){
		string += '';
	}
	for(var a=5; a > j;a--){
		string +='*';
	}
	for (var l = 5; l >= a; l--) {
		string += '*';
	}
	string +='\n'
}
console.log(string);
*/
var s = '';
for (var i = 5; i > 0; i--) {
	for (var j = 1; j < i; j++) {
		s += ' ';
	}
	for (var k = 5; k > j; k--) {
		s += '*';
	}
	for (var l = 6; l >= k; l--) {
		s += '*';
	}
	s += '\n';
}
console.log(s);

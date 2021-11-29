/* 
function mahasiswa(nama, umur, jam){
    this.nama = nama;
    this.umur = umur;
    this.makan = function jam(a, b){
        var total = a * b;
        return total;
    }
    jam(12,2);

}

var mhs4 = new mahasiswa('farhan', '15', '12');
 */
/* var a ={};

a.halo = function(){
    console.log(this);
    console.log('halo');

}
a.halo(); */

function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namapenumpang){
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }

    this.penumpangturun = function(namapenumpang, tarif){
        if(this.penumpang.length === 0 ){
            alert('tidak ada penumpnag');
            return false;
        }

        for( var i = 0; i < this.penumpang.length;  i++)
        {
            if(this.penumpang[i] == namapenumpang){
                this.penumpang[i] = undefined;
                this.kas += tarif;
                return this.penumpang;
            }
        }
    }
}
var a = new Angkot('farhan',['steba','pasar'],[],0)
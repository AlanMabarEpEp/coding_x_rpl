for (var i =1 ;i <=100; i+=2) {
	console.log(i)
}
let jumlah = 0

for (i=2; i<=100; i+=2) {
	jumlah += i
}
console.log(jumlah)	

let panjang = 10
let lebar = 20 

function luas(a,b) {
	console.log("luas" + a * b)
}
function keliling(a,b) {
	console.log("keliling" + a+b*2)
}
console.log("persegi panjang")
console.log("panjang" + panjang)
console.log("lebar" + lebar)
luas(panjang,lebar)
keliling(panjang,lebar)

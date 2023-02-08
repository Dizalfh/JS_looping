// let user: any[] = ["FULAN", true, 2023];

// console.log(user[0]);

// let makanan: any = prompt(
//   "silahkan pilih menu diantara ini : mie ayam, bakso, sate, soto, naspad"
// );
// let harga = "";

// switch (makanan) {
//   case "mie ayam":
//     harga = "10k";
//     break;
//   case "bakso":
//     harga = "15k";
//     break;
//   case "sate":
//     harga = "18k";
//     break;
//   case "soto":
//     harga = "8k";
//     break;
//   case "naspad":
//     harga = "10k";
//     break;
// }
// if (harga == "") {
//   document.write("apakah tidak jadi beli");
// } else {
//   document.write("harga ini " + harga);
// }

// let nama: any = prompt("daftar santri di dalam divisi : ");
// let santri = "";

// switch (nama) {
//   case "mobile":
//     santri = "fajar, fatih, hilmi";
//     break;
//   case "frontand":
//     santri = "sancha, syahdin, marco";
//     break;
//   case "backand":
//     santri = "arga, luqman, arga";
//     break;
// }
// if (santri == "") {
//   document.write("daftar tidak tersedia");
// } else {
//   document.write("daftar nama santri di setiap divisi adalah : " + santri);
// }

// let umurOrang: any = prompt("BERAPA USIA KAMU");

// if (umurOrang <= 10) {
//   document.write("Anak2");
// } else if (umurOrang <= 18) {
//   document.write("Remaja");
// } else if (umurOrang <= 35) {
//   document.write("Dewasa");
// } else if (umurOrang <= 65) {
//   document.write("Paruh_baya");
// }

// TUGAS LOOPING

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y == x || x + y == 10 || x == 0 || x == 10 || x == 5) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y + x == 5 || y - x == 5 || y - x == -5 || y + x == 15) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  document.write("<br>");
}

document.write("<br>");

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (x >= y) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  document.write("<br>");
}

// Fungsi untuk menghasilkan array dengan 100 elemen (50 ganjil dan 50 genap)
function angka() {
  const data = [];
  let ganjil = 0;
  let genap = 0;

  while (ganjil < 50 || genap < 50) {
    const nilairandom = Math.floor(Math.random() * 50) + 1;

    if (nilairandom % 2 === 0 && genap < 50) {
      data.push(nilairandom);
      genap++;
    } else if (nilairandom % 2 !== 0 && ganjil < 50) {
      data.push(nilairandom);
      ganjil++;
    }
  }

  return data;
}

// Menampilkan array keseluruhan
const nilai = angka();
console.log("Array Keseluruhan (100 elemen array):");
console.log(nilai);
console.log("\n");


function bagi(data) {
  const ganjil = [];
  const genap = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      genap.push(data[i]);
    } else {
      ganjil.push(data[i]);
    }
  }
  return [genap, ganjil];
}
// menampilkan array ganjil dan genap
const [ggenap, gganjil] = bagi(nilai);


// Menampilkan array ganjil
console.log("Array Ganjil (50 elemen array):");
console.log(gganjil);
console.log("\n");

// Menampilkan array genap
console.log("Array Genap (50 elemen array):");
console.log(ggenap);

// mencari nilai minimum pada array genap
function mingenap(genap) {
  let mingnp = genap[0];
  for (let i = 0; i < genap.length; i++) {
    if (genap[i] < mingnp) {
      mingnp = genap[i];
    }
  }
  return mingnp;
}

// mencari nilai minimum pada array ganjil
function minganjil(ganjil) {
  let mingjl = ganjil[0];
  for (let i = 0; i < ganjil.length; i++) {
    if (ganjil[i] < mingjl) {
      mingjl = ganjil[i];
    }
  }
  return mingjl;
}

// mencari nilai maximum pada array genap
function maxgenap(genap) {
  let maxgnp = genap[0];
  for (let i = 0; i < genap.length; i++) {
    if (genap[i] > maxgnp) {
      maxgnp = genap[i];
    }
  }
  return maxgnp;
}

// mencari nilai maximum pada array ganjil
function maxganjil(ganjil) {
  let maxgjl = ganjil[0];
  for (let i = 0; i < ganjil.length; i++) {
    if (ganjil[i] > maxgjl) {
      maxgjl = ganjil[i];
    }
  }
  return maxgjl;
}

// mencari nilai total dari array genap
function totgenap(genap) {
  let totgnp = genap[0];
  for (let i = 0; i < genap.length; i++) {
    totgnp += genap[i];
  }
  return totgnp;
}

// mencari nilai total dari array ganjil
function totganjil(ganjil) {
  let totgjl = ganjil[0];
  for (let i = 0; i < ganjil.length; i++) {
    totgjl += ganjil[i];
  }
  return totgjl;
}

// mencari rata - rata total dari array genap
function ratgenap(genap) {
  const tottgnp = totgenap(ggenap);
  return tottgnp / genap.length;
}

// mencari rata - rata total dari array ganjil
function ratganjil(ganjil) {
  const totgjl = totganjil(gganjil);
  return totgjl / ganjil.length;
}


// menampilkan nilai min, max, total, dan rata - rata kedua array 
const minngnp = mingenap(ggenap);
console.log("Nilai minimum bilangan genap");
console.log(minngnp + "\n");

const minngjl = minganjil(gganjil);
console.log("Nilai minimum bilangan ganjil");
console.log(minngjl + "\n");

const maxxgnp = maxgenap(ggenap);
console.log("Nilai maximum bilangan genap");
console.log(maxxgnp + "\n");

const maxxgjl = maxganjil(gganjil);
console.log("Nilai maximum bilangan ganjil");
console.log(maxxgjl + "\n");

const tottgnp = totgenap(ggenap);
console.log("Nilai total bilangan genap");
console.log(tottgnp + "\n");

const tottgjl = totganjil(gganjil);
console.log("Nilai total bilangan ganjil");
console.log(tottgjl + "\n");

const ratagnp = ratgenap(ggenap);
console.log("Nilai Rata - rata bilangan genap");
console.log(ratagnp.toFixed(2) + "\n");

const ratagjl = ratganjil(gganjil);
console.log("Nilai Rata - rata bilangan ganjil");
console.log(ratagjl.toFixed(2) + "\n");



// perbandingan nilai min, max, total, dan rata - rata kedua array
const perbandingan = [
  (minngjl > minngnp) ? "Nilai minimum lebih besar pada array ganjil" : (minngjl === minngnp) ? "Nilai minimum sama besar pada kedua array" : "Nilai minimum lebih besar pada array genap",
  (maxxgjl > maxxgnp) ? "Nilai maximum lebih besar pada array ganjil" : (maxxgjl === maxxgnp) ? "Nilai maximum sama besar pada kedua array" : "Nilai maximum lebih besar pada array genap",
  (tottgjl > tottgnp) ? "Nilai total lebih besar pada array ganjil" : (tottgjl === tottgnp) ? "Nilai total sama besar pada kedua array" : "Nilai total lebih besar pada array genap",
  (ratagjl > ratagnp) ? "Nilai rata - rata lebih besar pada array ganjil" : (ratagjl === ratagnp) ? "Nilai rata - rata sama besar pada kedua array" : "Nilai rata - rata lebih besar pada array genap",
]

for (const banding of perbandingan) {
  console.log(banding);
}

const merah = document.querySelector(".merah");
const kuning = document.querySelector(".kuning");
const hijau = document.querySelector(".hijau");

function nyalakanLampu(lampu, warna) {
  // Matikan semua lampu
  merah.style.backgroundColor = "#333";
  merah.classList.remove("nyala");
  kuning.style.backgroundColor = "#333";
  kuning.classList.remove("nyala");
  hijau.style.backgroundColor = "#333";
  hijau.classList.remove("nyala");

  // Nyalakan lampu tertentu
  lampu.style.backgroundColor = warna;
  lampu.classList.add("nyala");
}

function mulaiTrafficLight() {
  // 1. Merah
  nyalakanLampu(merah, "red");
  setTimeout(() => {
    // 2. Hijau
    nyalakanLampu(hijau, "green");
  }, 5000); // setelah 5 detik

  setTimeout(() => {
    // 3. Kuning (sebentar)
    nyalakanLampu(kuning, "yellow");
  }, 10000); // setelah 10 detik

  setTimeout(mulaiTrafficLight, 12000); // ulang siklus (12 detik total)
}

mulaiTrafficLight();
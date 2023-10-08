//IfElse
function ifelse() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    alert("Selamat datang di PageJS!");
    window.location.href = "pagejs.html";
    return false;
  } else {
    document.getElementById("errorText").innerHTML =
      "Akses yang anda masukan salah.";
    return false;
  }
}

//Nestedifelse
function nestedifelse() {
    var nilaiujian = document.getElementById("nilaiujian").value;
    var kehadiran = document.getElementById("kehadiran").value;
    var hasil = document.getElementById("hasil-nestedifelse");

    if (!isNaN(nilaiujian) && !isNaN(kehadiran)) {
        if (kehadiran >= 75) {
            // Jika kehadiran memenuhi syarat
            if (nilaiujian >= 70) {
                hasil.innerHTML = "Selamat, Anda lulus!";
            } else {
                hasil.innerHTML = "Maaf, Anda belum lulus. Nilai ujian Anda kurang.";
            }
        } else {
            hasil.innerHTML = "Maaf, Anda belum lulus. Kehadiran Anda kurang.";
        }
    } else {
        hasil.innerHTML = "Masukkan nilai dan kehadiran yang valid.";
    }
}

//Switch
function switchs() {
    var pilihan = document.getElementById("pilihan").value;
    var hasil = document.getElementById("hasil-switch");

    switch (pilihan) {
        case "pilihan1":
            hasil.innerHTML = "Anda memilih Pilihan 1";
            break;
        case "pilihan2":
            hasil.innerHTML = "Anda memilih Pilihan 2";
            break;
        case "pilihan3":
            hasil.innerHTML = "Anda memilih Pilihan 3";
            break;
        default:
            hasil.innerHTML = "Pilihan tidak valid";
            break;
    }
}

//For Statement
function forStatement() {
    var jumlahPerulangan = parseInt(document.getElementById("jumlahPerulangan").value);
    var hasil = document.getElementById("hasil-for");

    if (!isNaN(jumlahPerulangan)) {
        hasil.innerHTML = ""; // Mengosongkan hasil sebelum melakukan perulangan
        for (var i = 1; i <= jumlahPerulangan; i++) {
            hasil.innerHTML += "Perulangan ke-" + i + "<br>";
        }
    } else {
        hasil.innerHTML = "Masukkan jumlah perulangan yang valid.";
    }
}

//Do While
function jalankanPerulangan() {
    var jumlahpercobaan = parseInt(document.getElementById("jumlahpercobaan").value);
    var hasil = document.getElementById("hasil-dowhile");

    if (!isNaN(jumlahpercobaan)) {
        var i = 1;
        do {
            hasil.innerHTML += "Percobaan ke-" + i + "<br>";
            i++;
        } while (i <= jumlahpercobaan);
    } else {
        hasil.innerHTML = "Masukkan jumlah percobaan yang valid.";
    }
}
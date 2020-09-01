// jshint esversion: 6
// #### by:Naufal Ghifari 20200831 ###
// #### Soal ####
// Buatlah model class berdasarkan diagram di bawah.
// Kemudian buatlah masing object dari child class yang sudah dibuat

// #### Jawaban ####
class Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    this.name = name;
    this.speed = speed;
    this.healthPoint = healthPoint;
    this.attackPoint = attackPoint;
    this.isDead = isDead;
  }

  attack() {
    this.healthPoint -= this.attackPoint;
    return `HP ${this.name} menjadi ${this.healthPoint} setelah diserang ${this.attackPoint} poin`;
  }

  fatality() {
    healthPoint = 0;
    isDead = true;
    return `Wasted, your HP is ${hp}`;
  }
}

class Pocong extends Enemy {
  jump() {
    this.speed += 50;
    this.attackPoint += 50;
    return `${this.speed} ${this.attackPoint}`;
  }

  superJump() {
    this.speed += 100;
    this.attackPoint += 100;
    return `${this.speed} ${this.attackPoint}`;
  }
}

class Zombie extends Enemy {
  walk() {
    this.speed -= 50;
    this.attackPoint -= 50;
    return `${this.speed} ${this.attackPoint}`;
  }

  rage() {
    this.speed += 300;
    this.attackPoint += 300;
    return `${this.speed} ${this.attackPoint}`;
  }
}


let villain = new Enemy("aang", 100, 1000, 10, false);
let pocoong = new Pocong("Pocong", 120, 1500, 20, false);
console.log(villain.name);
console.log(villain.speed);
console.log(villain.healthPoint);
console.log(villain.attackPoint);
console.log(villain.isDead);
console.log(villain.attack());
console.log(pocoong.name);
console.log(pocoong.speed);
console.log(pocoong.healthPoint);
console.log(pocoong.attackPoint);
console.log(pocoong.isDead);
console.log(pocoong.jump());
// console.log(pocoong.superJump());
console.log(pocoong.attack());

// #### Soal ####
// Buatlah method pada string yang dapat mengembalikan nilai
// string itu sendiri dalam keadaan terbalik
// Contoh:
// thor -> roht
// rusak -> kasur

// #### Jawaban ####
String.prototype.reverseString = function () {
  var newStr = "";
  var i = this.length;
  while (i > 0) {
    newStr += this.substring(i - 1, i);
    i--;
  }
  return newStr;
};

"Text123".reverseString(); //"321txeT"

// #### Soal ####
// Buatlah method pada number bernama ‘isPrima()’ yang dapat
// mengembalikan nilai boolean ‘true’ jika number tersebut
// merupakan bilangan prima
// Contoh:
// 7.isPrima() -> true
// 6.isPrima() -> false
// #### Jawaban ####
Number.prototype.isPrima = function (n) {
  if (n == 1) {
    return false;
  } else if (n == 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x == 0) {
        return false;
      }
    }
    return true;
  }
};

// 7.isPrima()

// #### Soal ####
// Tugas 1
// Buat sebuah modul dengan ketentuan:
// data.js berisikan data nama-nama hewan dan juga nama-nama buah.
// Export data tersebut menggunakan export biasa
// Import pada index.js kemudian tampilkan data yg sudah diexport
// menggunakan DOM

// #### Jawaban ####
import { hewan } from "./data.js";

// #### Soal ####
// Buat sebuah modul dengan ketentuan:
// Karyawan.js berisikan class Karyawan yang memiliki beberapa
// properti dan method
// Export class tersebut menggunakan export default
// Import pada index.js kemudian buat object dari class yang sudah
// dibuat

// #### Jawaban ####
import {karyawan, introduce} from "./karyawan.js";
// jshint esversion:6
let karyawan = [
  { name: "Bill Gates", role: "IT Helpdesk", salary: 1000 },
  { name: "Elon Musk", role: "Professional Meme Developer", salary: 3000 },
  { name: "Takumi Fujiwara", role: "Professional courier", salary: 5000 },
];

introduce = (i) => {
  alert(
    `Hi! I'm ${karyawan[i].name} as a ${karyawan[i].role} and paid for ${karyawan[i].salary} dollars`
  );
};

export { karyawan, introduce };

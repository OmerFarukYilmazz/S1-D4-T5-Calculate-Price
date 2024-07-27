function tutarHesapla(names) {
  /* kodlar buraya */
  if (names.length < 1) {
    return 0;
  }
  let sponsor = 'Ahmet'.toLowerCase();
  let words = '';
  for (let i = 0; i < names.length; i++) {
    words += names[i].toLowerCase();
  }

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < sponsor.length; j++) {
      if (words[i] == sponsor[j]) {
        count++;
      }
    }
  }
  return count * 1000;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;

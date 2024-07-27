const tutarHesapla = require('./index.js');

const yardimYapanlar = [
  'Leyla Mert',
  'Fevzi Kaya',
  'Aysel Hataylı',
  'Furkan Menekşe',
  'Zeliha Aydın',
];

describe('Yardım tutarı hesaplama testleri', () => {
  test("['Leyla Mert','Fevzi Kaya','Aysel Hataylı','Furkan Menekşe','Zeliha Aydın'] listesi gelince 23000 dönüyor", () => {
    expect(
      tutarHesapla([
        'Leyla Mert',
        'Fevzi Kaya',
        'Aysel Hataylı',
        'Furkan Menekşe',
        'Zeliha Aydın',
      ])
    ).toBe(23000);
  });

  test("['Alex De Souza','Hagi', 'Sergen Yalçin'] listesi gelince 9000 dönüyor", () => {
    expect(tutarHesapla(['Alex De Souza', 'Hagi', 'Sergen Yalçin'])).toBe(9000);
  });

  test("[ 'ahmet zorlu','emre şahiner','tuğrul türkkan','tunca özdemir','fatih aydın'] listesi gelince 22000 dönüyor", () => {
    expect(
      tutarHesapla([
        'ahmet zorlu',
        'emre şahiner',
        'tuğrul türkkan',
        'tunca özdemir',
        'fatih aydın',
      ])
    ).toBe(22000);
  });

  test('Büyük küçük harfe dikkat ediyor mu', () => {
    expect(tutarHesapla(['Ahmet Zorlu'])).toBe(5000);
  });

  test('Yardım yapan listesi boş olduğunda doğru sonucu dönüyor mu?', () => {
    expect(tutarHesapla([])).toBe(0);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = tutarHesapla(yardimYapanlar);
    expect(typeof result).toBe('number');
  });
});

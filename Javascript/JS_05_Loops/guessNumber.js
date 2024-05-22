//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let devam;
do {
  const rastgele = Math.ceil(Math.random() * 20);
  console.log(rastgele);

  let hak = 5;
  while (hak > 0) {
    const guess = +prompt("sayi tahmin ediniz!");
    hak--;
    if (rastgele == guess) {
      console.log("🎉tebrikler🎉");
      break;
    } else if (rastgele > guess) {
      console.log("Arttir⬆️");
      console.log(hak, "hakkiniz kaldi");
    } else {
      console.log("AZALT⬇️");
      console.log(hak, "hakkiniz kaldi");
    }
    if (hak == 0) {
      console.log("Üzgünüz hakkiniz kalmadi, dogru sayi", rastgele);
    }
  }
  devam = prompt("Devam etmek istiyorsaniz 'e/E' giriniz!");
} while (devam.toUpperCase() == "E");

let takimlar = [
    "footballLogos/besiktas.png",
    "footballLogos/fenerbahce.png",
    "footballLogos/galatasaray.png",
    "footballLogos/trabzonspor.png",
  ];
  let yildizlar=[
    "footballLogos/besiktas.png",
    "footballLogos/fenerbahce.png",
  ];
  
  function buton() {
    
    let takim1 = Math.floor(Math.random() * takimlar.length);
   
    document.getElementById("resim1").src = takimlar[takim1];
  }
  
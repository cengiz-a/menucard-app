var menucard = [
  {
    suppen: [
      {
        name: "Peking Suppe",
        beschreibung: "Süß-sauer-scharf",
        preis: "3,00 €",
        artikelnummer: "300",
      },
      {
        name: "Shrimpssuppe",
        beschreibung: "",
        preis: "4,90 €",
        artikelnummer: "301",
      },
      {
        name: "Hühnerfleischsuppe",
        beschreibung: "",
        preis: "3,90 €",
        artikelnummer: "304",
      },
      {
        name: "Gemüsesuppe",
        beschreibung: "",
        preis: "3,50 €",
        artikelnummer: "305",
      },
    ],
  },
  {
    getraenke: [
      {
        name: "Coca Cola, Fanta, Sprite, Mezzo Mix",
        beschreibung: "",
        menge: "1,0l",
        preis: "2,50 €",
        artikelnummer: "220",
      },
      {
        name: "Helles Bier Herrnbräu",
        beschreibung: "",
        menge: "0,5l",
        preis: "2,50 €",
        artikelnummer: "221",
      },
      {
        name: "Weizen Franziskaner",
        beschreibung: "",
        menge: "0,5l",
        preis: "3,00 €",
        artikelnummer: "222",
      },
      {
        name: "Lambrusco",
        beschreibung: "",
        menge: "0,75l",
        preis: "7,50 €",
        artikelnummer: "223",
      },
      {
        name: "Chianti",
        beschreibung: "",
        menge: "0,75l",
        preis: "7,90 €",
        artikelnummer: "226",
      },
      {
        name: "Rotwein auf Anfrage",
        beschreibung: "",
        menge: "0,75l",
        preis: "7,50 €",
        artikelnummer: "224",
      },
      {
        name: "Weißwein auf Anfrage",
        beschreibung: "",
        menge: "0,75l",
        preis: "7,50 €",
        artikelnummer: "225",
      },
    ],
  },
]


$(document).ready(function () {


  for(var u=0; u < 6; u++) {


    // Bereich Suppen

    var menucardSuppenLength = menucard[u].suppen.length;

    if(menucard[u].suppen) {

      $('.build-menucard').append(
        '<h3 class="mb-4">Suppen</h3><div class="row suppen-bereich"></div>'
      )

      for (var i=0; i < menucardSuppenLength; i++) {
        $('.suppen-bereich').append(
          '<div class="col-lg-3"> <div class="food-card"> <h5>' + menucard[0].suppen[i].name + '</h5> <p>' + menucard[0].suppen[i].beschreibung + '</p> <div class="row"> <div class="col"> <p>' + menucard[0].suppen[i].preis + ' <br> <strong>' + menucard[0].suppen[i].artikelnummer + ' </strong></p> </div> </div> </div> </div>'
        );
      };

    };


    // Bereich Suppen

    var menucardGeraenkenLength = menucard[1].getraenke.length;

    if(menucard[1].geraenke) {
      $('.build-menucard').append(
        '<h3 class="mb-4">Getränke</h3><div class="row getraenke-bereich"></div>'
      )

      for (var i=0; i < menucardGeraenkenLength; i++) {
        $('.getraenke-bereich').append(
          '<div class="col-lg-3"> <div class="food-card"> <h5>' + menucard[1].geraenke[i].name + '</h5> <p>' + menucard[1].geraenke[i].beschreibung + '</p> <div class="row"> <div class="col"> <p>' + menucard[1].geraenke[i].preis + ' <br> <strong>' + menucard[1].geraenke[i].artikelnummer + ' </strong></p> </div> </div> </div> </div>'
        );
      };

    };
  }


  console.log(menucard[0]);
});


































































































































































































//













//

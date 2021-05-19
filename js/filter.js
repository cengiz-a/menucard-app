









$(document).ready(function(){

  $('#myBtnContainer .btn').click(function(){
    $('.btn').removeClass("active");
    $(this).addClass("active");
    var allAnzeigen = $('#myBtnContainer .all').hasClass('active');
    var suppenAnzeigen = $('#myBtnContainer .suppen').hasClass('active');
    var getraenkeAnzeigen = $('#myBtnContainer .getraenke').hasClass('active');
    var vorspeisenAnzeigen = $('#myBtnContainer .vorspeisen').hasClass('active');
    var knusprigeEnteAnzeigen = $('#myBtnContainer .knusprigeEnte').hasClass('active');
    var hummerKrabbeAnzeigen = $('#myBtnContainer .hummerKrabbe').hasClass('active');
    var gemuseGerichteAnzeigen = $('#myBtnContainer .gemuseGerichte').hasClass('active');
    var nudelnGebratenerReisAnzeigen = $('#myBtnContainer .nudelnGebratenerReis').hasClass('active');
    var rindfleischAnzeigen = $('#myBtnContainer .rindfleisch').hasClass('active');
    var huehnchenAnzeigen = $('#myBtnContainer .huehnchen').hasClass('active');
    var pastaAnzeigen = $('#myBtnContainer .pasta').hasClass('active');
    var pizzaAnzeigen = $('#myBtnContainer .pizza').hasClass('active');
    var pizzaBroetchenAnzeigen = $('#myBtnContainer .pizzaBroetchen').hasClass('active');
    var fingerFoodAnzeigen = $('#myBtnContainer .fingerFood').hasClass('active');
    var schnitzelAnzeigen = $('#myBtnContainer .schnitzel').hasClass('active');
    var auflaufAnzeigen = $('#myBtnContainer .auflauf').hasClass('active');
    var alFornoAnzeigen = $('#myBtnContainer .alForno').hasClass('active');
    var cordonBlueAnzeigen = $('#myBtnContainer .cordonBlue').hasClass('active');
    var fischgerichteAnzeigen = $('#myBtnContainer .fischgerichte').hasClass('active');
    var salateAnzeigen = $('#myBtnContainer .salate').hasClass('active');
    var dessertsAnzeigen = $('#myBtnContainer .desserts').hasClass('active');

    if(suppenAnzeigen) {
      $('.getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.suppen-wrapper').removeClass('display-none');
    }
    if(getraenkeAnzeigen) {
      $('.suppen-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.getraenke-wrapper').removeClass('display-none');
    }
    if(vorspeisenAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.vorspeisen-wrapper').removeClass('display-none');
    }
    if(knusprigeEnteAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.knusprigeEnte-wrapper').removeClass('display-none');
    }
    if(hummerKrabbeAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.hummerKrabbe-wrapper').removeClass('display-none');
    }
    if(gemuseGerichteAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.gemuseGerichte-wrapper').removeClass('display-none');
    }
    if(nudelnGebratenerReisAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.nudelnGebratenerReis-wrapper').removeClass('display-none');
    }
    if(rindfleischAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.rindfleisch-wrapper').removeClass('display-none');
    }
    if(huehnchenAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.huehnchen-wrapper').removeClass('display-none');
    }
    if(pizzaAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.pizza-wrapper').removeClass('display-none');
    }
    if(pizzaBroetchenAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.pizzaBroetchen-wrapper').removeClass('display-none');
    }
    if(fingerFoodAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.fingerFood-wrapper').removeClass('display-none');
    }
    if(schnitzelAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.schnitzel-wrapper').removeClass('display-none');
    }
    if(auflaufAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.auflauf-wrapper').removeClass('display-none');
    }
    if(alFornoAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.alForno-wrapper').removeClass('display-none');
    }
    if(cordonBlueAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.cordonBlue-wrapper').removeClass('display-none');
    }
    if(fischgerichteAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.fischgerichte-wrapper').removeClass('display-none');
    }
    if(salateAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .desserts-wrapper').addClass('display-none');
      $('.salate-wrapper').removeClass('display-none');
    }
    if(dessertsAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper').addClass('display-none');
      $('.desserts-wrapper').removeClass('display-none');
    }
    if(pastaAnzeigen) {
      $('.suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').addClass('display-none');
      $('.vorspeisen-wrapper').removeClass('display-none');
    }
    if(allAnzeigen) {
      $('.vorspeisen-wrapper, .suppen-wrapper, .getraenke-wrapper, .vorspeisen-wrapper, .knusprigeEnte-wrapper, .hummerKrabbe-wrapper, .gemuseGerichte-wrapper, .nudelnGebratenerReis-wrapper, .rindfleisch-wrapper, .huehnchen-wrapper, .pizza-wrapper, .pasta-wrapper, .pizzaBroetchen-wrapper, .fingerFood-wrapper, .schnitzel-wrapper, .auflauf-wrapper, .alForno-wrapper, .cordonBlue-wrapper, .fischgerichte-wrapper, .salate-wrapper, .desserts-wrapper').removeClass('display-none');
    }
  });


});

// API Wordpress

let galerie = document.getElementById("galeriePhotos");

document.addEventListener("DOMContentLoaded", function () {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost/foodbox/wordpress/wp-json/wp/v2/galerie?_embed", true);
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let parsedObj = JSON.parse(this.response);


      for (let i = 0; i < parsedObj.length; i++) {
        let obj = parsedObj[i];

        if (obj.featured_media != 0 && obj.status == "publish") {

            let galeriePhotos =
              '<div class="col-6 col-md-3">' +
              '<div class="contentGalerie">' +
              '<a href="#" rel="noopener noreferrer" data-bs-toggle="modal" data-bs-target="#galerie' +
              obj.id +
              '" class="txtgalerie">' +
              '<img class="imgGalerie" src="' +
              obj["_embedded"]["wp:featuredmedia"][0]["source_url"] +
              '" alt="' +
              obj.title.rendered +
              '">' +
              '<div class="hoverGalerie">' +
              "<p>" +
              obj.title.rendered +
              "</p>" +
              "</div>" +
              "</a>" +
              "</div>" +
              '<div class="modal fade" id="galerie' +
              obj.id +
              '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
              '<div class="modal-dialog modal-xl">' +
              '<div class="modal-content">' +
              '<div class="modal-header">' +
              '<h5 class="modal-title" id="exampleModalLabel">' +
              obj.title.rendered +
              "</h5>" +
              '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
              "</div>" +
              '<div class="modal-body">' +
              '<img class="imgModal" src="' +
              obj["_embedded"]["wp:featuredmedia"][0]["source_url"] +
              '" alt="' +
              obj.title.rendered +
              '">' +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";

            galerie.innerHTML += galeriePhotos;
        }
      }
    }
  };

  xhttp.send();

  let xhttpWoo = new XMLHttpRequest();
  xhttpWoo.open("GET", "woo.php", true);
  xhttpWoo.setRequestHeader(
    "Content-type",
    "application/json; charset=utf-8"
  );
  xhttpWoo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let parsedObj = JSON.parse(this.response);


      for (let i = 0; i < parsedObj.length; i++) {
        let obj = parsedObj[i];
        let menuImage = "";
        if (obj.images.length == 0) {
          menuImage = "";
        } else {
          menuImage =
            '<img src="' +
            obj.images[0].src +
            '" class="imgproduits" alt="">';
        }

        let menuPrice = "";
        if (obj.price == "") {
          menuPrice = "";
        } else {
          menuPrice = obj.price + "€";
        }

        let menuArticle =
          '<div class="col-12 col-md-6">' +
          '<div class="produits">' +
          "<div>" +
          menuImage +
          "</div>" +
          '<div class="txtproduits">' +
          "<h2>" +
          obj.name +
          "</h2>" +
          obj.description +
          "</div>" +
          '<div class="prix">' +
          "<p>" +
          menuPrice +
          "</p>" +
          "</div>" +
          "</div>" +
          "</div>";

        if (obj.status == "publish") {
          if (obj.categories[0].name == "Entrées") {
            menuEntrees.innerHTML += menuArticle;
          }

          if (obj.categories[0].name == "Pâtes") {
            menuPates.innerHTML += menuArticle;
          }

          if (obj.categories[0].name == "Spécialités") {
            menuSpecialites.innerHTML += menuArticle;
          }

          if (obj.categories[0].name == "Sandwichs") {
            menuSandwichs.innerHTML += menuArticle;
          }

          if (obj.categories[0].name == "Désserts") {
            menuDesserts.innerHTML += menuArticle;
          }
        }
      }
    }
  };

  xhttpWoo.send();

});

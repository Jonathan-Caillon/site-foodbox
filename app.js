tarteaucitron.init({
    "privacyUrl": "", /* Privacy policy url */

    "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    "cookieName": "tarteaucitron", /* Cookie name */

    "orientation": "middle", /* Banner position (top - bottom) */
 
    "groupServices": false, /* Group services by category */
                     
    "showAlertSmall": false, /* Show the small banner on bottom right */
    "cookieslist": true, /* Show the cookie list */
                     
    "closePopup": true, /* Show a close X on the banner */

    "showIcon": true, /* Show cookie icon to manage cookies */
    //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
    "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */

    "adblocker": false, /* Show a Warning if an adblocker is detected */
                     
    "DenyAllCta" : true, /* Show the deny all button */
    "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
    "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
                     
    "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

    "removeCredit": false, /* Remove credit link */
    "moreInfoLink": true, /* Show more info link */

    "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
    "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */

    //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
                    
    "readmoreLink": "", /* Change the default readmore link */

    "mandatory": false, /* Show a message about mandatory cookies */

    
  });
  (tarteaucitron.job = tarteaucitron.job || []).push('GoogleMapsPerso');


  tarteaucitron.services.GoogleMapsPerso = {
      "key": "GoogleMapsPerso",
      "type": "api",
      "name": "GoogleMaps",
      "uri": "https://policies.google.com/privacy",
      "needConsent": true,
      "cookies": [1],
      "js": function () {
          "use strict";
          tarteaucitron.fallback(['GoogleMapsPerso'], function (x) {
              return '<iframe title="Google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.834549623888!2d5.339386715831273!3d45.95458860860775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b518a39dc7bfd%3A0x92334e4f0abbc1bf!2s12%20Avenue%20du%20G%C3%A9n%C3%A9ral%20Sarrail%2C%2001500%20Amb%C3%A9rieu-en-Bugey!5e0!3m2!1sfr!2sfr!4v1624015786299!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
          });
      },
      "fallback": function () {
          "use strict";
          var id = 'GoogleMapsPerso';
          tarteaucitron.fallback(['GoogleMapsPerso'], function (elem) {
              return tarteaucitron.engage(id);
          });
      }
  };
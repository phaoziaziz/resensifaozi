/* 
 * Simple javascript file to get the current language from the browser
 * and display the proper welcome in that language if posssible.
 */
document.write('<scr'+'ipt type="text/javascript" src="js/jquery.js" ></scr'+'ipt>');
var lang;

function getWelcome() {
    lang = getLanguage();
    if (!lang || !phrases[lang]) {
        lang = 'nl';
    }
    document.getElementById('welcome').innerHTML = phrases[lang];
    
}

 function getLanguage() {

         if (navigator.language) {
             lang = navigator.language;
         } else if (navigator.userLanguage) {
             lang = navigator.userLanguage;
         }

         if (lang && lang.length > 2) {
             lang = lang.substring(0, 2);
         }

         return lang;
     }

var phrases = { /* translation table for page */
    en: ["<h1>Bcot</h1><p>Ini merupakan sebuah catatan-catatan dari seorang pelupa yang mencoba mendokumentasikannya dalam sebuah buku online. Mungkin tidaklah rapi tapi semoga masih bisa dibaca setidaknya bagi si Penulis sendiri.</p><p><a href='about.html' class='btn btn-primary btn-large'>Learn more &raquo;</a></p>"],
    nl: ["<h1>Welkom!</h1><p>NetBeans Project Schildersezel gaat over een combinatie van state of the art HTML5/CSS3/JavaScript client ontwikkeling met Java / REST webservices. Het inschakelen van de ontwikkeling en aanpassing van flexabilble en performante industrie standaard client-side interfaces voor meerdere apparaten.</p><p><a href='about.html' class='btn btn-primary btn-large'> meer informatie &raquo;</a></p>"]
};
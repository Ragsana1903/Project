let darkMood = document.querySelector(".darkMood");
let body = document.querySelector("body");
let header = document.querySelector("header");
let main_contact_title_left = document.querySelector(".main_contact_title_left")
let main_contact_title_right = document.querySelector(".main_contact_title_right")
let main__box = document.querySelector(".main__box")
let submid = document.querySelector(".submid")
let main__boxdivp = document.querySelector(".hidden")
let click = document.querySelectorAll(".click")
let imgArry = ["../image/img6.jpg", "../image/img7.jpg", "../image/download (1).jpeg"];
let footer = document.querySelector("footer")
let index = 0;
let flag = true;


submid.addEventListener("click",()=>{
    click.forEach(item=>{
        if(item.value!=""){
            main__boxdivp.style.display = 'block';
            item.value=""
        }else{
        main__boxdivp.style.display = 'none';
        }
    })
})

darkMood.addEventListener("click", () => {
 if (flag == true) {
  body.style.backgroundColor = "#232323";
  header.style.backgroundColor = "#2B2B2B"
  footer.style.backgroundColor = "#2B2B2B"
  main_contact_title_left.style.backgroundColor="#232323"
  main_contact_title_right.style.backgroundColor="#232323"
  main__box.style.backgroundColor="#2B2B2B"
  main__box.style.color="white"
  flag = false
 } else {
  body.style.backgroundColor = "white";
  header.style.backgroundColor = "darkslategray";
  footer.style.backgroundColor = "darkslategrey";
  main_contact_title_left.style.backgroundColor=" whitesmoke"
  main_contact_title_right.style.backgroundColor=" rgb(211, 211, 211)"
  main__box.style.backgroundColor="grey"
  main__box.style.color="black"
  flag = true
 }
})

window.onscroll = function () {
 let goToTopButton = document.querySelector('#goToTopButton');

 if (window.scrollY > 1000) {
  goToTopButton.style.display = 'flex';
 } else {
  goToTopButton.style.display = 'none';
 }
};



function goToTop() {
 let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

 if (currentScroll > 0) {
  window.scrollTo(0, currentScroll - 30);
  setTimeout(goToTop, 10);
 }
}


i18next
 .use(i18nextBrowserLanguageDetector)
 .init({
  resources: {
   az: {
    translation: {
     headerHome: "Ana səhifə",
     headerServices: "Xidmətlər",
     headerAbout: "Haqqinda",
     headerWork: "İş",
     headerContact: "Əlaqə",
     headerLanguage: "Dil Dəyişin",
    impactful:"Gəlin birlikdə təsirli bir şey yaradaq!",
    content:"Aşağıdakı formadan istifadə edərək mənimlə əlaqə saxlayın.",
    name:"Ad (tələb olunur)",
    first:"Ad",
    last:"Soyad",
    email:"E-poçt (tələb olunur)",
    sign:"Xəbərlər və yeniləmələr üçün qeydiyyatdan keçin",
    subject:"Mövzu (lazımdır)",
    Subject:"Mövzu (lazımdır)",
     magic: "Gəlin birlikdə sehr yaradaq.",
     with: "MƏNİMLE İŞLƏ",
     links: "CƏLD LİNKLƏR",
     home2: "Ana sehife",
     services2: "Xidmetler",
     about2: "Haqqinda",
     work2: "Iş",
     contact2: "Əlaqə",
     ready: "BƏZİSİ ÜÇÜN HAZIR KICK-ASS BRENDING?",
     let: "Gəlin birlikdə işləyək!",
     based: "Kelowna və Vancouver, BC-də yerləşir, lakin dünyanin hər yerindən olan müştərilərlə məmnuniyyətlə işləyir.",
     rimshaw: "Copyright © 2023 Grimshaw Graphics. Bütün hüquqlar qorunur.",
     Privacy: "Gizlilik Siyasəti",
     Terms: "Şərtlər və Qaydalar"
    }
   },
   en: {
    translation: {
     headerHome: "Home",
     headerServices: "Services",
     headerAbout: "About",
     headerWork: "Work",
     headerContact: "Contact",
     headerLanguage: "Change language",
     impactful:"Let’s create something impactful together!",
     content:"Connect with me using the form below.",
     name:"Name (required)",
     first:"First Name",
     last:"Last Name",
     email:"Email(required)",
     sign:"Sign up for news and updates",
     subject:"Subject(required)",
     Subject:"Subject(required)",
     magic: "Let’s create some magic together.",
     with: "WORK WITH ME",
     links: "QUICK LINKS",
     home: "Home",
     services2: "Services",
     about2: "About",
     work2: "Work",
     contact2: "Contact",
     ready: "READY FOR SOME KICK-ASS BRANDING?",
     let: "Let’s work together!",
     based: "Based in Kelowna and Vancouver, BC but happily working with clients from all over the world.",
     rimshaw: "Copyright © 2023 Grimshaw Graphics. All rights reserved.",
     Privacy: "Privacy Policy",
     Terms: "Terms and Conditions",

    }
   }
  },
  fallbackLng: 'en',
  debug: true,

 }, function (err, t) {
  updateContent();
  document.querySelector('.language-button').addEventListener('click', function () {
   i18next.changeLanguage(i18next.language === 'az' ? 'en' : 'az', updateContent);
  });
 });

function updateContent() {
 document.querySelector('[data-i18n="headerHome"]').textContent = i18next.t('headerHome');
 document.querySelector('[data-i18n="headerServices"]').textContent = i18next.t('headerServices');
 document.querySelector('[data-i18n="headerAbout"]').textContent = i18next.t('headerAbout');
 document.querySelector('[data-i18n="headerWork"]').textContent = i18next.t('headerWork');
 document.querySelector('[data-i18n="headerContact"]').textContent = i18next.t('headerContact');
 document.querySelector('[data-i18n="headerLanguage"]').textContent = i18next.t('headerLanguage');
 document.querySelector('[data-i18n="impactful"]').textContent = i18next.t('impactful');
 document.querySelector('[data-i18n="content"]').textContent = i18next.t('content');
 document.querySelector('[data-i18n="first"]').textContent = i18next.t('first');
 document.querySelector('[data-i18n="last"]').textContent = i18next.t('last');
  document.querySelector('[data-i18n="email"]').textContent = i18next.t('email');
 document.querySelector('[data-i18n="sign"]').textContent = i18next.t('sign');
 document.querySelector('[data-i18n="subject"]').textContent = i18next.t('subject');
 document.querySelector('[data-i18n="Subject"]').textContent = i18next.t('Subject');
 document.querySelector('[data-i18n="magic"]').textContent = i18next.t('magic');
 document.querySelector('[data-i18n="with"]').textContent = i18next.t('with');
 document.querySelector('[data-i18n="links"]').textContent = i18next.t('links');
 document.querySelector('[data-i18n="home2"]').textContent = i18next.t('home2');
 document.querySelector('[data-i18n="services2"]').textContent = i18next.t('services2');
 document.querySelector('[data-i18n="about2"]').textContent = i18next.t('about2');
 document.querySelector('[data-i18n="work2"]').textContent = i18next.t('work2');
 document.querySelector('[data-i18n="contact2"]').textContent = i18next.t('contact2');
 document.querySelector('[data-i18n="ready"]').textContent = i18next.t('ready');
 document.querySelector('[data-i18n="let"]').textContent = i18next.t('let');
 document.querySelector('[data-i18n="based"]').textContent = i18next.t('based');
 document.querySelector('[data-i18n="rimshaw"]').textContent = i18next.t('rimshaw');
 document.querySelector('[data-i18n="Privacy"]').textContent = i18next.t('Privacy');
 document.querySelector('[data-i18n="Terms"]').textContent = i18next.t('Terms');
}
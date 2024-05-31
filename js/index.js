let mainRightImg = document.querySelector(".main__right img");
let get__websiteImg = document.querySelector(".get__website img")
let darkMood = document.querySelector(".darkMood");
let body = document.querySelector("body");
let containerItemH2 = document.querySelector(".container__item h2");
let about__title = document.querySelector("#about__title");
let header = document.querySelector("header");
let main__right = document.querySelector(".main__right")
let main__left__title = document.querySelector(".main__left__title")
let main__right__img = document.querySelector(".main__right img")
let main__left__titleH1 = document.querySelector(".main__left__title h1")
let guide__container__right__titleH2 = document.querySelector(".guide__container__right__title h2")
let guide__container__right__titleP = document.querySelector(".guide__container__right__title p")
let main__left__titleP = document.querySelector(".main__left__title p")
let about__working = document.querySelector(".about__working")
let get__website = document.querySelector(".get__website");
let guide__container__image = document.querySelector('.guide__container__image')
let guide__container__right = document.querySelector(".guide__container__right")
let reviews = document.querySelector(".reviews")
let kind__words__headerH2 = document.querySelector(".kind__words-header h2")
let imgArry = [ "../image/img6.jpg", "../image/img7.jpg", "../image/download (1).jpeg"];
let swiper__slide = document.querySelectorAll(".swiper-slide")
let webSiteArry = ["https://images.squarespace-cdn.com/content/v1/616e0744511e9f0d8db6a8a2/1635979490163-N9B1XPQQ2XS9H39P0ZOW/Vancouver-Naturopathic-Clinic-Branding.jpg", "../image/slide7-1-7.webp", "https://images.squarespace-cdn.com/content/v1/616e0744511e9f0d8db6a8a2/1687904349423-AR81WROYGWYTQ1M3TAVX/Grimshaw-Graphics-Elegantly-Executed-Events-Website-Design-Kelowna-BC.jpg?format=500w"]
let footer = document.querySelector("footer")
let index = 0;
let indexOne = 0
let flag = true;

darkMood.addEventListener("click", () => {
 if (flag == true) {
  body.style.backgroundColor = "#232323";
  containerItemH2.style.color = "white"
  about__title.style.color = "grey"
  header.style.backgroundColor = "#2B2B2B"
  main__left__title.style.backgroundColor = "#232323"
  main__right.style.backgroundColor = "rgb(60, 65, 65)"
  mainRightImg.style.webkitBoxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
  mainRightImg.style.mozBoxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
  mainRightImg.style.boxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
  main__left__titleH1.style.boxShadow = "0px 5px 20px 10px darkslategray"
  main__left__titleH1.style.borderRadius = "20px"
  main__left__titleH1.style.padding = "25px"
  main__left__titleH1.style.fontSize = "30px"
  main__left__titleP.style.boxShadow = "0px 5px 20px 10px darkslategray"
  main__left__titleP.style.borderRadius = "20px"
  main__left__titleP.style.padding = "25px"
  about__working.style.backgroundColor = "#2B2B2B"
  get__website.style.backgroundColor = "#232323"
  get__website.style.color = "white"
  guide__container__image.style.backgroundColor = "rgb(60, 65, 65)"
  guide__container__right.style.backgroundColor = "#2B2B2B"
  get__websiteImg.style.webkitBoxShadow = '1px 3px 19px 6px #FEFCF5';
  get__websiteImg.style.mozBoxShadow = '1px 3px 19px 6px #FEFCF5';
  get__websiteImg.style.boxShadow = '1px 3px 19px 6px #FEFCF5';
  guide__container__right__titleH2.style.boxShadow = "0px 5px 20px 10px darkslategray"
  guide__container__right__titleH2.style.borderRadius = "20px"
  guide__container__right__titleH2.style.padding = "25px"
  guide__container__right__titleH2.style.fontSize = "30px"
  guide__container__right__titleP.style.borderRadius = "20px"
  guide__container__right__titleP.style.boxShadow = "0px 5px 20px 10px darkslategray"
  guide__container__right__titleP.style.padding = "25px"
  reviews.style.backgroundColor = "#2B2B2B"
  kind__words__headerH2.style.color = "white"
  footer.style.backgroundColor = "#2B2B2B"
  swiper__slide.forEach(item => {
   item.style.backgroundColor = "#2B2B2B"
   item.style.color = "white"
  })
  flag = false
 } else {
  body.style.backgroundColor = "white";
  about__title.style.color = "grey";
  header.style.backgroundColor = "darkslategray";
  main__left__title.style.backgroundColor = "whitesmoke"
  main__right.style.backgroundColor = "rgb(211, 211, 211)"
  mainRightImg.style.boxShadow = "none"
  main__left__titleH1.style.boxShadow = "none"
  main__left__titleH1.style.borderRadius = "0px"
  main__left__titleH1.style.padding = "0px"
  main__left__titleH1.style.fontSize = "47px"
  main__left__titleP.style.boxShadow = "none"
  main__left__titleP.style.borderRadius = "0px"
  main__left__titleP.style.padding = "0px"
  about__working.style.backgroundColor = "darkslategray"
  get__websiteImg.style.boxShadow = 'none'
  get__website.style.backgroundColor = "gainsboro"
  get__website.style.color = "black"
  kind__words__headerH2.style.color = "black"
  footer.style.backgroundColor = "darkslategrey"
  swiper__slide.forEach(item => {
   item.style.backgroundColor = "white"
   item.style.color = "black"
  })
  flag = true
 }
})

setInterval(function () {
 mainRightImg.src = imgArry[index];
 index = (index + 1) % imgArry.length;
}, 1500);

setInterval(function () {
 get__websiteImg.src = webSiteArry[indexOne];
 indexOne = (indexOne + 1) % webSiteArry.length;
}, 1500);

let swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
   },
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
   },
   effect: 'slide',
   });

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
     greeting: "Qadin qurucular üçün hazirlanmiş marka və veb dizayn.",
     message: "Brendinq və veb dizayn haqqinda danişdiqda, haradan başlayacağinizi bilmək bəzən çətin olur. Mən sizin üçün ağir işi görərəm. Hətta bu prosesi mükafatlandirici və əyləncəli edəcəyimə söz verirəm.",
     viewPackages: "PAKETLƏRƏ BAXIN",
     aboutWorkingTitle: "QADINLARIN BAŞÇILIQ ETDİYİ SAĞLAMLIQ, SAĞLAMLIQ VƏ YAŞAM TƏRZİ BRANSLARI, TERAPİSTLƏR VƏ E-TİCARƏT BİZNESLƏRİ İLƏ İŞLƏMƏYƏ ÇOX HƏVƏSLİYƏM.",
     brandingAttracts: "Brendinq ideal müştərinizlə əlaqə qurur və onu cəlb edir",
     websitesLookGood: "Yaxşi görünən, lakin daha da önəmlisi, dönüşüm gətirən veb saytlar",
     cohesiveVisuals: "İstifadə etməyə əmin olduğunuz uyğun və strateji vizuallar",
     getWebsiteTitle: "Özünüz üçün auditoriyanizin vurulacaği bir marka və veb sayt alin.",
     point1: "Marka və veb saytiniz üçün möhkəm bir təməl qurmaği və ya hətta haradan başlayacağini bilmirsiniz.",
     point2: "Özünüzü çox yüklənmiş hiss edirsiniz və biznesinizdə diqqət etməli olduğunuz bir çox başqa şey var (əslində yaxşi olduğunuz şeylər!).",
     point3: "Özünüz hazirladiğiniz veb sayt və ya brendinq əlaqə qurmur və dönüşüm gətirmir.",
     point4: "Biznesinizin necə fərqlənə biləcəyindən və təsir göstərə biləcəyindən əmin deyilsiniz.",
     visualIdentity: "Hədəf auditoriyanizi cəlb edən və sizə aydinliq və inam verən vizual identiklik yaradacağiq.",
     discoverBusiness: "BİZNESİNİZİ NƏYİN UNİKAL EDİR OLUN",
     aboutText1: "Bütün brendinq layihələri, oradaki eyni-nin dənizindən necə fərqləndirə biləcəyimizə dərindən baxir.",
     buildTrust: "Uyğun bir marka ilə müştəri inamini qurun",
     aboutText2: "Hər bir marka toxunuş nöqtənizin uyğunluğunu və markaniza sadiq qalmasini təmin etmək üçün sizə lazim olan bütün alətləri verəcəyəm.",
     connectClients: "ÜRƏYİNİZİ (VƏ CÜZZİNİZİ) XOŞBƏXT EDƏN DAHA ÇOX ARZU MÜŞTƏRİLƏRİ İLƏ ƏLAQƏ QURUN",
     aboutText3: "Biznesiniz haqqinda danişmağa və onu paylaşmağa əmin olduğunuzda, sizə oxşar düşüncəli müştərilərin dünyasi açilir.",
     viewPackages2: "PAKETLƏRƏ BAXIN",
     meetJen: "Jen ilə taniş olun, brendinq bələdçiniz.",
     jenDescription: "Mən başa düşürəm, biznes idarə etmək çətindir. Mən sizin olduğunuz yerdə olmuşam. Mən brendinq və veb sayt səyahətinizi daha az ürəkaçan etmək üçün buradayam. Mən bu işdə 12 ildən çoxdur ki, işləyirəm və brendinqinizi və veb saytınızı sıfırdan 100-ə qədər qısa müddətdə və zövqlü bir proseslə necə aparacağımı başa düşürəm. Bir çox il korporativ dünyada böyük şirkətlər üçün aydın marka strategiyalarını və ən yaxşı veb sayt təcrübələrini həyata keçirmişəm. Bu bilik və təcrübəni kiçik biznes sahiblərinə auditoriyasına aydınlıq gətirmək və böyümələrinə kömək etmək üçün möhkəm təməl qurmağa kömək etmək üçün götürdüm.",
     milliseconds: "50 millisaniyə",
     millisecondsDescription: "istifadəçilərin saytiniz haqqinda fikir formalaşdirmasi üçün lazim olan müddətdir",
     percent75: "75%",
     percent75Description: "istifadəçilər şirkətin etibarliliğini veb sayt dizaynina əsasən qiymətləndirir",
     percent81: "81%",
     percent81Description: "istehlakçilarin markani nəzərdən keçirməsi üçün ona etibar etməsi lazimdir",
     kindWords: "Xoşbəxt müştərilərdən mehriban sözlər",
     testimonial1: "\"Jen ilə işləmədən əvvəl 'brendinq'in sadəcə bir loqo və rəng sxemi dizayn etməyi ifadə etdiyini düşünürdüm. O, mənə biznesimin vizyonunu, dəyərlərini və missiyasini formalaşdirmağa kömək etdi. O, super təşkilatli, detallara yönəlmiş və brendinqi necə, nə vaxt və harada istifadə etməklə bağli təlimatlari və izahlari çox aydin idi. Biznesim böyüdükcə Jen ilə işləməyə davam etməyi səbirsizliklə gözləyirəm\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen ilə işləmək inanilmazdir! Jen ilə işləmədən əvvəl yeni bir veb sayt dizayn etmək fikri qorxuducu idi. Mən sürətlə özüm üçün hazirladiğim bir veb saytim var idi və dürüstcə deyim ki, onu kiməsə göstərməyə utanirdim. Jen yenidən brendinq prosesini asan və əyləncəli etdi! O, araşdirdi, strategiya qurdu və rənglərlə dolu, inanilmaz loqolar və göstərməkdən qürur duyduğum veb sayt olan əla brend təlimati hazirladi!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     magic: "Gəlin birlikdə sehr yaradaq.",
     with: "MƏNİMLE İŞLƏ",
     links: "CƏLD LİNKLƏR",
     home: "Ana sehife",
     services: "Xidmetler",
     about: "Haqqinda",
     work: "Iş",
     contact: "Əlaqə",
     ready: "BƏZİSİ ÜÇÜN HAZIR KICK-ASS BRENDING?",
     let: "Gəlin birlikdə işləyək!",
     based: "Kelowna və Vancouver, BC-də yerləşir, lakin dünyanın hər yerindən olan müştərilərlə məmnuniyyətlə işləyir.",
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
     greeting: "Branding and website design curated for female founders.",
     message: "When it comes to branding and website design, it's sometimes tough to even know where to start. Let me do the heavy lifting for you. I promise to even make the process rewarding and fun.",
     viewPackages: "VIEW PACKAGES",
     aboutWorkingTitle: "I’M PASSIONATE ABOUT WORKING WITH FEMALE-LED HEALTH, WELLNESS AND LIFESTYLE BRANDS, THERAPISTS, AND E-COMMERCE BUSINESSES.",
     brandingAttracts: "Branding that attracts and connects with your ideal client",
     websitesLookGood: "Websites that not only look good, but more importantly, convert",
     cohesiveVisuals: "Cohesive and strategic visuals that you’re confident to share",
     getWebsiteTitle: "Get yourself a brand and website that your audience is obsessed with.",
     point1: "You're not sure how build a solid foundation for your brand or website or even where to begin.",
     point2: "You feel overwhelmed and have so many other things to focus on in your business (things that you're actually good at!).",
     point3: "The DIY website or branding you put together isn't connecting or converting.",
     point4: "You're unsure of how your business can stand out and make an impact.",
     visualIdentity: "We'll create a visual identity that attracts your target audience and provides you with clarity and confidence.",
     discoverBusiness: "DISCOVER WHAT MAKES YOUR BUSINESS UNIQUE",
     aboutText1: "All branding projects do a deep dive into how we can differentiate you from the sea of same-ness that's out there.",
     buildTrust: "BUILD CUSTOMER TRUST WITH A COHESIVE BRAND",
     aboutText2: "I’ll give you all the tools you need to make sure every one of your brand touch points stays consistent and true to your brand.",
     connectClients: "CONNECT WITH MORE DREAM CLIENTS THAT MAKE YOUR HEART (AND WALLET) HAPPY",
     aboutText3: "When you feel confident to talk about and share your business, a world of like-minded customers opens up to you.",
     viewPackages2: "VIEW PACKAGES",
     meetJen: "Meet Jen, your branding guide.",
     jenDescription: "I get it, running a business is hard. I've been right where you are. I'm here to make your branding and website journey less overwhelming. I've been in the business for over 12 years and understand how to take your branding and website from zero to 100 with a streamlined and enjoyable process. For many years I worked for large companies in the corporate world implementing clear brand strategies and the best website practices. I've taken that knowledge and expertise away to help smaller business owners get clarity on their audience and set up a solid foundation to help them grow.",
     milliseconds: "50 milliseconds",
     millisecondsDescription: "is the amount of time it takes for users to form an opinion of your site",
     percent75: "75%",
     percent75Description: "of users judge a company's credibility based on its website design",
     percent81: "81%",
     percent81Description: "of consumers need to a trust a brand to consider buying",
     kindWords: "Kind words from happy clients",
     testimonial1: "\"Before working with Jen, I thought 'branding' simply meant designing a logo and colour scheme. She helped me flesh out the vision, values, and mission of my business. She is super organized, detail-oriented, and clear in her instructions and explanations for how, when, and where to use the branding. I look forward to continuing to work with Jen as my business grows in the years to come.\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen is amazing to work with! Before working with Jen, the thought of designing a new website was daunting. I had a website I quickly made myself and to be honest, I was embarrassed to show it to anyone. Jen made the re-branding process easy and fun! She researched, strategized and put together an amazing brand guide, complete with brand colors, incredible logos, and a website I'm proud to show off!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     magic: "Let’s create some magic together.",
     with: "WORK WITH ME",
     links: "QUICK LINKS",
     home: "Home",
     services: "Services",
     about: "About",
     work: "Work",
     contact: "Contact",
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
 document.querySelector('[data-i18n="greeting"]').textContent = i18next.t('greeting');
 document.querySelector('[data-i18n="message"]').textContent = i18next.t('message');
 document.querySelector('[data-i18n="viewPackages"]').textContent = i18next.t('viewPackages');
 document.querySelector('[data-i18n="aboutWorkingTitle"]').textContent = i18next.t('aboutWorkingTitle');
 document.querySelector('[data-i18n="brandingAttracts"]').textContent = i18next.t('brandingAttracts');
 document.querySelector('[data-i18n="websitesLookGood"]').textContent = i18next.t('websitesLookGood');
 document.querySelector('[data-i18n="cohesiveVisuals"]').textContent = i18next.t('cohesiveVisuals');
 document.querySelector('[data-i18n="getWebsiteTitle"]').textContent = i18next.t('getWebsiteTitle');
 document.querySelector('[data-i18n="point1"]').textContent = i18next.t('point1');
 document.querySelector('[data-i18n="point2"]').textContent = i18next.t('point2');
 document.querySelector('[data-i18n="point3"]').textContent = i18next.t('point3');
 document.querySelector('[data-i18n="point4"]').textContent = i18next.t('point4');
 document.querySelector('[data-i18n="visualIdentity"]').textContent = i18next.t('visualIdentity');
 document.querySelector('[data-i18n="discoverBusiness"]').textContent = i18next.t('discoverBusiness');
 document.querySelector('[data-i18n="aboutText1"]').textContent = i18next.t('aboutText1');
 document.querySelector('[data-i18n="buildTrust"]').textContent = i18next.t('buildTrust');
 document.querySelector('[data-i18n="aboutText2"]').textContent = i18next.t('aboutText2');
 document.querySelector('[data-i18n="connectClients"]').textContent = i18next.t('connectClients');
 document.querySelector('[data-i18n="aboutText3"]').textContent = i18next.t('aboutText3');
 document.querySelector('[data-i18n="viewPackages2"]').textContent = i18next.t('viewPackages2');
 document.querySelector('[data-i18n="meetJen"]').textContent = i18next.t('meetJen');
 document.querySelector('[data-i18n="jenDescription"]').textContent = i18next.t('jenDescription');
 document.querySelector('[data-i18n="milliseconds"]').textContent = i18next.t('milliseconds');
 document.querySelector('[data-i18n="millisecondsDescription"]').textContent = i18next.t('millisecondsDescription');
 document.querySelector('[data-i18n="percent75"]').textContent = i18next.t('percent75');
 document.querySelector('[data-i18n="percent75Description"]').textContent = i18next.t('percent75Description');
 document.querySelector('[data-i18n="percent81"]').textContent = i18next.t('percent81');
 document.querySelector('[data-i18n="percent81Description"]').textContent = i18next.t('percent81Description');
 document.querySelector('[data-i18n="kindWords"]').textContent = i18next.t('kindWords');
 document.querySelector('[data-i18n="testimonial1"]').textContent = i18next.t('testimonial1');
 document.querySelector('[data-i18n="testimonial1Name"]').textContent = i18next.t('testimonial1Name');
 document.querySelector('[data-i18n="testimonial2"]').textContent = i18next.t('testimonial2');
 document.querySelector('[data-i18n="testimonial2Name"]').textContent = i18next.t('testimonial2Name');
}
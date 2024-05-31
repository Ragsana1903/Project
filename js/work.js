let darkMood = document.querySelector(".darkMood");
let body = document.querySelector("body");
let header = document.querySelector("header");
let imgArry = ["../image/img6.jpg", "../image/img7.jpg", "../image/download (1).jpeg"];
let swiper__slide = document.querySelectorAll(".swiper-slide")
let work_first_container_left = document.querySelector(".work_first_container_left")
let work_first_container_leftImg = document.querySelector(".work_first_container_left img")
let work_first_container_right = document.querySelector(".work_first_container_right")
let work_first_container_right_titleH1 = document.querySelector(".work_first_container_right_title h1")
let work_first_container_right_titleP = document.querySelector(".work_first_container_right_title p")
// let work_branding_dreams_title = document.querySelector(".work_branding_dreams_title")
let footer = document.querySelector("footer")
let index = 0;
let flag = true;

darkMood.addEventListener("click", () => {
    if (flag == true) {
        body.style.backgroundColor = "#232323";
        header.style.backgroundColor = "#2B2B2B"
        work_first_container_left.style.backgroundColor = "#2B2B2B"
        swiper__slide.forEach(item => {
            item.style.backgroundColor = "#2B2B2B"
            item.style.color = "white"
        })
        work_first_container_leftImg.style.webkitBoxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
        work_first_container_leftImg.style.mozBoxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
        work_first_container_leftImg.style.boxShadow = '8px 0px 29px 25px rgba(47, 79, 79, 1)';
        work_first_container_right.style.backgroundColor = "rgb(60, 65, 65)"
        work_first_container_right_titleH1.style.boxShadow = "0px 5px 20px 10px darkslategray"
        work_first_container_right_titleH1.style.borderRadius = "20px"
        work_first_container_right_titleH1.style.padding = "25px"
        work_first_container_right_titleH1.style.fontSize = "35px"
        work_first_container_right_titleP.style.boxShadow = "0px 5px 20px 10px darkslategray"
        work_first_container_right_titleP.style.borderRadius = "20px"
        work_first_container_right_titleP.style.padding = "25px"
        // work_branding_dreams_title.style.backgroundColor = "#232323"
        footer.style.backgroundColor = "#2B2B2B"
        flag = false
    } else {
        body.style.backgroundColor = "white";
        header.style.backgroundColor = "darkslategray";
        swiper__slide.forEach(item => {
            item.style.backgroundColor = "white"
            item.style.color = "black"
        })
        work_first_container_left.style.backgroundColor = "rgb(196, 194, 201)"
        work_first_container_leftImg.style.boxShadow = "none"
        work_first_container_right.style.backgroundColor = "rgb(247, 248, 248)"
        work_first_container_right_titleH1.style.boxShadow = "none"
        work_first_container_right_titleH1.style.borderRadius = "0px"
        work_first_container_right_titleH1.style.padding = "0px"
        work_first_container_right_titleH1.style.fontSize = "47px"
        work_first_container_right_titleP.style.boxShadow = "none"
        work_first_container_right_titleP.style.borderRadius = "0px"
        work_first_container_right_titleP.style.padding = "0px"
        // work_branding_dreams_title.style.backgroundColor = "white"
        footer.style.backgroundColor = "darkslategrey"
        flag = true
    }
})


setInterval(function () {
    work_first_container_leftImg.src = imgArry[index];
    index = (index + 1) % imgArry.length;
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
     testimonial1: "\"Jen ilə işləmədən əvvəl 'brendinq'in sadəcə bir loqo və rəng sxemi dizayn etməyi ifadə etdiyini düşünürdüm. O, mənə biznesimin vizyonunu, dəyərlərini və missiyasini formalaşdirmağa kömək etdi. O, super təşkilatli, detallara yönəlmiş və brendinqi necə, nə vaxt və harada istifadə etməklə bağli təlimatlari və izahlari çox aydin idi. Biznesim böyüdükcə Jen ilə işləməyə davam etməyi səbirsizliklə gözləyirəm\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen ilə işləmək inanilmazdir! Jen ilə işləmədən əvvəl yeni bir veb sayt dizayn etmək fikri qorxuducu idi. Mən sürətlə özüm üçün hazirladiğim bir veb saytim var idi və dürüstcə deyim ki, onu kiməsə göstərməyə utanirdim. Jen yenidən brendinq prosesini asan və əyləncəli etdi! O, araşdirdi, strategiya qurdu və rənglərlə dolu, inanilmaz loqolar və göstərməkdən qürur duyduğum veb sayt olan əla brend təlimati hazirladi!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     build:"Hədəf auditoriyaniz üçün xüsusi olaraq hazirlanmiş mənali bir marka yaradin.",
     ideal:"İdeal müştəriniz sizi axtarir. Gəlin onlara biznesinizi tapmağa və əlaqə saxlamağa kömək edək.",
     transformations:"Tam brend dəyişikliklərinə veb sayt dizaynindan bəzi nümunələr.",
     below:"Aşağida bir hissəsi olmaqdan şərəf duyduğum layihələrin kiçik bir nümunəsidir. Hər biri saatlart əks etdirir şəxsiyyəti və məqsədi olan bir marka yetişdirmək üçün iş və strategiya.",
    magic:"Gəlin birlikdə sehr yaradaq.",
    with:"MƏNİMLE İŞLƏ",
    links:"CƏLD LİNKLƏR",
    home2:"Ana sehife",
    services2:"Xidmetler",
    about2:"Haqqinda",
    work2:"Iş",
    contact2:"Əlaqə",
    ready:"BƏZİSİ ÜÇÜN HAZIR KICK-ASS BRENDING?",
    let:"Gəlin birlikdə işləyək!",
    based:"Kelowna və Vancouver, BC-də yerləşir, lakin dünyanin hər yerindən olan müştərilərlə məmnuniyyətlə işləyir.",
    rimshaw:"Copyright © 2023 Grimshaw Graphics. Bütün hüquqlar qorunur.",
    Privacy:"Gizlilik Siyasəti",
    Terms:"Şərtlər və Qaydalar"
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
     testimonial1: "\"Before working with Jen, I thought 'branding' simply meant designing a logo and colour scheme. She helped me flesh out the vision, values, and mission of my business. She is super organized, detail-oriented, and clear in her instructions and explanations for how, when, and where to use the branding. I look forward to continuing to work with Jen as my business grows in the years to come.\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen is amazing to work with! Before working with Jen, the thought of designing a new website was daunting. I had a website I quickly made myself and to be honest, I was embarrassed to show it to anyone. Jen made the re-branding process easy and fun! She researched, strategized and put together an amazing brand guide, complete with brand colors, incredible logos, and a website I'm proud to show off!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     build:"Build a meaningful brand that’s designed specifically for your target audience.",
     ideal:"Your ideal client is out there looking for you. Let’s help them find and connect with your business.",
     transformations:"Here are some examples of website design to full brand transformations.",
     below:"Below is a small sample of projects I feel honoured to have been a part of. Each one represents hours of work and strategy to cultivate a brand with personality and purpose.",
    magic:"Let’s create some magic together.",
    with:"WORK WITH ME",
    links:"QUICK LINKS",
    home:"Home",
    services2:"Services" ,
    about2:"About",
    work2:"Work",
    contact2:"Contact",
    ready:"READY FOR SOME KICK-ASS BRANDING?",
    let:"Let’s work together!",
    based:"Based in Kelowna and Vancouver, BC but happily working with clients from all over the world.",
    rimshaw:"Copyright © 2023 Grimshaw Graphics. All rights reserved.",
    Privacy:"Privacy Policy",
    Terms:"Terms and Conditions",

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
 document.querySelector('[data-i18n="testimonial1"]').textContent = i18next.t('testimonial1');
 document.querySelector('[data-i18n="testimonial1Name"]').textContent = i18next.t('testimonial1Name');
 document.querySelector('[data-i18n="testimonial2"]').textContent = i18next.t('testimonial2');
 document.querySelector('[data-i18n="testimonial2Name"]').textContent = i18next.t('testimonial2Name');
 document.querySelector('[data-i18n="build"]').textContent = i18next.t('build');
 document.querySelector('[data-i18n="ideal"]').textContent = i18next.t('ideal');
 document.querySelector('[data-i18n="below"]').textContent = i18next.t('below');
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
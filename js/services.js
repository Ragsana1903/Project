let darkMood = document.querySelector(".darkMood");
let body = document.querySelector("body");
let header=document.querySelector("header")
let footer=document.querySelector("footer")
let services_first_container_left =document.querySelector(".services_first_container_left")
let services_first_container_right =document.querySelector(".services_first_container_right")
let services_second_container_left =document.querySelector(".services_second_container_left")
let services_second_container_right= document.querySelector(".services_second_container_right")
let services_third_container_left=document.querySelector(".services_third_container_left")
let services_third_container_right=document.querySelector(".services_third_container_right")
let services_fourth_container_left=document.querySelector(".services_fourth_container_left")
let services_fourth_container_right = document.querySelector(".services_fourth_container_right")
let services_fifty_container_left=document.querySelector(".services_fifty_container_left")
let services_fifty_container_right=document.querySelector(".services_fifty_container_right")
let services_sixty_container=document.querySelector(".services_sixty_container")
let services_seventy_container=document.querySelector(".services_seventy_container")
let services_container_work=document.querySelector(".services_container_work")
let questions_box=document.querySelector(".questions_box")
let question__boxs=document.querySelectorAll(".question__boxs")

let imgArry = ["../image/img2.jpg", "../image/img6.jpg", "../image/img7.jpg", "../image/download (1).jpeg"];
let swiper__slide = document.querySelectorAll(".swiper-slide")
let icon = document.querySelectorAll(".ri-arrow-down-wide-fill")
let question_boxs = document.querySelectorAll('.question_boxs')
let index = 0;
let flag = true;
let flag1 = true




darkMood.addEventListener("click", () => {
  if (flag == true) {
   body.style.backgroundColor = "#232323";
   header.style.backgroundColor = "#2B2B2B"
   footer.style.backgroundColor = "#2B2B2B"
   services_first_container_left.style.backgroundColor = "#232323"
   services_first_container_right.style.backgroundColor="#2B2B2B"
   services_second_container_left.style.backgroundColor="#2B2B2B"
   services_second_container_right.style.backgroundColor="#232323"
   services_third_container_left.style.backgroundColor="#2B2B2B"
   services_third_container_right.style.backgroundColor="#232323"
   services_fourth_container_left.style.backgroundColor="#232323"
   services_fourth_container_right.style.backgroundColor="#2B2B2B"
   services_fifty_container_left.style.backgroundColor="#2B2B2B"
   services_fifty_container_right.style.backgroundColor="#2B2B2B"
   services_sixty_container.style.backgroundColor="#232323"
   services_seventy_container.style.backgroundColor="#232323"
   services_container_work.style.backgroundColor="#2B2B2B"
   questions_box.style.backgroundColor="#2B2B2B"
   swiper__slide.forEach(item => {
    item.style.backgroundColor = "#2B2B2B"
    item.style.color = "white"
   })
   flag = false
  } else {
   body.style.backgroundColor = "white";
   header.style.backgroundColor = "darkslategray";
   footer.style.backgroundColor = "darkslategrey";
   services_first_container_left.style.backgroundColor = "rgb(184, 183, 183)"
   services_first_container_right.style.backgroundColor="rgb(247, 248, 248)"
   services_second_container_left.style.backgroundColor="white"
   services_second_container_right.style.backgroundColor="rgb(175, 194, 162)"
   services_third_container_left.style.backgroundColor="rgb(225, 225, 225)"
   services_third_container_right.style.backgroundColor="white"
   services_fourth_container_left.style.backgroundColor="white"
   services_fourth_container_right.style.backgroundColor="rgba(128, 165, 135, 0.709)"
   services_fifty_container_left.style.backgroundColor="rgb(203, 201, 201)"
   services_fifty_container_right.style.backgroundColor="white"
   services_sixty_container.style.backgroundColor="white"
   services_seventy_container.style.backgroundColor="rgb(198, 201, 204)"
   services_container_work.style.backgroundColor="white"
   questions_box.style.backgroundColor="white"
   swiper__slide.forEach(item => {
    item.style.backgroundColor = "white"
    item.style.color = "black"
   })
   flag = true
  }
  
  }
 )






 icon.forEach(item => {
  item.addEventListener("click", () => {
   if (flag1 == true) {
    question__boxs.forEach(box => {
     box.style.display = 'none';
     flag1 = false
    })
   } else {
    question__boxs.forEach(box => {
     box.style.display = 'block';
     flag1 = true
    })
   }
  })
 })


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
     testimonial1: "\"Jen ilə işləmədən əvvəl 'brendinq'in sadəcə bir loqo və rəng sxemi dizayn etməyi ifadə etdiyini düşünürdüm. O, mənə biznesimin vizyonunu, dəyərlərini və missiyasini formalaşdirmağa kömək etdi. O, super təşkilatli, detallara yönəlmiş və brendinqi necə, nə vaxt və harada istifadə etməklə bağli təlimatlari və izahlari çox aydin idi. Biznesim böyüdükcə Jen ilə işləməyə davam etməyi səbirsizliklə gözləyirəm\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen ilə işləmək inanilmazdir! Jen ilə işləmədən əvvəl yeni bir veb sayt dizayn etmək fikri qorxuducu idi. Mən sürətlə özüm üçün hazirladiğim bir veb saytim var idi və dürüstcə deyim ki, onu kiməsə göstərməyə utanirdim. Jen yenidən brendinq prosesini asan və əyləncəli etdi! O, araşdirdi, strategiya qurdu və rənglərlə dolu, inanilmaz loqolar və göstərməkdən qürur duyduğum veb sayt olan əla brend təlimati hazirladi!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     branding:"Biznesinizi növbəti səviyyəyə aparan brendinq, veb dizayn və illüstrasiya paketləri.",
     brand:"Sizin və auditoriyanizin həqiqətən əlaqə saxladiği bir brend və veb sayt yaradaq.",
     the:"Brendinq Paketi",
     package:"Bu paketdə arzu etdiyiniz müştəriləri və müştəriləri cəlb etmək üçün lazim olan hər şey var. Biznesinizin arxasinda duran məqsəd və şəxs parlayarkən siz brend aydinliği, vahid vizuallar, güclü brend səsi əldə edəcəksiniz.",
    Investment:"İnvestisiya: $2500 Vaxt qrafiki: 3-4 həftə",
    READY:"MƏN HAZIRAM!",
    Website:"Veb sayt dizayn paketi",
    create:"Biz xəyal etdiyiniz veb-sayti yaradacağiq ki, bu, təkcə gözəl görünmür, həm də gizlidir. Belə bir sayt təsəvvür edin birbaşa hədəf auditoriyanizla danişir, kim olduğunuzun həqiqi bir uzantisidir və xəyalinizdaki müştəriləri cəlb edir. Buna sahib ola bilərsiniz! Və… həqiqətən özünüz yeniləyə biləcəksiniz ki, layihə qoruyuculari ilə vidalaşa biləsiniz.",
    Timeline:"İnvestisiya: 2300$ Vaxt qrafiki: 2-3 həftə",
    do:"GƏL EDƏK!",
    Web:"Brendinq və Veb Dizayn Paketi",
    vision:"Brendinq və veb sayt dizaynina gəldikdə, hətta haradan başlayacağini itirmiş yeni bir iş sahibisiniz? Biznesinizin və brendinqinizin nəyə bənzədiyi barədə təsəvvürünüz var, lakin onu necə həyata keçirəcəyinizi bilmirsiniz? Əgər belədirsə, bu paket sizin üçündür! Biz sizə güclü bir təməl qurmaqla sifirdan başlayacağiq, səbəbinizi aydinlaşdiracağiq, sizə firlanmani dayandiran bir brend şəxsiyyəti yaradacağiq və insanlarin zəng etmək üçün bütün bunlari bir araya gətirən veb sayt dizayn edəcəyik.",
    savings:"İnvestisiya: $4400 ($400 qənaət!) Vaxt qrafiki: 4-6 həftə",
    this:"BU MƏNİM ÜÇÜN PAKETDİR",
    custom:"Fərdi İllüstrasiya",
    have:"Xüsusi illüstrasiya tələb edən bir layihə üçün bir fikriniz varmi? Əllə çəkilmiş sənət əsərləri biznesinizi fərqləndirmək üçün əla yoldur. Və ya bəlkə kürk körpənizin bir xatirəsini istəyirsiniz? Bəlkə orijinal hədiyyə? İstədiyiniz hər şeyi fərdi üslubda yarada bilərəm.",
    connect:"İnvestisiya: Fərdi layihə təklifi üçün mənimlə əlaqə saxlayin Xronologiya: TBD, çünki bu layihədən asilidir",
    chat:"GƏL SOHBET EDƏK",
    Getting:"Başlamaq asandir.",
    discovery:"Kəşf zəngi",
    fill:"Kəşf zəngi sifariş etmək üçün əlaqə formasini doldurun.",
    During:"Bu zəng zamani biznes hədəfləriniz və xidmətlərimin oraya çatmağiniza necə kömək edə biləcəyi haqqinda danişacağiq.",
    deep:"Dərin daliş çağirişi",
    once:"Bütün detallar siralandiqdan sonra. Prosesdə sizə kömək etmək üçün sizə salamlama bələdçimi göndərəcəyəm və ilk strategiya zəngimizi sifariş edəcəyik. Bu, bütün düşüncələrinizi boşaltmaq üçün əldə etdiyiniz addımdır markanız və veb dizaynınız üçün xəyallar.",
    I:"işə gəlirəm",
    look:"Birinci mərhələdə mən kiçik bir zahid oluram və mən sizin görünüşünüzü, hisslərinizi və məqsədinizi müəyyən etmək üçün araşdırma və ilham üzərində cəmlənirəm. Mən yaratmağa başladığım istiqamətdən razısan!",
    in:"MƏN İÇİNDƏYƏM! GEDƏK",
    Recent:"Son İş",
    view:"bütün işlərə baxın",
    Asked:"Tez-tez soruşulan suallar",
    can:"Nə vaxt başlaya bilərik?",
    book:"Mən adətən bir-iki ay əvvəldən sifariş alıram. Mən ayda yalnız iki müştəri qəbul edirəm, ona görə də mənimlə işləmək barədə düşünürsünüzsə, yerinizi təmin etmək üçün mümkün qədər tez əlaqə saxlamağınız yaxşıdır.",
    much:"Brendinq və veb sayt dizaynı nə qədərdir?",
    offer:"Ödəniş planları təklif edirsiniz?",
    sure:"Mən əminəm! Mən sizin yerinizi tutmaq üçün 40% depozit tələb edirəm, lakin layihənin qalan hissəsi üçün sizinlə ödəniş planı hazırlamaqdan məmnunam.",
    teach:"Mənə veb saytımı necə redaktə etməyi öyrədirsən?",
    heck:"Mənə Heck yes-i necə redaktə etməyi öyrədirsən! Squarespace-də dizayn etməyimin və kodlaşdırmağımın səbəbi onun çox istifadəçi dostu olmasıdır. Mənim məqsədim sizə hər şeyi təkbaşına redaktə etmək imkanı verməkdir. Saytınızı işə saldıqdan sonra biz Squarespace-dən necə istifadə edəcəyinizi, saytınızdakı hər şeyi necə redaktə edəcəyinizi, nəyə toxunmalı olduğunuzu və nəyi etmədiyinizi müzakirə etmək üçün bir saatlıq zəng (və ya daha çox) planlaşdıracağıq və suallarınıza cavab verəcəyik. ola bilər.website?",
    provide:"Veb saytın davamlı texniki xidmətini təmin edirsiniz?",
    goal:"Məqsədim bütün müştərilərimə öz veb-saytlarını və məzmunlarını asanlıqla redaktə etmək imkanı verməkdir ki, siz aylıq ödənişdən azadsınız! Bununla belə, əgər çətinlik çəkirsinizsə və əlavə köməyə ehtiyacınız varsa, səhifələr əlavə etmək və ya yeni məhsul və ya xidmətlərin işə salınmasını istəyirsinizsə, mən həmişə buradayam. Veb sayt redaktələri üçün saatlıq, yarım günlük və tam günlük tariflər təklif edirəm.",
    need:"Bəs brendləşdirməyə və ya vebsayta ehtiyacım yoxdursa? Başqa dizayn işləri ilə məşğul olursunuz?",
    happy:"Kömək etməyə uyğun olub olmadığımı görmək üçün layihəniz haqqında söhbət etməkdən məmnunam. Zəhmət olmasa əlaqə formamı doldurun və mən əlaqə saxlayacağam.",
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
     testimonial1: "\"Before working with Jen, I thought 'branding' simply meant designing a logo and colour scheme. She helped me flesh out the vision, values, and mission of my business. She is super organized, detail-oriented, and clear in her instructions and explanations for how, when, and where to use the branding. I look forward to continuing to work with Jen as my business grows in the years to come.\"",
     testimonial1Name: "--Elana Sures, Open Space Counselling--",
     testimonial2: "\"Jen is amazing to work with! Before working with Jen, the thought of designing a new website was daunting. I had a website I quickly made myself and to be honest, I was embarrassed to show it to anyone. Jen made the re-branding process easy and fun! She researched, strategized and put together an amazing brand guide, complete with brand colors, incredible logos, and a website I'm proud to show off!\"",
     testimonial2Name: "--Jenn Landers, Creo Copywriting--",
     branding:"Branding, web design and illustration packages that take your business to the next level.",
     the:"The Branding Package",
     brand:"Let’s build a brand and website that you and your audience actually connect with.",
     package:"This package has everything you need to attract your dream customers and clients. You’ll get   brand clarity, cohesive visuals, a strong brand voice, all while the purpose and person behind your business get to shine through.",
    Investment:"Investment: $2500 Timeline: 3-4 weeks",
    READY:"I'M READY!",
    Website:"The Website Design Package",
    create:"We’ll create your dream website that not only looks good but also coverts. Imagine a site that speaks directly to your target audience, is an authentic extension of who you are, and attracts your dream clients. You can have that! And… you’ll actually be able to update on your own so you  can wave goodbye to project retainers.",
    Timeline:"Investment: $2300 Timeline: 2-3 weeks",
    do:"LET'S DO IT!",
    Web:"The Branding and Web Design Package",
    vision:"Are you a new business owner that feels lost at where to even start when it comes to branding and website design? Do you have a vision of what your business and branding look like but don’t know how to bring it to life? If so, this package is for you! We’ll start from scratch by building you a strong foundation, we’ll get clarity on your why, build you a scroll-stopping brand identity,  and design a website that pulls all of that together to <i>call in your people",
    savings:"Investment: $4400 ($400 savings!) Timeline: 4-6 week",
    this:"THIS THE PACKAGE FOR ME",
    custom:"Custom Illustration",
    have:"Have an idea that for a project that requires custom illustration? Hand-drawn artwork is a great way to help your business stand out. Or maybe you want a keep sake of your fur baby? Perhaps an original gift? I can create whatever  you’d like in a personalized style.",
    connect:"Investment: Connect with me for a custom project quote  Timeline: TBD as it depends on the project",
    chat:"LET'S CHAT",
    Getting:"Getting started is easy.",
    discovery:"Discovery call",
    fill:"Fill out the contact form to book a discovery call.",
    During:"During this call we’ll talk about your business goals and how my services can help you get there.",
    deep:"Deep dive call",
    once:"Once all the details are sorted. I’ll send you my welcome guide to help you through the process and we’ll book our first strategy call. This is the step you get to unload all your thoughts and dreams for your brand and web design.",
    I:"I get to work",
    look:"During the first phase, I become a little hermit and I focus on research and inspiration to nail down your look, feel, and purpose. When you’re happy with the direction I start creating! ",
    in:"I'M IN! LET'S GO",
    Recent:"Recent Work",
    view:"view all work",
    Asked:"Frequently Asked Questions",
    can:"When can we get started?",
    book:"I am typically booked out about one-two months in advance. I only take on two clients per month so if you have been thinking about working with me it is best to reach out as soon as possible to secure your spot.",
    much:'How much does branding and website design cost?',
    offer:"Do you offer payment plans?",
    sure:"I sure do! I do require a 40% deposit to hold your spot but I am happy to work out a payment plan with you for the remainder of the project.",
    teach:"Do you teach me how to edit my website?",
    heck:"Heck yes! The reason I design and code in Squarespace is because it is so user-friendly. My goal is to empower you to be able to edit everything on your own. Once we launch your site, we will schedule an hour long call (or so) to go over how to use Squarespace, how to edit everything on your site, what you need to touch and what you don’t and ask answer any questions you might have.",
    provide:"Do you provide ongoing website maintenance?",
    goal:"My goal is to empower all of my clients with the ability to edit their website and content easily, on their own, so that you are free of the monthly retainer! However, if you are in a bind and need some extra help, want to add pages or have new products or services launching, I am always here. I do offer hourly, half-day and full-day rates for website edits.",
    need:"What if I don't need branding or a website. Do you take on other design work?",
    happy:"II happy to chat about your project to see if I am a fit to help. Please fill out my contact form and I will get in touch.",
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
  document.querySelector('[data-i18n="testimonial1"]').textContent = i18next.t('testimonial1');
  document.querySelector('[data-i18n="testimonial1Name"]').textContent = i18next.t('testimonial1Name');
  document.querySelector('[data-i18n="testimonial2"]').textContent = i18next.t('testimonial2');
  document.querySelector('[data-i18n="testimonial2Name"]').textContent = i18next.t('testimonial2Name');
  document.querySelector('[data-i18n="branding"]').textContent = i18next.t('branding');
  document.querySelector('[data-i18n="the"]').textContent = i18next.t('the');
  document.querySelector('[data-i18n="brand"]').textContent = i18next.t('brand');
  document.querySelector('[data-i18n="package"]').textContent = i18next.t('package');
  document.querySelector('[data-i18n="Investment"]').textContent = i18next.t('Investment');
  document.querySelector('[data-i18n="READY"]').textContent = i18next.t('READY');
  document.querySelector('[data-i18n="Website"]').textContent = i18next.t('Website');
  document.querySelector('[data-i18n="create"]').textContent = i18next.t('create');
  document.querySelector('[data-i18n="Timeline"]').textContent = i18next.t('Timeline');
  document.querySelector('[data-i18n="do"]').textContent = i18next.t('do');
  document.querySelector('[data-i18n="Web"]').textContent = i18next.t('Web');
  document.querySelector('[data-i18n="vision"]').textContent = i18next.t('vision');
  document.querySelector('[data-i18n="savings"]').textContent = i18next.t('savings');
  document.querySelector('[data-i18n="this"]').textContent = i18next.t('this');
  document.querySelector('[data-i18n="custom"]').textContent = i18next.t('custom');
  document.querySelector('[data-i18n="have"]').textContent = i18next.t('have');
  document.querySelector('[data-i18n="connect"]').textContent = i18next.t('connect');
  document.querySelector('[data-i18n="chat"]').textContent = i18next.t('chat');
  document.querySelector('[data-i18n="Getting"]').textContent = i18next.t('Getting');
  document.querySelector('[data-i18n="discovery"]').textContent = i18next.t('discovery');
  document.querySelector('[data-i18n="fill"]').textContent = i18next.t('fill');
  document.querySelector('[data-i18n="During"]').textContent = i18next.t('During');
  document.querySelector('[data-i18n="deep"]').textContent = i18next.t('deep');
  document.querySelector('[data-i18n="once"]').textContent = i18next.t('once');
  document.querySelector('[data-i18n="I"]').textContent = i18next.t('I');
  document.querySelector('[data-i18n="look"]').textContent = i18next.t('look');
  document.querySelector('[data-i18n="in"]').textContent = i18next.t('in');
  document.querySelector('[data-i18n="Recent"]').textContent = i18next.t('Recent');
  document.querySelector('[data-i18n="view"]').textContent = i18next.t('view');
  document.querySelector('[data-i18n="Asked"]').textContent = i18next.t('Asked');
  document.querySelector('[data-i18n="can"]').textContent = i18next.t('can');
  document.querySelector('[data-i18n="book"]').textContent = i18next.t('book');
  document.querySelector('[data-i18n="much"]').textContent = i18next.t('much');
  document.querySelector('[data-i18n="offer"]').textContent = i18next.t('offer');
  document.querySelector('[data-i18n="sure"]').textContent = i18next.t('sure');
  document.querySelector('[data-i18n="teach"]').textContent = i18next.t('teach');
  document.querySelector('[data-i18n="heck"]').textContent = i18next.t('heck');
  document.querySelector('[data-i18n="provide"]').textContent = i18next.t('provide');
  document.querySelector('[data-i18n="goal"]').textContent = i18next.t('goal');
  document.querySelector('[data-i18n="need"]').textContent = i18next.t('need');
  document.querySelector('[data-i18n="happy"]').textContent = i18next.t('happy');
  document.querySelector('[data-i18n="magic"]').textContent = i18next.t('magic');
  document.querySelector('[data-i18n="with"]').textContent = i18next.t('with');
  document.querySelector('[data-i18n="links"]').textContent = i18next.t('links');
  document.querySelector('[data-i18n="home"]').textContent = i18next.t('home');
  document.querySelector('[data-i18n="services"]').textContent = i18next.t('services');
  document.querySelector('[data-i18n="about"]').textContent = i18next.t('about');
  document.querySelector('[data-i18n="work"]').textContent = i18next.t('work');
  document.querySelector('[data-i18n="contact"]').textContent = i18next.t('contact');
  document.querySelector('[data-i18n="ready"]').textContent = i18next.t('ready');
  document.querySelector('[data-i18n="let"]').textContent = i18next.t('let');
  document.querySelector('[data-i18n="based"]').textContent = i18next.t('based');
  document.querySelector('[data-i18n="rimshaw"]').textContent = i18next.t('rimshaw');
  document.querySelector('[data-i18n="Privacy"]').textContent = i18next.t('Privacy');
  document.querySelector('[data-i18n="Terms"]').textContent = i18next.t('Terms');
 }
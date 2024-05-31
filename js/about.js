
let darkMood = document.querySelector(".darkMood");
let body = document.querySelector("body");
let main_about_title_left = document.querySelector(".main_about_title_left")
let main_about_title_right = document.querySelector(".main_about_title_right")
let container_vision_title = document.querySelector(".container_vision_title")
let hi_there_left = document.querySelector(".hi_there_left")
let hi_there_right = document.querySelector(".hi_there_right")
let what_i_believe_in_left = document.querySelector(".what_i_believe_in_left")
let what_i_believe_in_right = document.querySelector(".what_i_believe_in_right")
let get_to_now_me_left = document.querySelector(".get_to_now_me_left")
let get_to_now_me_right = document.querySelector(".get_to_now_me_right")
let header = document.querySelector("header");
let swiper__slide = document.querySelectorAll(".swiper-slide")
let webSiteArry = ["https://images.squarespace-cdn.com/content/v1/616e0744511e9f0d8db6a8a2/1635979490163-N9B1XPQQ2XS9H39P0ZOW/Vancouver-Naturopathic-Clinic-Branding.jpg", "../image/slide7-1-7.webp", "https://images.squarespace-cdn.com/content/v1/616e0744511e9f0d8db6a8a2/1687904349423-AR81WROYGWYTQ1M3TAVX/Grimshaw-Graphics-Elegantly-Executed-Events-Website-Design-Kelowna-BC.jpg?format=500w"]
let footer = document.querySelector("footer")
let index = 0;
let indexOne = 0
let flag = true;

darkMood.addEventListener("click", () => {
    if (flag == true) {
     swiper__slide.forEach(item => {
      item.style.backgroundColor = "#2B2B2B"
      item.style.color = "white"
     })
     body.style.backgroundColor = "#232323";
     header.style.backgroundColor="#2B2B2B"
     main_about_title_left.style.backgroundColor="#232323"
     main_about_title_right.style.backgroundColor="#2B2B2B"
     // container_vision_title.style.backgroundColor="#232323"
     hi_there_left.style.backgroundColor="#2B2B2B"
     hi_there_right.style.backgroundColor="#232323"
     what_i_believe_in_left.style.backgroundColor="#2B2B2B"
     what_i_believe_in_right.style.backgroundColor="#232323"
     get_to_now_me_left.style.backgroundColor="#2B2B2B"
     get_to_now_me_right.style.backgroundColor="#232323"
     footer.style.backgroundColor = "#2B2B2B"
     flag = false
    } else {
     swiper__slide.forEach(item => {
      item.style.backgroundColor = "white"
      item.style.color = "black"
     })
     body.style.backgroundColor = "white";
     header.style.backgroundColor = "darkslategray";
     main_about_title_left.style.backgroundColor="whitesmoke"
     main_about_title_right.style.backgroundColor="rgb(211, 211, 211)"
     // container_vision_title.style.backgroundColor="white"
     hi_there_left.style.backgroundColor="rgb(116, 137, 116)"
     hi_there_right.style.backgroundColor="white"
     what_i_believe_in_left.style.backgroundColor="white"
     what_i_believe_in_right.style.backgroundColor="gainsboro"
     get_to_now_me_left.style.backgroundColor="rgb(148, 181, 171)"
     get_to_now_me_right.style.backgroundColor="rgb(215, 224, 221)"
     footer.style.backgroundColor = "darkslategrey"
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
                    mission: "Mənim missiyam ürəkdən və məqsədyönlü dizayn vasitəsilə sağlamlıq və sağlamlıq brendlərini həyata keçirməkdir.",
                    accessible: "Etdikləri işin arxasında daha böyük səbəbi olan bütün ehtiraslı, qadın rəhbərlik etdiyi bizneslər üçün əlçatan brendinq və vebsayt dizaynı yaratmaq. Bu dünyada böyük təsir göstərən sağlamlıq və sağlamlıq brendlərinə, məsləhətçilərə və terapevtlərə diqqət yetirmək.",
                    hi: "salam!",
                    designer: "Mən Jen Grimshaw, biznesinizi inkişaf etdirməyə kömək etmək üçün brend strategiyasından istifadə etməyə sadiq olan brendinq və veb-dizaynerəm. İllər boyu korporativ dünyada aparıcı dizayn komandaları mənə dizaynın arxasına strategiya qoymağın vacibliyini öyrətdi. Vaxtınızı və resurslarınızı gelgitlərdən daha sürətli dəyişən dizayn meyllərinə sərf etməyin mənası yoxdur. Yaratdığım dizaynların zamanın sınağına tab gətirməsini təmin edərkən, görmə qabiliyyətinizi həyata keçirməyə kömək edirəm.",
                    learn: "DAHA ÇOX ÖYRƏN",
                    what: "Nəyə inanıram",
                    kindness: "Xeyirxahlıq – Mən həmişə xeyirxahlığı hər şeydən üstün tutacağam.",
                    impact: "Təsir – Mən cəmiyyət daxilində və daha böyük fayda üçün təsir etməyə çalışıram insanların sağlamlığı, rifahı və planet.",
                    health: "Sağlamlıq və Sağlamlıq – Mən sağlamlıq və sağlamlığa diqqət yetirən müştərilərlə işləyirəm, çünki bu, həyatımın böyük və vacib bir hissəsini oynayır.",
                    fun: "Birgə Əyləncə - Gəlin birlikdə yaradıcılıqla əylənək! İnanıram ki, layihələr və görüşlər o qədər də ciddi olmamalıdır. Yaradıcı əməkdaşlıq həqiqətən əyləncəli ola bilər. Əgər mənimlə işləyirsənsə, hər görüşə tam özünü göstərməkdən çəkinməyin, bu sizi və biznesinizi parlaq edir.",
                    stir: "Stir the Soul: Mən həmişə ürəyimi və ruhumu yaratdığım hər şeyə tökəcəyəm. Mən təhsilə dollar sərmayə qoymağa davam edərək, içimdəki yanğını alovlandıran və yaradıcı tərəfimi canlı saxlayan bacarıqlar əldə etməyimə imkan verirəm.",
                    get: "Məni tanıyın",
                    love: "Mən səyahət etməyi tamamilə sevirəm. 20 yaşımın əvvəlində mən bütün əşyalarımı satdım və kürək çantamla dünyanı gəzmək üçün bir il yarım vaxt sərf etdim... və indi təsəvvür etdiyiniz kimi deyil. Bu müddət ərzində mən inanılmaz dərəcədə mehriban insanlarla tanış oldum və bəzilərini inanılmaz dərəcədə görə bildimgözəl yerlər. Mən özüm, ümumiyyətlə həyat və əslində nəyin vacib olduğu haqqında çox şey öyrəndim günün sonu. Bu, mənim indi kim olduğumu və hər gün necə yaşadığımı formalaşdırdı. Beləliklə, paylaşmaq üçün hər hansı gözəl yerləriniz varsa, mən həmişə növbəti ziyarət yeri ilə bağlı söhbətə hazıram!",
                    license: "Motosiklet vəsiqəm var. Həmişə minmək üçün dostlar axtarıram, əgər bu sənsənsə, məni vur! (Gəlin real olaq, bu, əsasən geyinməyimiz üçün gözəl gödəkçələr hazırlamağım üçündür.)",
                    dog: "Mənim Nalə adlı xilasedici itim var. O, böyük qulaqları olan Tayvandan olan Formosan dağ itidir. O, mənim ən böyük ofis köməkçimdir.",
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
                    mission: "My mission is to bring health and wellness brands to life through heartfelt and purposeful design.",
                    accessible: "To create accessible branding and website design for all passionate, female-led businesses that have a greater cause behind what they do. To focus on health and wellness brands, counsellors and therapists who make a large impact in this world.",
                    hi: "Hi there!",
                    designer: "I’m Jen Grimshaw, a branding and web designer committed to using brand strategy to help you grow your business. My years leading design teams in the corporate world taught me the importance of putting strategy behind design. There’s no point investing your time and resources on designs  trends that change faster than the tides. I help bring your vision to life while ensuring the designs I create will stand the test of time.",
                    learn: "LEARN MORE",
                    what: "What I believe in",
                    kindness: "Kindness – I will always put kindness above everything else.",
                    impact: "Impact – I strive to make an impact within the community and for the greater good of people’s  health, wellness and the planet.",
                    health: "Health and Wellness – I work with clients that have a focus on health and wellness as it plays a huge and important part of my life.",
                    fun: "Collaborative Fun – Lets have fun creating together! I believe that projects and meetings don’t  have to be so serious. Creative collaboration can <i>actually</i> feel fun. If you’re working with me,   don’t shy away from bringing your full self to each meeting, that’s what makes you and your  business shine.",
                    stir: "Stir the Soul: I will always pour my heart and soul into everything I create. I continue to invest dollars into education, allowing me to gain skills that ignite the fire within me and keep my creative side alive.",
                    get: "Get to know me",
                    love: "I absolutely love to travel. In my early 20’s I sold all of my belongings and took a year and a half to backpack around the world… and not in the glamorous way you’re imagining right now. During this time I was able to meet some incredibly kind people and see some unbelievably beautiful places. I learned so much about myself, life in general, and what really matters at the end of the day. It shaped who I am now and how I live each day. So if you have any amazing places to share, I’m always up for a chat on where to visit next!",
                    license: "I have my motorcycle license. I’m always searching for pals to ride with so hit me up if that’s you! (Let’s be real, it’s mostly so that I can design cool jackets for us to wear.)",
                    dog: "I have a rescue dog named Nala. She’s a Formosan Mountain Dog from Taiwan with big ol’ ears.  She’s my biggest office helper.",
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
    document.querySelector('[data-i18n="mission"]').textContent = i18next.t('mission');
    document.querySelector('[data-i18n="magic"]').textContent = i18next.t('magic');
    document.querySelector('[data-i18n="hi"]').textContent = i18next.t('hi');
    document.querySelector('[data-i18n="designer"]').textContent = i18next.t('designer');
    document.querySelector('[data-i18n="learn"]').textContent = i18next.t('learn');
    document.querySelector('[data-i18n="what"]').textContent = i18next.t('what');
    document.querySelector('[data-i18n="kindness"]').textContent = i18next.t('kindness');
    document.querySelector('[data-i18n="impact"]').textContent = i18next.t('impact');
    document.querySelector('[data-i18n="health"]').textContent = i18next.t('health');
    document.querySelector('[data-i18n="fun"]').textContent = i18next.t('fun');
    document.querySelector('[data-i18n="stir"]').textContent = i18next.t('stir');
    document.querySelector('[data-i18n="get"]').textContent = i18next.t('get');
    document.querySelector('[data-i18n="love"]').textContent = i18next.t('love');
    document.querySelector('[data-i18n="license"]').textContent = i18next.t('license');
    document.querySelector('[data-i18n="dog"]').textContent = i18next.t('dog');
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
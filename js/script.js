var aboutSection = document.getElementById("about");
var counters = aboutSection.querySelectorAll('.box h3');

function updateCounters() {
    // حساب عدد البكسلات التي تم التمرير إليها من أعلى الصفحة
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var sectionPosition = aboutSection.offsetTop;

    // إذا تم التمرير إلى الجزء العلوي من القسم "about"
    if (scrollPosition >= sectionPosition) {
        // لكل عنصر h3، قم بتحديث العدد تدريجيًا بزيادة واحدة كل 50 مللي ثانية
        counters.forEach(function(counter) {
            var targetCount = parseInt(counter.innerText);
            var currentCount = 0;
            var increment = Math.ceil(targetCount / 300); // تغيير هذه القيمة لضبط سرعة العداد

            // تحديث العداد بشكل تدريجي
            var interval = setInterval(function() {
                currentCount += increment;
                counter.innerText = currentCount;
                if (currentCount >= targetCount) {
                    clearInterval(interval);
                    counter.innerText = targetCount;
                }
            }, 2000 / targetCount);
        });

        // بمجرد الانتهاء من تحديث العدادات، يمكن إيقاف الاستماع لتمرير الصفحة
        window.removeEventListener('scroll', updateCounters);
    }
}

// استمع لحدث التمرير عندما يتم تمرير الصفحة
window.addEventListener('scroll', updateCounters);

// تحديث العدادات مرة عند تحميل الصفحة في حال كان القسم "about" في عرض النافذة بالفعل
updateCounters();

var swiper = new Swiper('.home-slider', {
    loop: true,
    autoplay: {
        delay: 4000, // تعديل الفاصل الزمني هنا بالمللي ثانية
        disableOnInteraction: false,
    },
});

let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};
document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};
document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
    
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper (".home-slider", {
    loop:true,
    grabCursor:true,
});

var swiper = new Swiper (".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,   
        },
        991: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper (".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,   
        },
        991: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper (".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
        slidesPerView: 2,
        },
        640: {
        slidesPerView: 3,
        },
        768: {
        slidesPerView: 4,   
        },
        1000: {
        slidesPerView: 5,
        },
    },
});


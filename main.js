const img = document.querySelector('.page .row .col img');
const section = document.querySelector('.page');

window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const scrollY = window.scrollY + window.innerHeight;

    // نسبة التمرير داخل السكشن
    let progress = (scrollY - sectionTop) / sectionHeight;

    // نخليها بين 0 و 1
    progress = Math.max(0, Math.min(progress, 1));

    let scale = 0.8 + progress * 0.6;   // من 0.8 لـ 1.4
    let translateY = (1 - progress) * 40;
    let opacity = progress;
    let blur = (1 - progress) * 8;

    img.style.transform = `translateY(${translateY}px) scale(${scale})`;
    img.style.opacity = opacity;
    img.style.filter = `blur(${blur}px)`;
});
const imgContainer = document.querySelector('.page .row .col .img1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imgContainer.classList.add('active'); // يضيف الكلاس ليظهر الصورة ويكبرها
        }
    });
}, {
    threshold: 0.2 // تشتغل أول ما 20% من الصورة تدخل الشاشة وأنت نازل
});

if (imgContainer) {
    observer.observe(imgContainer);
}
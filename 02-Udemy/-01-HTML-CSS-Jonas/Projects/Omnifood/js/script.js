console.log("Hello, world")

const myName = 'Amr Khalid';
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);
// h1.textContent = myName;

// =============================== Set current year ============================ //

const year = document.querySelector('.year');
const myCurrentYear = new Date().getFullYear();
year.textContent = myCurrentYear;

// ============================================================================== //


// ========================== Smooth Scrolling Animation ======================== //

const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);

        //  Scroll back to top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth",
        })

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"})
        }

        //  Close mobile navigation
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

// ======================== Make mobile navigation works ======================== //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

headerEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open")
})

// ============================================================================== //


// ============================== Sticky navigation ============================= //

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

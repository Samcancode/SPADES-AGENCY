AMCANCODE DROP-DOWN MENU
   ========================================= */

const menuTrigger = document.getElementById("menu-trigger");
const siteMenu = document.getElementById("site-menu");

if (menuTrigger && siteMenu) {

    menuTrigger.addEventListener("click", function () {

        const isOpen = siteMenu.classList.toggle("is-open");

        menuTrigger.setAttribute(
            "aria-expanded",
            isOpen
        );

        siteMenu.setAttribute(
            "aria-hidden",
            !isOpen
        );

        menuTrigger.textContent = isOpen
            ? "[Close]"
            : "[Menu]";

    });


    const menuLinks = siteMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            siteMenu.classList.remove("is-open");

            menuTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

            siteMenu.setAttribute(
                "aria-hidden",
                "true"
            );

            menuTrigger.textContent = "[Menu]";

        });

    });

}
   FOOD MOTO CAROUSEL
   ========================================= */

const foodMotoCarousel = document.getElementById(
    "food-moto-carousel"
);

if (foodMotoCarousel) {

    const slides = foodMotoCarousel.querySelectorAll(
        ".carousel-slide"
    );

    const dots = foodMotoCarousel.querySelectorAll(
        ".carousel-dot"
    );

    const counter = document.getElementById(
        "food-moto-current"
    );

    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;


    function showFoodMotoSlide(index) {

        currentSlide = index;


        slides.forEach(function (slide, slideIndex) {

            if (slideIndex === currentSlide) {

                slide.classList.add("active");

            } else {

                slide.classList.remove("active");

            }

        });


        dots.forEach(function (dot, dotIndex) {

            if (dotIndex === currentSlide) {

                dot.classList.add("active");

            } else {

                dot.classList.remove("active");

            }

        });


        counter.textContent = currentSlide + 1;

    }


    function nextFoodMotoSlide() {

        if (currentSlide < slides.length - 1) {

            showFoodMotoSlide(currentSlide + 1);

        } else {

            showFoodMotoSlide(0);

        }

    }


    function previousFoodMotoSlide() {

        if (currentSlide > 0) {

            showFoodMotoSlide(currentSlide - 1);

        } else {

            showFoodMotoSlide(slides.length - 1);

        }

    }


    dots.forEach(function (dot) {

        dot.addEventListener("click", function () {

            const slideNumber = Number(
                dot.getAttribute("data-slide")
            );

            showFoodMotoSlide(slideNumber);

        });

    });


    foodMotoCarousel.addEventListener(
        "touchstart",
        function (event) {

            touchStartX = event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    foodMotoCarousel.addEventListener(
        "touchend",
        function (event) {

            touchEndX = event.changedTouches[0].clientX;

            const swipeDistance =
                touchStartX - touchEndX;


            if (swipeDistance > 50) {

                nextFoodMotoSlide();

            }


            if (swipeDistance < -50) {

                previousFoodMotoSlide();

            }

        },
        {
            passive: true
        }
    );


    showFoodMotoSlide(0);

}

//navbar
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add("bg-white", "shadow-md");
                navbar.classList.remove("bg-transparent");

                navbar.querySelectorAll("a, button, i").forEach(el => {
                    el.classList.add("text-black");
                    el.classList.remove("text-white");
                });

            } else {
                navbar.classList.remove("bg-white", "shadow-md");
                navbar.classList.add("bg-transparent");

                navbar.querySelectorAll("a, button, i").forEach(el => {
                    el.classList.remove("text-black");
                    el.classList.add("text-white");
                });
            }
        });
    },
    { threshold: 0.1 }
);

observer.observe(hero);

// swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});


//scroll divs 
gsap.registerPlugin(ScrollTrigger);
let currentAnim;
function runScroll(el) {

    if (currentAnim) {
        currentAnim.scrollTrigger.kill();
        currentAnim.kill();
    }

    currentAnim = gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-main",
            start: "top 13%",
            end: () => "10+=" + el.scrollWidth,
            scrub: 2,
            pin: true
        }
    });
}

const firstSection = document.querySelector("#bags");
runScroll(firstSection);



const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => {
            b.classList.remove("bg-black", "text-white");
            b.classList.add("bg-gray-300");
        });

        btn.classList.add("bg-black", "text-white");
        btn.classList.remove("bg-gray-300");

        sections.forEach(sec => {
            sec.classList.add("opacity-0", "pointer-events-none", "absolute");
            sec.classList.remove("opacity-100", "relative");
        });

        const target = document.getElementById(btn.dataset.target);

        target.classList.remove("opacity-0", "pointer-events-none", "absolute");
        target.classList.add("opacity-100", "relative");

        setTimeout(() => {
            ScrollTrigger.refresh();
            runScroll(target);
        }, 100);

    });
});




//last image cursror
const mainsec = document.querySelector(".main-sec");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");
const btn = document.querySelector(".btn.x")
mainsec.addEventListener("mouseenter", function () {
    cursor.classList.add("block");
});
mainsec.addEventListener("mouseleave", function () {
    cursor.classList.remove("block");
});

mainsec.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x - 15,
        y: dets.y - 10,
        duration: 0.5,
        scrub: 5

    });
})


//last image text 
gsap.from(".image .h2x ,.ptx, .btx_image", {
    opacity: 0,
    duration: 1,
    y: 40,
    scrollTrigger: {
        trigger: ".image h2",
        scroller: "body",
        start: "top 65%",
        end: "top 50%",
        scrub: 2,
    }
})


//header btns

const menu = document.getElementById("megaMenu");
const content = document.getElementById("megaContent");

let timeout;
const data = {
    women: `
      <div class="flex gap-20">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">READY TO WEAR</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">Dresses & skirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">tops & shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">t-shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-bold mb-4">accessories</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">bags</li>
           </ul>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="images/DSCF0542.jpg" class="rounded-lg h-[500px]">
        <img src="images/DSCF0261.jpg" class="rounded-lg h-[500px]">
      </div>
    `,

    men: `
      <div class="flex gap-20">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">READY TO WEAR</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-semibold mb-4">polepole collection</h2>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="images/DSCF0138_81e04729-7517-4d9c-afca-3c4950e83562.jpg" class="rounded-lg h-[500px]">
        <img src="images/DSCF0620.jpg" class="rounded-lg h-[500px]">
      </div>
    `,

    life: `
     <div class="flex gap-20">
        <div  class="flex flex-row gap-20">
          
          <div>
          <h2 class="font-semibold mb-4">H&M x NEIMIL</h2>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">coats & jackets</li>
             <li class="uppercase text-md hover-underline cursor-pointer">trousers & shorts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">shirts</li>
             <li class="uppercase text-md hover-underline cursor-pointer">suits</li>
           </ul>
          </div>
          <div>
           <h2 class="uppercase font-semibold mb-4">polepole collection</h2>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="images/download.webp" class="rounded-lg h-[500px]">
        <img src="images/download.webp" class="rounded-lg h-[500px]">
      </div>
    `,

    col: `
      <div class="flex gap-20">
        <div  class="flex flex-row gap-20">
          
          <div>
           <ul class="space-y-3 text-sm flex flex-col gap-2">
             <li class="uppercase text-md hover-underline cursor-pointer">polepole</li>
             <li class="uppercase text-md hover-underline cursor-pointer">leeto</li>
           </ul>
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <img src="images/DSCF0138_81e04729-7517-4d9c-afca-3c4950e83562.jpg" class="rounded-lg h-[500px]">
        <img src="images/DSCF0261.jpg" class="rounded-lg h-[500px]">
      </div>
    `
};

function showMenu(type) {
    clearTimeout(timeout);
    content.innerHTML = data[type];

    menu.classList.remove("opacity-0", "invisible");
    menu.classList.add("opacity-100", "visible");
}

function hideMenu() {
    timeout = setTimeout(() => {
        if (!menu.matches(':hover')) {
            menu.classList.add("opacity-0", "invisible");
            menu.classList.remove("opacity-100", "visible");
        }
    }, 200);
}
document.getElementById("womenTrigger").addEventListener("mouseenter", () => showMenu("women"));
document.getElementById("menTrigger").addEventListener("mouseenter", () => showMenu("men"));
document.getElementById("lifeTrigger").addEventListener("mouseenter", () => showMenu("life"));
document.getElementById("colTrigger").addEventListener("mouseenter", () => showMenu("col"));

document.querySelectorAll(".menu-trigger").forEach(el => {
    el.addEventListener("mouseleave", hideMenu);
});

menu.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
});

menu.addEventListener("mouseleave", () => {
    menu.classList.add("opacity-0", "invisible");
    menu.classList.remove("opacity-100", "visible");
});

//add btn 
const drawer = document.getElementById("drawer-country");
const closeBtn = document.getElementById("closeDrawer");
const countryBtn = document.getElementById("countryBtn");

const title = document.getElementById("dTitle");
const price = document.getElementById("dPrice");
const img1 = document.getElementById("dImg1");
const img2 = document.getElementById("dImg2");
const color = document.getElementById("dColor");

const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");

countryBtn.addEventListener("click", () => {
    drawer.classList.remove("translate-x-full");
});

document.querySelectorAll(".quickViewBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {

        const product = e.currentTarget.closest(".product");
        if (!product) return;

        title.innerText = product.dataset.title;
        price.innerText = product.dataset.price;
        img1.src = product.dataset.img1;
        img2.src = product.dataset.img2;
        color.style.background = product.dataset.color;

        drawer.dataset.title = product.dataset.title;
        drawer.dataset.price = product.dataset.price;
        drawer.dataset.img = product.dataset.img1;

        drawer.classList.remove("translate-x-full");
    });
});

closeBtn.addEventListener("click", () => {
    drawer.classList.add("translate-x-full");
});

addToCartBtn.addEventListener("click", () => {
    const product = {
        title: drawer.dataset.title,
        price: drawer.dataset.price,
        img: drawer.dataset.img
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.title + " added to cart ✅");
});

buyNowBtn.addEventListener("click", () => {
    const product = {
        title: drawer.dataset.title,
        price: drawer.dataset.price,
        img: drawer.dataset.img
    };

    console.log("Buying:", product);

    window.location.href = "/checkout.html";
});


//scroll button

const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
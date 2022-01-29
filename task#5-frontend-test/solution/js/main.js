const cloud01 = document.querySelector(".cloud01");
const cloud02 = document.querySelector(".cloud02");
const cloud03 = document.querySelector(".cloud03");
const cloud04 = document.querySelector(".cloud04");
const cloud05 = document.querySelector(".cloud05");
const cloud06 = document.querySelector(".cloud06");

const people01 = document.querySelector(".people01");
const people02 = document.querySelector(".people02");
const people03 = document.querySelector(".people03");
const people04 = document.querySelector(".people04");
const people05 = document.querySelector(".people05");

const house01 = document.querySelector(".house01");
const house02 = document.querySelector(".house02");

const tree01 = document.querySelector(".tree01");
const tree02 = document.querySelector(".tree02");

const sea = document.querySelector(".sea");
const mountains = document.querySelector(".mountains");

window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    const extraVal = scrolled * 0.2;

    cloud01.style.transform = `translate(${-0.15 * val}%)`;
    cloud02.style.transform = `translate(${-0.15 * val}%)`;
    cloud03.style.transform = `translate(${-0.15 * val}%)`;
    cloud04.style.transform = `translate(${-0.15 * val}%)`;
    cloud05.style.transform = `translate(${-0.15 * val}%)`;
    cloud06.style.transform = `translate(${-0.15 * val}%)`;

    people01.style.transform = `translateY(${0.12 * extraVal}%)`;
    people02.style.transform = `translateY(${0.02 * extraVal}%)`;
    people03.style.transform = `translate(${0.25 * val}%)`;
    people04.style.transform = `translateY(${0.04 * extraVal}%)`;
    people05.style.transform = `translateY(${0.15 * extraVal}%)`;

    sea.style.transform = `translateY(${-0.04 * val}%)`;
    mountains.style.transform = `rotateX(${0.2 * val}deg)`;

    people01.style.transform = `rotateX(${0.2 * val}deg)`;
    people02.style.transform = `rotateX(${0.2 * val}deg)`;
    people04.style.transform = `rotateX(${0.2 * val}deg)`;
    people05.style.transform = `rotateX(${0.2 * val}deg)`;

    house01.style.transform = `rotateX(${0.2 * val}deg)`;
    house02.style.transform = `rotateX(${0.2 * val}deg)`;

    tree01.style.transform = `rotateX(${0.1 * val}deg)`;
    tree02.style.transform = `rotateX(${0.1 * val}deg)`;

    // let scrollTop = document.documentElement.scrollTop;
    // document.querySelector(".back__side-cover").style.width = 100 + scrollTop / 5 + '%';
});

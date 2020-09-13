// delaration function  
function getId(id) {
    return document.querySelector(id);
}


function handleMenu() {
    let menu = getId('#menu-nav');
    let over = getId('#over-dark');
    menu.classList.add("active-menu");

    setTimeout(() => {
        over.classList.add("active-bg");

    }, 150)
}
// header 
function handleOver() {
    getId("#menu-nav").classList.remove("active-menu");
    getId('#over-dark').classList.remove("active-bg");
    getId('#menu-list').classList.remove("active-list");

}
getId("#plus").addEventListener("click", () => {
    getId("#plus").style.display = "none";
    getId("#minus").style.display = "inline-block";
    getId("#menu-dichvu").style.backgroundColor = "#373737";
    getId("#a-dv").style.color = "white";

})
getId("#minus").addEventListener("click", () => {
    getId("#minus").style.display = "none";
    getId("#plus").style.display = "inline-block";

    getId("#menu-dichvu").style.backgroundColor = "#fff";
    getId("#a-dv").style.color = "black";
})
getId("#plus1").addEventListener("click", () => {
    getId("#plus1").style.display = "none";
    getId("#minus1").style.display = "inline-block";
    getId("#menu-sanpham").style.backgroundColor = "#373737";
    getId("#a-sp").style.color = "white";

})
getId("#minus1").addEventListener("click", () => {
    getId("#minus1").style.display = "none";
    getId("#plus1").style.display = "inline-block";
    getId("#menu-sanpham").style.backgroundColor = "white";
    getId("#a-sp").style.color = "black";

})
// gioi thieu 
function handleClickListInfo() {
    let menu = getId('#menu-list');
    let over = getId('#over-dark');
    menu.classList.add("active-list");
    setTimeout(() => {
        over.classList.add("active-bg");

    }, 150)
    // var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // let s = setInterval(() => {
    //     if (width >= 992) getId('#menu-list').classList.remove("active-list");
    //     console.log(width);
    // })
    // if (window >= 992) {

    //     clearInterval(s);
    // }
}
let arrNav = ["index.html", "gioithieu.html", "dichvu.html", "lienhe.html", "detail.html", "tintuc.html",
    "sanpham.html"
];

var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
var navItem = document.querySelectorAll('#menu-nav a');

// navItem.forEach(elem => {
//     console.log(elem.getAttribute('href'));
// })
arrNav.forEach(item => {
    if (item === pgurl) {
        let name = item.split(".")[0];
        document.getElementById(`${name}`).classList.add("active");
        let a = "menu-" + name;
        document.getElementById(`${a}`).classList.add("active");
        return;
    }
});

// $('.js-navMain').find('a');

// $('.js-navMain a').each(function () {
//     var href = $(this).attr('href');
//     if (href == pgurl) {
//         $(this).closest('li').addClass("active");
//     }
// })
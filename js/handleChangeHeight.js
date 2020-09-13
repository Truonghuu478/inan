function handleChangeHeight(result) {
    if (result) {

        document.getElementById("xem-them").classList.add("active-xemThem");
        document.getElementById("thu-gon-btn").classList.add("active-thugon");
        document.getElementById("thu-gon").style.display = "block";

    } else {
        document.getElementById("thu-gon").style.display = "none";

        document.getElementById("xem-them").classList.remove("active-xemThem");

        document.getElementById("thu-gon-btn").classList.remove("active-thugon");
    }

}
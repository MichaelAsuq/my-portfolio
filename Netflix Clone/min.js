const tabItems = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content-item");
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    tabContentItem.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
    tabContentItem.forEach(item => item.classList.remove("show"));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
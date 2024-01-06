const loadfunction = window.onload;
const current = location;

const hideElements = (elms) => elms.forEach(el => el.parentElement.style.display = 'none');
const getElements = () => document.querySelectorAll(".update-components-header--with-divider")

const cleanTheFeed = () => {
    if (current.host === 'www.linkedin.com') {
        const list = getElements()
        if (list.length) hideElements(list);
    }
}

window.onload = function (event) {
    cleanTheFeed()
    if (loadfunction) loadfunction(event);
}

document.addEventListener("scroll", (event) => cleanTheFeed());

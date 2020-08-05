module.exports = {

    activateMenu: function (jQuery) {
        var $ = jQuery;
        const events = ["mouseenter", "mouseleave", "touchstart", "touchend"];
        const toggler = (e) => {
            e.target.classList.toggle("menu__item--hover");
        };

        events.forEach(function (e) {
            Array.prototype.forEach.call(document.getElementsByClassName("menu__item"), (item) => {
                item.addEventListener(e, toggler, false);
            });
        });

        $("#onas").addClass("is-active");
    }
}
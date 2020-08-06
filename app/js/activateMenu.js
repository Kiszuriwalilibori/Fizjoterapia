module.exports = {
  activateMenu: function (jQuery) {
    var $ = jQuery;
    const events = ["mouseenter", "mouseleave", "touchstart", "touchend", "focus", "blur"];
    const toggler = (e) => {
      e.target.classList.toggle("menu__item--hover");
    };

    events.forEach(function (e) {
      Array.prototype.forEach.call(document.getElementsByClassName("menu__item"), (item) => {
        item.addEventListener(e, toggler, false);
      });
    });

    $("#onas").addClass("is-active");

    const menu = document.getElementById("menu");
    const menuItems = document.getElementsByClassName("menu__item");

    function changeLocation(ev) {
      const targ = ev.currentTarget.dataset.target;
      if (targ) {
        location.hash = targ;
        const item = document.getElementById(targ);
        const style = item.currentStyle || window.getComputedStyle(item);
        const marginTop = parseInt(style.marginTop, 10);
        const shift = marginTop + menu.clientHeight;
        window.scrollBy(0, -shift);
      } else console.log("event location has not valid dataset");
    }

    changeLocation = typeof throttle !== "undefined" ? throttle(changeLocation, 500) : changeLocation;

    Array.prototype.forEach.call(menuItems, (item) => {
      item.addEventListener("click", changeLocation);
      item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          changeLocation(event);
        }
      });
    });
  },
};

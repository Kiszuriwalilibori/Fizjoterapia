const { mountClickAndEnterHandler, throttled, getAttributeValue } = require("./lib");

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
      
      const target = ev.target.dataset.target;

      if (target) {
        location.hash ="";
        location.hash = target;
        const shift = getAttributeValue(target,'marginTop') + menu.clientHeight;
        window.scrollBy(0, -shift);
      } else console.log("event location has not valid dataset");
    }
    Array.prototype.forEach.call(menuItems, (item) => mountClickAndEnterHandler(item, throttled(changeLocation, 1000)));
    // changeLocation = typeof throttle !== "undefined" ? throttle(changeLocation, 500) : changeLocation;

    // Array.prototype.forEach.call(menuItems, (item) => {
    //   item.addEventListener("click", changeLocation);
    //   item.addEventListener("keyup", function (event) {
    //     if (event.keyCode === 13) {
    //       event.preventDefault();
    //       changeLocation(event);
    //     }
    //   });
    // });
  },
};

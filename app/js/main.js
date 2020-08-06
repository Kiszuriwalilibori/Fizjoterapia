var $ = require('./jquery.js');
var {throttle} =require ('./throttle.js');
const { activateHamburgerMenu } = require("./activateHamburgerMenu.js");
const { activateMenu } = require("./activateMenu.js");
const { createContactForm} = require("./createContactForm.js");
const { createKnowledgeBase } = require("./createKnowledgeBase.js");
const { prepareSlideShow} = require("./prepareSlideShow.js");

$(document).ready(function () {
    prepareSlideShow($)
    createKnowledgeBase($);
    activateMenu($);
    createContactForm($);
    activateHamburgerMenu($);

})

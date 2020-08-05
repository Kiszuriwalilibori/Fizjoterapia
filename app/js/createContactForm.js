module.exports = {
  createContactForm: function (jQuery) {
    var $ = jQuery;
    $("#contact-form").on("submit", function (e) {
      e.preventDefault();

      const content = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val(),
      };
      const result = {
        text: alert ? "Wysłano" : "Błąd połączenia",
        style: alert ? "successStyle" : "failureStyle",
      };

      function handleResult(alert) {
        function setMessage() {
          $("#status_message").append("<div id='sentSuccess' class='" + result.style + "'>" + result.text + "</div>");
        }

        function removeMessage() {
          $("#status_message").children().remove();
          $("#contact-form").trigger("reset");
        }

        setMessage();
        setTimeout(function () {
          removeMessage();
        }, 3000);
      }

      fetch("https://www.enformed.io/9kibv8hh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(content),
      })
        .then((response) => response.json())
        .then((data) => handleResult(true))
        .catch((error) => handleResult(false));
    });
  },
};

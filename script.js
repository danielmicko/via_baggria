window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("my-form");
  
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Díky, ozveme se Vám!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Nastal problém, zkuste to znovu!";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
  
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Remove show class from menu after clicking on a link
    var items = document.getElementById('navbarResponsive');
    items.classList.remove('show');

    let box = document.getElementById("topNav");
    let offset = box.offsetHeight - 5;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 1000);
    } // End if

  });
});


$(document).ready(function () {

  $(".keywords").click(function () {
    $("#keywords").toggle(200);
  });

  /*
  $("a.keywords").on('click', function (event) {
    var div = document.getElementById('keywords');
    div.style.display = div.style.display === "none" ? "block" : "none";
  });*/
});

	  var flipItem = document.querySelectorAll(".flip-container");

    var myFunction = function() {
      //. remove action
      var flipNode = this.querySelector(".flip-container");

      this.classList.toggle("active");
      if (flipNode) {
        flipNode.classList.toggle("active");
      }
    };
    
    for (var i = 0; i < flipItem.length; i++) {
        flipItem[i].addEventListener('click', myFunction, false);
    }

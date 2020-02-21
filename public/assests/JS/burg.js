$("#addBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addBurger [name=addBurg]").val().trim()
    };
    console.log(newBurger)
    $.ajax("/", {
      method: "POST",
      data: newBurger
    }).then(
      function() {

        location.reload();
      }
    );
  });

   $(".delBur").on("click", function(event) {
    
    var id = $(this).data("planid")
    console.log(id)
    //console.log(newBurger)
    $.ajax("/" + id, {
      method: "PUT",

    }).then(
      function() {

        location.reload();
      }
    );
  });

  $(".orderBur").on("click", function(event) {
    
    var id = $(this).data("planid")
    console.log(id)
    //console.log(newBurger)
    $.ajax("/api/" + id, {
      method: "PUT",

    }).then(
      function() {

        location.reload();
      }
    );
  });
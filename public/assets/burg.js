// $("#addBurger").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//       burgerName: $("#addBurger [name=addBurg]").val().trim()
//     };
//     console.log(newBurger)
//     $.ajax("/", {
//       method: "POST",
//       data: newBurger
//     }).then(
//       function() {

//         location.reload();
//       }
//     );
//   });
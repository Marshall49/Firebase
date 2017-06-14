console.log("")
var config = {
  apiKey: "AIzaSyAHLYF3q1qvRQBxe0G9oAM05E9FLzLJz3c",
  authDomain: "fir-assignment-d0b8b.firebaseapp.com",
  databaseURL: "https://fir-assignment-d0b8b.firebaseio.com",
  projectId: "fir-assignment-d0b8b",
  storageBucket: "fir-assignment-d0b8b.appspot.com",
  messagingSenderId: "558398321544"
};
firebase.initializeApp(config);


  var database = firebase.database();
  console.log(database);


  var name = "";
  var destination = "";
  var time = 0;
  var frequency = 0;


  $("#add-user").on("click", function(event) {
      event.preventDefault();

      name = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      time = $("#time-input").val().trim();
      frequency = $("#frequency-input").val().trim();

      database.ref().set({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
      });

      database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().time);
      console.log(snapshot.val().frequency);

      $("#name-display").html(snapshot.val().name);
      $("#destination-display").html(snapshot.val().destination);
      $("#time-display").html(snapshot.val().time);
      $("#frequency-display").html(snapshot.val().frequency);

  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    });

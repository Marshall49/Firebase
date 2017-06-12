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


  var name = "";
  var destination = "";
  var time = MM/DD/YYYY;
  var frequency = 0;


  $("#click-button").on("click", function() {
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
    });

      database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().time);
      console.log(snapshot.val().frequency);

      $("#recent-team").html(snapshot.val().name + " | " + snapshot.val().destination + " | " + snapshot.val().frequency);

  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

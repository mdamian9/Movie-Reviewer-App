// Initialize Firebase
var config = {
    apiKey: "AIzaSyC28a679zqHZ2Mj6tMzY9iC5d-908PQ4_8",
    authDomain: "movie-reviewer-app.firebaseapp.com",
    databaseURL: "https://movie-reviewer-app.firebaseio.com",
    projectId: "movie-reviewer-app",
    storageBucket: "movie-reviewer-app.appspot.com",
    messagingSenderId: "644801536100"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit-form").on("click", function(e) {

    e.preventDefault();

    // Take user input values and store in variables
    var name = $("#name-input").val().trim();
    var rating = $("#rating-input").val().trim();
    var review = $("#review-input").val().trim();

    $("#name-input").val("");
    $("#rating-input").val("");
    $("#review-input").val("");

    database.ref().push({
        name: name,
        rating: rating,
        review: review
    });

});

// When a new child is added to database (pushed), execute the following function:
database.ref().on("child_added", function(snap){

    var name = snap.val().name;
    var rating = snap.val().rating;
    var review = snap.val().review;

    var newMovie = $("<tr><td>" + name + "</td><td>" + rating + "/10</td><td>" + review + "</td><tr>");

    $("#movie-table-body").append(newMovie);

});
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

$("#submit-form").on("click", function(e) {

    e.preventDefault();

    // Take user input values and store in variables
    var name = $("#name-input").val().trim();
    var rating = $("#rating-input").val().trim();
    var review = $("#review-input").val().trim();

});
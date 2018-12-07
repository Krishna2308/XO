function initApp(){
	var unsub = firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
		var uid;
        uid = user.uid;
        window.alert(uid);
        var userName = document.getElementById("txtun").value;
        database.ref('USER/' + uid + '/name').set(userName);
        window.location.href = "mainmenu.html";
		//console.log("signed up with email " + userEmail);
		//window.alert("here")
	} else {
		console.log('not logged in');	
	}
	});
}
window.onload = function(){
	initApp();
};
function login() {
	var userEmail = document.getElementById("txtuser").value;
	var userPass = document.getElementById("txtpass").value;

	if(!userPass || !userEmail){
		window.alert("email and password required");
		return console.log('email and password required');
	}

	console.log(userEmail);
	console.log(userPass);
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log('LogIn error', error);
	  window.alert("Error: " + errorMessage);
	});
	console.log("messed up");
};

function signUp() {
	var userEmail = document.getElementById("txtuser").value;
	var userPass = document.getElementById("txtpass").value;
	var userName = document.getElementById("txtun").value;
	window.alert(userName)
	if(!userPass || !userEmail || !userName){
		window.alert("email and password required");
		return console.log('email and password required');
	}
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log("we in here");
		window.alert("Error: " + errorMessage);
	}); 
};

if(window.closed){
	firebase.auth().signOut();
};
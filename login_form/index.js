var firebaseConfig = {
    apiKey: "AIzaSyDoFji8gZ6nMmB2RJ6PlAHNyTZBE0SK84Q",
  authDomain: "trial1-b7fda.firebaseapp.com",
  databaseURL: "https://trial1-b7fda-default-rtdb.firebaseio.com/",
  projectId: "trial1-b7fda",
  storageBucket: "trial1-b7fda.appspot.com",
  messagingSenderId: "300561345722",
  appId: "1:300561345722:web:957ae5623895c24e2b6683",
  measurementId: "G-HGDC7TE3TK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username + '/' + email).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      alert(data.email)
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : a
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
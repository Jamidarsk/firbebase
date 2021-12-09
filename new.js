// function showData() {

//     var EMAIL = document.getElementById("inputEmail4").value;
    
//     var PASSWORD = document.getElementById("inputPassword4").value;

//     console.log(EMAIL," ",PASSWORD);

//     var data = EMAIL + ":" + PASSWORD;

//     var element = document.createElement("h2");

//     var dataNode = document.createTextNode(data);

//     element.appendChild(dataNode);

//     document.getElementById("showinputdata").appendChild(element);

// }

const firebaseConfig = {
    apiKey: "AIzaSyC8_-BGCG03X6eteGdACvuClOvpATJ1tak",
    authDomain: "fir-datadase-a2141.firebaseapp.com",
    databaseURL: "https://fir-datadase-a2141-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-datadase-a2141",
    storageBucket: "fir-datadase-a2141.appspot.com",
    messagingSenderId: "852281672088",
    appId: "1:852281672088:web:45edfc2d064a852c1a6bed",
    measurementId: "${config.measurementId}"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();


function showData()
{
    
    var EMAIL = document.getElementById("inputEmail4").value;
    
    var PASSWORD = document.getElementById("inputPassword4").value;

    database.ref("data/").push().set(
        {
            email : EMAIL,
            password : PASSWORD
        }
    )

}
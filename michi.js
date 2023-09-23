var firebaseConfig = {
    apiKey: "AIzaSyDhcsK2t6AcSpPLsvMw4zE2pciZqI46ZYA",
    authDomain: "pagina-web-25e72.firebaseapp.com",
    databaseURL: "https://pagina-web-25e72-default-rtdb.firebaseio.com",
    projectId: "pagina-web-25e72",
    storageBucket: "pagina-web-25e72.appspot.com",
    messagingSenderId: "433183041535",
    appId: "1:433183041535:web:f03ffbc1f82cb8a9d869ca",
    measurementId: "G-MH2TH2YVSX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("hola");
 document.getElementById("output").innerHTML="BIENVENIDO A SALA DE MICHIS"+user_name;
 function addRoom()
{
room_name=document.getElementById("room_name").value;
 
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "h.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="h.html";
}

firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }

  const firebaseConfig = {
    apiKey: "AIzaSyC8qMp_E2n-DU_vG7bOj6ogh1r0Y1G0P4s",
    authDomain: "nothing-dc41e.firebaseapp.com",
    databaseURL: "https://nothing-dc41e-default-rtdb.firebaseio.com",
    projectId: "nothing-dc41e",
    storageBucket: "nothing-dc41e.appspot.com",
    messagingSenderId: "723407196023",
    appId: "1:723407196023:web:e85070592a873e4d52db72",
    measurementId: "G-TMB9SS3RS0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// const firebaseConfig = {
//   //   copy your firebase config informations
// };

// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference your database
// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var emailid = getElementVal("emailid");
//   var msgContent = getElementVal("msgContent");

//   saveMessages(name, emailid, msgContent);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
// }

// const saveMessages = (name, emailid, msgContent) => {
//   var newContactForm = contactFormDB.push();

//   newContactForm.set({
//     name: name,
//     emailid: emailid,
//     msgContent: msgContent,
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };



// ...............my verson.................

const firebaseConfig = {
  apiKey: "AIzaSyCwpMirQHpq7OST3X1tZSghYObK8SR78Ng",
  authDomain: "contactform-9704d.firebaseapp.com",
  databaseURL: "https://contactform-9704d-default-rtdb.firebaseio.com",
  projectId: "contactform-9704d",
  storageBucket: "contactform-9704d.appspot.com",
  messagingSenderId: "660431675567",
  appId: "1:660431675567:web:72ebb6ce9cb7bfef53745a"
};
 // initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var contactFormDB=firebase.database().ref('contactForm')
document.getElementById("contactForm").addEventListener("submit",submitForm)

function submitForm(e){
  e.preventDefault();

  var name= getElementVal('name');
  var emailid= getElementVal('emailid');
  var msgContent= getElementVal('msgContent');
  // console.log(name,emailid,msgContent);
  saveMessages(name,emailid,msgContent);

document.querySelector('.alert').style.display ="block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);


  // reset the form
    document.getElementById("contactForm").reset();
  
  
}


const saveMessages = (name,emailid,msgContent) => {
  var newContactForm =contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid:emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}

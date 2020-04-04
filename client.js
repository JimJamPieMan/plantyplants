



var nowDate = new Date();
var yyyy = nowDate.getFullYear();
var mm = nowDate.getMonth() + 1;
var dd = nowDate.getDate();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
var today = yyyy + "-" + mm + "-" + dd;
var dateSelect = (document.getElementById("plastwater").max = today);

var modal = document.getElementById("myModal");
var btn = document.getElementById("openmodal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
  
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var plantArea = document.getElementById("plantsrow");
if (location.href.indexOf("?uploadresult") !== -1) {
  var query = location.href.split("?")[1]; //A string of all parameters in the URL
  var params = query.split("&"); //Turns the string into an array of parameters
  var id;
  var result; //To store the value of id

  params.forEach((param, index) => {
    //This checks each key-value pair, in the format key=value, for the specific id key we want
    var key = param.split("=")[0]; //In id=123, this would be "id"
    var value = param.split("=")[1]; //In id=123, this would be "123" (as a String)
    if (key == "uploadresult") result = value;
    if (key == "plantid") id = value;
  });

  var alertBox = document.getElementById("uploadalert");
  var alertText = document.getElementById("alerttext");
  if (result === "success") {
    alertBox.style.display = "block";
    alertBox.style.backgroundColor = "Green";
    alertText.innerHTML = "Adding the plant was great success!";
    setTimeout(function() {
      alertBox.style.opacity = "0";
    }, 3000);
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3300);
  } else if (result === "fail") {
    alertBox.style.display = "block";
    alertBox.style.backgroundColor = "red";
    alertText.innerHTML = "Adding the plant did not work! ";
    setTimeout(function() {
      alertBox.style.opacity = "0";
    }, 3000);
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3300);
  }
  window.history.pushState("", "", "https://plantyplants.glitch.me/");
}

var plantCount;

function getPlants() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var plantData = JSON.parse(xhttp.responseText).plants;
      console.log(plantData);
      plantCount = plantData.length;
      document.getElementById("plantcount").innerHTML = plantCount;
      for (var i = 0; i < plantData.length; i++) {
        // console.log(plantData[i]);

       
         
        plantArea.innerHTML +=
          '<a href="https://plantyplants.glitch.me/plant?id=' +
          plantData[i].pId +
          '"> \
          <div class="column"> \
          <div id="' +
          plantData[i].pId +
          '"class="card" > \
     <img src="' +plantData[i].pImgs[0].medium.url +
          '" alt="Avatar" style="width:100%"> \
     <div class="container"> \
        <h4>'+
          plantData[i].pName +
          "</h4> \
      </div> \
    </div> \
</div> \
        </a>";
      }
      //fun with scrolling
      //       // Everything but IE
      // window.addEventListener("load", function() {
      //     console.log("yobbo");
      // }, false);
      //       setTimeout(function (){
      //                  document.getElementById(id).scrollIntoView(true, {behavior: "smooth"});
      //     }, 6000);
    }
  };
  xhttp.open("GET", "plants.json", true);
  xhttp.send();
  document.getElementById("plantcount").innerHTML = plantCount;
}

//old addplant function
// function addPlant(){
//   // Create new AJAX request
//   var xhttp = new XMLHttpRequest();
//   // Define behaviour for a response
//   xhttp.onreadystatechange = function(){
//     if(this.readyState ==4&&this.status ==200){
//     // do stuff if successful
//   }
//   };
//   // Initiate connection
//   xhttp.open("POST","/addplant",true);
//   // Set content type to JSON
// xhttp.setRequestHeader("Content-type","application/json");
// var pName = document.getElementById("pname").value;
//   var pProperName = document.getElementById("ppropername").value;
//   var pLastWater = document.getElementById("plastwater").value;
//   var pInfo = document.getElementById("pinfo").value;
//   var pImg = document.getElementById("pimg").files[0];
//   console.log(pImg);
//   modal.style.display = "none";

//   xhttp.send(JSON.stringify({name:pName, properName:pProperName, lastWater:pLastWater, info:pInfo, img:pImg, }));
// }


function darkMode() {
  console.log('yep dark'); 
  var element = document.body;
  element.classList.toggle('dark-mode')
  
}


// document.getElementById("pimg").upload.addEventListener("progress", console.log("get"));
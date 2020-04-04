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
var dateSelect = (document.getElementById("lastwateredit").max = today);

var modal = document.getElementById("myModal");
var btn = document.getElementById("deletebutton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("innermodal").style.display = "block";
  document.getElementById("innermodalerr").style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("innermodal").style.display = "block";
    document.getElementById("innermodalerr").style.display = "none";
  }
};

// var modal = document.getElementById("myModal1");
// var btn = document.getElementById("openmodal1");
// var span = document.getElementsByClassName("close1")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// };
// span.onclick = function() {
//   modal.style.display = "none";
  
// };
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

var query = location.href.split("?")[1]; //A string of all parameters in the URL
var params = query.split("&"); //Turns the string into an array of parameters
var id; //To store the value of id

params.forEach((param, index) => {
  //This checks each key-value pair, in the format key=value, for the specific id key we want
  var key = param.split("=")[0]; //In id=123, this would be "id"
  var value = param.split("=")[1]; //In id=123, this would be "123" (as a String)
  if (key == "id") id = value;
});




var pImgs = document.getElementById("pimgs");
var pName = document.getElementById("name");
var pProperName = document.getElementById("propername");
var pLastWater = document.getElementById("lastwater");
var pInfo = document.getElementById("info");
var pPlantId = document.getElementById("plantid");
var pQRCode = document.getElementById("qrcode");

var pImgsEdit = document.getElementById("pimgsedit");
var pNameEdit = document.getElementById("nameedit");
var pProperNameEdit = document.getElementById("propernameedit");
var pLastWaterEdit = document.getElementById("lastwateredit");
var pInfoEdit = document.getElementById("infoedit");

var oldInfo;
var alertBox = document.getElementById("noplantalert");
var alertText = document.getElementById("alerttext1");


if (location.href.indexOf("&uploadresult") !== -1) {
  var query = location.href.split("?")[1]; //A string of all parameters in the URL
  var params = query.split("&"); //Turns the string into an array of parameters
  var id;
  var result; 
  
  //To store the value of id

  params.forEach((param, index) => {
    //This checks each key-value pair, in the format key=value, for the specific id key we want
    var key = param.split("=")[0]; //In id=123, this would be "id"
    var value = param.split("=")[1]; //In id=123, this would be "123" (as a String)
    if (key == "uploadresult") result = value;
    if (key == "id") id = value;
  });

  var alertBox = document.getElementById("uploadalert");
  var alertText = document.getElementById("alerttext2");
  
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
    alertText.innerHTML = "Adding the plant did not work!";
    setTimeout(function() {
      alertBox.style.opacity = "0";
    }, 3000);
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3300);
  }
  window.history.pushState("", "", "https://plantyplants.glitch.me/plant?id=" + id);

  

      
}
var plantImages = document.getElementById('pimages');
var imgarr = [];
var imgCount = 0;
function getPlant() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var plantData = JSON.parse(xhttp.responseText).plants;
      //console.log(plantData);
      var found = false;
      for (var i = 0; i < plantData.length; i++) {
        //console.log(found);
        if (plantData[i].pId === id) {
            //console.log(plantData[i]);
          for (var j = 0;j<plantData[i].pImgs.length;j++){
            plantImages.innerHTML += '<div class="column"> ' +
'<div class="card"> '+
              '<img onclick="openImgModal('+"'"+plantData[i].pImgs[j].id+"'"+')" id="myImg" src="' + plantData[i].pImgs[j].medium.url+ '" alt="Avatar" style="width:100%">'+
              '<div id="imgmodal' +plantData[i].pImgs[j].id+'" class="imodal">'+
'<!-- The Close Button --> '+
'<button onclick="closeImgModal('+"'"+plantData[i].pImgs[j].id+"'"+')" class="close">Close</button> '+
'<!-- Modal Content (The Image) --> '+
'<img src="' + plantData[i].pImgs[j].image.url + '" class="modal-content-img" id="'+plantData[i].pImgs[j].id+'">'+
'<!-- Modal Caption (Image Text) -->'+
'<div id="caption"></div>'+
              '</div>'+
              '</div>\
            </div>'
          }
          found = true;
          oldInfo = {
            name: plantData[i].pName,
            properName: plantData[i].pProperName,
            lastWater: plantData[i].pLastWater,
            info: plantData[i].pInfo
          };
        
//           if(plantData[i].pImgs.length<=1){
//           pImgs.src =
//             "https://plantyplants.glitch.me/imgs/" +
//             id +
//             "/" +
//             plantData[i].pImgs[0];
            
//             console.log("one image");
//         } else if(plantData[i].pImgs.length>=2){
//           imgarr = plantData[i].pImgs;
//            pImgs.src =
//             "https://plantyplants.glitch.me/imgs/" +
//             id +
//             "/" +
//             plantData[i].pImgs[imgCount];

//   document.getElementById('nextbutton').style.display = 'block';
//   document.getElementById('backbutton').style.display = 'block';
//   console.log(imgarr);

        
        
          
          pName.innerHTML = "Name: " + plantData[i].pName;
          pProperName.innerHTML = "Proper name: " + plantData[i].pProperName;
          pLastWater.innerHTML = "Last watering: " + plantData[i].pLastWater;
          pInfo.innerHTML = "Info: " + plantData[i].pInfo;
          pPlantId.innerHTML = "ID: " + plantData[i].pId;
         // pQRCode.src = "https://plantyplants.glitch.me/qrcodes/" + id + ".png";
          

          pNameEdit.value = plantData[i].pName;
          pProperNameEdit.value = plantData[i].pProperName;
          pLastWaterEdit.value = plantData[i].pLastWater;
          pInfoEdit.value = plantData[i].pInfo;
        } 
                     
        }
      if(!found){
            alertBox.style.display = "block";
    alertBox.style.backgroundColor = "RED";
    alertText.innerHTML = "The plant was not found. Going home.";
  
 

    
          setTimeout( function(){
            location.href = "/";
            
 
  
  
  
          }, 2000);
      }
    }
  };
  xhttp.open("GET", "plants.json", true);
  xhttp.send();
  
}



function nextPlant(){
  if (imgCount < imgarr.length-1){
  imgCount++;
  pImgs.src = "https://plantyplants.glitch.me/imgs/" + id + "/" +imgarr[imgCount];
  }
} 

  


function backPlant(){
  
  if (imgCount > 0){
  imgCount--;
  pImgs.src = "https://plantyplants.glitch.me/imgs/" + id + "/" +imgarr[imgCount];
  }
  
}

function onFormChange() {
  if (
    oldInfo.name !== pNameEdit.value ||
    oldInfo.properName !== pProperNameEdit.value ||
    oldInfo.lastWater !== pLastWaterEdit.value ||
    oldInfo.info !== pInfoEdit.value
  ) {
    document.getElementById("savebutton").style.display = "block";
  } else if (
    oldInfo.name == pNameEdit.value ||
    oldInfo.properName === pProperNameEdit.value ||
    oldInfo.lastWater === pLastWaterEdit.value ||
    oldInfo.info === pInfoEdit.value
  ) {
    document.getElementById("savebutton").style.display = "none";
  }
}

var editing = false;
function edit() {
  if (editing === false) {
    document.getElementById("plantdisplay").style.display = "none";
    document.getElementById("plantedit").style.display = "block";
    document.getElementById("editbutton").innerHTML = "Close editing";
    getPlant();
    editing = true;
  } else if (editing === true) {
    document.getElementById("plantdisplay").style.display = "block";
    document.getElementById("plantedit").style.display = "none";
    document.getElementById("editbutton").innerHTML = "Open editing";

    getPlant();
    editing = false;
  }
}

function savePlant() {
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();
  // Define behaviour for a response
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // do stuff if successful
    }
  };
  // Initiate connection
  xhttp.open("POST", "/editplant", true);
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  var pName = document.getElementById("nameedit").value;
  var pProperName = document.getElementById("propernameedit").value;
  var pLastWater = document.getElementById("lastwateredit").value;
  var pInfo = document.getElementById("infoedit").value;

  xhttp.send(
    JSON.stringify({
      name: pName,
      properName: pProperName,
      lastWater: pLastWater,
      info: pInfo,
      id: id
    })
  );
  document.getElementById('plantedit').style.display='none'; 
  document.getElementById('plantdisplay').style.display='block';
  document.getElementById("editbutton").innerHTML = "Open editing";
  editing = false;
  getPlant();
}

function deletePlant() {
  if (document.getElementById("pnamedelete").value === oldInfo.name) {
    // Create new AJAX request
    var xhttp = new XMLHttpRequest();
    // Define behaviour for a response
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // do stuff if successful
      }
    };
    // Initiate connection
    xhttp.open("POST", "/deleteplant", true);
    // Set content type to JSON

    xhttp.setRequestHeader("Content-type", "application/json");
   

    xhttp.send(JSON.stringify({ id: id }));

    document.getElementById("innermodal").style.display = "none";
    document.getElementById("innermodalerr").style.display = "block";

    document.getElementById("innermodalerr").innerHTML = "Plant deleted :()";
    
  } else if (document.getElementById("pnamedelete").value != oldInfo.name) {
    console.log("tried too delete");
    document.getElementById("innermodal").style.display = "none";
    document.getElementById("innermodalerr").style.display = "block";
    document.getElementById("innermodalerr").innerHTML =
      "Plant not deleted. Try again (close and reopen)";
    getPlant();
  }
}


function darkMode() {
  console.log('yep dark'); 
  var element = document.body;
  element.classList.toggle('dark-mode')
  
}


// Get the modal


// Get the image and insert it inside the modal - use its "alt" text as a caption
function openImgModal(id){
  var modal = document.getElementById("imgmodal"+id);
  //console.log(modal);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
function closeImgModal(id) {
  var modal = document.getElementById("imgmodal"+id);
  modal.style.display = "none";
}
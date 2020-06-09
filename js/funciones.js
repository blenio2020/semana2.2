var bd;

function openPanel(evt, cityPanel) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityPanel).style.display = "block";
  evt.currentTarget.className += " active";
}

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('../datos/db.json', function(data){
  // do something with your data
  bd=data.proyectos
  bd.map(datos=>document.getElementById("trabajos").insertRow(-1).innerHTML = `<td>${datos.nombre}</td><td>${datos.lenguaje}</td><td>${datos.monto} dolares</td>`)
});

function insertar(e){
  e.preventDefault()
  objetoTemporal={nombre:document.getElementById('nombre').value,lenguaje:document.getElementById('lenguaje').value,monto:document.getElementById('monto').value}
  
  document.getElementById("trabajos").insertRow(-1).innerHTML = `<td>${objetoTemporal.nombre}</td><td>${objetoTemporal.lenguaje}</td><td>${objetoTemporal.monto} dolares</td>`
  document.getElementById("nombre").value=""
  document.getElementById("lenguaje").value=""
  document.getElementById("monto").value=""

}
document.querySelector("link[href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css']").href = "https://bootswatch.com/4/solar/bootstrap.css"; // Acutalización de Bootstrap
document.querySelector("link[href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css']").href = "https://bootswatch.com/4/solar/bootstrap.css"; // Acutalización de Bootstrap
document.querySelector("link[href='./main.css']").href = " "; // Acutalización de Bootstrap

// ============= HEADER =============

document.querySelector("heder").innerHTML = '<nav class="navbar navbar-dark bg-dark shadow"> <a class="navbar-brand" href="https://sysacad.frsf.utn.edu.ar/"> <img src="https://sysacad.frsf.utn.edu.ar/SysAcad/img/utnsantafe-color.png" class="d-inline-block align-top" alt="" loading="lazy"></a></nav>';

// ============= CUERPO =============

document.querySelector("body").style.background = "#002b36";
document.querySelectorAll(".container-fluid")[0].style.padding = 0;
document.querySelectorAll(".container-fluid")[0].style.background = 0;
alumno = document.querySelector("td").innerHTML;
opciones = document.querySelector("ul").innerHTML;
document.querySelectorAll(".container-fluid")[0].innerHTML = '<div class="row my-4"> <div class="col-md-4"></div><div class="col-md-4"> <div class="card shadow"> <div class="card-header"><h3><b> ' + alumno + ' </b></h3></div><div class="card-body"> <ul> ' + opciones + ' </ul> </div></div></div></div>';

// ============= FOOTER =============

document.getElementById('footer').style.background = 0;
document.getElementById('footer').innerHTML = '<footer class="footer mt-auto py-3 bg-dark"> <div class="container"> <div class="row"> <div class="col-md-6"> <p>Ministerio de Educación y Deportes<br>Universidad Tecnológica Nacional<br>Facultad Regional Santa Fe</p><p>Lavaisse 610 - S3004EWB Santa Fe<br>+54 9 342 4601579 -- Fax: int. 215</p></div><div class="col-md-3"> <p><a href="http://www.facebook.com/UTNSantaFe" target="_blank"><i style="font-size:15px" class="fa"></i> fb.com/UTNSantaFe</a></p><p><a href="http://www.twitter.com/UTNSantaFe" target="_blank"><i style="font-size:15px" class="fa fa-twitter-square"></i> @UTNSantaFe</a></p><p><a href="https://www.instagram.com/utnsantafe/" target="_blank"><i style="font-size:15px" class="fa fa-instagram"></i> @utnsantafe</a></p></div><div class="col-md-3"> <p><a href="https://campusvirtual.frsf.utn.edu.ar" target="_blank"><i class="fa fa-graduation-cap"> </i> Cátedra Virtual</a></p><p><a href="/index.php/recursos-web/biblioteca-central" target="_blank"><i class="fa fa-book"> </i> Biblioteca</a></p><p><a href="https://webmail.frsf.utn.edu.ar" target="_blank"><i class="fa fa-inbox"> </i> Webmail</a></p></div></div></div></footer>';
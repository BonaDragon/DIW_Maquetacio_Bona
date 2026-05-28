// =============================================
// EX4: Controls del vídeo
// =============================================
var video = document.getElementById("video-restaurant");
var btnPlay = document.getElementById("btn-play");
var btnPause = document.getElementById("btn-pause");
var btnVolum = document.getElementById("btn-volum");
var btnSilenci = document.getElementById("btn-silenci");

// Al clicar play, el vídeo es posa en marxa
btnPlay.onclick = function () {
  video.play();
};

// Al clicar pause, el vídeo es pausa
btnPause.onclick = function () {
  video.pause();
};

// Al clicar volum, s'activa el so
btnVolum.onclick = function () {
  video.muted = false;
};

// Al clicar silenci, es silencia el vídeo
btnSilenci.onclick = function () {
  video.muted = true;
};

// =============================================
// EX5: Navbar shrink en fer scroll  
// =============================================
window.onscroll = function () {
  var navbar = document.getElementById("navbar");

  // Si s'ha fet scroll de més de 80px, s'afegeix la classe navbar--petit
  if (document.documentElement.scrollTop > 80) {
    navbar.classList.add("navbar--petit");
  } else {
    navbar.classList.remove("navbar--petit");
  }
};

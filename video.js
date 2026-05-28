// =============================================
// EX4: Controls del vídeo
// =============================================
const video  = document.getElementById("video-restaurant");
const btnPlay   = document.getElementById("btn-play");
const btnPause  = document.getElementById("btn-pause");
const btnVolum  = document.getElementById("btn-volum");
const btnSilenci = document.getElementById("btn-silenci");

btnPlay.addEventListener("click", () => video.play());
btnPause.addEventListener("click", () => video.pause());
btnVolum.addEventListener("click", () => video.muted = false);
btnSilenci.addEventListener("click", () => video.muted = true);

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

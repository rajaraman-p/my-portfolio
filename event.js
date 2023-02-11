window.addEventListener("scroll", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const profilePic = document.querySelector(".profile-pic");
    const profilePicImage = profilePic.querySelector("img");
if (window.pageYOffset > 0) {
  welcomeText.style.display = "none";
  profilePic.style.width = "80px";
  profilePic.style.height = "80px";
  profilePicImage.style.width = "80px";
  profilePicImage.style.height = "80px";
} else {
  welcomeText.style.display = "flex";
  profilePic.style.width = "200px";
  profilePic.style.height = "200px";
  profilePicImage.style.width = "200px";
  profilePicImage.style.height = "200px";
}
});
const tags = [
    "html.png",
    "css.png",
    "javascript.png",
    "es6.png",
    "dom.png",
    "bootstrap.png",
    "jquery.png"
  ];
  
  let n = 0;
  const displayTag = function() {
    const imgElement = document.querySelector(".s-skill-logo");
    imgElement.src = tags[i];
    n = (n + 1) % tags.length;
  };
  
  setInterval(displayTag, 1200);
const images = [
    "tailwind.png",
    "react.png",
    "git.png",
    "angularjs.png",
    "nodejs.png",
    "mongodb.png",
    "django.png"
  ];
  
  let i = 0;
  const displayImage = function() {
    const imgElement = document.querySelector(".l-skill-logo");
    imgElement.src = images[i];
    i = (i + 1) % images.length;
  };
  
  setInterval(displayImage, 1600);
  
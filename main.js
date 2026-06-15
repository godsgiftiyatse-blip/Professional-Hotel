// MOBILE MENU
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// COUNTERS
function animateCounter(id, target){
  let count = 0;
  let speed = 20;

  const el = document.getElementById(id);

  let interval = setInterval(() => {
    count++;
    el.innerText = count;

    if(count >= target){
      clearInterval(interval);
    }
  }, speed);
}

// RUN COUNTERS
window.onload = () => {
  animateCounter("stat1", 120);
  animateCounter("stat2", 45);
  animateCounter("stat3", 5000);
};

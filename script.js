function dvdMove() {
  const dvd = document.getElementById("dvd-logo");

  const XMAX = window.innerWidth - 205;
  const XMIN = 0;
  const YMAX = window.innerHeight - 200;
  const YMIN = 40;

  let id = null;

  let x = Math.floor(Math.random() * XMAX);
  let y = Math.floor(Math.random() * YMAX - YMIN) + YMIN;
  let left = Math.random() < 0.5;
  let up = Math.random() < 0.5;

  clearInterval(id);
  id = setInterval(frame, 4);

  function frame() {
    if (x == window.innerWidth) {
      clearInterval(id);
    } else {
      if (x == XMAX) {
        left = true;
      } else if (x == XMIN) {
        left = false;
      }

      if (y == YMAX) {
        up = true;
      } else if (y == YMIN) {
        up = false;
      }

      x += left ? -1 : 1;
      y += up ? -1 : 1;

      dvd.style.top = y + "px";
      dvd.style.left = x + "px";
    }
  }
}

dvdMove();

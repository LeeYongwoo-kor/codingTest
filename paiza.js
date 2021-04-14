// *********************** PAIZA ONLY ************************
var lines = [];

const line = (line) => {
  lines.push(line);
};

const close = () => {
  console.log(lines[0]);
};

window.onload = () => {
  line("TEST");
  close();
};

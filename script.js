function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  // TODOS TRABALHAM DENTRO DO TOGGLEMODE

  //Nota, seguinte isso é um pseudo codigo >>>>>>>
  //vai usar a tag img
  //if: se tiver light, ira mudar a foto
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se nao tver light ira usar a mesma foto else{
    img.setAttribute("src", "./assets/avatar.png")
  }
}
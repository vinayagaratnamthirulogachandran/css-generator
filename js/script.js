document.addEventListener("DOMContentLoaded", ()=>{

  const allBorder = document.getElementById('all');
  const allValue = document.getElementById('all_value');

  let all_radius = 10;

  function allBordersUpdate(){
    all_radius = this.value;
    allValue.innerText = all_radius + "px"
  }

  function updateCode(){

  }

  allBorder.addEventListener("mousemove", allBordersUpdate);
  allBorder.addEventListener("change", allBordersUpdate);

  allBordersUpdate();
})
document.addEventListener("DOMContentLoaded", ()=>{

  const container = document.querySelector('.container');
  const btnCopy = document.querySelector('#btnCopy');
  const allBorder = document.getElementById('all');
  const borderElement = document.getElementById('border');
  const all_Value = document.getElementById('all_value');
  const code = document.getElementById('code');
  const border_styleElement = document.getElementById('border_style');

  var all_radius = 10;
  var coding = "Test";
  var border_style = "solid";
  var border_size = 3;

  function allBordersUpdate(){
    all_radius = allBorder.value;
    border_size = borderElement.value;
    all_Value.innerText = all_radius + "px";
    coding = `
    border-radius:${all_radius}px;
    border: ${border_size} ${border_style} red;
    `
    code.value = coding;
    container.style.cssText=coding;
  }


  allBorder.addEventListener("mousemove", allBordersUpdate);
  allBorder.addEventListener("change", allBordersUpdate);

  borderElement.addEventListener("mousemove", allBordersUpdate);
  borderElement.addEventListener("change", allBordersUpdate);

  btnCopy.addEventListener("click", ()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert('code coppied');
  })

  allBordersUpdate();
})

// border style
border_styleElement.addEventListener('change', function(){
  border_style=this.value;
  allBordersUpdate();
});

function calendario(dia){
  document.querySelector('.modal-title').innerText = dia.innerText + " de setiembre de 2024";
}

function revisar(){
  p1 = document.querySelector('input[name="p1"]:checked').value;
  p2 = document.querySelector('input[name="p2"]:checked').value;
  p3 = document.querySelector('input[name="p3"]:checked').value;

  if (p1 == "sistema"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p2 == "mercurio"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
  if (p3 == "alfa"){
    alert("Bien");
  }
  else{
    alert("Mal")
  }
}
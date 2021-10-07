function saveCookie(){

}

function onLoad(){
  
}



function clearAll(){
  var clearBoxes = document.getElementsByClassName("clearBox");
  for (var i = (clearBoxes.length - 1); i>=0;i--){
    clearBoxes[i].value = "";
  }
  var modTxts = document.getElementsByClassName("modTxt");
  modTxts[0].innerHTML = "+0";
  for (var j = (modTxts.length - 1);i>=0;i--){
    modTxts[i].innterHTML = "+0";
  }
}

function loadAll(){
  var clearBoxes = document.getElementsByClassName("clearBox");
  for (var i = (clearBoxes.length - 1); i>=0;i--){
    clearBoxes[i].value = "20";
  }
}


function statChange(changed){
  var changeStat = document.getElementById(changed + 'Stat');
  var statMod = Math.floor((changeStat.value - 10)/2);
  if (statMod >= 0) {
    statMod = '+' + statMod;
  }
  document.getElementById(changed + 'Mod').innerHTML = statMod;
  skillChange(changed)
}

function skillChange(changed){
  var changeSkills = document.getElementsByClassName(changed + "Skill");
  var changeStat = document.getElementById(changed + "Mod").innerHTML.slice(1);
  var changeSkillTypes = document.getElementsByClassName(changed + "SkillCheck");
  for (var i = (changeSkills.length - 1);i>=0;i--){
    changeSkills[i].value = changeStat;
    if (changeSkillTypes[i].checked){
      changeSkills[i].value = Number(changeStat) + Number(document.getElementById("proficiencyBonusNum").value);
    }
  }

}

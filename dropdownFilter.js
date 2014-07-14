RemoveStorageProfileDropdown(){

  var Profile3 = document.getElementById('SIBDOVDCStorageInfo.Profile3').value;
  var Profile4 = document.getElementById('SIBDOVDCStorageInfo.Profile4').value;
  var Profile5 = document.getElementById('SIBDOVDCStorageInfo.Profile5').value;
  var Profile6 = document.getElementById('SIBDOVDCStorageInfo.Profile6').value;
  var Profile7 = document.getElementById('SIBDOVDCStorageInfo.Profile7').value;
  var Profile8 = document.getElementById('SIBDOVDCStorageInfo.Profile8').value;
  var ele = document.getElementById('TextOfAnything.MessageOne');

 var ProfileList= [];
if(Profile3!='none'){
ProfileList.push(Profile3);
}
if(Profile4!='none'){
ProfileList.push(Profile4);
}
if(Profile5!='none'){
ProfileList.push(Profile5);
} if(Profile6!='none'){
ProfileList.push(Profile6);
}
if(Profile7!='none'){
ProfileList.push(Profile7);
}
if(Profile8!='none'){
ProfileList.push(Profile8);
}

string=ProfileList.toString();

for(index=0; index<=ProfileList.length; ++index){
if(index=='0'){
ele[index] = new Option('-------------');
}
else{
ele[index] = new Option(ProfileList[index-1]);
}
}


ele.onchange=function(e) {
var string=ele.options[ele.selectedIndex].text;
if (string=='-------------'){
//do nth;

}
else {
ele.options[ele.selectedIndex].value=string;
}
}                

}

passwordUser(){
 
  var firstPassword = document.getElementById('RexNewPerson.password').value;
  var secondPassword = document.getElementById('RexNewPerson.confirmPassword').value;
  var firstName = document.getElementById('RexNewPerson.firstName').value;
  var lastName = document.getElementById('RexNewPerson.lastName').value;
  var loginName = document.getElementById('RexNewPerson.loginName').value;

                  var caseval = /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\.:,;\\\-\$%_=!<\/>\+\[\{\}\]\|'"\*&~#`\^\?@]).{8,128})$/, b;
               // var caseval2 =  /^(([^a-z]+)|([^A-Z]+)|([^0-9]+)|[^\.:,;\\\-\$%_=!<\/>\+\[\{\}\]\|'"\*&~#`\^\?]+)$/, b;

                  var caseFirstName = firstPassword.toLowerCase().indexOf(firstName.toLowerCase());
                  var caseLastName = firstPassword.toLowerCase().indexOf(lastName.toLowerCase());                  
                  var caseLoginName = firstPassword.toLowerCase().indexOf(loginName.toLowerCase());
                  
                  var casePassword = firstPassword.toLowerCase().match(/password/) != null;
                  var caseCapita = firstPassword.toLowerCase().match(/capita/) != null;
                  
                                if(!caseval.test(firstPassword)){
                                                                alert('Please enter a strong password with capital letters, small letters, numbers, special characters, without matching your name or whitespace and is at least 8 character long');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.password').focus();
                                                }

                                else if(firstName == "" | lastName == "" | loginName == ""){
                                                               alert('Please enter your Name and Email Address before entering the password');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.firstName').focus();
                                }

                                else if(caseFirstName != -1){
                                                                alert('Please enter a password without containing your Name or Login Id');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.firstName').focus();
                                                }

                                 else if(caseLastName != -1){
                                                                alert('Please enter a password without containing your Name or Login Id');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.lastName').focus();
                                                }

                                 else if(caseLoginName != -1){
                                                                alert('Please enter a password without containing your Name or Login Id');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.email').focus();
                                                }
                                else if(casePassword|caseCapita){
                                                                alert('Please enter a strong password with capital letters, small letters, numbers, special characters, without matching your name and is at least 8 character long');
                                                                document.getElementById('RexNewPerson.password').value = '';
                                                                document.getElementById('RexNewPerson.password').focus();
                                                }
                  

                if (firstPassword != '' && secondPassword != '' && firstPassword != secondPassword) {
                                                alert('Passwords do no match. Please re-enter passwords.');
                                                document.getElementById('RexNewPerson.confirmPassword').value = '';
                                                document.getElementById('RexNewPerson.confirmPassword').focus();
                                }
  }

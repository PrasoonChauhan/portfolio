
function submitFunction()
{
let Name=document.querySelector('#fullName').value;
let email=document.querySelector('#emailAdd').value;
let phone=document.querySelector('#PhoneNum').value;

    if(Name===''|| email===''|| phone==='')
    {
        alert("Filling of Name Email and Phone is Mandatory")
    }
    else
    {
        alert("Your Response Is Submitted")
    }
}
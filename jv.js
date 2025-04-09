var email = document.forms['form']['email'];
var email_error = document.getElementById('eError');
email.addEventListener('textInput', email_Verify);
function validated()
{
	if (email.value.length < 16)
	{
		email.style.border = "1px solid maroon";
		email.style.color = "maroon";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
}
function email_Verify()
{
	if (email.value.length >= 8)
	{
		email.style.border = "1px solid #231F20";
		email.style.color = "#231F20";
		email_error.style.display = "none";
		return true;
	}
}

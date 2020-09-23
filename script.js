function age_calc()
{
	var birthyear=prompt("Enter your birth year.");
	var res=(2020-birthyear)*365;
	var h1=document.createElement('h1');
	var textnode=document.createTextNode("You are "+res+ " days old.");
	h1.setAttribute('id',"hid");
	h1.appendChild(textnode);
	document.getElementById('flexbox-result').appendChild(h1);




}
function reset()
{
	document.getElementById('flexbox-result').remove();
	}
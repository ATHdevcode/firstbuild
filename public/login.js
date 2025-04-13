
const loginbutton = document.querySelector("#loginbutton");
const logintext = document.querySelector("#txt");

loginbutton.addEventListener('click', login);

logintext.addEventListener('keypress',
function did(e){
	if(e.key=="Enter"){
		login();
	}
});


//create cookies....to eat
var ite = localStorage.getItem('qUsername')
console.log(ite)


if(ite != null)
{
	window.location.href = "post.html";
}






function butonanimation(button)
{
	button.addEventListener('mouseover', function(e){
		
		if(button) button.classList.add('wide');
	});

	button.addEventListener('mouseleave',function(e){
		
		if(button) button.classList.remove('wide');
		if(button) button.classList.add('wideout');
	});

	button.addEventListener('animationend',function(e){
		
		if(button) button.classList.remove('wideout');
		
	});


}

butonanimation(loginbutton);


function login(){
	if (!(/[a-z]/i.test(logintext.value)) || logintext.value == null)
	{
		return
	}
	console.log(logintext.value)

	localStorage.setItem('qUsername', logintext.value);

	window.location.href = "post.html";
}
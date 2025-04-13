
console.log("HELLO")






const aboutbutton = document.querySelector("#about");


const cal = document.querySelector("#cal");

const cnt = document.querySelector("#cnt");

const pst = document.querySelector("#pst");

const baseurl = 'http://localhost:8080/info';



aboutbutton.addEventListener('click', gotoabout);
 




//aboutbutton.onclick = gotoabout;
cal.onclick = gotocal;
cnt.onclick = gotocnt;
pst.onclick = gotopst;


function butonanimation(button)
{
	button.addEventListener('mouseover', function(e){
		
		if(button) button.classList.add('an');
	});

	button.addEventListener('mouseleave',function(e){
		console.log("hhh")
		if(button) button.classList.remove('an');
		if(button) button.classList.add('pn');
	});

	button.addEventListener('animationend',function(e){
		console.log("hhh")
		if(button) button.classList.remove('pn');
		
	});


}

butonanimation(cal);
butonanimation(cnt);
butonanimation(pst);




function gotoabout()
{
	window.location.href = "abt.html"
}

function gotocal()
{
	window.location.href = "cal.html"
}

function gotocnt()
{
	window.location.href = "count.html"
}

function gotopst()
{
	window.location.href = "post.html"
}


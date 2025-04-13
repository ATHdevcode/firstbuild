


const postbutton = document.getElementById("new");

const title = document.querySelector("#sp");

postbutton.onclick = addpost;

postbutton.onload = getinfo;

window.onload = getinfo;

var allpost = [];
var alldate = [];

let dowhat = 'a';

var ite = localStorage.getItem('qUsername')
console.log(ite);

function butonanimation(button)
{
	button.addEventListener('mouseover', function(e){
		
		if(button) button.classList.add('hover');
	});

	button.addEventListener('mouseleave',function(e){
		
		if(button) button.classList.remove('hover');
		
	});

	button.addEventListener('animationend',function(e){
		
		if(button) button.classList.remove('hover');
		
	});


}

butonanimation(postbutton)




const baseurl = 'http://localhost:8080/info/';

async function getinfo(e)
{
	e.preventDefault();
const res = await fetch(baseurl,{
	methode:'GET'
})
console.log(res);
const data = await res.json()
console.log(data.info)
createoldpost(data.info, data.date);


}






function updateposts(ele)
{
	ele.innerHTML = ''
	for (var i = allpost.length - 1; i >= 0; i--) {
		
		ele.appendChild(alldate[i]);
		ele.appendChild(allpost[i]);
		
	}
}

function createoldpost(data, date)
{
	for (var i = 0; i <= data.length-1 ; i++) {
		
	
		const para1 = document.createElement("div");
		para1.setAttribute('class', 'label');

		//const node1 = document.createTextNode(date[i]);
		//para1.appendChild(node1);

		const node1 = document.createElement("span");
		node1.setAttribute('class', 'label2');
		node1.innerHTML = date[i]
		para1.appendChild(node1);

		alldate.push(para1)

		const para = document.createElement("p");
		para.setAttribute('class', 'posts');

		const node = document.createTextNode(data[i]);
		para.appendChild(node);

		const ele = document.getElementById("post");

		allpost.push(para);

		updateposts(ele);

	}
}





async function addpost(e)
{
	
	if(ite == null)
	{

		window.location.href = "login.html"
	}

	var text = window.prompt("Write new post");
	if (!(/[a-z]/i.test(text)) || text == null)
	{
		return;
	}

	const para1 = document.createElement("div");
	para1.setAttribute('class', 'label');

	
	const node1 = document.createElement("span");
	node1.setAttribute('class', 'label2');
	node1.innerHTML = Date()+" by:"+ite
	para1.appendChild(node1);

	
	

	alldate.push(para1)



	const para = document.createElement("p");
	para.setAttribute('class', 'posts');

	const node = document.createTextNode(text);
	para.appendChild(node);

	const ele = document.getElementById("post");

	allpost.push(para);




	updateposts(ele);

	
	if(allpost.length > 5)
	{

		dowhat = 'r';
		allpost.shift();
		alldate.shift();
	}

	e.preventDefault()
	const res = await fetch('/',{
		method:'POST',
		headers:{"Content-Type":'application/json'},

		body:JSON.stringify({parcel:text,cnd:dowhat,date:Date()+" by:"+ite})

		
	})


	
	

	


	



}



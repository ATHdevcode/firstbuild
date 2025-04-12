


const postbutton = document.getElementById("new");
const bck = document.querySelector("#about");
const title = document.querySelector("#sp");

postbutton.onclick = addpost;
bck.onclick = getinfo;
postbutton.onload = getinfo;

window.onload = getinfo;

var allpost = [];

let dowhat = 'a';





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
createoldpost(data.info);


}






function updateposts(ele)
{
	ele.innerHTML = ''
	for (var i = allpost.length - 1; i >= 0; i--) {
		

		ele.appendChild(allpost[i]);
		
	}
}

function createoldpost(data)
{
	for (var i = data.length - 1; i >= 0; i--) {
		
	
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



	var text = window.prompt("Write new post");
	if (!(/[a-z]/i.test(text)) || text == null)
	{
		return;
	}

	




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
	}

	e.preventDefault()
	const res = await fetch('/',{
		method:'POST',
		headers:{"Content-Type":'application/json'},

		body:JSON.stringify({parcel:text,cnd:dowhat})

		
	})


	
	

	


	



}



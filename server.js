const express = require('express');
const path = require('path');


const app = express();

const fs = require('fs');


app.use(express.json())



console.log("hello from backend")
















app.get('/',(req,res) =>{
	res.sendFile(path.join(__dirname,'public/index.html'));

	app.use(express.static(__dirname + "/public/"));

});

app.get('/info',(req,res) =>{
	
	fs.readFile("datax.json",(error,data)=>{
	if(error){
		throw err;
	}



	const user = JSON.parse(data);

	


	
	
	const data1 = JSON.stringify(user);

	res.json(user)


	
	console.log(user.info);
})
	
	
});

app.post('/',(req,res) =>{
	const { parcel,cnd,date } =req.body
	console.log(cnd)

	fs.readFile("datax.json",(error,data)=>{
	if(error){
		throw err;
	}



	const user = JSON.parse(data);

	user.info.push(parcel)
	user.date.push(date)

	if(cnd=='r')
	{
		user.info.shift();
		user.date.shift();
	}

	//data1 = stringify(user);

	
	
	const data1 = JSON.stringify(user);

	

	fs.writeFile("datax.json",data1,(error)=>{
	if(error){
		console.log(error);

		throw error;
	}


})

})

	res.status(200).send({'status':'recived'})
});




app.listen(8080,() =>{
	console.log("Server is listening");
})
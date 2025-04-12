
const endtime = '2025-04-22';

const clock = document.getElementById('clk');
const daysspan = clock.querySelector('.days');
const hrsspan = clock.querySelector('.hrs');
const minspan = clock.querySelector('.min');
const secspan = clock.querySelector('.sec');


function gettimeleft(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total/1000)%60);
	const minutes = Math.floor((total/1000/60)%60);
	const hours = Math.floor((total/(1000*60*60)%24));
	const days = Math.floor(total/(1000*60*60*24));

	return{
		total,
		days,
		seconds,
		minutes,
		hours
	}
}




function startclock(id, endtime) {
	const clock = document.getElementById(id);

	function updateclock() {
		const t = gettimeleft(endtime);

		daysspan.innerHTML = ((t.days<10) ? '0':'')+t.days;
		hrsspan.innerHTML = ((t.hours<10) ? '0':'')+t.hours;
		minspan.innerHTML = ((t.minutes<10) ? '0':'')+t.minutes;
		secspan.innerHTML = ((t.seconds<10) ? '0':'')+t.seconds;

		if(t.total <= 0){
			clearInterval(timeinter);
		}
		
}
	

	updateclock();
	const timeinterval = setInterval(updateclock, 1000);
}


startclock('clk', endtime);
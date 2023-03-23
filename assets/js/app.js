//alert("hiiii");

let cl = console.log;

const digitalClock = document.getElementById("digitalClock");

//const setZero = (val) => {
	//if(val < 10){
		//return "0" + val
	//}else{
		//return val
	//}
//}

// Ternary operator
//condition ? doThisIfConditionIsTrue : doThisIfConditionIsFalse

const setZero = (val) => {
	 return (val < 10 ) ? ("0" + val) : (val)
}

function createDigitalClock(){
	
	let d = new Date();
	
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let session = "AM";
	
	
	
	if(hr >=12){
	session = "PM";
	
	}

	// hr >> 20
	if(hr > 12){
		hr = hr - 12;   // hr >> 8
	}
		
		hr = setZero(hr);
		min = setZero(min);
		sec = setZero(sec);
	//if(hr < 10){
	//		hr = '0' + hr;
	//}
	//if(min < 10){
		//min = '0' + min;
	//}
	//if(sec < 10){
		//sec = '0' + sec;
	//}
	
	let result = `${hr} : ${min} : ${sec} ${session}`;
	
	digitalClock.innerHTML = result;
	cl(hr,min,sec);
	
	
	setTimeout(createDigitalClock , 1000);
	
}

createDigitalClock();
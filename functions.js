console.log("hello homework3");

 

function stringToInt(input) {

	var change= parseInt(input,10);

	return change;

}

 

function maskNumber(input) {

	var arr=input.split("");

	for(var i=7; i<=10; i++){

		arr[i]='*';

	

	}

 

	var masknum_str=arr.join('');

	return masknum_str;

} 

 

function getAverage(input_array) {

	var arr=input_array;

	var sum=0;

	for(var i=0; i<arr.length; i++){

		sum+=arr[i];

	}

	var avr=sum/arr.length;

	return avr;

	

}

 

function isMultipleSeven(input) {

	if(input%7==0)

		return true;

	else

		return false;

}

 

function operation(type, a, b){

	

	var c=0;

 

	if(type=="add"){

		c=a+b;

		return c;

	}

	else if(type=="subtract"){

		c=a-b;

		return c;

	}

 

	else if(type=="multiply"){

		c=a*b;

		return c;

	}

 

	else if(type=="divide"){

		c=a/b;

		return c;

	}

 

	else{

		console.log("Not Supported");

		return undefined;

	}

 

}

 

 

function triangleMtn(floor) {

	var str="";

	for(var i=1; i<=floor; i++){

		for(var j=0; j<i; j++){

			str+="*";

			

		}

		str+="\n";

	}

	console.log(str);

 

}


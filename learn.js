// --------------------window Object documentation

// window.open("http://google.com");
// window.close();
// let length = window.length;
// console.log(length);
// window.alert("hello kavi");
// window.prompt("hello kavi");

// function sol(str){
//     // return str.indexOf("is");
//     // return str.substring(10,5);
//     // return str.slice(6,11)
//     // console.log(str.split(""));
//     let arr = str.split(" ");
//     let largestWord = arr[0];
//     for (var i=1; i<arr.length;i++){
//         if(largestWord.length < arr[i].length){
//             largestWord = arr[i];
//         }
//     }
//     return largestWord

// }
// document.write(sol("hello this is kavi jhdcwdjhvbj"))

// -------------------for loop -------------------------

// for(var i=0;i<5;i++){
//     for(var j=0;j<5;j++){
//         if (i==0 || i==4){
//             document.write("*");
//         }
//         else{
//             if(j==0 || j==4){
//                 document.write("*");
//             }
//             else{
//                 document.write("&nbsp");
//             }
            
//         }
//     }
//    document.write("<br>")
// }

// for(var i=1;i<=5;i++){
//     for(varj=1;j<=5;j++){
//         document.write(" ");
//     }
    
//     for(var j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");

// }
 
//  n=5;
//     for(var i=1;i<=n;i++){
//         for(var j=1;j<=n;i++){
//             document.write("<br>");
//         }
//         for(var j=1;j<=i;j++){
//             document.write("*");
//         }
//         document.write(&nbsp);
//     }


// const num=[7, 4, 5, 3];
// const num1=[1, 2, 6, 8];
//     num.push(9);
//     num2=num.concat(num1);
//     // num1.pop();
//     document.write(num2.sort());

// --------------------------------function-------------------------
// function myFunction(p, p1){
//     return p+p1;
// }
// kavi = myFunction(4, 3);
// console.log(kavi);

// -------------------------------digital clock-------------------------
// function show(){
//     var date = new Date();
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     var session = "AM";

//     if(hour>=12){
//         session ="PM";
//         hour -= 12;

//     }
//     hour = (hour<10) ? "0" + hour: hour;
//     min = (min<10) ? "0" + min: min;
//     sec = (sec<10) ? "0" + sec: sec;

//     var time = hour + ":" + min + ":" + sec + ":" + session;
 
//     document.getElementById("demo").innerText= time;
//     document.getElementById("demo").textContent= time;

//     // setTimeout(show, 1);
// };
// show();
// setInterval(show, 1000);

// -----------------------------excercise 1----------------------------
// var is_arrray=function(input){
//     if(toString.call(input)==="[Object Array]")
//         return true;
//         return false;
// }
//     console.log(is_arrray("kavi"));
//     console.log(is_arrray([1, 2, 3, 4]));



// -----------------------------binary search-------------------------------


// let recursiveFunction = function(arr, x, start, end){

//     if (start > end) return false;

//     let mid=start+end/2;

//     if (arr[mid]==x) return true;

//     if (arr[mid]<x) 
//         return recursiveFunction(arr, x, start, mid-1);
//     else
//         return recursiveFunction(arr, x, mid+1, end);

// }

// let arr=[1, 2, 4, 5, 7, 8, 9];
// // arr.sort(function(a, b){return a-b});
// let x=4;
// if(recursiveFunction(arr, x, 0, arr.length-1))
// document.write("element found!<br>");
// else document.write("element not found!");

// let x=6;
// if(recursiveFunction(arr, x, 0, arr.length-1))
// document.write("element found!<br>");
// else document.write("element not found!");


//-------------------------------------------------------------------------array--------------------
// const arr=["banana", "apple", "orange", "mango"];
// arr.push("lemon");
// arr[1]="pinapple";
// delete arr[2];

// const boys=["kavi", "vicky", "bala"];
// const girls=["gobi", "sasi", "nisha"];
// const b_g=["rajini", "kamal"]
// const both=boys.concat(girls,b_g);
// console.log(both);


// --------------------------------------------bubble sort--------------------------------

// var arr=[32, 2, 12, 6, 13];
// for (var i=1;i<arr.length;i++){           //intialize first must be i=1;i<arr.length (or)  i=0;i<arr.length-1
//     for(var j=0;j<arr.length-i;j++){       //intilialize must be j=0
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         };
//     };
// };
// document.write(arr);

// -------------------------------------------------------------------------
// funtion myFunction(){

// let text=document.getElementById("demo").innerHTML;
// document.getElementById("demo").innerHTML=text.replace("idiot", "fool");
// }


// ------------------------------------excercise---------------------------------------------
// -----ex--1-----
// var side1=5;
// var side2=6;
// var side3=7;
// var s=(side1+side2+side3)/2;
// var area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);

// -------------------------------------------palindrome-------




// function allPalindromeSubstring(s)
// {
// 	let list = [];


// 		for (let pivot = 0; pivot < s.length; pivot += .5) {

			
// 			let palindromeRadius = pivot - Math.floor(pivot);

			
// 			while ((pivot + palindromeRadius) < s.length
// 				&& (pivot - palindromeRadius) >= 0
// 				&& s[(Math.floor(pivot - palindromeRadius))]
// 						== s[Math.floor(pivot + palindromeRadius)])
// 						{

// 				list.push(s.substring(Math.floor(pivot -
// 				palindromeRadius),
// 				Math.floor(pivot + palindromeRadius + 1)));

// 				palindromeRadius++;
// 			}
// 		}

// 		return list;
// }

// let list = allPalindromeSubstring("malayalam");
// document.write(list.length+"<br>");
// document.write("["+list.join(", ")+"]<br>");




// -------------------------------------------------find in num on digit--------------

// function words(num){

	
// 	let l = num.length

// 	if (l == 0){
// 		document.write("empty string","</br>")
// 		return
// 	}

// 	if (l > 4){
// 		document.write("Length more than 4 is not supported","</br>")
// 		return
// 	}

// 	let single_digits = ["zero", "one", "two", "three",
// 					"four", "five", "six", "seven",
// 					"eight", "nine"]


// 	let two_digits = ["", "ten", "eleven", "twelve",
// 				"thirteen", "fourteen", "fifteen",
// 				"sixteen", "seventeen", "eighteen",
// 				"nineteen"]

// 	let tens_multiple = ["", "", "twenty", "thirty", "forty",
// 					"fifty", "sixty", "seventy", "eighty",
// 					"ninety"]

// 	let tens_power = ["hundred", "thousand"]

// 	document.write(num, ":"," ")

	
// 	if (l == 1){
// 		document.write(single_digits[num.charCodeAt(0) - 48],"</br>")
// 		return
// 	}
// 	let x = 0
// 	while (x < num.length){

// 		if (l >= 3){
// 			if (num.charCodeAt(x) - 48 != 0){
// 				document.write(single_digits[num.charCodeAt(x) - 48]," ")
// 				document.write(tens_power[l - 3]," ")
// 			}

// 			l -= 1
// 		}

// 		else{

// 			if (num.charCodeAt(x) - 48 == 1){
// 				sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x+1) - 48)
// 				document.write(two_digits[sum],"</br>")
// 				return
// 			}
// 			else if (num.charCodeAt(x) - 48 == 2 &&
// 				num.charCodeAt(x + 1) - 48 == 0){
// 				document.write("twenty","</br>")
// 				return
// 			}

// 			else{
// 				i = num.charCodeAt(x) - 48
// 				if(i > 0)
// 					document.write(tens_multiple[i], end=" ")
// 				else
// 					document.write("", end="")
// 				x += 1
// 				if(num.charCodeAt(x) - 48 != 0)
// 					document.write(single_digits[num.charCodeAt(x) - 48],"</br>")
// 			}
// 		}
// 		x += 1
// 	}

// }

// words("20") 
// words("56") 





















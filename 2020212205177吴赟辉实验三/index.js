var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
var p6=document.getElementById('p6');
var p7=document.getElementById('p7');
var p8=document.getElementById('p8');
var ul1=document.getElementById('ul1');
var mb=document.getElementById('m-box');
p1.addEventListener('click',p1click);
p2.addEventListener('click',p2click);
p3.addEventListener('click',p3click);
p4.addEventListener('click',p4click);
p5.addEventListener('click',p5click);
p6.addEventListener('click',p6click);
p7.addEventListener('click',p7click);

function sequance(aLi){
	for(var i=0; i<aLi.length; i++){
		(function(j){
			aLi[j].onclick = function(){
				alert(j);
			}
		}(i))
	}
}
var aLi = document.getElementsByTagName("li");
sequance(aLi);
function p1click(e){
	p1.style.color='red';
}	
function p2click(e){
	var h1=document.getElementById('date');
	let x=new Date;
	h1.innerHTML= x.getFullYear()+"-";
	let mon=x.getMonth()+1;
	let day=x.getDate();
	if(mon<10) h1.innerHTML=h1.innerHTML+"0"+mon+"-";
	else h1.innerHTML=h1.innerHTML+mon+"-";
	if(day<10) h1.innerHTML=h1.innerHTML+"0"+day;
	else h1.innerHTML=h1.innerHTML+day;
}
function p3click(e){
	for(var i=0; i<aLi.length; i++){
		aLi[i].classList.add("fn-active");
	}
}	
function p4click(e){
	ul1.removeChild(p8);
}	
function p5click(e){
	window.open('https://ai.taobao.com/?pid=mm_124190590_30248727_111528700405&union_lens=lensId%3APUB%401627102153%400b0b8b4d_0f7f_17ad6d88a39_05d3%4001');
}	
function p6click(e){
	var para=document.createElement("li");
    var node=document.createTextNode("p9");
    para.appendChild(node);
    var element=document.getElementById("ul1");
    element.appendChild(para);
}	
function p7click(e){
	mb.width=window.innerHeight;
}	
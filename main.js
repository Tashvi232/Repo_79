 s1=[];
 function submit() {
  var n1=document.getElementById("student1").value;
  var n2=document.getElementById("student2").value;
  var n3=document.getElementById("student3").value;
  var n4=document.getElementById("student4").value;
 s1.push(n1);
 s1.push(n2);
 s1.push(n3);
 s1.push(n4);
 console.log(s1); 
 document.getElementById("names").innerHTML=s1;
 document.getElementById("su").style.display="none";
 document.getElementById("sort").style.display="inline-block";
}
function sorting() {
 s1.sort();
 document.getElementById("names").innerHTML=s1;
}

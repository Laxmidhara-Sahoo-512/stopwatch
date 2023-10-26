let [hour,min,sec]=[0,0,0];
let time=document.getElementById("time");
function show(){
  sec++;
  if(sec==60){
    sec=0;
    min++;
     if(min==60){
        min=0;
        hour++;
     }
  }
  let h=hour<10? ("0"+hour):hour;
  let m=min<10? ("0"+min):min;
  let s=sec<10? ("0"+sec):sec;
  time.innerHTML=h+":"+m+":"+s;
  
}
function startwatch(){
    t=setInterval(show,1000);
}
 function stopwatch(){
    clearInterval(t);
 }
 function reset(){
    hour=0;min=0;sec=0;
    time.innerHTML="00:00:00";
 }

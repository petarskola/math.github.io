var res;
if(localStorage.getItem("HighScore")==null)
  localStorage.setItem("HighScore",0);

hscoreP.innerHTML="highscore: " + localStorage.getItem("HighScore");

function restart()
{
    var x1=Math.floor(Math.random()*101);
    var x2=Math.floor(Math.random()*101);
    n1.innerHTML=x1;
    n2.innerHTML=x2;

    var op;
    Math.round((Math.random()))?( op="+", res = x1+x2 ): (op="-", res = x1-x2);
    ope.innerHTML=op;
}

restart();
document.getElementById("ans").focus();
var input = document.getElementById("ans");
var scoreShow = document.getElementById("scoreP");
var score = 0;

var timeShow = document.getElementById("timeP");
var date = new Date();
date.setSeconds(10);
date.setMilliseconds(0);
timeShow.innerHTML=
(((date.getSeconds())>=10)? date.getSeconds() : "0"+date.getSeconds() )
+":"+
(((date.getMilliseconds())>=10)? date.getMilliseconds()/10 : "0"+date.getMilliseconds()/10);

var inter;

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    tick();
    if(input.value!=res)
        over();
    else
    {
        input.value="";
        restart();
        date.setSeconds(10);
        date.setMilliseconds(0);
        clearInterval(inter);
        inter=setInterval(tick,10);
        score++;
        scoreShow.innerHTML="score: "+score;
        input.placeholder="";
        if(score>localStorage.getItem("HighScore")*1)
        {
          localStorage.setItem("HighScore",score);
          hscoreP.innerHTML="highscore: "+localStorage.getItem("HighScore");
        }
    }
  }
});

function tick()
{
    
  date.setMilliseconds(date.getMilliseconds()-10);
  timeShow.innerHTML=
  (((date.getSeconds())>=10)? date.getSeconds() : "0"+date.getSeconds() )
  +":"+
  (((date.getMilliseconds())>=10)? date.getMilliseconds()/10 : "0"+date.getMilliseconds()/10);
  
  if(date.getSeconds()<=0&&date.getMilliseconds()<=0)
    over();
}

function over()
{
  clearInterval(inter);
  timeShow="00:00";
  date.setSeconds(10);
  date.setMilliseconds(0);
  input.style.backgroundColor="#C84B31";
  input.readOnly=true;
  input.placeholder="game over :(";
  butt.style.width="300px";
  butt.style.borderWidth="5px";
  butt.focus();
}

function refresh()
{
  location.replace(location.href);
}

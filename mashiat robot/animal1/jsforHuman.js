var clickAudio = document.getElementById("clickAudio");

function playClickAudio() {
    
    if (clickAudio.paused) {
        clickAudio.play();
    } else {
        clickAudio.pause();
        clickAudio.currentTime = 0; // Reset audio to the beginning
        clickAudio.play();
}



}
var box0 = document.getElementById('div0');
var box1 = document.getElementById('div1');
var box2 = document.getElementById('div2');
var box3 = document.getElementById('div3');
var box4 = document.getElementById('div4');
var box5 = document.getElementById('div5');
var box6 = document.getElementById('div6');
var box7 = document.getElementById('div7');
var box8 = document.getElementById('div8');
box0.addEventListener("click", playClickAudio);
box1.addEventListener("click", playClickAudio);
box2.addEventListener("click", playClickAudio);
box3.addEventListener("click", playClickAudio);
box4.addEventListener("click", playClickAudio);
box5.addEventListener("click", playClickAudio);
box6.addEventListener("click", playClickAudio);
box7.addEventListener("click", playClickAudio);
box8.addEventListener("click", playClickAudio);


var iframe1 = document.createElement("iframe");
var iframe2 = document.createElement("iframe");
iframe1.src = "cross.html";
iframe2.src = "Tcir.html";


iframe1.width = "100%";
iframe1.height = "100%";
iframe2.height = "100%";
iframe2.width = "100%";
iframe1.frameBorder = "0";
iframe2.frameBorder = "0";

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var i;
for (i = 0; i < 9; i++)
    arr[i] = document.getElementsByClassName("div")[i];

var click = 1;

arr[0].onclick= function(){
if(click%2==0){
arr[0].appendChild(iframe1.cloneNode(true));

twoD[0][0]=1;
}
else{
arr[0].appendChild(iframe2.cloneNode(true));
twoD[0][0]=2;

}

click++;
check_Game_O();
check_Game_X();
}


arr[1].onclick= function(){
if(click%2==0){
arr[1].appendChild(iframe1.cloneNode(true));

twoD[0][1]=1;
}
else{
arr[1].appendChild(iframe2.cloneNode(true));
twoD[0][1]=2;

}

click++;

check_Game_O();
check_Game_X();

}
arr[2].onclick= function(){
if(click%2==0){
arr[2].appendChild(iframe1.cloneNode(true));

twoD[0][2]=1;
}
else{
arr[2].appendChild(iframe2.cloneNode(true));
twoD[0][2]=2;

}
click++;

check_Game_O();
check_Game_X();
}

arr[3].onclick= function(){
if(click%2==0){
arr[3].appendChild(iframe1.cloneNode(true));

twoD[1][0]=1;
}
else{
arr[3].appendChild(iframe2.cloneNode(true));
twoD[1][0]=2;

}
click++;

check_Game_O();
check_Game_X();
}

arr[4].onclick= function(){
if(click%2==0){
arr[4].appendChild(iframe1.cloneNode(true));

twoD[1][1]=1;
}
else{
arr[4].appendChild(iframe2.cloneNode(true));
twoD[1][1]=2;

}
click++;

check_Game_O();
check_Game_X();


}

arr[5].onclick= function(){
if(click%2==0){
arr[5].appendChild(iframe1.cloneNode(true));

twoD[1][2]=1;
}
else{
arr[5].appendChild(iframe2.cloneNode(true));
twoD[1][2]=2;

}
click++;

check_Game_O();
check_Game_X();

}

arr[6].onclick= function(){
if(click%2==0){
arr[6].appendChild(iframe1.cloneNode(true));

twoD[2][0]=1;
}
else{
arr[6].appendChild(iframe2.cloneNode(true));
twoD[2][0]=2;

}
click++;

check_Game_O();
check_Game_X();

}

arr[7].onclick= function(){
if(click%2==0){
arr[7].appendChild(iframe1.cloneNode(true));

twoD[2][1]=1;
}
else{
arr[7].appendChild(iframe2.cloneNode(true));
twoD[2][1]=2;

}
click++;

check_Game_O();
check_Game_X();

}

arr[8].onclick= function(){
if(click%2==0){
arr[8].appendChild(iframe1.cloneNode(true));

twoD[2][2]=1;
}
else{
arr[8].appendChild(iframe2.cloneNode(true));
twoD[2][2]=2;

}
click++;

check_Game_O();
check_Game_X();

}









var twoD = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];







  function anim_1(){
    box0.classList.add('winning_Anim');
    box1.classList.add('winning_Anim');
    box2.classList.add('winning_Anim');

  }
  function anim_2(){
    box3.classList.add('winning_Anim');
    box4.classList.add('winning_Anim');
    box5.classList.add('winning_Anim');

  }
  function anim_3(){
    box6.classList.add('winning_Anim');
    box7.classList.add('winning_Anim');
    box8.classList.add('winning_Anim');

  }
  function anim_4(){
    box0.classList.add('winning_Anim');
    box3.classList.add('winning_Anim');
    box6.classList.add('winning_Anim');

  }
  function anim_5(){
    box1.classList.add('winning_Anim');
    box4.classList.add('winning_Anim');
    box7.classList.add('winning_Anim');

  }
  function anim_6(){
    box2.classList.add('winning_Anim');
    box5.classList.add('winning_Anim');
    box8.classList.add('winning_Anim');

  }
  function anim_8(){
    box2.classList.add('winning_Anim');
    box4.classList.add('winning_Anim');
    box6.classList.add('winning_Anim');

  }
  function anim_7(){
    box0.classList.add('winning_Anim');
    box4.classList.add('winning_Anim');
    box8.classList.add('winning_Anim');

  }



  function check_Game_O(){
    if(twoD[0][0]==1 && twoD[0][1]==1 && twoD[0][2]==1)
    anim_1();
    else if(twoD[1][0]==1 && twoD[1][1]==1 && twoD[1][2]==1)
    anim_2();
    else if(twoD[2][0]==1 && twoD[2][1]==1 && twoD[2][2]==1)
    anim_3();

    else if(twoD[0][0]==1 && twoD[1][0]==1 && twoD[2][0]==1)
    anim_4();
    else if(twoD[0][1]==1 && twoD[1][1]==1 && twoD[2][1]==1)
    anim_5();
    else if(twoD[0][2]==1 && twoD[1][2]==1 && twoD[2][2]==1)
    anim_6();

    else if(twoD[0][0]==1 && twoD[1][1]==1 && twoD[2][2]==1)
    anim_7();
    else if(twoD[0][2]==1 && twoD[1][1]==1 && twoD[2][0]==1)
    anim_8();

    
  }


  function check_Game_X(){
    if(twoD[0][0]==2 && twoD[0][1]==2 && twoD[0][2]==2)
    anim_1();
    else if(twoD[1][0]==2 && twoD[1][1]==2 && twoD[1][2]==2)
    anim_2();
    else if(twoD[2][0]==2 && twoD[2][1]==2 && twoD[2][2]==2)
    anim_3();

    else if(twoD[0][0]==2 && twoD[1][0]==2 && twoD[2][0]==2)
    anim_4();
    else if(twoD[0][1]==2 && twoD[1][1]==2 && twoD[2][1]==2)
    anim_5();
    else if(twoD[0][2]==2 && twoD[1][2]==2 && twoD[2][2]==2)
    anim_6();

    else if(twoD[0][0]==2 && twoD[1][1]==2 && twoD[2][2]==2)
    anim_7();
    else if(twoD[0][2]==2 && twoD[1][1]==2 && twoD[2][0]==2)
    anim_8();

    
  }



  



function if1() {
    container.appendChild(iframe1);
}


// function if2(){

// setTimeout(if2,1000);
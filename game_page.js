
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
    get_word = document.getElementById("word").value ;
    word = get_word.toLowerCase() ;
    charAt1 = word.charAt(1) ;
    length = Math.floor(word.length/2) ;
    charAt2 = word.charAt(length) ;
    minus = word.length-1 ;
    charAt3 = word.charAt(minus) ;
    r1 = word.replace(charAt1,"_") ;
    r2 = r1.replace(charAt2,"_") ;
    r3 = r2.replace(charAt3,"_") ;
    question_word = "<h4 id='word_display'> Q. "+r3+" </h4>" ;
    input_box = "<br>Answer : <input type= 'text' id= 'input_check_box'>" ;
    check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>" ;
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row ;
    document.getElementById("word").value = "" ;
}

qt="player1" ;
at="player2"

function check(){
    a=document.getElementById("input_check_box").value ;
    a1 = a.toLowerCase() ;
    if(a1==word){
        if(at=="player1"){
            player1_score = player1_score+1 ;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score = player2_score+1 ;
            document.getElementById("player2_score").innerHTML = player2_score
        
        }
    }
    if(qt=="player1"){
    qt="player2"
        document.getElementById("player_question").innerHTML ="question turn "+player2_name
    }
    else{
        qt="player1"
        document.getElementById("player_question").innerHTML ="question turn "+player1_name
    
    }
    if(at=="player1"){
        at="player2"
            document.getElementById("player_answer").innerHTML ="answer turn "+player2_name
        }
        else{
            at="player1"
            document.getElementById("player_answer").innerHTML ="answer turn "+player1_name
        
        }
        document.getElementById("output").innerHTML=""
}
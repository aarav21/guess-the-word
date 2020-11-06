player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn:" + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn:" + player2_name;

function send() {
    word = document.getElementById("input_word").value;
    word_case = word.toLowerCase();
    console.log(word_case);

    charAt1 = word_case.charAt(1);
    console.log(charAt1);

    lenght = Math.floor(word_case.length / 2);

    charAt2 = word_case.charAt(lenght);
    console.log(charAt2);

    charAt3 = word_case.charAt(word_case.length - 1);
    console.log(charAt3);

    remove_charAt1 = word_case.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input = "<br> Answer: <input type='text' id='inputCheckbox'>";
    button = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {

    get_answer = document.getElementById("inputCheckbox").value;
    answer_lowerCase = get_answer.toLowerCase();

    if (word_case == answer_lowerCase) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1Score").innerHTML = player1_score;
        }

        else if (answer_turn == "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2Score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player2_name;
    }

    else if (question_turn == "player2") {
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player2_name;
    }

    else if (answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

}

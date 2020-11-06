function user(){
    player1 = document.getElementById("player1NameInput").value;
    player2 = document.getElementById("player2NameInput").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "main.html";
    
}
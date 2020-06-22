import { disableCanvas, hideControls, enableCavas, showControls, resetCanvas } from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotif");

const addPlayers = (players) =>{
    board.innerHTML = "";
    players.forEach(player => {
    const playerElement = document.createElement("span");
    playerElement.innerText= `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
});
};

const setNotif = (text) => {
    notifs.innerHTML = "";
    notifs.innerHTML = text;
}

export const handlePlayerUpdate = ({sockets}) => addPlayers(sockets);
export const handleGameStarted = () => {
    setNotif("");
    disableCanvas();
    hideControls();
    enableChat();
}
export const handleLeaderNotif = ({word}) =>{
    enableCavas();
    showControls();
    disableChat();
    notifs.innerText = `You are the Painter, Paint : ${word}`;
}

export const handleGameEnded = () => {
    setNotif("Game ended.");
    disableCanvas();
    disableCanvas();
    resetCanvas();
}

export const handleGameStarting = () =>{
    setNotif("Game will start soon")
}
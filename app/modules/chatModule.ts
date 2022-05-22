import { FixMeLater } from "interfaces/migration";
import io from "socket.io-client";

export const socket = io("https://8a01-115-75-223-58.ngrok.io");

export const sendSocketMessage = (messageObject: FixMeLater) => {
	socket.emit("private_message", messageObject);
};

socket.on("connect", () => {
	console.log(socket.id); // true
});

socket.on("connect_error", (err) => {
	console.log("connect error ne", err);
	socket.disconnect();
});

socket.on("connect_failed", (err) => console.log("failed connect", err));
socket.on("disconnect", (err) => console.log("disconect cmnr", err));

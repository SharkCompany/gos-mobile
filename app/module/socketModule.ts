import { io } from "socket.io-client";
import { API_ENDPOINT, LOCALSTORAGE_USER_KEY } from "app/constants";
import { ISocket } from "./type";
import { getUserFromLocal } from "app/utils/AppAsyncStorage";
import { AuthUserModel } from "models/User.model";
import { FixMeLater } from "interfaces/migration";

export const getSocket = () => {
	// const token = getUserFromLocal();
	return io(API_ENDPOINT, {
		query: { token: "Hello" },
	});
	// let socket: FixMeLater = null;
	// token.then((data: AuthUserModel | null) => {
	// 	if (data) {
	// 		socket = io(API_ENDPOINT, {
	// 			query: { token: data.tokens.accessToken },
	// 		});
	// 	}

	// 	if (socket) {
	// 		socket.on("connect_error", (err: any) => {
	// 			console.log("Connect error ne", err);
	// 			socket.close();
	// 		});
	// 		socket.on("connect_failed", (err: any) =>
	// 			console.log("connect failed ne ")
	// 		);
	// 		socket.on("disconnect", (err: any) => console.log("disconect ne "));
	// 	}

	// 	return socket;
	// });
};

export class SocketCreator implements ISocket {
	private socket: any = null;
	constructor(userToken: string) {
		if (this.socket) {
			return this.socket;
		} else {
			this.socket = io("https://bffa-42-112-228-253.ap.ngrok.io", {
				query: { token: userToken },
			});
		}
	}
	initConnect(userToken: string): void {
		if (this.socket) {
			return this.socket;
		} else {
			this.socket = io("https://bffa-42-112-228-253.ap.ngrok.io", {
				query: { token: userToken },
			});
		}
	}
}

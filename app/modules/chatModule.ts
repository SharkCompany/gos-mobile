import { getUserFromLocal } from "app/utils/AppAsyncStorage";
import { FixMeLater } from "interfaces/migration";
import { AuthUserModel } from "models/User.model";
import { io } from "socket.io-client";

export let socket: any;

async function getUserId() {
	const adminUser = await getUserFromLocal();
	if (adminUser) {
		const user: AuthUserModel = adminUser;
		setDataGiDo(user.info.id);
		return user.info.id;
	}
}

const setDataGiDo = (data: any) => {
	socket = io("https://c2a6-115-75-223-58.ngrok.io", {
		reconnectionDelayMax: 10000,
		query: {
			id: data,
		},
	});
};

const socketInstance = () => {
	const userId = getUserId().then((data) => {
		console.log("id ne", data);
		setDataGiDo(data);
	});

	// const adminUser = await getUserFromLocal();
	// 	if (adminUser) {
	// 		const user: AuthUserModel = adminUser;
	// 		token = user.tokens.accessToken;
	// 	}
};

export const sendSocketMessage = (messageObject: FixMeLater) => {
	socket.emit("private_message", messageObject);
};

if (socket) {
	socket.on("connect", () => {
		console.log(socket.id); // true
	});

	socket.on("connect_error", (err: any) => {
		console.log("connect error ne", err);
		// socket.disconnect();
	});

	socket.on("connect_failed", (err: any) =>
		console.log("failed connect", err)
	);
	socket.on("disconnect", (err) => console.log("disconect cmnr", err));
}

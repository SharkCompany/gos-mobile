export interface MessageReceieved {
	id: number | string;
	message: string;
	senderId: number | string;
	conversationId: number | string;
	createdAt: any;
}

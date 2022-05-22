export interface MessageModel {
	id?: string;
	message: string;
	senderId: number;
	conversationId: number;
	createdAt?: string;
}

import { CoreMessage } from 'ai';
import mongoose, { Document, Schema } from 'mongoose';

type ChatDocument = Document & {
    uuid: string;
    messages: CoreMessage[];
    createdAt: Date;
    updatedAt: Date;
}

const chatSchema = new Schema<ChatDocument>(
    {
        /*uuid: {
            type: String,
            required: true,
            unique: true
        },*/
        messages: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Chat = mongoose.model<ChatDocument>('Chat', chatSchema);
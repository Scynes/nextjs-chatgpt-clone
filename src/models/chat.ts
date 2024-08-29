import { CoreMessage } from 'ai';
import mongoose, { Document, Schema } from 'mongoose';

type ChatDocument = Document & {
    key: string;
    messages: CoreMessage[];
    createdAt: Date;
    updatedAt: Date;
}

const chatSchema = new Schema<ChatDocument>(
    {
        key: {
            type: String,
            required: true
        },
        messages: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Chat = mongoose.models?.Chat || mongoose.model<ChatDocument>('Chat', chatSchema);
'use server';

import mongoose, { Connection } from 'mongoose'

let connection: Connection | null = null;

export const connect = async () => {

    if (connection) return connection;

    try {

        connection = (await mongoose.connect(process.env.NEXT_PRIAVTE_MONGODB_URI || '')).connection;

        return connection;

    } catch (error) {

        console.error('Error while connecting to database', error);
    }
}
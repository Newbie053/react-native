import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
    .setProject('6931346e002adeb4f6aa')
    .setPlatform('dev.me.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)
"use server";

import User, { IUser } from "@/src/database/user.model";
import { connectToDatabase } from "../mongoose";

// model dùng phương thức để tạo ra collection
export default async function createUser(params: IUser) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}

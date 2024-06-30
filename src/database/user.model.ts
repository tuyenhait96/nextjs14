import { Document, Schema, model, models } from "mongoose";
import { EUserRole, EUserStatus } from "../utils/enums";

// clerkId
export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  // khóa ngoại
  courses: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email_address: {
    type: String,
  },
  avatar: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      // ref: liet kết tới các bảng khác, bảng khác đặt tên là Course
      ref: "Course",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    // Object.values: lấy ra 1 trong các enum
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    // Object.values: lấy ra 1 trong các enum
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
});

// Mục đích: khai báo model - sau khí có model thì tạo action
// models:  đối tương trong mongoose, nó sẽ chứa 1 hết tất cả dã được đăng kí trước đó 
// Hiện tại dieu kiện đầu tiền chứa đang kí nó sẽ nhảy vào dkien thứ 2
// nó sẽ dùng Model User, lấy userSchema ra dùng

const User = models.User || model("User", userSchema);
export default User;

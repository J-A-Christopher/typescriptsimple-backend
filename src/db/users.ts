import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, required: true, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export const getUsers = () => UserModel.find();

export const getUserByEmail = (email: string) => UserModel.findOne({ email });

export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });

export const getUserById = (id: string) => UserModel.findById(id);

export const createUser = async (values: Record<string, any>) => {
    try {
      const user = await new UserModel(values).save();
      return user.toObject();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  };
  
  
export const deleteUserById = (id: String) => UserModel.findOneAndDelete({ _id: id });

export const updateUserById = async (id:string,values: Record<string, any>) => {
    try {
        const user = await  UserModel.findByIdAndUpdate(id, values);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update user');
    }
};
  


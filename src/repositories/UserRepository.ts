import User, { IUser } from '../models/userModel'; // Assuming User is a Mongoose model

class UserRepository {
    
  async findById(userId: string) {
    return await User.findById(userId);
  }

  async findAll() {
    return await User.find({});
  }

  async create(userData: Partial<IUser>) {
    const user = new User(userData);
    return await user.save();
  }

  async update(userId: string, updateData: Partial<IUser>) {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async delete(userId: string) {
    return await User.findByIdAndDelete(userId);
  }
}

export default new UserRepository();

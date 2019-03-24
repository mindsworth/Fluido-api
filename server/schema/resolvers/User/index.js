// user models
import User from '../../../models/User';

export default {
  Query: {
    user: (root, args) => {
      User.findOne(args)
        .then(response => console.log('Response=======>', response))
        .catch(err => console.log('Error=======>', err));
    }
  },

  Mutation: {
    addUser: (root, { _id, name, email }) => {
      const newUser = new User({ _id, name, email });

      return newUser.save();
    }
  }
};

import models from '../models';

const {
  User,
  Token,
  Province,
  District,
  Sector,
  Task,
  UserTask
} = models;

/**
 * This class contains
 * all methods required to save/edit/retrieve/delete
 * the user's data
 */
class UserDB {
  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async findUser(attr, val) {
    const userExists = await User.findOne({
      where: { [attr]: val },
      include:
      [
        {
          model: Token,
          as: 'token',
          attributes: ['id', 'value']
        },
        {
          model: Province,
          as: 'province',
          attributes: ['id', 'name']
        },
        {
          model: District,
          as: 'district',
          attributes: ['id', 'name']
        },
        {
          model: Sector,
          as: 'sector',
          attributes: ['id', 'name']
        },
        {
          model: Task,
          as: 'tasks',
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ['id', 'title', 'createdAt', 'updatedAt'],
        },
        {
          model: Task,
          as: 'employeeTasks',
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ['id', 'title', 'createdAt', 'updatedAt'],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: UserTask,
            as: 'UserTasks',
            attributes: ['taskId'],
          }
        }
      ]
    });
    return userExists;
  }

  /**
   * Finds the user's username if he/she exists.
   * @param {string} username users table field.
   * @returns {object} The users's data.
   */
  static async confirm(username) {
    const verifiedUser = await User.update({ isVerified: true }, { where: { username } });
    return verifiedUser;
  }

  /**
   * Saves the user in the DB.
   * @param {object} entry The request sent by a user.
   * @returns {object} The users's data.
   */
  static async saveUser(entry) {
    const acceptedUser = await User.create(
      {
        ...entry, isVerified: false, createdAt: new Date(), updatedAt: new Date()
      },
      {
        fields: [
          'id', 'fullname', 'email', 'username', 'gender', 'password', 'locationIds', 'phoneNumber', 'nationalId', 'passportId', 'role', 'isVerified', 'createAt', 'updatedAt'
        ]
      }
    );
    return acceptedUser;
  }
}

export default UserDB;

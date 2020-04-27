import models from '../models';

const { user, token } = models;

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
  static async userExists(attr, val) {
    const userExists = await user.findOne({
      where: { [attr]: val },
      include:
      [
        {
          model: token,
          as: 'token',
          attributes: ['id', 'value']
        }
      ]
    });
    return userExists;
  }

  /**
   * Finds the user's email if he/she exists.
   * @param {string} email users table field.
   * @returns {object} The users's data.
   */
  static async confirm(email) {
    const verifiedUser = await user.update({ isVerified: true }, { where: { email } });
    return verifiedUser;
  }

  /**
   * Saves the user in the DB.
   * @param {object} entry The request sent by a user.
   * @returns {object} The users's data.
   */
  static async saveUser(entry) {
    const acceptedUser = await user.create(
      {
        ...entry, isVerified: false, createdAt: new Date(), updatedAt: new Date()
      },
      {
        fields: [
          'fullname', 'email', 'username', 'gender', 'password', 'locationIds', 'phoneNumber', 'nationalId', 'passportId', 'role', 'isVerified', 'createAt', 'updatedAt'
        ]
      }
    );
    return acceptedUser;
  }
}

export default UserDB;

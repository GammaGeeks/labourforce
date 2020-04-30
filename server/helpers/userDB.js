import models from '../models';

const { user, token, province, district, sector } = models;

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
    const userExists = await user.findOne({
      where: { [attr]: val },
      include:
      [
        {
          model: token,
          as: 'token',
          attributes: ['id', 'value']
        },
        {
          model: province,
          as: 'province',
          attributes: ['id', 'name']
        },
        {
          model: district,
          as: 'district',
          attributes: ['id', 'name']
        },
        {
          model: sector,
          as: 'sector',
          attributes: ['id', 'name']
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
    const verifiedUser = await user.update({ isVerified: true }, { where: { username } });
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
          'id', 'fullname', 'email', 'username', 'gender', 'password', 'locationIds', 'phoneNumber', 'nationalId', 'passportId', 'role', 'isVerified', 'createAt', 'updatedAt'
        ]
      }
    );
    return acceptedUser;
  }
}

export default UserDB;

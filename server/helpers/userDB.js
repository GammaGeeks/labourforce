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
}

export default UserDB;

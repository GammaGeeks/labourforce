import models from '../models';

const { code } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class CodeDB {
  /**
   * find token into table in the DB
   * @param {string} validCode confirmation code
   * @param {integer} userId user Id
   * @returns {string} The users's token.
   */
  static async findCode(validCode, userId) {
    const savedCode = await code.findOne({
      where: { value: validCode, userId }, order: [['createdAt', 'DESC']]
    });
    return savedCode;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {string} validCode The code for user.
   * @param {integer} userId The user id.
   * @returns {string} The users's code.
   */
  static async saveCode(validCode, userId) {
    const validationCode = await code.create({
      userId,
      value: validCode,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fields: [
        'id', 'userId', 'value', 'createAt', 'updatedAt'
      ]
    });

    return validationCode;
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {string} validCode The request sent by a user.
   * @param {integer} userId The user id.
   * @returns {string} The users's token.
   */
  static async deleteValidCode(validCode, userId) {
    await code.destroy({ where: { value: validCode, userId } });
  }
}

export default CodeDB;

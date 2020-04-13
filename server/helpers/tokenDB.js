import models from '../models';

const { token } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class TokenDB {
  /**
   * insert generatyed token into table in the DB.
   * @param {string} jwtToken The token for user.
   * @param {integer} userId The user id.
   * @returns {string} The users's token.
   */
  static async saveToken(jwtToken, userId) {
    await token.create({
      value: jwtToken,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}

export default TokenDB;

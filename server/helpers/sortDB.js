import models from '../models';

const { Collection, Sort } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class SortDB {
  /**
   * find token into table in the DB
   * @param {string} attr confirmation code
   * @param {string} value user Id
   * @returns {string} The users's token.
   */
  static async findSort(attr, value) {
    const savedSort = await Sort.findOne({
      where: { [attr]: value }, order: [['createdAt', 'DESC']]
    });
    return savedSort;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {string} sort The code for user.
   * @returns {string} The users's code.
   */
  static async saveSort(sort) {
    const savedSort = await Sort.create({
      ...sort,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fields: [
        'id', 'name', 'createAt', 'updatedAt'
      ]
    });

    return savedSort;
  }

  /**
   * insert generated code into table in the DB.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} sorts request data.
   */
  static async findAllPageSorts(skip, start) {
    const sorts = await Sort.findAndCountAll({
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: Collection,
          as: 'collections',
          attributes: [
            'id',
            'name'
          ]
        }
      ]
    });

    return sorts;
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {integer} id The sort id
   * @returns {string} The users's token.
   */
  static async deleteSort(id) {
    await Sort.destroy({ where: { id } });
  }
}

export default SortDB;

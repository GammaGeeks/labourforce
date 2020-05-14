import models from '../models';

const { Collection, Sort } = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class CollectionDB {
  /**
   * find token into table in the DB
   * @param {string} attr confirmation code
   * @param {string} value user Id
   * @returns {string} The users's token.
   */
  static async findCollection(attr, value) {
    const savedCollection = await Collection.findOne({
      where: { [attr]: value }, order: [['createdAt', 'DESC']]
    });
    return savedCollection;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {string} collection The code for user.
   * @returns {string} The users's code.
   */
  static async saveCollection(collection) {
    const savedCollection = await Collection.create({
      ...collection,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fields: [
        'id', 'name', 'sortId', 'createAt', 'updatedAt'
      ]
    });

    return savedCollection;
  }

  /**
   * insert generated code into table in the DB.
   * @returns {object} collections request data.
   */
  static async findAllCollections() {
    const collections = await Collection.findAll({
      order: [['id', 'DESC']],
      // include:
      // [
      //   {
      //     model: User,
      //     as: 'user',
      //     attributes: [
      //       'id',
      //       'fullname',
      //       'phoneNumber',
      //       'username',
      //       'email'
      //     ]
      //   },
      //   {
      //     model: Province,
      //     as: 'province',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: District,
      //     as: 'district',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: Sector,
      //     as: 'sector',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: Collection,
      //     as: 'collection',
      //     attributes: ['id', 'name']
      //   }
      // ]
    });

    return collections;
  }

  /**
   * insert generated code into table in the DB.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} collections request data.
   */
  static async findAllPageCollections(skip, start) {
    const collections = await Collection.findAndCountAll({
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: Sort,
          as: 'sort',
          attributes: [
            'id',
            'name'
          ]
        },
      //   {
      //     model: Province,
      //     as: 'province',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: District,
      //     as: 'district',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: Sector,
      //     as: 'sector',
      //     attributes: ['id', 'name']
      //   },
      //   {
      //     model: Collection,
      //     as: 'collection',
      //     attributes: ['id', 'name']
      //   }
      ]
    });

    return collections;
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {integer} id The collection id
   * @returns {string} The users's token.
   */
  static async deleteCollection(id) {
    await Collection.destroy({ where: { id } });
  }
}

export default CollectionDB;

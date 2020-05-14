import models from '../models';

const {
  Task,
  Province,
  District,
  Sector,
  Collection,
  User
} = models;

/**
 * class to deal with all needed operations
 * on the token table
 */
class TaskDB {
  /**
   * find token into table in the DB
   * @param {string} attr attribute
   * @param {integer} value value
   * @returns {string} The users's token.
   */
  static async findTask(attr, value) {
    const savedCode = await Task.findOne({
      where: { [attr]: value },
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });
    return savedCode;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} provinceId province ID.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllProvinceTasks(provinceId, skip, start) {
    const tasks = await Task.findAndCountAll({
      where: { provinceId },
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });

    return tasks;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} sectorId sector ID.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllSectorTasks(sectorId, skip, start) {
    const tasks = await Task.findAndCountAll({
      where: { sectorId },
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });

    return tasks;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} districtId district ID.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllDistrictTasks(districtId, skip, start) {
    const tasks = await Task.findAndCountAll({
      where: { districtId },
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });

    return tasks;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} userId user ID.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllEmployerTasks(userId, skip, start) {
    const tasks = await Task.findAndCountAll({
      where: { userId },
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });

    return tasks;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {integer} skip limit.
   * @param {integer} start from.
   * @returns {object} groups request data.
   */
  static async findAllTasks(skip, start) {
    const tasks = await Task.findAndCountAll({
      limit: skip,
      offset: start,
      order: [['id', 'DESC']],
      include:
      [
        {
          model: User,
          as: 'user',
          attributes: [
            'id',
            'fullname',
            'phoneNumber',
            'username',
            'email'
          ]
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
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name']
        }
      ]
    });

    return tasks;
  }

  /**
   * insert generatyed code into table in the DB.
   * @param {string} task The code for user.
   * @param {integer} userId The user id.
   * @returns {string} The users's code.
   */
  static async saveTask(task, userId) {
    const savedTask = await Task.create({
      ...task,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fields: [
        'id',
        'title',
        'description',
        'provinceId',
        'districtId',
        'sectorId',
        'collectionId',
        'userId',
        'salary',
        'startsAt',
        'endsAt',
        'createAt',
        'updatedAt'
      ]
    });

    return savedTask;
  }

  /**
   * delete token from validtoken table in the DB.
   * @param {string} id The request sent by a user.
   * @param {integer} userId The user id.
   * @returns {string} The users's token.
   */
  static async deleteTask(id, userId) {
    await Task.destroy({ where: { id, userId } });
  }
}

export default TaskDB;

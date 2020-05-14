import taskDB from '../helpers/taskDB';
import pagination from '../helpers/paginateHelper';
/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class TaskController {
  /**
   * This method handle the create task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async createTask(req, res) {
    const { id } = req.user;
    const task = await taskDB.saveTask(req.body, parseInt(id, 10));
    return res.status(201).json({
      status: 201,
      message: "The task was created successfully",
      data: task
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async viewTask(req, res) {
    const { id } = req.params;
    const task = await taskDB.findTask('id', parseInt(id, 10));
    if (!task) {
      return res.status(404).json({
        status: 404,
        error: "The task was not found"
      });
    }
    return res.status(201).json({
      status: 201,
      message: "The task was created successfully",
      data: task
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewDistrictTasks(req, res, next) {
    const { districtId } = req.params;
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const tasks = await taskDB.findAllDistrictTasks(districtId, skip, start);
    const AllData = tasks.rows;
    const countAllData = tasks.count;
    if (tasks.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no tasks yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewProvinceTasks(req, res, next) {
    const { provinceId } = req.params;
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const tasks = await taskDB.findAllProvinceTasks(provinceId, skip, start);
    const AllData = tasks.rows;
    const countAllData = tasks.count;
    if (tasks.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no tasks yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewSectorTasks(req, res, next) {
    const { sectorId } = req.params;
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const tasks = await taskDB.findAllSectorTasks(sectorId, skip, start);
    const AllData = tasks.rows;
    const countAllData = tasks.count;
    if (tasks.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no tasks yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewEmployerTasks(req, res, next) {
    const { id } = req.user;
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const tasks = await taskDB.findAllEmployerTasks(id, skip, start);
    const AllData = tasks.rows;
    const countAllData = tasks.count;
    if (tasks.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no tasks yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewTasks(req, res, next) {
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const tasks = await taskDB.findAllTasks(skip, start);
    const AllData = tasks.rows;
    const countAllData = tasks.count;
    if (tasks.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no tasks yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }
}

export default TaskController;

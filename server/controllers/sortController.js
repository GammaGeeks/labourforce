import sortDB from '../helpers/sortDB';
import pagination from '../helpers/paginateHelper';
/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class SortController {
  /**
   * This method handle the create sort request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async createSort(req, res) {
    const sort = await sortDB.saveSort(req.body);
    return res.status(201).json({
      status: 201,
      message: "The sort was created successfully",
      data: sort
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async viewSorts(req, res) {
    const sorts = await sortDB.findAllSorts();
    if (!sorts) {
      return res.status(404).json({
        status: 404,
        message: `There are no sorts yet`
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Sorts successfully fetched',
      data: sorts
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewPageSorts(req, res, next) {
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const sorts = await sortDB.findAllPageSorts(skip, start);
    const AllData = sorts.rows;
    const countAllData = sorts.count;
    if (sorts.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no sorts yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }
}

export default SortController;

import collectionDB from '../helpers/collectionDB';
import pagination from '../helpers/paginateHelper';
/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class CollectionController {
  /**
   * This method handle the create collection request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async createCollection(req, res) {
    const { sortId } = req.params;
    const collection = await collectionDB.saveCollection({
      name: req.body.name,
      sortId
    });
    return res.status(201).json({
      status: 201,
      message: "The collection was created successfully",
      data: collection
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async viewCollections(req, res) {
    const collections = await collectionDB.findAllCollections();
    if (!collections) {
      return res.status(404).json({
        status: 404,
        message: `There are no collections yet`
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Collections successfully fetched',
      data: collections
    });
  }

  /**
   * This method handle the view task request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next The next middleware.
   * @returns {object} The status and some data of the user.
   */
  static async viewPageCollections(req, res, next) {
    const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
    const collections = await collectionDB.findAllPageCollections(skip, start);
    const AllData = collections.rows;
    const countAllData = collections.count;
    if (collections.rows.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `There are no collections yet`
      });
    }
    req.data = { AllData, countAllData, start, end, pages, skip, paginate };
    next();
  }
}

export default CollectionController;

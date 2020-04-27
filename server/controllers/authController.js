import userDB from '../helpers/userDB';
import PasswordHasher from '../helpers/passwordHasher';
import JWT from '../helpers/JWT';
import { sendmail } from '../helpers/email';

/**
 * This class contains all methods
 * required to handle
 * signup and login and logout endpoints' request.
 */
class AuthController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async signUp(req, res) {
    const emailExists = await userDB.userExists('email', req.body.email);
    const usernameExists = await userDB.userExists('username', req.body.username);

    if (emailExists || usernameExists) {
      return res.status(409).json({
        status: 409,
        error: 'This user already exists, use another email or username'
      });
    }
    req.body.isVerified = false;
    const savedUser = await userDB.saveUser(req.body);
    const {
      fullname, username, email, gender, role
    } = req.body;
    const data = {
      fullname, username, email, gender, role
    };
    await sendmail(savedUser.email, savedUser.fullname);
    return res.status(201).json({
      status: 201,
      message: 'User was created successfully, Verify your email to confirm registration',
      data
    });
  }

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async confirmation(req, res) {
    const checkConfirmation = await userDB.userExists('email', req.params.email);
    if (!checkConfirmation) {
      return res.status(404).json({
        status: 404,
        error: 'User not founded'
      });
    }
    const result = await userDB.confirm(req.params.email);
    if (result) {
      return res.status(200).json({
        status: 200,
        message: 'Email has successfully been verified. You can now login in your account'
      });
    }
  }

  /**
   * This method handle the sign request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async signIn(req, res) {
    const emailExists = await userDB.userExists('email', req.body.email);

    if (emailExists) {
      if (emailExists.isVerified === false) {
        return res.status(401).json({
          status: 401,
          error: 'Please confirm your email before logging in!'
        });
      }

      const passwordExist = await PasswordHasher.checkPassword(req.body.password, emailExists.password);

      if (passwordExist) {
        const token = await JWT.generateToken(
          emailExists.id,
          emailExists.username,
          emailExists.email,
          emailExists.role,
          emailExists.isVerified
        );
        return res.status(201).json({
          status: 201,
          message: 'User has successfully logged in',
          data: {
            token,
            user: {
              id: emailExists.id,
              name: emailExists.name,
              profileImg: emailExists.profileImg,
              username: emailExists.username,
              email: emailExists.email,
              role: emailExists.role
            }
          }
        });
      }
    }

    return res.status(401).json({
      status: 401,
      error: 'Invalid credentials'
    });
  }

  /**
   * This method handle the logout endpoint.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and message.
   * */
  // static async logout(req, res) {
  //   try {
  //     await userDB.deleteValidToken(req.header('token'));
  //     return res.status(200).json({
  //       status: 200,
  //       message: `${req.user.username} successfully signed out.`
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 500,
  //       message: ' something goes wrong ',
  //       error: error.message
  //     });
  //   }
  // }

  /**
   * This method handle the signup request.
   * @param {object} req The http request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  // static async adminSignUp(req, res) {
  //   const emailExists = await userDB.userExists('email', req.body.email);
  //   const usernameExists = await userDB.userExists('username', req.body.username);

  //   if (emailExists || usernameExists) {
  //     return res.status(409).json({
  //       status: 409,
  //       error: 'This user already exists, use another email or username'
  //     });
  //   }
  //   req.body.isVerified = false;
  //   req.body.rememberMe = false;
  //   req.body.role = req.body.role.toUpperCase();
  //   const {
  //     username, email, role, isVerified, createdAt
  //   } = req.body;
  //   const savedUser = await userDB.saveUser(req.body);
  //   await sendmail(savedUser.email, savedUser.name);
  //   return res.status(201).json({
  //     status: 201,
  //     message: 'User was created successfully, Verify your email to confirm registration',
  //     data: {
  //       token: await TokenHelper.generateToken(savedUser.id, username, email, role, isVerified),
  //       createdAt
  //     }
  //   });
  // }
}

export default AuthController;

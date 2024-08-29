import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';


const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, user: userData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createUserIntoDB(
      password,
      userData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
};
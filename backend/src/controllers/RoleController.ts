import { Request, Response } from "express";
import { roles } from "../data/roles";
import { ApiResponse } from "../types/api_response";
import { IUserRole } from "../types/role";

export default class RoleController {
  static getRoles(req: Request, res: Response<ApiResponse<IUserRole[]>>): Response {
    try {
      return res.status(200).json({
        success: true,
        message: 'User roles fetched successfully',
        data: roles,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch roles",
        data: []
      });
    }
  };
}


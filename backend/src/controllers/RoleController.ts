import type { Request, Response } from "express";
import { roles } from "../data/roles.js";
import type { ApiResponse } from "../types/api_response.js";
import type { IUserRole } from "../types/role.js";

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


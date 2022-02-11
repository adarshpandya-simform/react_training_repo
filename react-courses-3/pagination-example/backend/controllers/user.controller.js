import { userModel } from "../models/user.model.js";

// controller for get users route
const getUsers = async (req, res) => {
  // extracting page and handling invalid inputs
  const { page } =
    req.query.page === undefined ||
    req.query.page === "0" ||
    isNaN(req.query.page)
      ? { page: "1" }
      : req.query;

  // setting limit for users per page (currently 10)
  const limit = 10;
  // converting page into pageNum (Integer)
  const pageNum = +page;

  // setting starting index
  const startIndex = (pageNum - 1) * limit;
  //   counting total users
  const total = await userModel.countDocuments({});

  // calculating total pages
  const totalPages = Math.ceil(total / limit);

  // condition if pageNum > totalPages then send false with error msg
  if (pageNum > totalPages) {
    return res.json({ success: false, error: "this page doesn't exist" });
  } else {
    //   getting users as per limit and skipping previous users if any
    const users = await userModel.find({}).limit(limit).skip(startIndex);

    //   sending successfull response with all data
    return res.json({
      success: true,
      results: {
        users,
        totalUsers: total,
        totalPages,
        currentPage: pageNum,
      },
    });
  }
};

// exporting UserController with all controller methods
export const UserController = { getUsers };

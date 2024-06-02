const express=require("express")
const router=express.Router()
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

router.route("/").get(getStudents).post(createStudent);

router
  .route("/:id")
  .get(getStudent)
  .patch(updateStudent)
  .delete(deleteStudent);


module.exports=router
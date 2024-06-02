const Student = require("../models/student");
const mongoose = require("mongoose");
const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

const getStudent = async (req, res) => {
  const students = await Student.findById(req.params.id);
  if (!students) {
    return res.status(400).json({ message: "Student not found" });
  }
  res.json(students);
};

const createStudent = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, age } = req.body;

  if (!firstName || !lastName || !email || !age) {
    res.status(400).json({ message: "All fields are required" });
  }

  const student = await Student.create({
    firstName,
    lastName,
    email,
    age,
  });
  res.status(200).json(student);
};

const updateStudent = async (req, res) => {
  const students = await Student.findById(req.params.id);
  if (!students) {
    return res.status(400).json({ message: "Student not found" });
  }
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(student);
};

const deleteStudent = async (req, res) => {
  const students = await Student.findById(req.params.id);
  if (!students) {
    return res.status(400).json({ message: "Student not found" });
  }
  await Student.deleteOne({ _id: req.params.id });
  res.json({ message: "Delete student" });
};
module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};

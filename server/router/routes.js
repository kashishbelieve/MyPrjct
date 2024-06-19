const express = require("express");
const { login } = require("../controllers/login");
const { sinup } = require("../controllers/sinup");
const { createExp, deleteExp, getAll, editExp } = require("../controllers/createExpences");
const {createBudget} = require("../controllers/createBudget");
const router = express.Router();


router.post("/login",login);
router.post("/sinup",sinup);
router.post("/expances",createExp);
router.post("/deletexpances",deleteExp);
router.post("/getAll",getAll);
router.post("/editexp",editExp);
router.post("/createbudget",createBudget);

module.exports = router;
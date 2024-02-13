const moment = require("moment");
const express = require("express");
const Model = require("../models/model");
const FilemappingCollection = require("../models/FilemappingCollection");
const ESG_Attributes = require("../models/ESG_Attributes");
const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    type: req.body.type,
    filepath: req.body.filepath,
    filename: req.body.filename,
    filemappingname: req.body.filemappingname,
    createdby: req.body.createdby,
    createdOn: moment().format("YYYY MM DD"),
    createdTime: moment().format("h:mm:ss a"),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/postrequest", async (req, res) => {
  const data = new FilemappingCollection({
    FileMappingName: req.body.FileMappingName,
    AttributeList: req.body.AttributeList,
    CreatedBy: req.body.CreatedBy,
    createdOn: moment().format("YYYY MM DD"),
    createdTime: moment().format("h:mm:ss a"),
    ChangedBy: req.body.ChangedBy,
    ChangedOn: moment().format("YYYY MM DD"),
    ChangedTime: moment().format("h:mm:ss a"),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/ESG_Attributes", async (req, res) => {
  const data = new ESGSchema({
    no_of_decimal: req.body.no_of_decimal,
    is_hierarchy: req.body.is_hierarchy,
    is_decimals: req.body.is_decimals,
    zero_padding: req.body.zero_padding,
    allow_negative: req.body.allow_negative,
    is_dropdown: req.body.is_dropdown,
    is_uppercase: req.body.is_uppercase,
    is_file: req.body.is_file,
    is_external: req.body.is_external,
    is_sensitive: req.body.is_sensitive,
    status: req.body.status,
    field_label: req.body.field_label,
    field_length: req.body.field_length,
    field_type: req.body.field_type,
    TECHNICAL_FIELD_NAME: req.body.TECHNICAL_FIELD_NAME,
    createdBy: req.body.createdBy,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getFileMapping", async (req, res) => {
  try {
    const data = await FilemappingCollection.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
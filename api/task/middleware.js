const Task = require("./model");

const checkTaskBody = async (req, res, next) => {
  try {
    const projectIdValid=await Task.findByProjectId(req.body.project_id)
    if (!req.body.task_description) {
      res.status(400).json({ message: "Görev açıklaması eksik" });
    } else if (!req.body.project_id) {
      res.status(400).json({ message: "Proje id si eksik" });
    } else if (!projectIdValid) {
      res.status(400).json({ message: "Proje id sistemde mevcut değil" });
    }else{
        next()
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { checkTaskBody };

const path = require('path');
const fs = require('fs');
const ExcelHandler = require('../utils/ExcelHandler');
const SantaService = require('../services/santaService');

class SantaController {
  static process(req, res) {
    try {
      const employeesFile = req.files['employees'][0].path;
      const previousFile = req.files['previous'][0].path;

      const employees = ExcelHandler.readEmployees(employeesFile);
      const previousMap = ExcelHandler.readPreviousMap(previousFile);

      const service = new SantaService(employees, previousMap);
      const assignments = service.generate();

      const resultsDir = path.join(__dirname, '../../results');
      if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir, { recursive: true });
      }

      const outputPath = path.join(resultsDir, 'santa_result_2024.xlsx');
      ExcelHandler.writeAssignments(assignments, outputPath);

      res.send(`<h3>Assignments Generated Succesfully!</h3><a href="/download">Download Assigment</a>`);
    } catch (err) {
      res.status(500).send("Error: " + err.message);
    }
  }

  static download(req, res) {
    const filePath = path.join(__dirname, '../../results/santa_result_2024.xlsx');

    if (fs.existsSync(filePath)) {
      res.download(filePath);
    } else {
      res.status(404).send("File not found. Please generate it first.");
    }
  }
}

module.exports = SantaController;

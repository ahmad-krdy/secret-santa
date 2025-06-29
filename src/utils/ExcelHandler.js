const xlsx = require('xlsx');
const Employee = require('../models/Employee');

class ExcelHandler {
  static readEmployees(filePath) {
    const wb = xlsx.readFile(filePath);
    const sheetName = wb.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
    // console.log("Employees parsed:", data);
    return data.map(row => new Employee(row.Employee_Name, row.Employee_EmailID));
  }

  static readPreviousMap(filePath) {
    const wb = xlsx.readFile(filePath);
    const sheetName = wb.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);

    const map = new Map();
    data.forEach(row => {
      map.set(row.Employee_EmailID.trim(), row.Secret_Child_EmailID.trim());
    });

    // console.log("Previous data map:", map);
    return map;
  }

  static writeAssignments(assignments, outputPath) {
    const data = assignments.map(a => a.toJSON());

    if (data.length === 0) {
      throw new Error("No assignments to write to Excel.");
    }

    const ws = xlsx.utils.json_to_sheet(data);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Assignments');
    xlsx.writeFile(wb, outputPath);
  }
}

module.exports = ExcelHandler;

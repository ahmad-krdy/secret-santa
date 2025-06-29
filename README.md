#  Secret Santa Assignment System

This project is a modular and extensible **Secret Santa Assignment Generator** built in **Node.js**, using **Express** and **Multer**, with a clean OOP architecture. It automatically assigns each employee a secret child (gift recipient), ensuring no self-assignment and no repetition from the previous year.

---

## 📁 Folder Structure

```
secret-santa-game/
├── src/
│   ├── controllers/
│   │   └── SantaController.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── Assignment.js
│   ├── routes/
│   │   └── santaRoutes.js
│   ├── services/
│   │   └── SantaService.js
│   ├── utils/
│   │   └── ExcelHandler.js
│   └── server.js
├── results/               # Output Excel files
├── uploads/               # Uploaded Excel files (temporary)
├── package.json
└── README.md
```

---

## 🚀 How to Start the Project

### 1. 📦 Install Dependencies

```bash
npm install
```

### 2. ▶️ Run the App

```bash
npm run dev
```

Server will start at localhost: [http://localhost:5000](http://localhost:5000)

---

## 🧾 Upload Format

### 🧍 Employees Excel

* `Employee_Name`
* `Employee_EmailID`

### 📄 Previous Assignments Excel

* `Employee_Name`
* `Employee_EmailID`
* `Secret_Child_Name`
* `Secret_Child_EmailID`

⚠️ Ensure the sheet names are `Sheet1` or the first visible worksheet.

---

## 📤 How It Works

1. Go to `http://localhost:3000`
2. Upload:

   * Current year **employee list**
   * Previous year's **assignment file**
3. Click **Generate Assignments**
4. Click **Download Excel** to download `santa_result_2024.xlsx`

---

## ✅ Features

* Modular OOP-based design
* Excel read/write with auto sheet detection
* Validations: no self, no repeated child
* Upload/download via Multer & Express
* Safe file handling and logging

---

## 👨‍💻 Author

* Developed by Ahmad Abbas

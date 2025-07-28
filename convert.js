const xlsx = require('xlsx')
const fs = require('fs')

// Lire le fichier Excel
const workbook = xlsx.readFile('Kahoot_Quiz_React_HTML_CSS_DOM_API_VF.xlsx')
const worksheet = workbook.Sheets[workbook.SheetNames[0]]
const data = xlsx.utils.sheet_to_json(worksheet)

// Formater les données
const questions = data.map(item => ({
  Question: item.Question,
  CorrectAnswer: item.CorrectAnswer,
  Answer1: item.Answer1,
  Answer2: item.Answer2,
  Answer3: item.Answer3,
  Answer4: item.Answer4,
  Time: item.Time,
  Points: item.Points
}))

// Écrire dans un fichier JSON
fs.writeFileSync('src/questions.json', JSON.stringify(questions, null, 2))

console.log('Conversion terminée avec succès!')
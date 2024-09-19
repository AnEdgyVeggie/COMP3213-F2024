// changed require to an import, changed type to module in package.json
import * as http from 'http';
import { employees } from "./Employee.js"
console.log("Lab 03 -  NodeJs");

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
        }

        else if (req.url === '/employee') {
            res.end(JSON.stringify(employees))
            
        }
        else if (req.url === '/employee/names') {
            let names = []
            employees.forEach(employee => {
                names.push(employee.firstName + " " + employee.lastName)
            })
            let sorted = names.sort()
            res.end(JSON.stringify(sorted))
        }

        else if (req.url === '/employee/totalsalary') {
            let salaries = []
            employees.forEach(employee => {
                salaries.push(employee.Salary)
            })
            const sum = salaries.reduce((total, salary) => {
                return total += salary
            })
            res.end(JSON.stringify(sum))
        }
        else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
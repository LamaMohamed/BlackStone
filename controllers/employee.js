const Employee = require("../models/employee");

exports.createEmployee = (req, res, next) => {
        const employee = new Employee({
            name: req.body.name,
            position: req.body.position,
            age: req.body.age
        });
        console.log(req.body.name)
        employee
            .save()
            .then(result => {
                res.status(201).json({
                    message: "Employee created!",
                    result: result,
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "please try again"
                });
            });
    };




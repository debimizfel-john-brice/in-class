import express, { Request, Response } from "express";
import employees_service from "../5-services/employees_service";
import EmployeeModel from "../2-models/employee_model";


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const employee = await employees_service.getEmployees();
    res.json(employee);
});

router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
    const id = +req.params.id;
    const employee = await employees_service.getEmployee(id);
    res.json(employee);
});

router.post('', async (req: Request, res: Response) => {
    console.log(req.body);

    const employee = new EmployeeModel(req.body);
    const addedEmployee =
        await employees_service.addEmployee(employee);
    res.status(201).json(addedEmployee);
});

router.put('/:id([0-9]+)', async (req: Request, res: Response) => {
    req.body.id = +req.params.id;
    const employee = new EmployeeModel(req.body);
    const updatedEmployee =
        await employees_service.updateEmployee(employee);
    res.json(updatedEmployee);
});

router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
    const id = +req.params.id;
    await employees_service.deleteEmployee(id);
    res.sendStatus(204);
});

export default router;

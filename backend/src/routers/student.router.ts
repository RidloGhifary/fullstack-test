import { Router } from "express"
import {GetAllDatas, InsertData, DeleteData,UpdateDate} from "../controllers/student.controller"

const router:Router = Router()

router.route("/students").get(GetAllDatas).post(InsertData)
router.route("/students/:id").delete(DeleteData).patch(UpdateDate)

export default router
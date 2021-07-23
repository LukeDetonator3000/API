import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImporCategoryUseCase()
const imporCategoryController = new ImportCategoryController(importCategoryUseCase)

export { imporCategoryController }
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImporCategoryUseCase(categoriesRepository);
const imporCategoryController = new ImportCategoryController(importCategoryUseCase);

export { imporCategoryController }
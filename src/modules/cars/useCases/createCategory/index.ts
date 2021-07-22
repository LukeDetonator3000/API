import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCases } from "./CreateCategoryUseCases";


const categoriesRepository = new CategoriesRepository();
const createCategoryUseCases = new CreateCategoryUseCases(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCases);

export { createCategoryController }
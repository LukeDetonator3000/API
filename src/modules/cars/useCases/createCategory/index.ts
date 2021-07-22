import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCases } from "./CreateCategoryUseCases";


const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCases = new CreateCategoryUseCases(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCases);

export { createCategoryController }
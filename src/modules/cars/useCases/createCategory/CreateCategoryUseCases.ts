import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface Request {
    name: string;
    description: string;
}
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar retorno de erro
 * [x] - Acessar repositorio
 */
class CreateCategoryUseCases {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ description, name }: Request) {
        const categoriesRepository = new CategoriesRepository()
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!")
        }
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCases }
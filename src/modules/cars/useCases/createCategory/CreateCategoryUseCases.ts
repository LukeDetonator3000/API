import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface Request {
    name: string;
    description: string;
}

class CreateCategoryUseCases {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ description, name }: Request): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCases };
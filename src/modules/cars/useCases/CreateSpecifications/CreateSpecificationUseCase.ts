import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface Request {
    name: string;
    description: string;
}

class CreateSpecificationUseCases {
    constructor(private specificationsRepository: ISpecificationRepository) {
    }
    execute({ name, description }: Request): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists!")
        }
        this.specificationsRepository.create({
            name,
            description,
        })
    }
}
export { CreateSpecificationUseCases }
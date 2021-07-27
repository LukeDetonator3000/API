import { Specification } from "../entities/Specification"

interface IcreateSpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationRepository {
    create({ description, name }: IcreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export {
    ISpecificationRepository, IcreateSpecificationDTO
}
import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCases } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCases(specificationsRepository);
const createSpecificationsController = new CreateSpecificationsController(createSpecificationUseCase);

export { createSpecificationsController }
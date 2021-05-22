import { EntityRepository, Repository } from "typeorm";
import { Register } from "../../models/registerModel";

@EntityRepository(Register)
class registerRepository extends Repository<Register>{}

export { registerRepository }
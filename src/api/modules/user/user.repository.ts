import { User } from "@entities/User";
import { AppDataSource } from "@src/db/config";
import type { Repository } from "typeorm";

export class UserRepository {
	private typeOrmRepository: Repository<User>;

	constructor() {
		this.typeOrmRepository = AppDataSource.getRepository(User);
	}

	async findAll() {
		return await this.typeOrmRepository.find();
	}

	async create(user: Partial<User>): Promise<User> {
		const newUser = this.typeOrmRepository.create(user);
		return this.typeOrmRepository.save(newUser);
	}
}

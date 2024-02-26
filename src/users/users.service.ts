import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

	getAll() {
		return this.userRepository.find();
	}

	getOneById(id: number) {
		return `This action returns a #${id} user`;
	}

	updateOneById(id: number, updateUserDto) {
		return `This action updates a #${id} user`;
	}

	removeOneById(id: number) {
		return `This action removes a #${id} user`;
	}
}

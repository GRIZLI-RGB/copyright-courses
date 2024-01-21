import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

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

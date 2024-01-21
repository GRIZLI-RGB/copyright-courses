import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
	login(dto) {
		return `This action login user with email ${dto.email} and password ${dto.password}`;
	}

	register(dto) {
		return `This action register user`;
	}
}

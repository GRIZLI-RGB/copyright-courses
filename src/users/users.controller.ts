import { Controller, Get, Body, Patch, Param, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UsersService } from "./users.service";

@ApiTags("Пользователи")
@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get("users")
	getAll() {
		return this.usersService.getAll();
	}

	@Get("user/:id")
	getOneById(@Param("id") id: string) {
		return this.usersService.getOneById(+id);
	}

	@Patch("user/:id")
	updateOneById(@Param("id") id: string, @Body() updateUserDto) {
		return this.usersService.updateOneById(+id, updateUserDto);
	}

	@Delete("user/:id")
	removeOneById(@Param("id") id: string) {
		return this.usersService.removeOneById(+id);
	}
}

import { Controller, Get, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getAll() {
		return this.usersService.getAll();
	}

	@Get(":id")
	getOneById(@Param("id") id: string) {
		return this.usersService.getOneById(+id);
	}

	@Patch(":id")
	updateOneById(@Param("id") id: string, @Body() updateUserDto) {
		return this.usersService.updateOneById(+id, updateUserDto);
	}

	@Delete(":id")
	removeOneById(@Param("id") id: string) {
		return this.usersService.removeOneById(+id);
	}
}

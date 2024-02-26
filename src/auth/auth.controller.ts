import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDto } from "./dto/auth.login.dto";
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	async login(@Body() authLoginDto: AuthLoginDto) {
		return this.authService.LOGIN(authLoginDto);
	}

	@Post("register")
	async register(@Body() authRegisterDto: AuthRegisterDto) {
		return this.authService.REGISTER(authRegisterDto);
	}
}

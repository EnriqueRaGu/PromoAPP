import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router, private user: UserService) {

	}

	async canActivate(route) {
		if(await this.user.isAuthenticated()) {//si el usuario esta autenticado
			return true
		}

		this.router.navigate(['/login'])
		return false
	}
}
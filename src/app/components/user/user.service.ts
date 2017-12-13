import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { AuthorizationService } from '../services/authorization.service';

import { User } from './user';

@Injectable()
export class UserService{
    constructor(
    private api: ApiService,
    private authService: AuthorizationService,
    private router:Router
    )
{

}
public getAll(): Observable<User[]>{
    return this.api.getUsers<User[]>();
}

public login(user:User, remember:boolean):void{
    this.authService.setAuthorization(user.email, user.wachtwoord);

    this.api.get<User>('personeel/login').subscribe(
        authenticator => {
            this.authService.storeAuthorization(authenticator, remember);

            alert("Ingelogd");
        },
        error => {
            alert('Inloggen is mislukt!');
        }
    )
}

private goHome() {
    console.log('goHome ran ..');
    this.router.navigate(['/Registratie']);
}

}
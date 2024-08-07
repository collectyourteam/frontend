import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

class User {
}

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(name: string, password: string) {
      return this.http.post<User>('http://localhost:8080/v1/validation/authenticate', {username: name, password: password});
    }
}

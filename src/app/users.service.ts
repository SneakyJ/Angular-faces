import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
      
    quant = 8;

    constructor(private http: HttpClient) {}

    getUser() {
        return this.http.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.quant}&nat=gb`)
         .pipe(map(function(response: any) {
             return response.results;
            })
         ).pipe(map(users => {
            return users.map(user => {
                let first: string = user.name.first;
                let last: string = user.name.last;
                first = first.toLowerCase();
                last = last.toLowerCase();
                return {
                    name: `${first} ${last}`,
                    image: user.picture.large,
                    geo: `${user.location.street.number} ${user.location.street.name} ${user.location.city}  ${user.location.state}`,
                }
            })
        }));            
    }

    setQuantity(quantity) {
        this.quant = quantity;
    }
}
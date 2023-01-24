// + ---------------------------- + First level imports + ----------------------------- + //
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { BuysResponse } from './../../common/models/BuysResponse.model';
import { getUserByIdRoute, getAllBuysProductByUserIdRoute } from './../../common/utils/Routes.transacts';
import { UserResponse } from './../../common/models/UserResponse.model';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http: HttpClient) {/*void*/}

  verifyUser(userid: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(getUserByIdRoute(userid));
  }

  getUserBuys(userid: string): Observable<BuysResponse>{
    return this.http.get<BuysResponse>(getAllBuysProductByUserIdRoute(userid));
  }

}

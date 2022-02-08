import { Injectable } from "@angular/core";
import {
    CanLoad,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Route,
    UrlSegment
} from "@angular/router"
// import { Route } from '@angular/compiler/src/core';
import { Observable } from "rxjs";
import { tokenKey } from "../utils/Constants";


@Injectable({
    providedIn:"root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<any> {

    constructor(private router:Router){
        //
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        

        return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        /**
         * 部分业务场景只存储token此处要求持久化存储用户信息
         */
        const user=JSON.parse(window.localStorage.getItem(tokenKey));    
        if(user && user.username){
            return true;
        }else{
            this.router.navigateByUrl("login");
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {      
        return true;
    }

    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot){
        
        return true;
    }


}
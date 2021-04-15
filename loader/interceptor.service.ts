import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>
  {
  {
  if (sessionStorage.getItem('username') && sessionStorage.getItem("token"))
  { // req = req.clone({
              //      setHeaders:{
            //        Authorization:sessionStorage.getItem('token')
           //         }
           //       })
           console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
       const reqs = req.clone({  setHeaders:{
                   'Content-Type': 'application/json',
                  'Authorization':sessionStorage.getItem('token')
                  }});
                  console.log(req);
                  console.log(reqs)
                  return next.handle(reqs);
                  // Pass the cloned request instead of the original request to the next handle          
    }
  }
  //return next.handle(reqs);
  }
}



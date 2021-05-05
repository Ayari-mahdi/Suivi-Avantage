import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { aneti_avg, brcod, Dataset, doss_avgass, facturation, karama, payresult, user, ws_aneti_historique } from './karama';
import { PaymentDataTableItem } from './payment-data-table/payment-data-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class KaramaService {
  
  
  
link='http://localhost:8081/get';
importlink="http://localhost:8081/rest_aneti"
updatelink="http://localhost:8081/post_avn/";
code_bureau="http://localhost:8081/getbrcod";
code_avn="http://localhost:8081/getavn";
historique_table="http://localhost:8081/gethistorique";
fact="http://localhost:8081/facturation";
auth="http://localhost:8081/authenticate";
registerlink ="http://localhost:8081/registration";
add_aneti_avg_link="http://localhost:8081/add-aneti-avg";
add_role="http://localhost:8081/add-role";
faulty="http://localhost:8081/getfaulty";
notyetregistered="http://localhost:8081/getnotyetregistered";
//payment
listofemployee="http://localhost:8081/listemployeesperemployer";
addemployeesalary="http://localhost:8081/employeeSalary";
calculatesum="http://localhost:8081/paymentemployer";

  constructor(
    private http:HttpClient
  ) { }
////PAYMENT   
getemployeelist(numaf,trim,year):Observable<doss_avgass[]>
{
  return this.http.get<doss_avgass[]>(this.listofemployee+"/"+numaf+"/"+trim+"/"+year)
}
//
addemployeesal(salaire,trim,year,avg,data):Observable<doss_avgass[]>
{
  return this.http.post<doss_avgass[]>(this.addemployeesalary+"/"+salaire+"/"+trim+"/"+year+"/"+avg,data)
}
//
calculatetotalsum(numaf,trim,year,avg):Observable<payresult>
{
  return this.http.get<payresult>(this.calculatesum+"/"+numaf+"/"+trim+"/"+year+"/"+avg)
}



////////////////////
getfaultylist(): Observable<Dataset[]>
{
  return this.http.get<Dataset[]>(this.faulty);
}
/////////---------------
getnotyetrgegisteredlist(): Observable<Dataset[]>
{
  return this.http.get<Dataset[]>(this.notyetregistered);
}
//-----------------------athenticate
 login(data): Observable<any>
 {
   return this.http.post<any>(this.auth,data)
   .pipe(map(userData => {
     sessionStorage.setItem("username",data.username);
     let tokenStr = "Bearer "+ userData.jwt;
     sessionStorage.setItem("token",tokenStr);
     console.log(sessionStorage.getItem("token"));
     console.log(userData);
     return userData;
   }));
 }
 //---------------------- 
 //-----------------loggedin
 isUserLoggedIn(){
   let user = sessionStorage.getItem("username");
   console.log(!(user===null));
   return !(user===null);
 }
//-----------------------
//------------------logout
logOut(){
  sessionStorage.removeItem("username");
}

//-------------------
//-------------- registration */
register(user):Observable<user>{
return this.http.post<user>(this.registerlink,user)
}
//--------------------list of dataAneti
  getkaramalist(): Observable<Dataset[]>
  { //console.log(sessionStorage.getItem("token"));
   // const headerss= new HttpHeaders().append("Authorization",sessionStorage.getItem('token'));
    //console.log(headerss);
    return this.http.get<Dataset[]>(this.link);
  }
  //---------------------
  //---------------------table des bureaux cnss
  getbrcod():Observable<brcod[]>
  {
    return this.http.get<brcod[]>(this.code_bureau);
  }
  //---------------------
  //---------------------importation trace
  gethistorique():Observable<ws_aneti_historique[]>
  {
    return this.http.get<ws_aneti_historique[]>(this.historique_table);
  }
  //---------------------
  //---------------------table of aneti advantages
  getaneti_avn():Observable<aneti_avg[]>
  {
    return this.http.get<aneti_avg[]>(this.code_avn);
  }
  //---------------------
//**************import data from aneti with date and type of advantage */
  importanetiavg(date_avantage1,type_avantage1): Observable<Dataset[]> {
    console.log(date_avantage1);
    console.log(type_avantage1);
    
    return this.http.post<any>(this.importlink +"/" + date_avantage1 +"/"+ type_avantage1,type_avantage1 );
  }
  //******************* */
  search(type_avantage,burcod,cin): Observable<Dataset[]> {
    console.log(burcod);
    console.log(type_avantage);
    console.log(cin);
    if(cin === '' )
    {console.log("workss")
    return this.http.get<Dataset[]>(this.link +"/" + type_avantage +"/"+ burcod );}
    else {
      console.log("work22");
       return this.http.get<Dataset[]>(this.link +"/" + type_avantage +"/"+ burcod+"/"+cin );}
  }

  public update(num_aff,cin) 
  { console.log(num_aff)
    console.log(cin);
    return this.http.post<any>(this.updatelink + num_aff +"/"+ cin,cin );
  }
  //--------------------------facturation
  
  getfact():Observable<facturation[]>{

    return this.http.get<facturation[]>(this.fact);
  }
  factsearch(numemp):Observable<facturation[]>{

    return this.http.get<facturation[]>(this.fact+"/"+numemp);
  }
  //---------------------------
}

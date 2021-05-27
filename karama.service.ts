import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { aneti_avg, brcod, Dataset, doss_avgass, facturation, karama, payresult, user, ws_aneti_historique } from './karama';
import {piechart, secondchart, thirdchart} from "./chartmodel"
import { PaymentDataTableItem } from './payment-data-table/payment-data-table-datasource';

@Injectable({
  providedIn: 'root'
})

export class KaramaService {
//listing
link='http://172.16.10.74:8081/get';
notyetregistered="http://172.16.10.74:8081/getnotyetregistered";
faulty="http://172.16.10.74:8081/getfaulty";
reportfaulty="http://172.16.10.74:8081/sendfaulty"
//versioning
importlink="http://172.16.10.74:8081/rest_aneti"
historique_table="http://172.16.10.74:8081/gethistorique";
//create files
updatelink="http://172.16.10.74:8081/post_avn/";
updatelink2="http://172.16.10.74:8081/post_avn2";
//others
code_bureau="http://172.16.10.74:8081/getbrcod";
code_avn="http://172.16.10.74:8081/getavn";
//facturation
fact="http://172.16.10.74:8081/facturation";
//auth
auth="http://172.16.10.74:8081/authenticate";
//admin privileges
registerlink ="http://172.16.10.74:8081/registration";
add_aneti_avg_link="http://172.16.10.74:8081/add-aneti-avg";
add_role="http://172.16.10.74:8081/add-role";
//payment
listofemployee="http://172.16.10.74:8081/listemployeesperemployer";
addemployeesalary="http://172.16.10.74:8081/employeeSalary";
calculatesum="http://172.16.10.74:8081/paymentemployer";
//charts
firstchart="http://172.16.10.74:8081/firstchart"
secondchart="http://172.16.10.74:8081/secondchart"
thirdchart="http://172.16.10.74:8081/thirdchart"
forthchart="http://172.16.10.74:8081/forthchart"
  constructor(
    private http:HttpClient
  ) { }

/////----------------------------------others-------------------------------/////
//table des bureaux cnss
getbrcod():Observable<brcod[]>
{
  return this.http.get<brcod[]>(this.code_bureau);
}
//table of aneti advantages
getaneti_avn():Observable<aneti_avg[]>
{
  return this.http.get<aneti_avg[]>(this.code_avn);
}

/*---------------------------------------------------------------------------*/
/////-----------------------------LISTING-------------------------------/////

//list of dataAneti
getkaramalist(): Observable<Dataset[]>
{ //console.log(sessionStorage.getItem("token"));
// const headerss= new HttpHeaders().append("Authorization",sessionStorage.getItem('token'));
//console.log(headerss);
 return this.http.get<Dataset[]>(this.link);
}
//faulty list
getfaultylist(): Observable<Dataset[]>
{
  return this.http.get<Dataset[]>(this.faulty);
}
//sendemail faulty
sendemail(text:string):Observable<any>
{
  return this.http.get<any>(this.registerlink+"/"+text)
}
//not yet registered
getnotyetrgegisteredlist(): Observable<Dataset[]>
{
 return this.http.get<Dataset[]>(this.notyetregistered);
}
// search in list
search(type_avantage,burcod,cin): Observable<Dataset[]> {
if(cin === '' )
 {
   return this.http.get<Dataset[]>(this.link +"/" + type_avantage +"/"+ burcod );
 }
else
 {
  return this.http.get<Dataset[]>(this.link +"/" + type_avantage +"/"+ burcod+"/"+cin );
 }
}

//**----------------------------------------------------------------------- */
/////-----------------------------PAYMENT-------------------------------/////

//
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

//**----------------------------------------------------------------------- */
/////-------------------------------Versioning-----------------------------/////

//importation trace
gethistorique():Observable<ws_aneti_historique[]>
{
   return this.http.get<ws_aneti_historique[]>(this.historique_table);
}

//import data by advantage 
importanetiavg(date_avantage1,type_avantage1): Observable<Dataset[]> 
{
  console.log(date_avantage1);
  console.log(type_avantage1);
  
  return this.http.post<any>(this.importlink +"/" + date_avantage1 +"/"+ type_avantage1,type_avantage1 );
}

/*---------------------------------------------------------------------------*/
/////-------------------------------create files-----------------------------/////
//create advanatges files
createfiles()
{
  return this.http.get<any>(this.updatelink)
}
//create advantages files for the not yet registered
updateall()
{
  return this.http.get<any>(this.updatelink2)
}
//CREATE one advantages file
public update(num_aff,cin,typeavg) 
{ 
  return this.http.get<any>(this.updatelink + num_aff +"/"+ cin+"/"+typeavg );
}


/*---------------------------------------------------------------------------*/
/////-------------------------------facturation-----------------------------/////

getfact():Observable<facturation[]>
{
  return this.http.get<facturation[]>(this.fact);
}
//*************** */
factsearch(numemp,year,trim):Observable<facturation[]>
{
  return this.http.get<facturation[]>(this.fact+"/"+numemp+"/"+year+"/"+trim);
}

/*---------------------------------------------------------------------------*/
/////----------------------------------CHARTS--------------------------------/////

//PIECHART 
  chart1():Observable<piechart>
  {
    return this.http.get<piechart>(this.firstchart);
  }
  chart2():Observable<secondchart>
  {
    return this.http.get<secondchart>(this.secondchart);
  }
  chart3():Observable<thirdchart>
  {
    return this.http.get<thirdchart>(this.thirdchart);
  }
  chart4():Observable<piechart>
  {
    return this.http.get<piechart>(this.forthchart);
  }

/*---------------------------------------------------------------------------*/
/////-----------------------------admin privileges--------------------------/////

//
register(user):Observable<user>
{
  return this.http.post<user>(this.registerlink,user)
}

/*---------------------------------------------------------------------------*/
/////-----------------------------auth-------------------------------------/////

//
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
//
isUserLoggedIn()
 {
  let user = sessionStorage.getItem("username");
  console.log(!(user===null));
  return !(user===null);
 }
//
logOut()
 {
   sessionStorage.removeItem("username");
 }
//**----------------------------------------------------------------------- */
}


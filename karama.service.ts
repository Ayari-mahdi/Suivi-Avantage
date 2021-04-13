import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { aneti_avg, brcod, Dataset, facturation, karama, user, ws_aneti_historique } from './karama';

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
auth="http://localhist:8081/authenticate";

  constructor(
    private http:HttpClient
  ) { }
//-----------------------
 login(data): Observable<any>
 {
   return this.http.post<user>(this.auth,data);
 }
 //---------------------- 
//-----------------------
  getkaramalist(tokken): Observable<Dataset[]>
  {
    let tokkenstr='Bearer '+tokken;
    const headers= new HttpHeaders().set("Authorization",tokkenstr);
    return this.http.get<Dataset[]>(this.link,{headers});
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

  importanetiavg(date_avantage1,type_avantage1): Observable<Dataset[]> {
    console.log(date_avantage1);
    console.log(type_avantage1);
    
    return this.http.post<any>(this.importlink +"/" + date_avantage1 +"/"+ type_avantage1,type_avantage1 );
  }
  search(burcod,numero_affiliation,cin,type_avantage): Observable<Dataset[]> {
    console.log(burcod);
    console.log(cin);
    console.log(numero_affiliation);
    return this.http.get<Dataset[]>(this.link +"/" + burcod +"/"+ numero_affiliation +"/"+ cin);
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

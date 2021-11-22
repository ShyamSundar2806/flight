import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsapiService {

  constructor(private http: HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
   }

   fetchAll(year:any) {
     console.log();
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year);

   }

   fetchLanchSucess(year:any,succ:any) {
     console.log("its Successlaunch"+succ)
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year+"&launch_success="+succ);
   }
   fetchLanchSucessAndLandSuccess(year:any,succ:any,val:any){
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&launch_year="+year+"&launch_success="+succ+"&land_success="+val);
  
   }

   
}

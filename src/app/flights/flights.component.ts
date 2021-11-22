import { Component, OnInit } from '@angular/core';
import { FlightsapiService } from '../flightsapi.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flightData:any=[];

  sucess: boolean = true;

  LandSucc: boolean = false;
year1:any="";
  constructor(private http:FlightsapiService) { }

  buttonsarray:any=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  launch:any=[true,false];

  ngOnInit(): void {

    this.http.fetchFlights().subscribe(data=>{

      this.flightData=data;

      if(this.flightData.length==0){

        console.log("error")

      }
      console.log("Data fetched",this.flightData);
   })
  }
  sendYear(year:any){

    console.log(year);
    this.year1=year

    this.http.fetchAll(year).subscribe(data => {

     this.flightData = data;

      console.log("sucees :", this.flightData)
    })
  }
launchsucces(succ:any){
  this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(this.year1,succ).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("sucees :", this.flightData)
      // error=>console.log("exception recoved ")
    })
}


  landsuccess(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(this.year1,this.sucess,val).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("Land :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
}





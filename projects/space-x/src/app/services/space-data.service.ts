import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpaceDataService {
  public spaceData: any;
  baseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) {
    this.getSpaceDataYearFilter(2006);
  }

  public getSpaceData(): void {
    this.getSpaceDatawithObservable().subscribe(
      (spaceVehicles) => {
        this.spaceData = spaceVehicles;
      },
      (error) => {
         alert('Error Occured');
      }
    );
  }


  public getSpaceDataYearFilter(year: any): void{
    this.getSpaceDataYearFilterwithObservable(year).subscribe(
      (spaceVehicles) => {
        this.spaceData = [];
        this.spaceData = spaceVehicles;
      },
      (error) => {
          alert('Error Occured');
      }
    );
  }



  public getSpaceDatawithObservable() {
    return this.http.get(this.baseURL);
  }

  public getSpaceDataYearFilterwithObservable(year: string){
    return this.http.get(this.baseURL + `&launch_year=` + year );
  }

  public getSpaceDataLaunchSucessFilterwithObservable(){
    return this.http.get(this.baseURL + `&launch_success=true`);
  }


  public getSpaceDataLandandLaunchSuccessFilterwithObservable(){
    return this.http.get(this.baseURL + `&launch_success=true&land_success=true`);
  }

  public getAllFilterwithObservable(){
    return this.http.get(this.baseURL + `&launch_success=true&land_success=true&launch_year=2014`);
  }



}

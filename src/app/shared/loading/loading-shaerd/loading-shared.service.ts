import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {

  loadingStatus = new BehaviorSubject(false);
  private loading = false;

  constructor() { }

private get getLoading(): boolean{
      return this.loading;
}

private set setLoading(value: boolean) {
   this.loading = value;
   this.loadingStatus.next(value);
}

starLoading(): void{
  this.setLoading = true;
}

stopLoading(): void{
  this.setLoading = false;
}

}

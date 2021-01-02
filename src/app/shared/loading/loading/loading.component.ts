import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../loading-shaerd/loading-shared.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  constructor(private loadingService: LoadingService) { }
  loading: boolean;
  loadingSubscription: Subscription;


  ngOnInit(): void {
   this.loadingSubscription = this.loadingService.loadingStatus.subscribe(
      (status: boolean) => {
        this.loading = status;
      }
    );
  }
  ngOnDestroy(): void{
    this.loadingSubscription.unsubscribe();
  }

}

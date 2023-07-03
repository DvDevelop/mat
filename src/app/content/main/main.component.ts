import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, reduce, tap } from 'rxjs';
import { DatacrudService } from 'src/app/services/datacrud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  transactions: any
  private subscription!: Subscription;
  TfullList: any;
  private subscription2!: Subscription;
  private subscription3!: Subscription;
  constructor(
    private data: DatacrudService
  ) { }
  nuevoRegistro() {
    const data = {
      "Concepto": "nuevo",
      "Cuenta": "2e98pfop75a94x6",
      "Fecha": "2023-07-02 18:53:00.000Z",
      "Tipo": true,
      "collectionId": "15dzqgtf74e5gaz",
      "importe": 1000
    }
    this.subscription3 = this.data.create(data).subscribe(console.log)
  }
  ngOnInit(): void {
    this.subscription = this.data.getlist().pipe(
      map((res) => res.items),
      tap(
        console.log
      )
    ).subscribe((res) => {
      this.transactions = res;
      console.log('called')
    });
    this.subscription2 = this.data.getFullList().subscribe((res) => {
      this.TfullList = res
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}

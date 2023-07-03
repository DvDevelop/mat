import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase'
import { defer } from 'rxjs';

const pb = new PocketBase('http://127.0.0.1:8090');
const collection = 'Transactions'
pb.autoCancellation(false);

@Injectable({
  providedIn: 'root'
})
export class DatacrudService {

  constructor() { }
  create(data: any) {
    return defer(() => pb.collection(collection).create(data));
  }
  getlist(page: number = 1, IPL: number = 50) {
    return defer(() => pb.collection(collection).getList(page, IPL, {
      fields: 'importe'
    }))
  }
  getFullList() {
    return defer(() => pb.collection(collection).getFullList({ fields: 'importe' }))
  }
}

import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';

@Injectable()  //qualsiasi provider può avere altri provider iniettati tramite il costruttore, usando dependency injection. i providers devono essere marchiati con @Injectable()
export class AppService {
  constructor(private readonly dummyService: DummyService){}
  getHello(): string {
    return `Hello World! ${this.dummyService.work()}`;
  }
}

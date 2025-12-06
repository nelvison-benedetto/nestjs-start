import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    //routes checckate a runtime quando il frontend chiama, in ordine top-bottom (COME SEMPRE x controllers)

    @Get()  //non c'è nessun default http method in nestjs, lo devi specificare tu
    public findAll(): string[] {
        return ['A','B'];
    }
    //nestjs always return to client in format .JSON di default

    @Get('/:id')  //'/:id?' per renderlo opzionale, e here diventerebbe un get normale
    // public findOne(@Param() params: any) : string {
    //     return `The number is ${(params as {id:number}).id }`;  //here ho specificato che id è di type number, altrimenti ts da error
    // }
    public findOne(@Param ('id') id:string ): string {
        return `The number is ${id}`
    }
}

import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()  //non c'è nessun default http method in nestjs, lo devi specificare tu
    public findAll(): string[] {
        return ['A','B'];
    }

}

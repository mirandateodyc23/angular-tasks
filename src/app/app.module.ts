import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CommonModule, HeaderModule, UserModule, TasksModule]

})

export class AppModule {}
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  declarations: [UserComponent],
  bootstrap: [],
  imports: [CardModule],
  exports: [UserComponent]
})
export class UserModule { }

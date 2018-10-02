import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [SigninComponent],
  providers: [AuthService]
})
export class AuthModule { }

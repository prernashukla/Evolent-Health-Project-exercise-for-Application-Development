import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenuModule} from 'primeng/menu';
import { FormControlMessagesComponent } from './components/form-control-messages/form-control-messages.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    TieredMenuModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    MenuModule
  ],
  declarations: [FormControlMessagesComponent],
  providers: [ConfirmationService],
  exports : [CommonModule, HttpClientModule,FormsModule, ReactiveFormsModule, TableModule, ButtonModule, TieredMenuModule,DialogModule, InputTextModule, ConfirmDialogModule, MessagesModule, MessageModule, FormControlMessagesComponent, MenuModule]
})
export class SharedModule { }

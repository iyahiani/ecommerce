import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {AuthService} from "../../_services/auth.service";
import {EventBusService} from "../../_shared/event-bus.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isLoggedIn : boolean | undefined;
  showAdminBoard: boolean | undefined;
  showModeratorBoard: boolean | undefined;
  roles: Array<string> | undefined;
  username?: string;
  constructor(private storageService: StorageService,
              private authService: AuthService,
              private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      this.roles= this.storageService.getUser().roles;
      // @ts-ignore
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // @ts-ignore
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = this.storageService.getUser().username;
    }
  }
  discon(): void {
    this.storageService.clean();
    this.isLoggedIn = false;
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    window.location.reload();
  }
}

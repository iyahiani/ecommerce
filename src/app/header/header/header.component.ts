import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {AuthService} from "../../_services/auth.service";
import {EventBusService} from "../../_shared/event-bus.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isLoggedIn : boolean | undefined;
  @Input() showAdminBoard: boolean | undefined;
  @Input() showModeratorBoard: boolean | undefined;
  username?: string;
  constructor(private storageService: StorageService,
              private authService: AuthService,
              private eventBusService: EventBusService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.storageService.clean();
    this.isLoggedIn = false;
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    window.location.reload();
  }
}

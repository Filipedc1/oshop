import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from 'shared/services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/store/state/app.state';
import { selectUser } from 'app/store/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private _store: Store<AppState>) { }

  canActivate() {
    let isAdmin: boolean = false;

    this._store.pipe(select(selectUser))
      .subscribe(s => { 
        isAdmin = s.isAdmin;
      })

    if (isAdmin) return true;

    return false;
  }
}

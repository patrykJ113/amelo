import {Injectable} from '@angular/core';
import {DialogService} from '@services/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class DialogRegistryService {
  private dialogs = new Map<string, DialogService>()

  register(id: string, service: DialogService) {
    if(id === '') {
      throw new Error('⚠️ dialogRegistryId can not ba a empty string ❗')
    }
    this.dialogs.set(id, service)
  }

  unregister(id: string) {
    this.dialogs.delete(id)
  }

  get(id: string): DialogService | undefined {
    return  this.dialogs.get(id)
  }
}

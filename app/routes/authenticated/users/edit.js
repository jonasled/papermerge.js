import { service } from '@ember/service';
import RSVP from 'rsvp';
import BaseRoute from 'papermerge/routes/base';


export default class EditUserRoute extends BaseRoute {
  @service store;

  async model(params) {
    return RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      roles: this.store.findAll('role'),
      groups: this.store.findAll('group'),
    });
  }
}

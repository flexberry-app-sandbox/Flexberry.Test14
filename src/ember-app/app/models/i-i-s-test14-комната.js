import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КомнатаMixin
} from '../mixins/regenerated/models/i-i-s-test14-комната';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КомнатаMixin, Validations, {
});

defineProjections(Model);

export default Model;

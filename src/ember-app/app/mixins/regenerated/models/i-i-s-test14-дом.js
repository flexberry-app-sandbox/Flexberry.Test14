import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колПодъездов: DS.attr('number'),
  колЭтажей: DS.attr('number'),
  номерДома: DS.attr('number'),
  улица: DS.belongsTo('i-i-s-test14-улица', { inverse: null, async: false })
});

export let ValidationRules = {
  колПодъездов: {
    descriptionKey: 'models.i-i-s-test14-дом.validations.колПодъездов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колЭтажей: {
    descriptionKey: 'models.i-i-s-test14-дом.validations.колЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДома: {
    descriptionKey: 'models.i-i-s-test14-дом.validations.номерДома.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-test14-дом.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-test14-дом', {
    номерДома: attr('Номер дома', { index: 0 })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-test14-дом', {
    номерДома: attr('Номер дома', { index: 0 }),
    колПодъездов: attr('', { index: 1 }),
    колЭтажей: attr('', { index: 2 }),
    улица: belongsTo('i-i-s-test14-улица', '', {
      имяУлицы: attr('', { index: 3 }),
      город: belongsTo('i-i-s-test14-город', '', {
        наименование: attr('', { index: 4 }),
        плрщадьГо: attr('', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};

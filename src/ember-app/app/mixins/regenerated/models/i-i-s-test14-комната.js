import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  площадьК: DS.attr('number'),
  этаж: DS.attr('number'),
  дом: DS.belongsTo('i-i-s-test14-дом', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-test14-комната.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадьК: {
    descriptionKey: 'models.i-i-s-test14-комната.validations.площадьК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-test14-комната.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-test14-комната.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-test14-комната', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-test14-комната', {
    номер: attr('Номер', { index: 0 })
  });
};

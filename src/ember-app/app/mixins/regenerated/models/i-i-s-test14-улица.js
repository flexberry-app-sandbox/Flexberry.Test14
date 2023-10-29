import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяУлицы: DS.attr('string'),
  город: DS.belongsTo('i-i-s-test14-город', { inverse: null, async: false })
});

export let ValidationRules = {
  имяУлицы: {
    descriptionKey: 'models.i-i-s-test14-улица.validations.имяУлицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-test14-улица.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-test14-улица', {
    имяУлицы: attr('Имя улицы', { index: 0 })
  });

  modelClass.defineProjection('УлицаL', 'i-i-s-test14-улица', {
    имяУлицы: attr('Имя улицы', { index: 0 })
  });
};

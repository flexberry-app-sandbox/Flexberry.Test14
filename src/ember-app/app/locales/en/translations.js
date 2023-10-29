import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest14ГородLForm from './forms/i-i-s-test14-город-l';
import IISTest14ДомLForm from './forms/i-i-s-test14-дом-l';
import IISTest14КомнатаLForm from './forms/i-i-s-test14-комната-l';
import IISTest14УлицаLForm from './forms/i-i-s-test14-улица-l';
import IISTest14ГородEForm from './forms/i-i-s-test14-город-e';
import IISTest14ДомEForm from './forms/i-i-s-test14-дом-e';
import IISTest14КомнатаEForm from './forms/i-i-s-test14-комната-e';
import IISTest14УлицаEForm from './forms/i-i-s-test14-улица-e';
import IISTest14ГородModel from './models/i-i-s-test14-город';
import IISTest14ДомModel from './models/i-i-s-test14-дом';
import IISTest14КомнатаModel from './models/i-i-s-test14-комната';
import IISTest14УлицаModel from './models/i-i-s-test14-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test14-город': IISTest14ГородModel,
    'i-i-s-test14-дом': IISTest14ДомModel,
    'i-i-s-test14-комната': IISTest14КомнатаModel,
    'i-i-s-test14-улица': IISTest14УлицаModel
  },

  'application-name': 'Test14',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test14',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test14',
          title: 'Test14'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test14: {
          caption: 'Test14',
          title: 'Test14',
          'i-i-s-test14-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-test14-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-test14-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-test14-дом-l': {
            caption: 'Дом',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test14-город-l': IISTest14ГородLForm,
    'i-i-s-test14-дом-l': IISTest14ДомLForm,
    'i-i-s-test14-комната-l': IISTest14КомнатаLForm,
    'i-i-s-test14-улица-l': IISTest14УлицаLForm,
    'i-i-s-test14-город-e': IISTest14ГородEForm,
    'i-i-s-test14-дом-e': IISTest14ДомEForm,
    'i-i-s-test14-комната-e': IISTest14КомнатаEForm,
    'i-i-s-test14-улица-e': IISTest14УлицаEForm
  },

});

export default translations;

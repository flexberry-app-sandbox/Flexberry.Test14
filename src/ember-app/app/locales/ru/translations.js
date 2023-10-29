import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test14',
          title: 'Test14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

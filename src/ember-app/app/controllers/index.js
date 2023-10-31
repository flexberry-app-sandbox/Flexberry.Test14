import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test14.caption'),
          title: i18n.t('forms.application.sitemap.test14.title'),
          children: [{
            link: 'i-i-s-test14-город-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-город-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-город-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-test14-комната-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-комната-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-test14-улица-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-улица-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-улица-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-test14-дом-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-дом-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})
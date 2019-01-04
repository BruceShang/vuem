export default [
  {
    path: '/',
    redirect: {
      name: 'ui',
    },
  },
  {
    path: '/ui',
    component: () => import('views/ui/index.vue'),
    children: [
      {
        name: 'ui',
        path: '/ui',
        meta: {
          title: '组件列表-test',
        },
        component: () => import('views/ui/home.vue'),
      },
      {
        name: 'ui-button',
        path: '/ui-button',
        meta: {
          title: '按钮',
        },
        component: () => import('views/ui/button.vue'),
      },
      {
        name: 'ui-card',
        path: '/ui-card',
        meta: {
          title: 'Card',
        },
        component: () => import('views/ui/card.vue'),
      },
      {
        name: 'ui-form',
        path: '/ui-form',
        meta: {
          title: 'Form',
        },
        component: () => import('views/ui/form.vue'),
      },
      {
        name: 'ui-icons',
        path: '/ui-icons',
        meta: {
          title: 'Icons',
        },
        component: () => import('views/ui/icons.vue'),
      },
      {
        name: 'ui-loading',
        path: '/ui-loading',
        meta: {
          title: 'Loading',
        },
        component: () => import('views/ui/loading.vue'),
      },
      {
        name: 'ui-http',
        path: '/ui-http',
        meta: {
          title: 'Http',
        },
        component: () => import('views/ui/http.vue'),
      },
      {
        name: 'ui-toast',
        path: '/ui-toast',
        meta: {
          title: 'Toast',
        },
        component: () => import('views/ui/toast.vue'),
      },
      {
        name: 'ui-lazy-load',
        path: '/ui-lazy-load',
        meta: {
          title: 'Lazy-load',
        },
        component: () => import('views/ui/lazy-load.vue'),
      },
      {
        name: 'ui-dialog',
        path: '/ui-dialog',
        meta: {
          title: 'Dialog',
        },
        component: () => import('views/ui/dialog.vue'),
      },
      {
        name: 'ui-dialog-box',
        path: '/ui-dialog-box',
        meta: {
          title: 'Dialog-box',
        },
        component: () => import('views/ui/dialog-box.vue'),
      },
      {
        name: 'ui-action-sheet',
        path: '/ui-action-sheet',
        meta: {
          title: 'Action-sheet',
        },
        component: () => import('views/ui/action-sheet.vue'),
      },
      {
        name: 'ui-number-input',
        path: '/ui-number-input',
        meta: {
          title: 'Number-input',
        },
        component: () => import('views/ui/number-input.vue'),
      },
      {
        name: 'ui-load-more',
        path: '/ui-load-more',
        meta: {
          title: 'Load-more',
        },
        component: () => import('views/ui/load-more.vue'),
      },
      {
        name: 'ui-address',
        path: '/ui-address',
        meta: {
          title: 'ui-address',
        },
        component: () => import(/* webpackChunkName: "address-area" */ 'views/ui/address.vue'),
      },
      {
        name: 'ui-count-down',
        path: '/ui-count-down',
        meta: {
          title: 'ui-count-down',
        },
        component: () => import('views/ui/count-down.vue'),
      },
    ],
  },
]

<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1 class="we-card__title"> Mobile UI</h1>
    </div>
    <div>
      <router-link class="we-cell" v-for="(item, index) in list" :key="index" :to="item.route">
        <span class="we-cell__body">{{ item.name }}</span>
        <span class="we-cell__footer">
          <i class="we-icon we-icon--right-arrow"></i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        /**
         * 组件一览表
         * @type {Array}
         */
        list: [
          {
            name: 'Button',
            route: {
              name: 'ui-button',
            },
          },
          {
            name: 'Card',
            route: {
              name: 'ui-card',
            },
          },
          {
            name: 'From',
            route: {
              name: 'ui-form',
            },
          },
          {
            name: 'Icons',
            route: {
              name: 'ui-icons',
            },
          },
          {
            name: 'Loading',
            route: {
              name: 'ui-loading',
            },
          },
          {
            name: 'Http',
            route: {
              name: 'ui-http',
            },
          },
          {
            name: 'Toast',
            route: {
              name: 'ui-toast',
            },
          },
          {
            name: 'lazy-load',
            route: {
              name: 'ui-lazy-load',
            },
          },
          {
            name: 'dialog',
            route: {
              name: 'ui-dialog',
            },
          },
          {
            name: 'dialog-box',
            route: {
              name: 'ui-dialog-box',
            },
          },
          {
            name: 'action-sheet',
            route: {
              name: 'ui-action-sheet',
            },
          },
          {
            name: 'number-input',
            route: {
              name: 'ui-number-input',
            },
          },
          {
            name: 'load-more',
            route: {
              name: 'ui-load-more',
            },
          },
          {
            name: 'ui-count-down',
            route: {
              name: 'ui-count-down',
            },
          },
          {
            name: 'ui-adress',
            route: {
              name: 'ui-address',
            },
          },
        ],
      }
    },
  }
</script>


<template>
<div class="ui-icons">
  <div class="we-card">
    <div class="we-card__header">
      <h5 class="we-card__title">Icons</h5>
    </div>
    <div class="we-card__body">
      <div class="we-cell" v-for="icon in icons" :key="icon">
       <div class="we-cell__body">
         <i :class="`we-icon we-icon--${icon}`"></i>
       </div>
       <div class="we-cell__footer">
         we-icon we-icon--{{icon}}
       </div>
      </div>
    </div>
    <h3> Group Icon</h3>
    <div class="we-card__body">
      <div class="we-cell" v-for="icon in icons" :key="icon">
       <div class="we-cell__body">
         <span class="we-icon-group we-icon-group--small we-icon-group--default">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--medium we-icon-group--default">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--large we-icon-group--default">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
       </div>
       <div class="we-cell__body">
         <span class="we-icon-group we-icon-group--small we-icon-group--primary">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--medium we-icon-group--primary">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--large we-icon-group--primary">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
       </div>
       <div class="we-cell__body">
         <span class="we-icon-group we-icon-group--small we-icon-group--darker">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--medium we-icon-group--darker">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
         <span class="we-icon-group we-icon-group--large we-icon-group--darker">
           <i :class="`we-icon we-icon--${icon}`"></i>
         </span>
       </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'right-arrow',
        'left-arrow',
        'share',
        'checkbox-right',
        'wechat-pay',
        'alipay',
      ],
    }
  },
}
</script>

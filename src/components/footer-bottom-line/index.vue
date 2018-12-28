<template>
  <div class="components-footer-bottom-line">
    <p>我是有底线哒~</p>
  </div>
</template>

<style lang="stylus" scoped>
.components-footer-bottom-line {
  width: 100%;
  padding: 60px;
  p {
    position: relative;
    width: 80%;
    color: #adadad;
    margin: 0px auto;
    text-align: center;

    &::after,
    &::before {
      position: absolute;
      display: inline-block;
      content: ' ';
      top: 21px;
      width: 30%;
      height: 2px;
      background-color: #ADADAD;
    }
    &::before {
      left: -10px; 
    } 
    &::after {
      right: -10px;  
    }
  }
}
</style>

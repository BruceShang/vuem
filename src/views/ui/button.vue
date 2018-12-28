<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1 class="we-card__title">Button - 按钮</h1>
    </div>
    <div class="we-card__body">
      <h4>Colors</h4>
      <p>
        <button class="we-btn we-btn--default">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--secondary">Secondary</button>
      </p>
      <p>
        <button class="we-btn we-btn--success">Success</button>
      </p>
      <p>
        <button class="we-btn we-btn--warning">Warning</button>
      </p>
      <p>
        <button class="we-btn we-btn--accent">Accent</button>
      </p>

      <h4>Plain</h4>
      <p>
        <button class="we-btn we-btn--default we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--plain">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--secondary we-btn--plain">Secondary</button>
      </p>
      <p>
        <button class="we-btn we-btn--success we-btn--plain">Success</button>
      </p>
      <p>
        <button class="we-btn we-btn--warning we-btn--plain">Warning</button>
      </p>
      <p>
        <button class="we-btn we-btn--warning we-btn--plain we-btn--accent">Accent</button>
      </p>

      <h4>Round</h4>
      <p>
        <button class="we-btn we-btn--default we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--plain we-btn--round">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--plain we-btn--round">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--secondary we-btn--round">Secondary</button>
        <button class="we-btn we-btn--secondary we-btn--plain we-btn--round">Secondary</button>
      </p>
      <p>
        <button class="we-btn we-btn--success we-btn--round">Success</button>
        <button class="we-btn we-btn--success we-btn--plain we-btn--round">Success</button>
      </p>
      <p>
        <button class="we-btn we-btn--warning we-btn--round">Warning</button>
        <button class="we-btn we-btn--warning we-btn--plain we-btn--round">Warning</button>
      </p>

      <h4>Sizes</h4>
      <h5>Extra Small</h5>
      <p>
        <button class="we-btn we-btn--default we-btn--extra-small">Default</button>
        <button class="we-btn we-btn--default we-btn--extra-small we-btn--plain">Default</button>
        <button class="we-btn we-btn--default we-btn--extra-small we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--extra-small we-btn--round we-btn--plain">Default</button>
        <button class="we-btn we-btn--accent we-btn--extra-small we-btn--round we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--extra-small">Primary</button>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--plain">Primary</button>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round we-btn--plain">Primary</button>
        <button class="we-btn we-btn--accent we-btn--extra-small we-btn--round we-btn--plain">Primary</button>
      </p>

      <h4>Sizes</h4>
      <h5>Small</h5>
      <p>
        <button class="we-btn we-btn--default we-btn--small">Default</button>
        <button class="we-btn we-btn--default we-btn--small we-btn--plain">Default</button>
        <button class="we-btn we-btn--default we-btn--small we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--small we-btn--round we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--small">Primary</button>
        <button class="we-btn we-btn--primary we-btn--small we-btn--plain">Primary</button>
        <button class="we-btn we-btn--primary we-btn--small we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--small we-btn--round we-btn--plain">Primary</button>
        <button class="we-btn we-btn--accent we-btn--small we-btn--round we-btn--plain">Primary</button>
      </p>
      <h5>Normal</h5>
      <p>
        <button class="we-btn we-btn--default">Default</button>
        <button class="we-btn we-btn--default we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--round we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary">Primary</button>
        <button class="we-btn we-btn--primary we-btn--plain">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--round we-btn--plain">Primary</button>
      </p>
      <h5>Large</h5>
      <p>
        <button class="we-btn we-btn--default we-btn--large">Default</button>
        <button class="we-btn we-btn--default we-btn--large we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--large we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--large we-btn--round we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--large">Primary</button>
        <button class="we-btn we-btn--primary we-btn--large we-btn--plain">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--large we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--large we-btn--round we-btn--plain">Primary</button>
      </p>

      <h5>Extra Large</h5>
      <p>
        <button class="we-btn we-btn--default we-btn--extra-large">Default</button>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--round">Default</button>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--round we-btn--plain">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--extra-large">Primary</button>
        <button class="we-btn we-btn--primary we-btn--extra-large we-btn--plain">Primary</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--extra-large we-btn--round">Primary</button>
        <button class="we-btn we-btn--primary we-btn--extra-large we-btn--round we-btn--plain">Primary</button>
      </p>

      <h4>Limited Width</h4>
      <p>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round we-btn--limit-small">we-btn--extra-small</button>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round we-btn--plain we-btn--limit-small">we-btn--extra-small</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--small we-btn--limit-small">we-btn--medium</button>
        <button class="we-btn we-btn--primary we-btn--small we-btn--plain we-btn--limit-small">we-btn--small</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--medium we-btn--limit-small">we-btn--medium</button>
        <button class="we-btn we-btn--primary we-btn--medium we-btn--plain we-btn--limit-small">we-btn--small</button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--large we-btn--round we-btn--limit-small">we-btn--limit-large</button>
        <button class="we-btn we-btn--default we-btn--large we-btn--round we-btn--plain we-btn--limit-large">we-btn--limit-large</button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--limit-small">we-btn--limit-small</button>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--plain we-btn--limit-small">we-btn--limit-small</button>
      </p>

      <h4>Block</h4>
      <p>
        <button class="we-btn we-btn--default we-btn--block">Default</button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--block">Primary</button>
      </p>

      <h4>Columns</h4>
      <p>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
        <button class="we-btn we-btn--primary we-btn--extra-small we-btn--round we-btn--plain we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--small we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
        <button class="we-btn we-btn--primary we-btn--small we-btn--plain we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--medium we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
        <button class="we-btn we-btn--primary we-btn--medium we-btn--plain we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--large we-btn--round we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
        <button class="we-btn we-btn--default we-btn--large we-btn--round we-btn--plain we-btn--limit-large we-btn--columns"><span>主文字</span><span>辅文字</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
        <button class="we-btn we-btn--default we-btn--extra-large we-btn--plain we-btn--limit-small we-btn--columns"><span>主文字</span><span>辅文字</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--default we-btn--block we-btn--columns"><span>Default</span><span>Summary</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--block we-btn--columns"><span>Primary</span><span>Summary</span></button>
      </p>
      <p>
        <button class="we-btn we-btn--primary we-btn--block we-btn--columns we-btn--plain "><span>10元/月  开通超级会员卡</span><span>享全场5折</span></button>
      </p>

      <h4>Group</h4>
      <div class="we-btn-group">
        <button class="we-btn we-btn--default">Default</button>
        <button class="we-btn we-btn--primary">Primary</button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  p > .we-btn + .we-btn {
    margin-left: 20px;
  }
  p, h4, h5 {
    margin-bottom: 20px;
  }

</style>

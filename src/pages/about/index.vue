<template>
  <div class="about">
    <h1>About me</h1>
    <p>I <i>❤</i> : art, pop music, design, photography, movies.</p>
    <p>我从远方赶来，恰巧你们也在~</p>
    <h2>Bio</h2>
    <p>我叫栗子，目前是一名正在快速成长的前端攻城狮。</p>
    <p>
      学生时代的前3年，贡献给了冰城雪国哈尔滨，大四那年有幸去东京学习生活了1年，之后回国在广东生活了半年多，最后决定留在了可爱的杭州。
    </p>
    <p>由摄影爱好者华丽转身，做了自己曾经想都没想到的工作，成为了一名前端攻城狮。</p>
    <p>未来想做一名全栈攻城狮，攻城狮无国界。</p>
    <p>喜欢自由，喜欢一切美好的事物，喜欢旅行，喜欢自然界的山川大海。</p>
    <p>
      最喜欢蓝天白云，哈尔滨的天空很漂亮，大理丽江的天空也是，记得在哈尔滨上学的时候，有次和外教说今天的天空真漂亮，外教却和我说，日本的天空每天都是这样啊~后来去了日本之后，发现外教真的没有骗我，天空太好看了，不信的话你也可以去看看呀，看看是不是像我说的如此~~
    </p>
    <p>愿你眼里有星辰大海，心中有山川热爱。</p>
    <p>
      在全球幸福指数排行榜上，芬兰、丹麦、挪威、冰岛、荷兰是排名最靠前的国家，如果有可能，将来我想去世界上最幸福的国家生活一年，感受当地的风俗文化与不同的价值观。
    </p>
    <p>热爱开源，喜欢前端，也正在涉足后端，有用户交互的地方就有前端~ 自分は自分でつくるの~</p>
    <p>要靠自己成就自己~</p>
    <p>Contact Email to 1323109714@qq.com</p>
    <p>Chat on ln1323109714</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  h1 {
    color: #333;
    font-weight: bold;
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
    background-size: 200% 100%;
    animation: myGradientChange 4s linear infinite;
    background-image: linear-gradient(
      left,
      #22c1c3,
      #fdbb2d 25%,
      #22c1c3 50%,
      #fdbb2d 75%,
      #22c1c3
    );
  }
  @keyframes myGradientChange {
    0% {
      background-position: 0 0;
    }

    to {
      background-position: -100% 0;
    }
  }
}
p {
  i {
    color: #ff6e71;
  }
}
</style>

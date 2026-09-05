<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="brand">
        <span class="brand-name">陶氏族谱</span>
        <span class="brand-sub">Tao Clan Genealogy</span>
      </div>
      <div class="header-right">族谱数字化 · v0.1</div>
    </header>
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #7a1f1f;
  color: #f5e9d6;
}
.brand {
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.brand-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 6px;
}
.brand-sub {
  font-size: 12px;
  opacity: 0.8;
  letter-spacing: 1px;
}
.header-right {
  font-size: 12px;
  opacity: 0.85;
}
.app-main {
  flex: 1;
  overflow: hidden;
}
</style>

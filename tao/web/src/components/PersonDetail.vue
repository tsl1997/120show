<script setup>
import { ref, watch } from 'vue'
import { fetchPerson } from '../api'

const props = defineProps({
  personId: { type: Number, required: true },
})
const emit = defineEmits(['close', 'select-person'])

const data = ref(null)
const loading = ref(false)
const error = ref('')

function genderText(g) {
  return g === 1 ? '男' : g === 2 ? '女' : ''
}

function openPerson(id) {
  if (id) emit('select-person', id)
}

watch(
  () => props.personId,
  async (id) => {
    if (!id) return
    loading.value = true
    error.value = ''
    try {
      data.value = await fetchPerson(id)
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="mask" @click.self="emit('close')">
    <aside class="drawer">
      <div v-if="loading" class="empty">加载中…</div>
      <div v-else-if="error" class="empty">加载失败:{{ error }}</div>
      <div v-else-if="data" class="content">
        <button class="close" @click="emit('close')">×</button>

        <header class="head">
          <h2 class="name">{{ data.person.name }}</h2>
          <div class="tags">
            <span class="tag gen">第 {{ data.person.generation }} 世</span>
            <span class="tag sex">{{ genderText(data.person.gender) }}</span>
            <span v-if="data.person.ranking" class="tag rank">{{ data.person.ranking }} 房</span>
          </div>
        </header>

        <section v-if="data.person.zi || data.person.hao" class="block">
          <p v-if="data.person.zi" class="line">字:{{ data.person.zi }}</p>
          <p v-if="data.person.hao" class="line">号:{{ data.person.hao }}</p>
        </section>

        <section v-if="data.person.birth_year || data.person.death_year" class="block">
          <p class="line">
            生卒:{{ data.person.birth_year || '?' }} — {{ data.person.death_year || '?' }}
          </p>
        </section>

        <section v-if="data.person.remarks" class="block">
          <h3>生平/备注</h3>
          <p class="text">{{ data.person.remarks }}</p>
        </section>

        <section v-if="data.person.source_book_id || data.person.source_page" class="block">
          <h3>出处</h3>
          <p class="line">
            {{ data.person.source_book_title || '' }} {{ data.person.source_page || '' }}
          </p>
        </section>

        <section v-if="data.parents.length" class="block">
          <h3>父母(上一辈)</h3>
          <ul class="rel-list">
            <li
              v-for="p in data.parents"
              :key="p.id"
              class="rel-item"
              @click="openPerson(p.id)"
            >
              {{ p.name }}<span class="rel-sex">{{ genderText(p.gender) }}</span>
            </li>
          </ul>
        </section>

        <section v-if="data.spouses.length" class="block">
          <h3>配偶</h3>
          <ul class="rel-list">
            <li
              v-for="s in data.spouses"
              :key="s.id"
              class="rel-item"
              @click="openPerson(s.id)"
            >
              {{ s.name }}
              <span v-if="s.order_no > 1" class="rel-sex">第{{ s.order_no }}任</span>
              <span class="rel-sex">{{ genderText(s.gender) }}</span>
            </li>
          </ul>
        </section>

        <section v-if="data.children.length" class="block">
          <h3>子女(下一辈)</h3>
          <ul class="rel-list">
            <li
              v-for="c in data.children"
              :key="c.id"
              class="rel-item"
              @click="openPerson(c.id)"
            >
              {{ c.name }}
              <span v-if="c.ranking" class="rel-sex">{{ c.ranking }} 房</span>
              <span class="rel-sex">{{ genderText(c.gender) }}</span>
            </li>
          </ul>
        </section>

        <section v-if="data.attachments.length" class="block">
          <h3>原谱照片</h3>
          <div class="imgs">
            <a
              v-for="(a, i) in data.attachments"
              :key="i"
              :href="a.url"
              target="_blank"
              rel="noopener"
              class="img-card"
            >
              <img
                :src="a.url"
                :alt="a.title || '族谱照片'"
                loading="lazy"
                @error="(e) => (e.target.style.visibility = 'hidden')"
              />
              <span class="img-title">{{ a.title || a.url }}</span>
            </a>
          </div>
        </section>

        <section v-if="data.citations.length" class="block">
          <h3>原文摘录</h3>
          <ul class="cite-list">
            <li v-for="(c, i) in data.citations" :key="i" class="cite-item">
              <p class="cite-text">「{{ c.content }}」</p>
              <p class="cite-src">{{ c.book_title || '' }} {{ c.page || '' }}</p>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 100;
}
.drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: 380px;
  height: 100%;
  background: #fffdf7;
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
}
.empty {
  padding: 60px 20px;
  text-align: center;
  color: #9a8f7a;
}
.content {
  padding: 20px;
  position: relative;
}
.close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  border: none;
  background: #eee3cd;
  border-radius: 50%;
  font-size: 18px;
  color: #7a1f1f;
  cursor: pointer;
}
.head {
  margin-bottom: 12px;
  padding-right: 40px;
}
.name {
  font-size: 24px;
  color: #7a1f1f;
  margin-bottom: 6px;
}
.tags {
  display: flex;
  gap: 6px;
}
.tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
}
.gen {
  background: #7a1f1f;
  color: #f5e9d6;
}
.sex {
  background: #e8d9c2;
  color: #6b5f4b;
}
.rank {
  background: #d8c3a5;
  color: #5c4f3b;
}
.block {
  margin-top: 16px;
  border-top: 1px dashed #e4dcc8;
  padding-top: 12px;
}
.block h3 {
  font-size: 14px;
  color: #7a1f1f;
  margin-bottom: 8px;
}
.line {
  font-size: 14px;
  color: #5c4f3b;
  margin-bottom: 4px;
}
.text {
  font-size: 14px;
  line-height: 1.7;
  color: #4a4238;
}
.rel-list {
  list-style: none;
}
.rel-item {
  padding: 6px 8px;
  margin-bottom: 6px;
  background: #f3ecdd;
  border-radius: 6px;
  font-size: 14px;
  color: #3d3a34;
  cursor: pointer;
  transition: background 0.2s;
}
.rel-item:hover {
  background: #e8dcc4;
}
.rel-sex {
  color: #9a8f7a;
  font-size: 12px;
  margin-left: 6px;
}
.imgs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.img-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
}
.img-card img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  border: 1px solid #e4dcc8;
  border-radius: 6px;
  background: #efe8d8;
}
.img-title {
  font-size: 11px;
  color: #9a8f7a;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cite-list {
  list-style: none;
}
.cite-item {
  margin-bottom: 10px;
}
.cite-text {
  font-size: 13px;
  line-height: 1.6;
  color: #4a4238;
  font-style: italic;
}
.cite-src {
  font-size: 12px;
  color: #9a8f7a;
  margin-top: 2px;
}
</style>

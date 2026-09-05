<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'
import { fetchTree } from '../api'
import PersonDetail from '../components/PersonDetail.vue'

const chartEl = ref(null)
let chart = null

const endGen = ref(3)
const loading = ref(false)
const error = ref('')
const selectedId = ref(null)

function buildTree(persons, marriages) {
  const map = new Map()
  persons.forEach((p) => map.set(p.id, { ...p, type: 'person', children: [] }))

  // 子女挂到父亲名下,父亲缺失则挂母亲
  persons.forEach((p) => {
    if (p.father_id && map.has(p.father_id)) {
      map.get(p.father_id).children.push(map.get(p.id))
    } else if (p.mother_id && map.has(p.mother_id)) {
      map.get(p.mother_id).children.push(map.get(p.id))
    }
  })

  // 配偶作为叶子节点挂到丈夫名下
  marriages.forEach((m) => {
    const h = map.get(m.husband_id)
    const w = map.get(m.wife_id)
    if (h && w) h.children.push({ ...w, type: 'spouse', children: [] })
  })

  // 排序:子女按排行,配偶排在最后
  map.forEach((node) => {
    node.children.sort((a, b) => {
      if (a.type === 'spouse' && b.type !== 'spouse') return 1
      if (b.type === 'spouse' && a.type !== 'spouse') return -1
      return (a.ranking || 99) - (b.ranking || 99)
    })
  })

  return persons.filter((p) => !p.father_id && !p.mother_id).map((p) => map.get(p.id))
}

function renderChart(roots) {
  if (!chart) {
    chart = echarts.init(chartEl.value)
    chart.on('click', (params) => {
      if (params.data && params.data.id) selectedId.value = params.data.id
    })
  }

  const option = {
    tooltip: {
      formatter: (p) => {
        const d = p.data
        const sex = d.gender === 1 ? '男' : d.gender === 2 ? '女' : ''
        return `${d.name}<br/>第${d.generation}世 · ${sex}`
      },
    },
    series: [
      {
        type: 'tree',
        data: roots,
        orient: 'TB',
        top: '6%',
        bottom: '10%',
        left: '8%',
        right: '8%',
        expandAndCollapse: true,
        initialTreeDepth: -1,
        nodeClick: 'expandToNode',
        roam: true,
        symbol: (value, params) => (params.data && params.data.type === 'spouse' ? 'circle' : 'rect'),
        symbolSize: (value, params) => {
          const isSpouse = params.data && params.data.type === 'spouse'
          return isSpouse ? [40, 24] : [64, 34]
        },
        label: {
          position: 'inside',
          color: '#fff',
          fontSize: 13,
          fontWeight: 'bold',
          formatter: (p) => p.data.name,
        },
        itemStyle: {
          borderRadius: 4,
          color: (params) => {
            const d = params.data
            if (d.type === 'spouse') return '#c9a86a'
            return d.gender === 1 ? '#a0492e' : '#b86a86'
          },
          borderColor: '#f5e9d6',
          borderWidth: 1,
        },
        lineStyle: { color: '#b9a88a', width: 1.5 },
        emphasis: { focus: 'descendant' },
      },
    ],
  }

  chart.setOption(option, true)
}

async function loadTree() {
  loading.value = true
  error.value = ''
  try {
    const { persons, marriages } = await fetchTree(1, endGen.value)
    if (!persons.length) {
      error.value = '该世系区间暂无数据'
      return
    }
    renderChart(buildTree(persons, marriages))
  } catch (e) {
    error.value = `加载失败:${e.message}。请确认后端服务已启动。`
  } finally {
    loading.value = false
  }
}

function handleResize() {
  chart && chart.resize()
}

watch(endGen, loadTree)

onMounted(() => {
  loadTree()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chart && chart.dispose()
})
</script>

<template>
  <div class="home">
    <div class="toolbar">
      <span class="toolbar-label">展示世系:一世 至</span>
      <select v-model.number="endGen" class="gen-select">
        <option :value="3">三世</option>
        <option :value="5">五世</option>
        <option :value="10">十世</option>
        <option :value="15">十五世</option>
        <option :value="19">十九世</option>
      </select>
      <span class="hint">· 点击人物节点查看详情,点击可展开/收起其分支</span>
    </div>

    <div class="chart-wrap">
      <div ref="chartEl" class="chart"></div>
      <div v-if="loading" class="overlay">数据加载中…</div>
      <div v-else-if="error" class="overlay">{{ error }}</div>
    </div>

    <PersonDetail
      v-if="selectedId"
      :person-id="selectedId"
      @close="selectedId = null"
    />
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #fffdf7;
  border-bottom: 1px solid #e4dcc8;
  font-size: 14px;
}
.toolbar-label {
  color: #7a1f1f;
  font-weight: 600;
}
.gen-select {
  padding: 4px 8px;
  border: 1px solid #cbbd9f;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
}
.hint {
  color: #9a8f7a;
  font-size: 13px;
}
.loading,
.error {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9a8f7a;
  font-size: 16px;
}
.error {
  color: #a0492e;
}
.chart-wrap {
  position: relative;
  flex: 1;
  overflow: hidden;
}
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9a8f7a;
  font-size: 16px;
  background: #f5f2ea;
}
.chart {
  position: absolute;
  inset: 0;
}
</style>

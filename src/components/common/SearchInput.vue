<script setup>
import IconArrowForward from '../icons/IconArrowForward.vue'
import { useRouter, useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

// 输入内容
const searchkey = ref('');
// const props = defineProps(['searchwords'])
// const emit = defineEmits(['keywords'])

onMounted(() => {

})
watch(searchkey, async () => {
    return console.log(searchkey.value);
})

// 提交问题
function submitSearch() {
    if (searchkey.value != '') {
        router.push({
            name: 'Result',
            params: { query: searchkey.value }
        });
    } else {
        router.push('/');
    }
    console.log(route.path)
}

</script>

<template>
    <div class="produce-input">
        <input v-model.trim="searchkey" placeholder="输入你想搜索的问题">
        <button @click="submitSearch()">
            <IconArrowForward />
        </button>
    </div>
</template>
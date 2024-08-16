<script setup>
import IconSparkles from './icons/IconSparkles.vue'
import IconTelescope from './icons/IconTelescope.vue'
import IconRocket from './icons/IconRocket.vue';
import IconPlanet from './icons/IconPlanet.vue';
import IconCopy from './icons/IconCopy.vue';
import IconReload from './icons/IconReload.vue';

import SearchInput from './common/SearchInput.vue'
import ListTitle from './common/ListTitle.vue'

import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

router.afterEach(() => {
    window.scrollTo(0, 0);
})

// ==============================================================================

onMounted(() => {
    console.log("path=="+route.params.query);
})


// 搜索标题
const searchTitle = ref('');
// searchTitle.value = route.params.query;
searchTitle.value = "北极星与北斗星的区别北极星与北斗星的区别北极星与北斗星的区别";

// 回答
const answerContent = ref([
    {
        answerPhase: "北极星和北斗星是两组不同的天体。北极星是一颗单独的恒星，目前指的是勾陈一，它位于北天极附近，因此在地球自转时几乎保持静止，是导航和定位的重要参考点。北极星距离地球约434光年，是夜空中能看到的亮度和位置较稳定的恒星。",
        quoteNum: [1, 3]
    }, {
        answerPhase: "北极星的准确位置确实会随着时间发生变化。北极星并不是指固定的某一颗星，而是指最靠近北天极的一颗恒星。由于地球的自转轴在空间中不是固定不变的，而是进行缓慢的圆锥运动，这种现象称为岁差，因此北极星相对于地球的位置会发生变化。大约每25,800年，地球的自转轴完成一次完整的圆锥运动，这时北天极会指向天空中的另一颗恒星，而原本的北极星则不再处于北天极的位置。",
        quoteNum: [2]
    }, {
        answerPhase: "在宗教和神话传说中，北斗七星被赋予了神圣的地位，被认为是天帝的座驾，与天命和帝王权力相关联。北斗七星的七颗星分别代表不同的神祇，被称为“北斗七元君”，在道教中具有重要的宗教意义。",
        quoteNum: [4]
    }
]);

// 相关图片
const answerPics = ref([
    {
        picName: 'pic01',
        picHref: '#',
        picSrc: '/src/assets/images/pic01.jpg'

    }, {
        picName: 'pic02',
        picHref: '#',
        picSrc: '/src/assets/images/pic02.jpg'
    }, {
        picName: 'pic03',
        picHref: '#',
        picSrc: '/src/assets/images/pic03.jpg'
    }, {
        picName: 'pic04',
        picHref: '#',
        picSrc: '/src/assets/images/pic04.jpg'
    }
])

// 相关提问
const relatedTitle = ref();

// 参考链接
const sourcesContent = ref();

// ===============================================================================
onMounted(() => {
    console.log("answerPics=" + answerPics.value.length);
    console.log('result.info');
})

</script>

<template>
    <header>
        <!-- 顶部搜索 -->
        <div class="header-wrapper">
            <div class="produce-logo">
                <router-link to="/">
                    <img src="../assets/images/logo.svg" alt="LOGO" width="80px" height="80px">
                </router-link>
            </div>
            <!-- 主搜索 -->
            <SearchInput/>
        </div>
    </header>
    <main>
        <!-- 左侧 -->
        <div class="left-wrapper">
            <div class="result-title">{{ searchTitle }}</div>
            <!-- 回答 -->
            <div class="block-answer">
                <div class="block-header">
                    <div class="block-title">
                        <IconSparkles />
                        <span>回答</span>
                    </div>
                    <div class="block-options">
                        <IconCopy />
                        <span>复制</span>
                    </div>
                </div>
                <!-- 回答内容 -->
                <div class="answer-content">
                    <p v-for="answer in answerContent">
                        {{ answer.answerPhase }}
                        <span class="num-quote" v-for="num in answer.quoteNum">{{ num }}</span>
                    </p>
                </div>
            </div>
            <!-- 相关图片 -->
            <div class="block-pics">
                <div class="block-header">
                    <div class="block-title">
                        <IconTelescope />
                        <span>相关图片</span>
                    </div>
                    <div class="pic-dot">
                        <ul>
                            <li class="selected">&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
                <!-- 图片内容 -->
                <div class="pic-gallery">
                    <ul>
                        <li v-for="pic in answerPics">
                            <a :href=pic.picHref>
                                <img :src=pic.picSrc>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 生成操作 -->
            <div class="block-generated">
                <div>内容由AI生成，仅供参考</div>
                <div class="block-options">
                    <IconReload />
                    <span>重新生成</span>
                </div>
            </div>
            <!-- 相关提问 -->
            <div class="block-related">
                <div class="block-header">
                    <div class="block-title">
                        <IconRocket />
                        <span>相关提问</span>
                    </div>
                </div>
                <!-- 问题列表 -->
                <ListTitle />
            </div>
        </div>
        <!-- 右侧 -->
        <div class="right-wrapper">
            <!-- 参考链接 -->
            <div class="block-sources">
                <div class="block-header">
                    <div class="block-title">
                        <IconPlanet />
                        <span>参考链接</span>
                    </div>
                </div>
                <!-- 来源列表 -->
                <div class="sources-list">
                    <ul>
                        <li>
                            <a href="#">
                                <div class="sources-title">
                                    <span class="num-quote">1</span>&nbsp;
                                    <span>趣知识；不动的北极星及北斗七星</span>
                                </div>
                                <div class="sources-intro">
                                    北极星位于地球地轴的北端，在北斗七星中的天璇与天枢连线的五倍延长线上。 由于地球的自转，而北极星正好处在天球转动的轴上，所以相对不动。
                                    北极星距地球约434光年，直径约为5200万公里，质量略大于太阳质量的4倍，是夜空中能看到的亮度和位置较稳定的恒星
                                    （北极星实际由北极星Aa、北极星B及北极星Ab三个天体组成）。
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="sources-title">
                                    <span class="num-quote">2</span>&nbsp;
                                    <span>北斗七星究竟都是什么星？为什么它们能指示地球上的季节？|北极星|北斗七星|恒星_新浪新闻</span>
                                </div>
                                <div class="sources-intro">
                                    北极星位于地球地轴的北端，在北斗七星中的天璇与天枢连线的五倍延长线上。 由于地球的自转，而北极星正好处在天球转动的轴上，所以相对不动。
                                    北极星距地球约434光年，直径约为5200万公里，质量略大于太阳质量的4倍，是夜空中能看到的亮度和位置较稳定的恒星
                                    （北极星实际由北极星Aa、北极星B及北极星Ab三个天体组成）。
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="sources-title">
                                    <span class="num-quote">3</span>&nbsp;
                                    <span>北极星，北斗七星与二十八宿</span>
                                </div>
                                <div class="sources-intro">
                                    北极星位于地球地轴的北端，在北斗七星中的天璇与天枢连线的五倍延长线上。 由于地球的自转，而北极星正好处在天球转动的轴上，所以相对不动。
                                    北极星距地球约434光年，直径约为5200万公里，质量略大于太阳质量的4倍，是夜空中能看到的亮度和位置较稳定的恒星
                                    （北极星实际由北极星Aa、北极星B及北极星Ab三个天体组成）。
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="sources-title">
                                    <span class="num-quote">4</span>&nbsp;
                                    <span>北斗七星和北极星都是什么星星？它们之间有什么联系？|北极星|北斗七星|恒星_新浪新闻</span>
                                </div>
                                <div class="sources-intro">
                                    北极星位于地球地轴的北端，在北斗七星中的天璇与天枢连线的五倍延长线上。 由于地球的自转，而北极星正好处在天球转动的轴上，所以相对不动。
                                    北极星距地球约434光年，直径约为5200万公里，质量略大于太阳质量的4倍，是夜空中能看到的亮度和位置较稳定的恒星
                                    （北极星实际由北极星Aa、北极星B及北极星Ab三个天体组成）。
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- 来源分页 -->
                <div class="sources-pagination">
                    <ul>
                        <li class="selected">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@import url(../assets/css/result.scss);

:deep(.produce-input) {
    height: 70px;

    input {
        width: 430px;
        height: 50px;
        font-size: 14px;
    }

    button {
        width: 30px;
        height: 30px;
        border-radius: 50px;
        line-height: 42px;

        svg {
            width: 24px;
            height: 24px;
        }
    }
}

:deep(.produce-titlelist ul) {
    justify-content: left;
    margin-top: 20px;

    li {
        font-size: 14px;
    }
}
</style>./common/ListTitle.vue./common/SearchInput.vue
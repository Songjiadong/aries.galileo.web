<script setup>
import SearchInput from './common/SearchInput.vue'
import ListTitle from './common/ListTitle.vue'

</script>

<template>
    <main>
        <div class="main-wrapper">
            <!-- 产品信息 -->
            <div class="produce-info">
                <div class="produce-logo">
                    <img src="../assets/images/logo.svg" alt="LOGO">
                </div>
                <div class="produce-text">
                    <div class="produce-name">机械行业AI搜索</div>
                    <div class="produce-version">v0.1</div>
                </div>
            </div>
            <!-- 主搜索 -->
            <SearchInput />
            <!-- 参考提问 -->
            <ListTitle />
        </div>
        <div class="footer-wrapper">
            <div><router-link to="/aboutUs">关于我们</router-link></div>
            <div><router-link to="/contactUs">联系我们</router-link></div>
            <div>MIIC©2024</div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@import url(../assets/css/home.scss);
</style>
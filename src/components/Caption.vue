<template>
    <div class="title">
        <h1>{{title}}</h1>
        <div class="subtitle" v-if="subtitle">
            {{subtitle}}
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Caption",
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="less">
    .title {
        .subtitle {
            padding-top: 0.1rem;
            color: #858585;
        }
    }
</style>

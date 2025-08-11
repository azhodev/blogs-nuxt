<script setup lang="ts">
import { allArticlesQuery } from '~/graphql/queries';

interface Article {
    documentId: string;
    slug: string;
    title: string;
    date: string;
    description: string;
}

const articles: Ref<Article[]> = ref([])

const { data } = await useAsyncQuery<{articles: Article[]}>(allArticlesQuery)

if (data.value?.articles) {
    articles.value = data.value.articles
}
</script>

<template>
    <div class="home container">
        <h1 class="headline">Lyric Blog</h1>
        <div class="groups-list">
            <div
                v-for="article in articles"
                :key="article.documentId"
                class="group"
            >
                <NuxtLink class="group__header" :to="{ path: article.slug, query: { documentId: article.documentId } }">
                    <h3 class="group__title">
                        {{ article.title }}
                    </h3>
                    <span class="group__subtitle">{{ article.date }}</span>
                </NuxtLink>
                <p class="group__text">{{ article.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: 'Quicksand', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.back {
    color: #42b883;
    text-decoration: underline;
}

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.headline {
    display: block;
    font-size: 60px;
    letter-spacing: .15px;
    text-transform: uppercase;
}

.groups-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.group {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
}
.group__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
}
.group__title {
    margin: 0;
    font-weight: 900;
    color: #01a67f;
    text-decoration: double;
}
.group__subtitle {
    font-size: 18px;
    color: #526488;
}
.group__text {
    text-align: left;
    font-weight: 500;
    color: #2c2b2b;
    margin: 0;
}
</style>
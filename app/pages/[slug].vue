<script setup lang="ts">
import { singleArticleQuery } from '~/graphql/queries';

interface Text {
    type: string;
    text: string;
    [key: string]: any;
}

interface Paragraph {
    type: string;
    children: Text[];
}

interface Article {
    documentId: string;
    title: string;
    date: string;
    description: string;
    slug: string;
    body: Paragraph[]
}

const article: Ref<Article | null> = ref(null)

const route = useRoute()

const variables = {
    id: route.query.documentId
}

const { data } = await useAsyncQuery<{ article: Article }>(
    singleArticleQuery,
    variables
)

if (data.value?.article) {
    article.value = data.value.article
}
</script>

<template>
    <div
        v-if="article"
        class="home container"
    >
        <h1 class="headline">{{ article?.title }}</h1>
        <p class="subtitle">{{ article?.description }}</p>
        <div class="sections">
            <div class="groups-list">
                <!-- Рендерим каждый параграф -->
                <p
                    v-for="(paragraph, pIndex) in article.body"
                    :key="pIndex"
                    class="article-paragraph"
                >
                    <!-- Склеиваем текст всех children -->
                    {{paragraph.children.map(child => child.text).join('')}}
                </p>
            </div>
        </div>
        <NuxtLink
            to="/"
            class="back"
        >Back</NuxtLink>
    </div>

    <div
        v-else
        class="loading"
    >Загрузка...</div>
</template>

<style scoped>
body {
    font-family: 'Quicksand', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.back {
    margin-top: 2rem;
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

.subtitle {
    font-size: 18px;
    color: #526488;
}

.groups-list {
    display: flex;
    flex-direction: column;
}

.group {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
}

.article-paragraph {
    text-align: left;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
}

.loading {
    text-align: center;
    padding: 2rem;
}
</style>
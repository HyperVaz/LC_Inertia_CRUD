<template>
    <div class="w-96 mx-auto pt-8">
        <h1 class="text-lg mb-8">Posts</h1>
        <div class="mb-8">
            <Link
                :href="route('post.create')"
                class="hover:bg-white hover:text-sky-500
                border
                border-sky-500 bg-sky-500 p-2 w-32 rounded-full text-center text-white">
                Add post
            </Link>
        </div>
        <div v-if ="posts">
            <div class="mt-8 pt-8 border-t border-gray-300" v-for="post in posts">
                <div>id: {{ post.id }}</div>
                <div>title: {{ post.title }}</div>
                <div>content: {{ post.content }}</div>
                <div class="text-sm text-right">{{ post.date }}</div>
                <div class="text-sm">
                    <Link class="text-sky-500" :href="route('post.show', post.id)">Show</Link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/vue3'

export default {
    name: 'Index',
    props: [
        'posts',

    ],
    components: {
        Link,
    }
}
</script>

<style scoped>
</style>

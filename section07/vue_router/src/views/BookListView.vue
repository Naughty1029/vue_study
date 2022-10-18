<template>
  <div>
    BookList

    <ul>
        <li v-for="book in books" :key="book.id">
            <a @click.prevent="showBookDetail(book.id)">{{book.title}}</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"BookList",
    data () {
        return {
            bookIndex:-1,
            books :[
                {
                    id:1,
                    title:"タイトル1",
                    content:"本の内容1"
                },
                {
                    id:2,
                    title:"タイトル2",
                    content:"本の内容2"
                },
                {
                    id:3,
                    title:"タイトル3",
                    content:"本の内容3"
                }
            ]
        }
    },
    methods :{
        showBookDetail(id){
            this.bookIndex = id - 1;
            this.$router.push({ 
                name: 'Book', 
                params: this.books[this.bookIndex]
            })
        }
    }
}
</script>

<style>

</style>
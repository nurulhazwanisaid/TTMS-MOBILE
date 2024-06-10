<template>
  <h1>courses page</h1>
  <div v-if="subjects.length">
    <div v-for="subject in subjects" :key="subject.id" class="subject">
        <router-link :to="{ name: 'CourseSection', params: { id: subject.id }}">
          <h2></h2>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
        data() {
            return {
                subjects: []
            }
        },
        mounted() {
            fetch('http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?')
            .then((res) => res.json())
            .then(data => this.subjects = data)
            .catch(err => console.log(err.message))
        }
}
</script>

<style>

</style>
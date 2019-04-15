<template>

  <v-navigation-drawer
          class="blue lighten-3"
          dark
          permanent
  >
    <v-list>
      <v-list-tile
              v-for="item in items"
              :key="item.title"
              @click=""
                      @to="item.path"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>


</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard', path:'/' },
        { title: 'Input', icon: 'account_box', path:'/input' },
        { title: 'Output  ', icon: 'gavel', path:'/ output' }
      ]
    }
  }
}

</script>  

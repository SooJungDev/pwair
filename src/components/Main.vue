<template>
    <div>
        <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fas fa-chart-line</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chart</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Pwair</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>fas fa-sync</v-icon>
          </v-btn>
    </v-toolbar>
     <v-content>
      <v-container grid-list-xl fluid text-xs-center>
        <v-layout
          justify-center
          align-center
          fill-height
        >
          <v-flex >
            <v-flex xs12>
            <v-icon style="font-size: 200px;" color="amber">fas fa-grin</v-icon>
            </v-flex>
           <v-flex mt-2>
                <p class="display-1">강남구의 대기는 지금 좋음</p>
                <p >기준: 201813111111</p>
             </v-flex>
          </v-flex>
        </v-layout>
          <v-layout row wrap>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text>오존</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">fas fa-grin</v-icon></v-card-text>
          <v-card-text>좋음</v-card-text>
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card dark tile flat >
          <v-card-text>초미세먼지</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">fas fa-angry</v-icon></v-card-text>
          <v-card-text>나쁨</v-card-text>
          <v-card-text>ppm</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat >
          <v-card-text>미세먼지</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">fas fa-meh</v-icon></v-card-text>
          <v-card-text>보통</v-card-text>
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018 vue pwa</span>
    </v-footer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),

  }
</script>

<style>

</style>

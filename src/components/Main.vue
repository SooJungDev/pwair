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
                <p class="display-1">{{responseData.MSRSTE_NM}}의 대기는 지금 {{responseData.IDEX_NM}}</p>
                <p >기준: {{responseData.MSRDT}}</p>
             </v-flex>
          </v-flex>
        </v-layout>
          <v-layout row wrap>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text>오존</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">{{O3Icon}}</v-icon></v-card-text>
          <v-card-text>{{O3Status}}</v-card-text>
          <v-card-text>{{responseData.O3}}ppm</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card dark tile flat >
          <v-card-text>초미세먼지</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">{{PM25Icon}}</v-icon></v-card-text>
          <v-card-text>{{PM25Status}}</v-card-text>
          <v-card-text>{{responseData.PM25}}㎍/㎥</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat >
          <v-card-text>미세먼지</v-card-text>
          <v-card-text> <v-icon style="font-size:80px;" color="amber">{{PM10Icon}}</v-icon></v-card-text>
          <v-card-text>{{PM10Status}}</v-card-text>
          <v-card-text>{{responseData.PM10}}㎍/㎥</v-card-text>
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
import {mapGetters} from 'vuex'
  export default {
    data: () => ({
      drawer: true,
      responseData :{},
      iconArray:["fas fa-grin","fas fa-meh","fas fa-angry"],
      statusArray:["좋음","보통","나쁨"],
      statusIcon:"",
      O3Icon:"",
      PM25Icon:"",
      PM10Icon:"",
      O3Status:"",
      PM25Status:"",
      PM10Status:""
    }),
    created(){
       var self= this;
       this.axios.get("http://openapi.seoul.go.kr:8088/735176527663727939306d47434e76/json/RealtimeCityAir/1/5/%EB%8F%99%EB%82%A8%EA%B6%8C/%EA%B0%95%EB%82%A8%EA%B5%AC/")
                .then(function(response){
                 self.responseData= response.data.RealtimeCityAir.row[0];
                 console.log(self.responseData);
                 // 03
                 var O3= self.responseData.O3;
                 if(O3 >0.090){
                    self.O3Icon = self.iconArray[2];
                    self.O3Status= self.statusArray[2];
                 }else if(O3>0.030){
                    self.O3Icon = self.iconArray[1];
                    self.O3Status= self.statusArray[1];
                 }else{
                    self.O3Icon = self.iconArray[0];
                    self.O3Status= self.statusArray[0];
                 }

                 // 미세
                 var PM10= self.responseData.PM10;
                 if(PM10 >80){
                    self.PM10Icon = self.iconArray[2];
                    self.PM10Status= self.statusArray[2];
                 }else if(PM10>30){
                    self.PM10Icon = self.iconArray[1];
                    self.PM10Status= self.statusArray[1];
                 }else{
                    self.PM10Icon = self.iconArray[0];
                    self.PM10Status= self.statusArray[0];
                 }

                 //초미세먼지
                 var PM25= self.responseData.PM25;
                 if(PM25 >35){
                    self.PM25Icon = self.iconArray[2];
                    self.PM25Status= self.statusArray[2];
                 }else if(PM25>15){
                    self.PM25Icon = self.iconArray[1];
                    self.PM25Status= self.statusArray[1];
                 }else{
                    self.PM25Icon = self.iconArray[0];
                    self.PM25Status= self.statusArray[0];
                 }
               
                })
                .catch(function(error){
                   console.log(error);
         });
    }
  }
</script>

<style>

</style>

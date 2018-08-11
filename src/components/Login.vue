<template>
       <v-content>
        <v-container fluid fill-height text-xs-center>
        <v-layout justify-center column>
         <div mt-5>
            <p class="display-3 ">PWAir</p> 
            <p class="title">Open the window  when we push you</p> 
        </div>   
        <div>
            <v-icon style="font-size:80px;" color="amber">fas fa-grin</v-icon>
            <v-icon style="font-size:80px;" color="amber">fas fa-meh</v-icon>
            <v-icon style="font-size:80px;" color="amber">fas fa-angry</v-icon>
        </div>
          <v-flex md4 mt-5>
            <v-card class="elevation-12">
              <v-toolbar dark color="amber">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="id" label="" type="text"></v-text-field>
                  <v-text-field v-model="password"  prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="amber" @click="login">Login</v-btn>
                <v-btn color="amber" @click="googleLogin">Google</v-btn>
                <v-btn color="amber" @click="facebookLogin">Facebook</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout> 
      </v-container>
    </v-content>
</template>

<script>
export default {
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
        loginSuccess(){

           if (!navigator.geolocation){
              alert("사용자의 브라우저는 지오로케이션을 지원하지 않습니다.");
            }

          navigator.geolocation.getCurrentPosition(function(position){
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(latitude,longitude);
          }, function(){
             alert("사용자의 위치를 찾을수 없습니다.")
          });

          this.$router.push({path:'/main'})
        },
        loginFail(){
          alert("login에 실패하였습니다.다시 시도해주세요.")
        },
        login(){
          event.preventDefault();
           var self= this;
           var email = this.email.trim();
           var password =this.password.trim();

          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(result){
            self.loginSuccess();
          })
          .catch(function(error) {
             self.loginFail();
          });

        },
        googleLogin(event){
          event.preventDefault();
          var provider = new firebase.auth.GoogleAuthProvider();   
          var self= this;
          firebase.auth().signInWithPopup(provider)
          .then(function(result) {
       
            var token = result.credential.accessToken;
            var user = result.user;     
            self.loginSuccess();
           })
           .catch(function(error){
              self.loginFail();
           });
        },
        facebookLogin(){
              var provider = new firebase.auth.FacebookAuthProvider();
              var self= this;
              firebase.auth().signInWithPopup(provider)
              .then(function(result) {   
               var token = result.credential.accessToken;
               var user = result.user;
                self.loginSuccess();
              }).catch(function(error){
                 self.loginFail();
              });
        }
    }
}
</script>

<style>

</style>

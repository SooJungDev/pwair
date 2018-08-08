<template>
       <v-content>
        <v-container fluid fill-height text-xs-center>
        <v-layout justify-center column>
         <div mt-5>
            <p class="display-4 ">PWAir</p> 
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
                  <v-text-field prepend-icon="person" name="id" label="Id" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
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
    methods: {
        login(){

        },
        googleLogin(){

        },
        facebookLogin(){

        }
    }
}
</script>

<style>

</style>

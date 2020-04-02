<template>
    <div class="Auth">
        <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{ $t('welcome')}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{ $t('identify')}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="primary"
                @click="auth('google')"
              >
                <v-icon>mdi-google-plus</v-icon>
                {{$t('signingoogle')}}
              </v-btn>

              <v-btn
                color="orange"
                text
              >
                Facebook
              </v-btn>
            </v-card-actions>
          </v-card>
    </div>
</template>

<script>
    import './_Auth.scss';
    export default {
        props: {
        },
        methods: {
            auth(network) {
              const hello = this.hello;
              hello(network).login().then(() => {
                //const authRes = hello(network).getAuthResponse();
                //console.log('gege', authRes);
                /*
                  performs operations using the token from authRes
                */
                hello(network).api('me').then((profile) => {
                  //set user
                  this.$root.$emit('user:setuser', profile);
                  //set default language for user
                 // if(profile.locale && profile.locale) {

                  //}
                });
              })
            }
        }
    };
</script>

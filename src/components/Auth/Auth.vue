<template>
    <div class="Auth">
        <v-card
            class="mx-auto"

          >
            <v-img
              class="white--text align-end"
              max-height="200px"
              src="https://svgsilh.com/svg/1975689.svg"
            >
              <v-card-title>{{ $t('welcome')}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{ $t('identify')}}</div>
            </v-card-text>

            <div class="center">
              <v-row>
                <v-btn
                        class="buttonAuth"
                        block
                  color="primary"
                  @click="auth('google')"
                >
                  <v-icon>mdi-google-plus</v-icon>
                  {{$t('withgoogle')}}
                </v-btn>
              </v-row>
              <v-row>
                <v-btn
                        class="buttonAuth"
                        block
                        color="primary"
                        @click="auth('facebook')"
                >
                  <v-icon>mdi-facebook</v-icon>
                  {{$t('withfacebook')}}
                </v-btn>
              </v-row>
                <v-row justify="center" v-if="isDev()" >
                  <v-dialog v-model="dialog" scrollable max-width="300px">
                    <template v-slot:activator="{ on }">
                      <v-btn
                              class="buttonAuth"
                              block
                              color="primary"
                              v-on="on"
                      >
                        <v-icon>mdi-account</v-icon>
                        {{$t('fakeuser')}}
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>{{$t('choosefakeuser')}}</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                        <v-radio-group column v-model="fakechoice">
                          <v-row align="center"
                            v-for="(user, i) in fakeUsers"
                             :key="i"
                          >
                            <v-radio :label="user.name" :value="i"/>
                            <v-avatar>
                              <v-img
                                      :src="user.picture"
                                      max-height="20"
                                      max-width="20"
                              />
                            </v-avatar>
                          </v-row>
                        </v-radio-group>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn color="blue darken-1" text @click="dialog = false">{{$t('close')}}</v-btn>
                        <v-btn color="blue darken-1" text @click="auth('fake'), dialog = false">
                          {{$t('save')}}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
            </div>
          </v-card>
    </div>
</template>

<script>
    import './_Auth.scss';
    require('dotenv').config();
    export default {
        props: {
        },
        data: () => ({
          dialog: false,
          fakechoice: 0,
          fakeUsers: [
                              {
                                name: "Matt Fraser",
                                locale: "fr",
                                picture: "data:image/jpeg;base64,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"
                              },{
                                name: "Paul Vellner",
                                locale: "fr",
                                picture: "data:image/jpeg;base64,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"
                              },{
                                name: "Sara Sigmundsdóttir",
                                locale: "fr",
                                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0_XXlvwQYoB3d3-4vumj7ffMBUkRUwp6rtsoA8SnmInHaHCsx&usqp=CAU"
                              },
                      ]
        }),
        methods: {
            auth(network) {
              const hello = this.hello;
              let p = false;
              switch (network) {
                case 'google':
                case 'facebook':
                  hello(network).login().then(() => {
                    hello(network).api('me').then((profile) => {
                      this.$root.$emit('user:setuser', profile);
                    });
                  });
                  break;
                  case 'fake':
                    p = this.fakeUsers[this.fakechoice];
                    p = {
                      ...p,
                      auth: true
                    };
                    this.$root.$emit('user:setuser', p);
                    break;
                    default:

                      break;
              }
              return null;

            },

          isDev() {
              return (process.env.NODE_ENV === 'development');
          }
        }
    };
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.pinimg.com/originals/6e/94/69/6e94695575a2c897135f7cc0b86800eb.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <User/>
    </v-app-bar>

    <v-content>
      <Home v-if="this.session"/>
      <Auth v-else/>
    </v-content>

    <v-footer
            color="primary lighten-1"
            padless
    >
      <v-row
              justify="center"
              no-gutters
      >
        <v-col
                class="primary lighten-2 py-4 text-center white--text"
                cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>CrossFit Game</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import User from "./components/User/User";

export default {
  name: 'App',

  components: {
    User,
    Home,
    Auth
  },

  data: (vm) => ({
    session: vm.getSession()
  }),

  mounted() {
    this.$root.$on('app:session', this.setSession);
  },
  sockets: {
        connect: function () {
            console.log('socket connected');
        },
        userConnected: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', data)
        },
        serverUp: function (data) {
            console.log('serveup', data);
        }
    },
  methods: {

    getSession() {
      if(this.Storage.get('session') === true) {
        this.$i18n.locale = this.Storage.get('user').locale;
      }
      return this.Storage.get('session');
    },

    setSession(session) {
        this.session = session;
        this.Storage.set('session', session);
    }
  }
};
</script>

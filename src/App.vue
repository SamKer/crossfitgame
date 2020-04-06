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
      <Menu/>
    </v-app-bar>

    <v-content>
      <router-view></router-view>


    </v-content>

    <v-footer
            color="primary dark-1"
            padless
    >
      <v-row
              justify="center"
              no-gutters
      >
        <v-col
                class="primary dark-2 py-4 text-center white--text"
                cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>CrossFit Game</strong>

          <router-link to="/" class="white--text">{{$t('home')}}</router-link>
          <router-link to="/rgpc" class="white--text">{{$t('policyrules')}}</router-link>
          <router-link to="/contact" class="white--text">{{$t('contact')}}</router-link>

        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
//import Home from './components/Home/Home';
//import Auth from './components/Auth/Auth';
import User from "./components/User/User";
import Menu from "./components/Menu/Menu";

export default {
  name: 'App',

  components: {
    Menu,
    User,
  //  Auth
  },

  data: (vm) => ({
    session: vm.getSession()
  }),

  mounted() {
    this.$root.$on('app:session', this.setSession);
    this.$root.$on('app:getsession', this.getSession);
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
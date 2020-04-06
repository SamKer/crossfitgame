<template>
    <div class="User">
        <v-btn
        text
      >
            <v-avatar>
                <v-img v-if="user.auth === true"
                       :src="user.picture"
                       max-height="20"
                       max-width="20"
                />
                <v-icon v-else>mdi-account</v-icon>
            </v-avatar>
        <span class="mr-2 text-capitalize font-italic avatar">{{user.name}}</span>
        <flag :iso="user.locale" />
      </v-btn>
    </div>
</template>

<script>
    import './_User.scss';
    export default {
        props: {
        },
        data: (vm) => ({
            user: vm.getUser()
        }),
        mounted() {
            this.$root.$on('user:setuser', this.setUser);
        },

        methods: {
            getUser() {
                return this.Storage.get('user');
            },
            setUser(profile) {
                this.user = {
                    ...this.user,
                    auth: true,
                    name: profile.name,
                    picture: profile.picture,
                    locale: profile.locale
                };
                this.$socket.emit('whoami', this.user);
                this.Storage.set('user', this.user);
                this.$root.$emit('app:session', true);
                this.$i18n.locale = this.user.locale;
            }
        }
    };
</script>
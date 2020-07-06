<template>
    <div class="Home">
        <div v-if="session === true" class="main">
<!--            <v-row align-content="center">{{$t('welcome')}}</v-row>-->
            <NewGame/>
        </div>

        <Auth v-else/>
    </div>
</template>

<script>
    import './_Home.scss';
    import Auth from "../Auth/Auth";
    import NewGame from "../NewGame/NewGame";
    export default {
        components: {NewGame, Auth},
        data: (vm) => ({
            session: vm.getSession()
        }),
        mounted() {
            this.$root.$on('app:session', this.setSession);
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
            },


        }
    };
</script>

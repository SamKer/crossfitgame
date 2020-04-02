const Storage = class Storage {

    constructor(defaultData) {
        this.name = 'crossfitgame';
        if(!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, JSON.stringify(defaultData));
        }
        this.storage = JSON.parse(localStorage.getItem(this.name));
    }

    set(k,v) {
        this.storage[k] = v;
        this.save();
    }

    save() {
        localStorage.setItem(this.name, JSON.stringify(this.storage));
    }

    get(k) {
        return this.storage[k];
    }
}

export default {
    install: (Vue, options) => {
        //Vue.mixin({ Storage: new Storage(options) });
        Vue.prototype.Storage = new Storage(options);
    }
};
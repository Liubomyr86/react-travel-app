class Storage {
    private storage;

    constructor({ storage }: { storage: globalThis.Storage }) {
        this.storage = storage;
    }

    getItem(key: string) {
        return this.storage.getItem(key);
    }

    setItem(key: string, value: string) {
        return this.storage.setItem(key, value);
    }

    removeItem(key: string) {
        return this.storage.removeItem(key);
    }

    clear() {
        return this.storage.clear();
    }
}

export { Storage };

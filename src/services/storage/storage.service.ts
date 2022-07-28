class Storage {
    private storage;

    constructor({ storage }: { storage: globalThis.Storage }) {
        this.storage = storage;
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    setItem(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }

    removeItem(key: string): void {
        return this.storage.removeItem(key);
    }

    clear(): void {
        return this.storage.clear();
    }
}

export { Storage };

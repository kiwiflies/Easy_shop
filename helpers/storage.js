export const storage = () => {
    if (typeof window !== "undefined") {
        return window.localStorage;
    }
    return {
        getItem: () => {}
    }
}
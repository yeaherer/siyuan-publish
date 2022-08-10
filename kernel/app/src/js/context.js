/* 上下文 */
export {
    Context,
};

class Context {
    constructor(meta = new Map(), data = new Map()) {
        this.meta = meta;
        this.data = data;

        this.window = window;

        this.top = window.top;
        this.location = window.location;
        this.document = window.document;

        this.siyuan = window.siyuan;
        this.publish = window.publish;
    }
}

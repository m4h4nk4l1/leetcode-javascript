class RandomizedSet {
    constructor() {
        this.map = {};
        this.list = [];
    }
    
    insert(val) {
        if(val in this.map) return false;
        this.map[val] = this.list.length;
        this.list.push(val);
        return true;
    }
    
    remove(val) {
        if(!(val in this.map)) return false;
        
        let i = this.map[val];
        let l = this.list[this.list.length-1];
        this.map[l] = i;
        delete this.map[val];
        
        let t = this.list[i];
        this.list[i] = this.list[this.list.length-1];
        this.list[this.list.length-1] = t;
        this.list.pop();
        
        return true;
    }
    
    getRandom() {
        let r = Math.floor(Math.random() * this.list.length);
        return this.list[r];
    }
}
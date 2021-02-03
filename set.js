class Set{

    constructor(){
        this.collection = [];
    };

    has(element){
    if(this.collection.indexOf(element) !== -1) return true;
    return false;
    };

    values(){
    return this.collection;
    };

    add(element){
        if(this.has(element)){
            console.log(`Can't add an element that already exists in a Set.`);
            return false;
        } else {
            
            if(typeof element === "object"){
                console.log("Can't add an object or an array into a set.");
                return false;
            };

            this.collection.push(element);
            console.log('Added new element.');
            return true;
        };
    };

    remove(element){
        if(this.has(element)){
          let index = this.collection.indexOf(element);
          let copyWithoutElement = [...this.collection.slice(0,index), ...this.collection.slice(index+1)];
          this.collection = copyWithoutElement;
          console.log(`Element "${element}" removed.`);
          return true;  
        } else {
            console.log(`Element doesn't exist.`);
            return false;
        };
    };

    size(){
        console.log(this.collection.length);
        return this.collection.length;
    };

    union(otherSet){
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach( e => unionSet.add(e));
        secondSet.forEach( e => unionSet.add(e));
        return unionSet;
    };

    intersection(otherSet){
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach( e => {
            if(otherSet.has(e)) intersectionSet.add(e);
        });
        console.log(intersectionSet);
        return intersectionSet;
    };

    difference(otherSet){
    let differenceSet = new Set();
    let firstSet = this.values();
    firstSet.forEach( e => {
        if(!otherSet.has(e)) differenceSet.add(e);
    });
    console.log(differenceSet);
    return differenceSet;
    };

    subset(otherSet){
    let firstSet = this.values();
    let confirmation = firstSet.every((e) =>otherSet.has(e));
    console.log(confirmation);
    return confirmation;
    };

};
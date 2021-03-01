class HashTable{


        constructor(){
            
                this.values={};
                this.length=0;
                this.size=0;

        }


        calculatehash(key){

                return key.toString().length%this.length;

        }


        add(key,value) {

                const hash=this.calculatehash(key);
                
                if(! this.values.hasOwnProperty(hash)){ // it is not occupied 
                        this.values[hash]={};
                }
                
                if(! this.values[hash].hasOwnProperty(key)){
                    this.length++;
                }

                this.values[hash][key]=value;

        }

        search(key){


            const hash=this.calculatehash(key);

            if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key))
            return this.values[hash][key];
            else
            return null;

        }



}



let MyhashTable=new HashTable();

MyhashTable.add(0,"A");
MyhashTable.add(1,"B");
MyhashTable.add(2,"C");

console.log(MyhashTable);


console.log(MyhashTable.search(2));

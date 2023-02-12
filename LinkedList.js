class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    var temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                }
            }

        addElements(value, index){
            let n1 = new Node(value);
            if(index == 0)
            {
                n1.nextNode = this.rootNode;
                this.rootNode = n1;
                
            }
            else{
                let n2 = this.rootNode;

                    let i =1;
                    while(i<index)
                    {
                        n2 = n2.nextNode;
                        i++;
                    }
                    n1.nextNode = n2.nextNode;
                    n2.nextNode = n1;
                

            }
        }

        removeElement(index){
            let n1 = this.rootNode;
           if(index == 0)
           {
                this.rootNode = n1.nextNode;
               // this.n1.nextNode = this.n1;
           }
           else{
            let i =1;
                while(i<index)
                {
                    this.n1 = this.n1.nextNode;
                    i++;
                }
           }
           n1.nextNode = n1.nextNode.nextNode;
        }
        
        printElements(){
            var temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
        }
}


var list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(5);
list.addElement(7);
list.addElement(8);
list.addElement(3);
//list.printElements();
list.addElements(10,2);
list.removeElement(1);
list.printElements();
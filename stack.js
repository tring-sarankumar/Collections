class Node
{
    data;
    nextNode;
    constructor(value){
        this.data = value;
    }
}
class StackList
{
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
            this.count++;
        }
    }
    removeElement()
    {
        var newNode = this.rootNode;
        var i = 1;
        while(i<this.count-1)
        {
            newNode = newNode.nextNode;
            i++;
        }
        newNode.nextNode = newNode.nextNode.nextNode;
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
var list = new StackList(); //lifo
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.addElement(5);
list.addElement(6);
list.addElement(7);
list.removeElement();
list.printElements();
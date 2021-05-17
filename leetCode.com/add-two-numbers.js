// https://leetcode.com/problems/add-two-numbers/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
// const l1 = new ListNode(2,
//     new ListNode(4, 
//     new ListNode(3)));
// const l2 = new ListNode(5,
//     new ListNode(6, 
//     new ListNode(4)));
const l1 = new ListNode(8,
    new ListNode(3, 
    new ListNode(2)));
const l2 = new ListNode(9,
    new ListNode(2, 
    new ListNode(1)));

var addTwoNumbers = function(l1, l2) {
    let 
        resNode = null,
        prevNode = null,
        currNode = null,
        curDigit = 0,
        addValue = 0,
        isNext = true;
        emptyNode = new ListNode();
    while(isNext){
        curDigit = l1.val + l2.val + addValue;
        addValue = Math.floor(curDigit/10);
        curDigit = curDigit % 10;
        currNode = new ListNode(curDigit);
        if (prevNode){
            prevNode.next = currNode;
        }else{
            resNode = currNode;
        }
        isNext = l1.next!=null || l2.next!=null || addValue > 0;
        prevNode = currNode;
        l1 = l1.next || emptyNode;
        l2 = l2.next || emptyNode;
    }
    return resNode;
};

const l3 = addTwoNumbers(l1,l2);
console.log(l3.val, l3.next.val, l3.next.next);
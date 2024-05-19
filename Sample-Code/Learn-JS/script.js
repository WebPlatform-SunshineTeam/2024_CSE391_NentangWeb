let mainElement = document.getElementById("main");
if (!mainElement.hasAttribute('style')) {
    mainElement.setAttribute('style', 'color: blue')
}
// các thuộc tính và phương thức có liên quan đến TextNode
console.log(mainElement.textContent); // lấy ra nội dung của thẻ
console.log(mainElement.children)

// Xóa Node
let childToRemove = mainElement.children[0];
mainElement.removeChild(childToRemove);
console.log(mainElement.innerHTML);

// Thêm Node
let newElement = document.createElement('div');
newElement.id = 'new';
newElement.style= 'color: blue; background-color: cyan';
newElement.textContent = 'New Element child of main';
mainElement.appendChild(newElement);    
const url_toolbox = {
    'item 1': 'blog.html',
    'item 2': 'blog2.html',
    'item 3': 'blog3.html',
    'item 4': 'blog4.html',
};
let item = document.querySelectorAll('.item');


item[0].addEventListener('click', () => {
    location = url_toolbox["item 1"];
});
item[1].addEventListener('click', () => {
    location = url_toolbox["item 2"];
});
item[2].addEventListener('click', () => {
    location = url_toolbox["item 3"];
});
item[3].addEventListener('click', () => {
    location = url_toolbox["item 4"];
});

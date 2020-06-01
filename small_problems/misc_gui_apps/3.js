todoItems = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

// vanilla js
document.addEventListener('DOMContentLoaded', function() {
  let todoList = document.getElementById('todoList').innerHTML;
  todoList = Handlebars.compile(todoList);

  let todosTemplate = document.getElementById('todosTemplate').innerHTML;
  Handlebars.registerPartial('todosTemplate', todosTemplate);

  let todos = document.getElementById('todos');
  todos.insertAdjacentHTML('beforeend', todoList({todos: todoItems}));

  const popup = document.getElementById('cover');
  const showPopup = () => popup.classList.remove('hide');
  const hidePopup = () => popup.classList.add('hide');

  todos.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.tagName === 'A') {
      let todoId = e.target.dataset.id;
      showPopup();

      popup.addEventListener('click', listener = function(e) {
        e.preventDefault();
  
        if (e.target.id === 'yes') {
          let todo = document.querySelector('a[data-id="' + todoId + '"]');
          todo.closest('li').remove();  
          hidePopup();
        } else if (e.target.id === 'no' || e.target === e.currentTarget) {
          hidePopup();
        }
  
        this.removeEventListener('click', listener);
      });
    }
  });
});

//jquery
// $(function() {
//   let $todoList = $('#todoList').html();
//   $todoList = Handlebars.compile($todoList);

//   let $todosTemplate = $('#todosTemplate').html();
//   Handlebars.registerPartial('todosTemplate', $todosTemplate);

//   let $todos = $('#todos');
//   $todos.append($todoList({todos: todoItems}));

//   function showPopup(e) {
//     const $cover = $('#cover');
//     $cover.show();

//     $cover.on('click', function(e) {
//       e.preventDefault();

//       if (e.target.id === 'yes') {
//         $('a[data-id="' + todoId + '"]').parent('li').remove();
//         $cover.hide();
//       } else if (e.target.id === 'no' || e.target === e.currentTarget) {
//         $cover.hide();
//       }
//     });          
//   }

//   let todoId;

//   $todos.on('click', function(e) {
//     e.preventDefault();

//     if (e.target.tagName === 'A') {
//       todoId = e.target.dataset.id;
//       showPopup(e);
//     }
//   });
// });

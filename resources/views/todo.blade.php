 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Rezorces</title>
     {{-- stylsheet --}}
     <link rel="stylesheet" href="/css/todo.css">
     <link rel="stylesheet" href="/css/burgerMenu.css">
     {{-- Vendors --}}
     <link rel="stylesheet"
         href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
     {{-- fonts --}}
     <link
         href="https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Teko:wght@300&family=Zen+Loop&display=swap"
         rel="stylesheet" />
     <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@500&display=swap" rel="stylesheet" />
     <meta name="csrf-token" content="{{ csrf_token() }}" />
 </head>

 <body>
     @include('components.menuBurger')
     <div class="addTaskPopUp none">
         <div class="closePopup"></div>
         <form action="" method="post">
             <h2 id="TitleFormEdit">New Task</h2>
             <input type="text" id="taskContent" placeholder="New Task..." />
             <select name="priority" id="taskPriority">
                 <option value="">Task Priority</option>
                 <option value="High">High</option>
                 <option value="Medium">Medium</option>
                 <option value="Low">Low</option>
             </select>
             <input type="date" id="taskDate" />
             <i class="las la-save"></i>
             <i class="las la-feather none"></i>
         </form>
     </div>
     <div class="container">
         <div class="head">
             <div class="filter">
                 <i class="las la-ellipsis-v"></i>
                 <ul class="ChooseFilter none">
                     <li>Achived</li>
                     <li>Dued</li>
                     <li>All</li>
                 </ul>
             </div>
             <div class="DayDate">Monday<span>10th,January</span></div>
             <div class="Calendar">
                 <div class="box">
                     <input type="date" id="calendarInput" />
                 </div>
                 <div class="space"></div>
             </div>
         </div>
         <div class="body">
             <div class="ListOfTodos">
                 @foreach ($todos as $todo)
                     <div class="Todo">
                         <div class="priority" data-priority="{{ $todo->priority }}"></div>
                         <h2>{{ $todo->task }}</h2>
                         <div class="edit" data-id="{{ $todo->id }}">
                             <i class="las la-check-circle"></i>
                             <i class="las la-i-cursor"></i>
                             <i class="las la-truck-loading"></i>
                         </div>
                     </div>
                 @endforeach
             </div>
             <div class="addTaskButton">
                 <i class="las la-plus"></i>
                 <p>New Task</p>
             </div>
         </div>
     </div>
     <script type="module" src="/js/todo/utilities.js"></script>
     <script type="module" src="/js/todo/todo.js" id="script"></script>
 </body>

 </html>

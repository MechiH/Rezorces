<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rezorces</title>
    {{-- stylsheet --}}
    <link rel="stylesheet" href="/css/notes.css">
    <link rel="stylesheet" href="/css/burgerMenu.css">
    {{-- Vendors --}}
    <link rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
    {{-- fonts --}}
    <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Teko:wght@300&family=Zen+Loop&display=swap"
        rel="stylesheet" />

    <meta name="csrf-token" content="{{ csrf_token() }}" />

</head>

<body>
    @include('components.menuBurger')
    <div class="addNotePopUp none">
        <div class="closePopup"></div>
        <form action="" method="post">
            <h2>New Note</h2>
            <input type="text" id="titleNote" placeholder="Note Title..." />
            <input type="text" id="tagNote" placeholder="Note Tag..." />
            <i class="las la-save"></i>
        </form>
    </div>
    <div class="container">
        <div class="list">
            <div class="searchNotes">
                <form action="GET" class="searchFormNotes">
                    <i class="las la-search"></i>
                    <input type="text" placeholder="Search..." id="searchNotesInput" />
                </form>
            </div>
            <div class="listNotes">
                <div class="notesTitleList">
                    @foreach ($Notes as $item)
                        <div class="noteTitle" data-id="{{ $item->id }}">
                            <i class="lab la-connectdevelop"></i>
                            <p> {{ $item->title }}</p>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="body">
            <div class="menu">
                <i class="las la-plus"></i>
                <i class="las la-drafting-compass" id="render"></i>
                <i class="las la-trash-alt"></i>
                <i class="las la-info-circle"></i>
            </div>
            <div contenteditable="true" class="TextNoteArea" spellcheck="false">
            </div>
            <svg class="tea" id="tea" width="37" height="48" viewbox="0 0 37 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
                    stroke="var(--secondary)" stroke-width="2"></path>
                <path
                    d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
                    stroke="var(--secondary)" stroke-width="2"></path>
                <path id="teabag" fill="var(--secondary)" fill-rule="evenodd" clip-rule="evenodd"
                    d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z">
                </path>
                <path id="steamL" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" stroke="var(--secondary)"></path>
                <path id="steamR" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="var(--secondary)"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
    </div>
    <script type="module" src="/js/notes/utilities.js"></script>
    <script type="module" src="/js/notes/notes.js"></script>
</body>

</html>

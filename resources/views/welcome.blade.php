<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReZorses</title>
    {{-- stylsheet --}}
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/burgerMenu.css">
    {{-- Vendors --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    {{-- fonts --}}
    <link
        href="https://fonts.googleapis.com/css2?family=Festive&family=Lobster+Two&family=Sacramento&family=Zen+Loop&display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
</head>

<body>
    @include('components.menuBurger')
    <div class="addButton">
        <button><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <div class="container">
        <div class="header">
            <div class="searchAddContainer">
                <form class="searchForm">
                    <input type="text" placeholder="Search..." id="searchInput" />
                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
        <div class="body">
            @foreach ($ressorces as $item)
                <div class="resource">
                    <div class="title">
                        <i class="fa fa-google-wallet" aria-hidden="true"></i>
                        <a href="{{ $item->Link }}">
                            <h3>{{ $item->Title }}</h3>
                        </a>
                    </div>
                    <div class="tags">
                        <div class="tag">{{ $item->Tags }}</div>
                    </div>
                </div>
            @endforeach
        </div>
        <!-- Add ressorce Form -->
        <div class="newResource none">
            <i class="fa fa-times" aria-hidden="true"></i>
            <form class="addForm" action="{{ route('home') }}" method="POST">
                @csrf
                <h1>New Ressource</h1>
                <div class="inputContainer">
                    <input name="link" type="text" placeholder="Add resources Link" />
                    <i class="fa fa-link" aria-hidden="true"></i>
                </div>
                <div class="inputContainer">
                    <input name="tag" type="text" placeholder="Add resources Tag" />
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <button type="submit">
                    <i class="fa fa-line-chart" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    </div>
    <script type="module" src="/js/home/utilities.js"></script>
    <script type="module" src="/js/home/home.js"></script>
</body>

</html>

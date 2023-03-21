<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- css reset : remove browser default styles-->
        <link rel="stylesheet" href="css/reset.css">
        <!-- icon -->
        <link rel="icon" type="image/png" href="img/favicon.ico" sizes="32x32">
        <!-- roboto font -->
        <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"> -->
        <!-- font awsome -->
        <link rel="stylesheet" href="css/all.css">
        <!-- bootstrap -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- css file -->
        <link rel="stylesheet" href="css/style.css">
        <title>Web Development | Trello</title>
    </head>
    <body>
        <!-- header -->
        <header class="header row align-items-center">
            <!-- left side of header -->
            <div class="col-5 text-align-left">
                <div>
                    <button class="header-menu-button first-header-button">
                        <i class="header-menu-button-img fas fa-bars"></i>
                    </button>
                    <button class="header-menu-button">
                        <i class="header-menu-button-img fas fa-home"></i>
                    </button>
                    <button class="media-calender header-menu-button m-button">
                        <i class="header-menu-button-img boards-img fab fa-trello"></i>
                        <span class="header-menu-text dont-select">Boards</span>
                    </button>
                    <input class="search-input" type="text">
                    <button class="search-button">
                        <i class="search-img fas fa-search"></i>
                    </button>
                </div>
            </div>

            <!-- center of heaeder -->
            <div class="col-2 center">
                <img class="trello-logo" src="img/logo.png" alt="Trello">
            </div>

            <!-- right side of header -->
            <div class="col-5 text-align-right">
                <button class="header-menu-button">
                    <i class="header-menu-button-img fas fa-plus"></i>
                </button>
                <button class="media-info header-menu-button">
                    <i class="header-menu-button-img fas fa-info-circle"></i>
                </button>
                <button class="media-info header-menu-button">
                    <i class="header-menu-button-img far fa-bell"></i>
                </button>
                <button class="header-menu-button last-header-button">
                    <i class="header-menu-button-img fas fa-user-circle"></i>
                </button>
            </div>
        </header>

        <!-- nav -->
        <nav class="row nav">
            <div class="col-6 display-nav">
                <button class="header-menu-button first-header-button">
                    <i class="header-menu-button-img fas fa-poll fa-flip-vertical"></i>
                </button>
                <span class="board-title">Web Development</span>
                <input class="board-title-input hide" type="text" maxlength="32">
                <button class="header-menu-button first-header-button">
                    <i class="header-menu-button-img far fa-star"></i>
                </button>
                <button class="media-nav-menu header-menu-button first-header-button">
                    <i class="header-menu-button-img fas fa-bars"></i>
                </button>
                <span class="nav-border"></span>
                <span class="media-privacy-button board-group dont-select">Personal</span>
                <span class="nav-border"></span>
                <button class="media-privacy-button privacy-button">
                    <i class="privacy-img fas fa-lock"></i>
                    <span class="privacy-text dont-select">Private</span>
                </button>
                <span class="nav-border"></span>
                <button class="media-privacy-button header-menu-button nav-profile">
                    <i class="header-menu-button-img fas fa-user-circle"></i>
                </button>
                <span class="media-privacy-button board-group dont-select">Invite</span>
            </div>
            <div class="col-6 text-align-right">
                <button class="media-calender privacy-button nav-margin-left">
                    <i class="privacy-img far fa-calendar-alt"></i>
                    <span class="privacy-text dont-select">Calender</span>
                </button>
                <button class="media-calender privacy-button nav-margin-left">
                    <i class="privacy-img fas fa-concierge-bell"></i>
                    <span class="privacy-text dont-select">Butler</span>
                </button>
                <button class="privacy-button nav-margin-left">
                    <i class="privacy-img fas fa-ellipsis-h"></i>
                    <span class="privacy-text dont-select">Show Menu</span>
                </button>
            </div>
        </nav>

        <!-- cards -->
        <div class="card-container">
            <div class="card-wrapper">
                
                <!-- card -->
                <!-- <div class="card-box">
                    <div class="trello-card">
                        <div class="card-title-container">
                            <h4 class="card-title active">Title</h4>
                            <input type="text" class="card-title-input hide">
                        </div>
                        <div class="card-menu">
                            <i class="card-menu-img fas fa-times"></i>
                        </div>
                        <div class="card-menu-cancel-title hide">
                            <i class="card-menu-img-cancel-title fas fa-long-arrow-alt-left"></i>
                        </div>
                        <div class="task-container">
                            <ul class="tasks-list">
                                <li class="task">
                                    <span class="task-edit-button-container"><i class="task-edit-button far fa-edit"></i></span>
                                    <span class="task-remove-button-container"><i class="remove-card card-menu-img fas fa-times"></i></span>
                                    <span class="task-text">test text</span>
                                </li>
                                <li class="add-card-list">
                                    <div class="add-another-card-form hide">
                                        <textarea class="add-card-input" type="text" placeholder="Enter a title for this card..."></textarea>
                                        <button class="add-card-confirm dont-select">Add Card</button>
                                        <button class="add-card-cancel dont-select"><i class="add-card-cancel-icon fas fa-times"></i></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="add-task-container">
                            <div class="add-task dont-select">
                                <i class="add-card-margin fas fa-plus"></i>
                                <span class="add-another-card-button">Add another card</span>
                            </div>
                            <span class="task-save">
                                <i class="task-save-icon fas fa-save"></i>
                            </span>
                        </div>
                    </div>
                </div> -->
                <!-- end of card -->

                <div class="add-another-list dont-select">
                    <i class="plus-margin fas fa-plus"></i>
                    <span>Add another list</span>
                </div>
                <div class="add-another-list-form hide">
                    <input class="add-list-input" type="text" placeholder="Enter list title...">
                    <button class="add-list-confirm dont-select">Add List</button>
                    <button class="add-list-cancel dont-select"><i class="add-list-cancel-icon fas fa-times"></i></button>
                </div>

            </div>
        </div>
        <!-- jquery -->
        <script src="js/jquery-3.5.1.min.js"></script>
        <!-- form autosize -->
        <script src="js/autosize.min.js"></script>
        <!-- font awsome -->
        <script src="js/all.js"></script>
        <!-- bootstrap -->
        <script src="js/bootstrap.bundle.min.js"></script>
        <!-- my js files -->
        <script src="js/helper.js"></script>
        <script src="js/elements.js"></script>
        <script src="js/function.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>
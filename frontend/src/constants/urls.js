const API_URL = "http://localhost:3003";


//* user
const USER = API_URL + "/user";
export const GET_CLOUDINARY_SIGNATURE = USER + "/uploadImage";
export const LOGIN_USER = USER + "/login";
export const SIGNUP_USER = USER + "/signup";
export const STAY_LOGIN = USER + "/stayLogin";
export const ADD_FRIEND = USER + "/sendFriendRequest";
export const ACCEPT_FRIEND = USER + "/acceptFriendRequest";
export const USERS_LIST = USER + "/usersList/";
export const REMOVE_FRIEND = USER + "/removeFriendRequest";
export const UPDATE_USER = USER + "/update"; 

//* admin
export const ADMIN_GET_USERS = USER + "/adminUsersList";
export const ADMIN_UPDATE_USER = USER + "/adminUpdate/" ;

//* memory Game
const MEMORY_GAME = API_URL + "/memoryGame";
export const GET_MEMORY_GAMES = MEMORY_GAME;

//* sudoku
const SUDOKU = API_URL + "/sudoku";
export const GET_SUDOKU_TEMPLATE = SUDOKU;
export const Add_SUDOKU_TEMPLATE = SUDOKU;
export const UPDATE_SUDOKU_TEMPLATE = SUDOKU + "/";
export const DELETE_SUDOKU_TEMPLATE = SUDOKU + "/";

//* cloudinaryGamesImages
const CLOUDINARYGAMESIMAGES = API_URL + "/cloudoinaryGamesImgs";
export const GET_CLOUDINARY_GAMES_IMGS = CLOUDINARYGAMESIMAGES;
export const ADD_CLOUDINARY_GAMES_IMG = CLOUDINARYGAMESIMAGES;
export const DELETE_CLOUDINARY_GAMES_IMG = CLOUDINARYGAMESIMAGES + "/";

const API_URL = "http://localhost:3003";


//* user
const USER = API_URL + "/user";
export const UPLOAD_IMAGE = USER + "/uploadImage";
export const LOGIN_USER = USER + "/login";
export const SIGNUP_USER = USER + "/signup";
export const STAY_LOGIN = USER + "/stayLogin";
export const ADD_FRIEND = USER + "/sendFriendRequest";
export const ACCEPT_FRIEND = USER + "/acceptFriendRequest";
export const USERS_LIST = USER + "/usersList/";

//* memory Game
const MEMORY_GAME = API_URL + "/memoryGame";
export const GET_MEMORY_GAMES = MEMORY_GAME;

//* sudoku
const SUDOKU = API_URL + "/sudoku";
export const GET_SUDOKU_TEMPLATE = SUDOKU;

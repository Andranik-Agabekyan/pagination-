import axios from "axios"

const GET_COUNTRIES = 'GET_COUNTRIES'
const NEXT_PAGE = 'NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'

const initialState = {
    countries: [],
    currentPage: 1,
    totalCountriesCount: 0,
    pageSize: 10,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case NEXT_PAGE: {
            return {
                ...state,
                // countries: [...state.countries.currentPage + action.payload]
                currentPage: state.currentPage + 1 
            }
        }
        case PREV_PAGE: {
            return {
                ...state,
                // countries: [...state.countries.currentPage + action.payload]
                currentPage: state.currentPage - 1 
            }
        }


        default:
            return state
    }
}

export const getCountries = (payload) => ({ type: GET_COUNTRIES, payload })
export const nextPageAC = () => ({ type: NEXT_PAGE })
export const prevPageAC = () => ({type: PREV_PAGE})

export const getCountriesTC = () => (dispatch) => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=100`)
        .then(res => dispatch(getCountries(res.data)))
        .catch(err => alert(err))
}
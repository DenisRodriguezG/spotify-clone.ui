export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQBAsE5ENnsppVbJpwTuZqbp0-BCfw4NzPsUXrWtjFCsASSALILjvFIOIYwIdRJ-h98F4yhy-4dl-6soXa4p93ElvU5QZ-29rgLUB3C3W48xRnev1nZKr_gLpYhr0rysrW1xebjSG6_NGGMHQT4hpCWNo3K1K_kBDWDUy1_aF_7wSrrTjeBU'
}

const reducer = (state, action) => 
{
    console.log(action);

    switch(action.type)
    {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}
export default reducer;
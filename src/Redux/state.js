let store ={
    _state: {
        profile :{
            postsData: [
                { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
                { id: 2, postmessage: 'My first post ;3', likes: '5' },
            ],
            newPostText: 'Samuraijs'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Vadim' },
                { id: 3, name: 'Evgen' },
                { id: 4, name: 'Valentin' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is it going?' },
                { id: 3, message: 'Fine, ty' },
                { id: 4, message: 'Wanna go outside tonight?' }
            ],
        },
        friendsSection: {
            friends:[
                {id: 1, friendName: 'Vlad', URLimg: 'https://sun9-6.userapi.com/impg/coGYy0dDtvbxRhGHZSNgWhiEHSbRxuFGsapBWw/ZKYUQvqBxEE.jpg?size=100x0&quality=88&crop=1074,54,854,854&sign=de66a4ff15e4cf35257f7020e4fbe472&ava=1'},
                {id: 2, friendName: 'Evgen', URLimg: 'https://sun9-37.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=100x0&quality=88&crop=821,491,899,899&sign=576ff4f94b921e9b1f02a0b772f44745&ava=1'},
                {id: 3, friendName: 'Vadim', URLimg: 'https://sun9-15.userapi.com/impg/0isHeMubDs_eDAB28yFIjEEcjT9t_E1Hr8whtQ/Z3TH8GDs2QM.jpg?size=100x0&quality=88&crop=304,0,467,467&sign=3881f88afc2728e1a7b603dd6ebc7751&ava=1'},
                {id: 4, friendName: 'Valentin', URLimg: 'https://sun9-14.userapi.com/impf/c837339/v837339792/39250/qVZAHQ_QCxU.jpg?size=100x0&quality=88&crop=199,0,817,817&sign=c385f2983d10f4cd07b1968d081d93fe&ava=1'},
                {id: 5, friendName: 'Borov', URLimg: 'https://sun9-6.userapi.com/impg/coGYy0dDtvbxRhGHZSNgWhiEHSbRxuFGsapBWw/ZKYUQvqBxEE.jpg?size=100x0&quality=88&crop=1074,54,854,854&sign=de66a4ff15e4cf35257f7020e4fbe472&ava=1'},
                {id: 6, friendName: 'Misha', URLimg: 'https://sun2.beltelecom-by-minsk.userapi.com/impg/S7ilepgCBL1lZlJ30X9C9qfWY4yOaNVkoqRrSw/g5BJIlyzCf4.jpg?size=100x0&quality=88&crop=0,112,519,519&sign=195b15e558f18e44770d02c281f9f1e1&ava=1'},
            ],
        }
        
    },
    _callSubscriber(){
        console.log("Stage changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; //Observer pattern // Publisher-subscriber // AddEventListener
    },

    dispatch(action){
        if(action.type ==='ADD-POST'){
            let newPost ={
                id: 5,
                postmessage: this._state.profile.newPostText,
                likes: 0
        
            };
        
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
    
}







export default store;
window.store = store;

// object store
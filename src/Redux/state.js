let state = {
    profile :{
        postsData: [
            { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
            { id: 2, postmessage: 'My first post ;3', likes: '5' },
        ]
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
        ]
    }
}

export default state;
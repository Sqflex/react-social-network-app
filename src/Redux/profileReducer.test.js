import profileReducer, { addPostActionCreater } from "./profileReducer";

test('Length of post should be incremented', () => {
    // 1. Initial data
    // 2. action
    // 3. result and expectation
    let action = addPostActionCreater("Hello!");
    let initialState = {
        postsData: [
            { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
            { id: 2, postmessage: 'My first post ;3', likes: '5' },
        ],
        profile: null,
        status: "Hello!",
    };
    let newState = profileReducer(initialState,action);
    expect(newState.postsData.length).toBe(3);
  });

  test('Should be added new post with text "Hello!" ', () => {
    // 1. Initial data
    // 2. action
    // 3. result and expectation
    let action = addPostActionCreater("Hello!");
    let initialState = {
        postsData: [
            { id: 1, postmessage: 'Hi, im working tonight!', likes: '32' },
            { id: 2, postmessage: 'My first post ;3', likes: '5' },
        ],
        profile: null,
        status: "Hello!",
    };
    let newState = profileReducer(initialState,action);
    expect(newState.postsData[2].postmessage).toBe("Hello!");
  });

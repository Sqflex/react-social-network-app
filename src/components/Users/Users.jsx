import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers(
            [{ id: 1, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: true, fullname: 'Egor', status: 'I am in charge here!', location: { country: 'Belarus', city: 'Minsk' } },
            { id: 2, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: false, fullname: 'Egor#2', status: 'I am in charge here!', location: { country: 'Russia', city: 'Moscow' } },
            { id: 3, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: false, fullname: 'Vlad', status: 'I am in charge here!', location: { country: 'Ukraine', city: 'Kiev' } },
            { id: 4, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: true, fullname: 'Egor', status: 'I am in charge here!', location: { country: 'Belarus', city: 'Minsk' } },
            { id: 5, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: true, fullname: 'Egor', status: 'I am in charge here!', location: { country: 'Belarus', city: 'Minsk' } },
            { id: 6, photoURL: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c852236/v852236765/18d162/KW4EtDJ6VMQ.jpg?size=50x0&quality=88&crop=821,491,899,899&sign=56f1ccebe0ce221829366afbe0dbcd9f&ava=1', followed: true, fullname: 'Egor', status: 'I am in charge here!', location: { country: 'Belarus', city: 'Minsk' } }
        ]
        )
    }
    return (
        <div className="Users-wrapper">
            <h2>Users</h2>
            <div className="Users-list">
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoURL} className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? 
                                <button onClick={() => {props.unfollow(u.id) } } >unFollow</button> :
                                 <button onClick={() => {props.follow(u.id) } }>Follow</button>}
                                
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullname}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Users
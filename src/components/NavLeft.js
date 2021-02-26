import React from 'react'
import axios from 'axios'


const NavLeft = () => {
    const [items, setItems] = React.useState(null)

    React.useEffect(() => {
        axios.get('/src/db.json/items').then ((data) => {
            setItems(data.data)
        });
    }, [])
    return (
        <div className='navleft'>
            <div className='navleft__logo'>
                {items && <img width={items.logo.width} src={items.logo.src} alt='dsd'/>}
                <p>{items && items.logo.name}</p>
            </div>
            {items && 
                items.iconsleftmenu.map(item => (
                    <div className='navleft__icons' key={item.id}>
                        <img width={item.width} src={item.src} alt='icons'/>
                        <p>{item.name}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default NavLeft
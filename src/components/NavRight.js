import React from 'react'
import axios from 'axios'

const NavRight = () => {
    const [items, setItems] = React.useState(null)

    React.useEffect(() => {
        axios.get('/src/db.json/items').then ((data) => {
            setItems(data.data)
        });
    }, [])

    return (
        <div className='navright'>
            <div className='navright__coin'>
                {items && <img width={items.iconsrightmenu[0].width} src={items.iconsrightmenu[0].src} alt='dsd'/>}
                <p>{items && items.iconsrightmenu[0].name}</p>
            </div>
            <div className='navright__menu'>
                {items && items.iconsrightmenu.filter(item => item.id > 1).map(item => (
                    <img width={item.width} src={item.src} alt='icons'/>
                ))}
            </div>
        </div>
    )
}

export default NavRight
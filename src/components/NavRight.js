import React from 'react'
import axios from 'axios'

const NavRight = () => {
    const [items, setItems] = React.useState(null)
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();

    React.useEffect(() => {
        axios.get('/src/db.json/items').then ((data) => {
            setItems(data.data)
        });
    }, [])

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);


    return (
        <div className='navright'>
            <div className='navright__coin'>
                {items && <img width={items.iconsrightmenu[0].width} src={items.iconsrightmenu[0].src} alt='icon'/>}
                <p>{items && items.iconsrightmenu[0].name}</p>
            </div>
            <div className='navright__menu'>
                {items && items.iconsrightmenu.filter(item => item.id > 1).map(item => (
                    <img key={item.id} width={item.width} src={item.src} alt='icons'/>
                ))}
            </div>
            <div ref={sortRef} className='navright__gamburger' onClick={() => setVisiblePopup(true)}>
                {items && 
                    <>
                        <img width={items.iconsrightmenu[2].width} src={items.iconsrightmenu[2].src} alt='icon'/>
                        <div className='navright__gamburger_label'/>
                    </>
                }
            </div>
            {visiblePopup && <div className="navright__popup">
                <ul>
                    {items &&
                        items.iconsrightmenu.map((item, index) => (
                            <li onClick={() => setVisiblePopup(false)}  
                            key={index}>
                                <img key={item.id} width={item.width} src={item.src} alt='icons'/>
                                <p>{item.name}</p>      
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    )
}

export default NavRight
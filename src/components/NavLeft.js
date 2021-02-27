import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/action';


const NavLeft = () => {
    const dispatch = useDispatch();
    const items = useSelector((data) => data.items);
    const [filterItems, setFilterItems] = React.useState(null)
    const [filterItemsPopUp, setFilterItemsPopUp] = React.useState(null)
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const sortRef = React.useRef()

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const setSizeScreen = (items) => {
        if (document.documentElement.clientWidth >= 1014) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 10))
            setFilterItemsPopUp(null)
        }
        if (document.documentElement.clientWidth < 1014) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 9))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id === 9))
        }
        if (document.documentElement.clientWidth < 926) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 8))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10 && item.id > 7))
        }
        if (document.documentElement.clientWidth < 838) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 7))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10 && item.id > 6))
        }
        if (document.documentElement.clientWidth < 750) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 6))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10 && item.id > 5))
        }
        if (document.documentElement.clientWidth < 662) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 5))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10 && item.id > 4))
        }
        if (document.documentElement.clientWidth < 574) {
            setFilterItems(items && items.iconsleftmenu.filter(item => item.id < 4))
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10 && item.id > 3))
        }
        if (document.documentElement.clientWidth < 511) {
            setFilterItems(null)
            setFilterItemsPopUp(items && items.iconsleftmenu.filter(item => item.id < 10))
        }
    }

    React.useEffect(() => {
        if (items) {
            setSelectedItem(items.iconsleftmenu[0])
        }
        setSizeScreen(items);
        window.addEventListener('resize', () => {
            setSizeScreen(items);
        });
    }, [items])

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
        <div className='navleft'>
            <div className='navleft__logo'>
                {items && <img width={items.logo.width} src={items.logo.src} alt='dsd'/>}
                <p>{items && items.logo.name}</p>
            </div>
            {filterItems && 
                filterItems.map(item => (
                    <div className='navleft__icons' key={item.id}>
                        <img width={item.width} src={item.src} alt='icons'/>
                        <p>{item.name}</p>
                    </div> 
                )) 
            }
            {selectedItem && 
                <div className='navleft__selected'>
                    <img width={selectedItem.width} src={selectedItem.src} alt='icons'/>
                    <p>{selectedItem.name}</p>
                </div>
            }
            {items && 
                <div ref={sortRef}>
                    <div className='navleft__gamburger' onClick={() => setVisiblePopup(true)}>
                        <img width={items.gamburger.width} src={items.gamburger.src} alt='icons'/>
                        <div className='navleft__gamburger_label'/>
                    </div>
                    <div className='navleft__more' onClick={() => setVisiblePopup(true)}>
                        <img width={items.iconsleftmenu[9].width} src={items.iconsleftmenu[9].src} alt='icons'/>
                        <p>{items.iconsleftmenu[9].name}</p>
                    </div>
                </div>
            }
            {visiblePopup && <div className="navleft__popup">
                <ul>
                    {filterItemsPopUp &&
                        filterItemsPopUp.map((item, index) => (
                            <li onClick={() => {
                                setVisiblePopup(false)
                                setSelectedItem(item)
                            }}  
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

export default NavLeft
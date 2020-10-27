import React, { useState } from 'react';
function DropdownMulti({ title, items = [], multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item){
        if(!selection.some[current => current.id === item.id]){
            setSelection([item]);
            // switch(item.id){
            //     case 1:
            //         <Redirect to='/save_home'/>
            //         break;
            //     case 2:
            //         <Redirect to='/save_search'/>
            //         break;
            //     case 3:
            //         <Redirect to='/account_setting'/>
            //         break;
            //     default:
            //         break;
            // }
        }
        //     if(!multiSelect){
        //         setSelection([item]);
        //     }else if (multiSelect){
        //         setSelection([...selection, item])
        //     }
        // }else {
        //     let selectionAfterRemoval = selection;
        //     selectionAfterRemoval = selectionAfterRemoval.filter(
        //         current => current.id !== item.id
        //     );
        //     selection([...selectionAfterRemoval]);
        // }
    }

    function isItemInSelection(item){
        if(selection.find(current => current.id === item.id)){
            return true;
        }
        return false;
    }

    return (
        <div className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header-title">
                    <p className="dd-header-title">{title}</p>
                </div>
                {/* <div className="dd-header-action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div> */}
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{isItemInSelection(item) && 'Selected'}</span>
                            </button>
                        </li>
                    ))}
                    <button type="button">
                        <span>Signout</span>
                    </button>
                </ul>
            )}
        </div>
    )
}

export default DropdownMulti;
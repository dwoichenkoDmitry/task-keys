import React, { useState } from 'react';

const KeysItem = (props: { name: string }) => {
    const [changeAccess, setChangeAccess] = useState<boolean>(false);
    const [name, setName] = useState<string>(props.name);
    const [storageName, setStorageName] = useState<string>(props.name);

    function checkClickOnElement() {
        setChangeAccess(true);
    }

    function changeName(e: any) {
        setName(e.target.value);
    }

    function saveName(e: any) {
        if (e.keyCode === 13) {
            setChangeAccess(false);
            setStorageName(name);
        }
        if (e.keyCode === 27) {
            setChangeAccess(false);
            setName(storageName);
        }
    }

    return changeAccess ? (
        <input
            value={name}
            onKeyDown={saveName}
            onChange={changeName}
            type="text"
            role="textbox"
        />
    ) : (
        <p onClick={checkClickOnElement}>{name}</p>
    );
};

export default KeysItem;

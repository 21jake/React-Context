import React, {useContext} from "react";
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
    const langContext = useContext(LanguageContext);
    return (
        <div>
            Select a language
            <i className="flag us" onClick={() =>  langContext.onLanguageChange('english')} />
            <i className="flag vn" onClick={() =>  langContext.onLanguageChange('vietnamese')} />
        </div>
    )
}

export default LanguageSelector;
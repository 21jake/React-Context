import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {
    renderText(language) {
        return language === 'english' ? 'Submit' : 'Xác nhận'
    }
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {langContext => this.renderText(langContext.language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    

    render () {
        // const text = this.context === 'english' ? 'Submit' : 'Xác nhận';

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>

        )
    }
}
export default Button;
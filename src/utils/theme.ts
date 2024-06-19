import { Theme } from '../common-types';
import { THEME_CONSTANTS } from '../constants';

export const setThemeBasedColors = (theme: Theme) => {

    if(!theme){
        theme = {};
    }

    const rootElem: HTMLElement = document.querySelector(':root');
    rootElem.style.setProperty('--body-color', theme.bodyColor ? theme.bodyColor : THEME_CONSTANTS.bodyColor);
    rootElem.style.setProperty('--theme-background-color', theme.themeBackgroundColor ? theme.themeBackgroundColor : THEME_CONSTANTS.themeBackgroundColor);
    rootElem.style.setProperty('--theme-color', theme.themeColor ? theme.themeColor : THEME_CONSTANTS.themeColor);
    rootElem.style.setProperty('--header-background-color', theme.headerBackgroundColor ? theme.headerBackgroundColor : THEME_CONSTANTS.headerBackgroundColor);
    rootElem.style.setProperty('--header-color', theme.headerColor ? theme.headerColor : THEME_CONSTANTS.headerColor);
    rootElem.style.setProperty('--error-color', theme.errorColor ? theme.errorColor : THEME_CONSTANTS.errorColor);
    rootElem.style.setProperty('--success-color', theme.successColor ? theme.successColor : THEME_CONSTANTS.successColor);
    rootElem.style.setProperty('--btn-color', theme.btnColor ? theme.btnColor : THEME_CONSTANTS.btnColor);
}

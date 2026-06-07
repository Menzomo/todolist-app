import IconSun from '/images/icon-sun.svg';
import MoonIcon from '/images/icon-moon.svg';


export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor:
                'bg-light-gray-300',
            textColor: 'text-light-navy-850',
        },
        todo: {
            backgroundColor: 'bg-light-gray-50',
            borderColor: 'border-dark-navy-900',
            textColor: 'text-light-navy-850',
        },
        icon:MoonIcon 
    },


    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor:
                'bg-dark-navy-950',
            textColor: 'text-light-navy-850',
        },
        todo: {
            backgroundColor: 'bg-dark-purple-800',
            borderColor: 'border-dark-navy-950',
            textColor: 'text-light-gray-300',

        },
        icon:IconSun
    },

}

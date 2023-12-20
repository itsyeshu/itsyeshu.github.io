"use-strict";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const getScreenType = () => {
    let width = window.innerWidth;

    const largeScreenSize = 1200, tabletSize = 768, mobileSize = 410;

    if(width > largeScreenSize){
        return 0;
    }else if(width > tabletSize){
        return 1;
    }else if(width > mobileSize){
        return 2;
    }

    return 3;
};
const toggleMenu = () => {
    let header = document.getElementById("header");
    if(!header)
        return;
    let isMenuOpen = header.ariaExpanded;
    if(isMenuOpen){
        let menu = document.getElementById("hamburger-menu");
        if(menu)
            menu.focus();
        header.ariaExpanded = "";
    }else{
        let closeMenu = document.getElementById("mobile-menu-close-btn");
        if(closeMenu)
            closeMenu.focus();
        header.ariaExpanded = "true";
    }
};

const loader = () => {    
    let menu = document.getElementById("hamburger-menu");
    if(menu)
        menu.addEventListener('click', toggleMenu, false);
    let closeMenu = document.getElementById("mobile-menu-close-btn");
    if(closeMenu)
        closeMenu.addEventListener('click', toggleMenu, false);

    
    window.addEventListener("load", () => {
        setTimeout(() => {
            const loadingElement = document.getElementById("loader");
            if(!!loadingElement){
                loadingElement.classList.add("loading");
                setTimeout(() => {
                    loadingElement.classList.remove("loading");
                    loadingElement.classList.add("loaded");
                }, 1000, [loadingElement]);
            }
        }, 1000);
    });

    window.addEventListener("beforeunload", () => {
        const loadingElement = document.getElementById("loader");
        if(!!loadingElement){
            // loadingElement.classList.remove("loaded");
            loadingElement.classList.add("unloading");
        }
    });

    window.addEventListener("resize", () => {
        currentScreen = getScreenType();
    });
};


let currentScreen = getScreenType();

loader();
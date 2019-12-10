export function isIPhoneX() {
    // return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896 || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896 || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;
}

export function isIPhoneXTest() {
    return navigator.userAgent
}

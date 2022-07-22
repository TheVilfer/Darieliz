export function getWindowsSize() {
    return {
        width: window.screen.width,
        height: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
    }
}
export default function getAspectRationString() {
    const windowsSize = getWindowsSize();
    return `${windowsSize.width * windowsSize.devicePixelRatio}x${windowsSize.height * windowsSize.devicePixelRatio}`
}
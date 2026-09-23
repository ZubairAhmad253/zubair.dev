// Shared state between the splash screen and the hero entrance animation.
// The module lives for the whole browser session, so the splash only plays
// on a full page load — not again when navigating back to the home page.

const EVENT = "splash:done";

let played = false;

export function hasSplashPlayed() {
    return played;
}

/** The visit started on another page: the splash should not play later */
export function skipSplash() {
    played = true;
}

export function markSplashDone() {
    played = true;
    window.dispatchEvent(new Event(EVENT));
}

export function onSplashDone(callback: () => void) {
    if (played) {
        callback();
        return () => {};
    }

    window.addEventListener(EVENT, callback, { once: true });
    return () => window.removeEventListener(EVENT, callback);
}

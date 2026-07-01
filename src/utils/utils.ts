export const Utils = {

    async swipeRight() {
        const { width, height } = await driver.getWindowRect();
        const startX = width / 2;
        const constY = height / 2;
        // Start swiping from right to left, 80% of the screen width to the left 20%
        const endX = width * 0.2;

        await driver.action('pointer')
            .move({ duration: 0, x: startX, y: constY })
            .down({ button: 0 })
            .pause(100) // Brief pause to register the touch intent
            .move({ duration: 1000, x: endX, y: constY })
            .up({ button: 0 })
            .perform();
    },

    async swipeUp() {
        const { width, height } = await driver.getWindowRect();
        const constX = width / 2;
        const startY = height * 0.8;
        // Start swiping from the bottom 80% of the screen up to the top 20%
        const endY = height * 0.2;

        await driver.action('pointer')
            .move({ duration: 0, x: constX, y: startY })
            .down({ button: 0 })
            .pause(100) // Brief pause to register the touch intent
            .move({ duration: 1000, x: constX, y: endY })
            .up({ button: 0 })
            .perform();
    },

    async drag(sLocation: {x: number, y: number}, tLocation: {x: number, y: number}): Promise<void> {
        await driver.action('pointer', {
            parameters: { pointerType: 'touch' }
        })
            // Move finger to the source image center
            .move({ duration: 1000, x: sLocation.x, y: sLocation.y })
            // Press down firmly on the screen
            .down({ button: 0 })
            // Brief pause (200-300ms) to trigger the Android long-press/drag activation state
            .pause(1000)
            // Smoothly drag the element across the viewport screen to the target container
            .move({ duration: 1000, x: tLocation.x, y: tLocation.y })
            // Lift finger up to drop it
            .up({ button: 0 })
            .perform();

        // Optional short stabilization pause to let layout changes complete
        await driver.pause(500);
    }
}
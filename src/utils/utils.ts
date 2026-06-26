export const Utils = {
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
        await driver.pause(1000);
    }
}
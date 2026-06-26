import { $ } from '@wdio/globals';
import Screen from '../screens/screen.ts';
import { Utils } from '../utils/utils.ts';
import { AndroidDragScreenLocators } from '../locators/android/drag.screen.locators';
import { IOSDragScreenLocators } from '../locators/ios/drag.screen.locators';

export class DragScreen extends Screen {

    private get DragScreenLocators() {
        return driver.isAndroid? AndroidDragScreenLocators : IOSDragScreenLocators;
    }

    private get CongratulationText() {
        return $(this.DragScreenLocators.congratulation);
    }

    public async solvePuzzle() {
        const pairs = this.DragScreenLocators.pairs;
        const totalPairs = pairs.length;

        const sourceCenters: {x: number, y: number}[] = [];
        const targetCenters: {x: number, y: number}[] = [];

        console.log("Pre-calculating elements' coordinates")
        // 1. Pre-resolve ALL source and destination elements' coordinates befire draggubg
        for (let i = 0; i < totalPairs; i++) {
            // get the elements
            const sourceImage = $(this.DragScreenLocators.getRobotFragment(pairs[i][0]));
            const targetContainer = $(this.DragScreenLocators.getRobotPlaceHolder(pairs[i][1]));

            // get source's center coordinate
            const sLocation = await sourceImage.getLocation();
            const sSize = await sourceImage.getSize();
            sourceCenters.push({ x: Math.floor(sLocation.x + (sSize.width / 2)), y: Math.floor(sLocation.y + (sSize.height / 2))});

            // get target's center coordinate
            const tLocation = await targetContainer.getLocation();
            const tSize = await targetContainer.getSize();
            targetCenters.push({ x: Math.floor(tLocation.x + (tSize.width / 2)), y: Math.floor(tLocation.y + (tSize.height / 2))});
        }


        // 2. Now run the execution drag-and-drop loop using collected center points.
        for (let i = 0; i < totalPairs; i++) {
            console.log(`Dragging pair[${i}]: [${pairs[i][0]}, ${pairs[i][1]}]`);
            await Utils.drag(sourceCenters[i], targetCenters[i]);
        }
        await expect(this.CongratulationText).toBeDisplayed();
    }
}

export default new DragScreen();
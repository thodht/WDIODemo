export const AndroidDragScreenLocators = {
    // Android locators
    pairs: [[8, 11], [4, 13], [3, 15], [1, 17], [7, 19], [6, 21], [9, 23], [5, 25], [2, 27]],
    getRobotFragment: (ifragment: number) => `android=new UiSelector().className("android.widget.ImageView").instance(${ifragment})`,
    getRobotPlaceHolder: (icontainer: number) => `android=new UiSelector().className("android.view.ViewGroup").instance(${icontainer})`,
    
    // iOS locators
    iPairs: ['l1', 'c1', 'r1', 'l2', 'c2', 'r2', 'l3', 'c3', 'r3'],
    iRobotFragment: (ifragment: string) => `~drag-${ifragment}`,
    iRobotPlaceHolder: (icontainer: string) => `~drop-${icontainer}`,
    congratulation: 'android=new UiSelector().text("Congratulations")'
}
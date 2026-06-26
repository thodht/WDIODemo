export const AndroidDragScreenLocators = {
    pairs: [[8, 11], [4, 13], [3, 15], [1, 17], [7, 19], [6, 21], [9, 23], [5, 25], [2, 27]],
    getRobotFragment: (ifragment: number) => `android=new UiSelector().className("android.widget.ImageView").instance(${ifragment})`,
    getRobotPlaceHolder: (icontainer: number) => `android=new UiSelector().className("android.view.ViewGroup").instance(${icontainer})`,
    congratulation: 'android=new UiSelector().text("Congratulations")'
}
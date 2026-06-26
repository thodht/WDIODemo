export const IOSDragScreenLocators = {
    pairs: [[8, 11], [4, 13], [3, 15], [1, 17], [7, 19], [6, 21], [9, 23], [5, 25], [2, 27]],
    getRobotFragment: (ifragment: number) => `iandroid=new UiSelector().className("android.widget.ImageView").instance(${ifragment})`,
    getRobotPlaceHolder: (icontainer: number) => `iandroid=new UiSelector().className("android.view.ViewGroup").instance(${icontainer})`,
    congratulation: 'iandroid=new UiSelector().text("Congratulations")'
}
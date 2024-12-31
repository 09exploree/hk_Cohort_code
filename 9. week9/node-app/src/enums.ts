type KeyInput="up"|"down"|"left"|"right";

enum Directions{
    Up,
    Down,
    Left,
    Right
}
// enum Directions{
//     Up=1,
//     Down,
//     Left,
//     Right
// }
enum Directions2{
    Up='up',
    Down='down',
    Left='left',
    Right='right'
}
function doSomeThing(keyPressed:Directions){
    if(keyPressed==Directions.Up){

    }
}
doSomeThing(Directions.Down);
doSomeThing(Directions.Left);
doSomeThing(Directions.Right);
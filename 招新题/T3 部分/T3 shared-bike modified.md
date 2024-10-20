<!DOCTYPE html>
<html lang="en">
<head>
    <!--本次修改调整了方块的颜色使其更贴近示意图以及略微修改了方块的定位和居中方式，虽然感觉还是没做好-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>共享单车停放位置示意</title>
    <style>
        /*分区1*/
        .background1{
        /*背景色*/
        background-color:rgba(0, 255, 255, 0.325);
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        /*定位*/
        margin: 40px;    
        position: relative;
        left: 10cm;
        top:8cm}
        /*分区2*/
        .background2{
        /*背景色*/
        background-color:rgba(0, 255, 255, 0.325);
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        /*定位*/
        margin: 40px;    
        position: relative;
        left: 10cm;
        top:8cm} 
        /*方块颜色*/
        #region2{background-color:rgba(0, 0, 255, 0.243);
                height: 30px; 
                width: 60px;} 
        #region3{background-color:yellow;
                height: 30px; 
                width: 60px;} 
        #region1{background-color: rgb(45, 183, 11); 
                height: 30px; 
                width: 60px;}
           </style>
</head>
<body>
    <div class="bg">
    <!--分区1-->
    <div class="background1"  >
    <table border="1" cellspacing="30px" bordercolor="blue">
        <!-- 方块1 -->
        <div>
        <tr>
        <td id="region1"></td>
        <td id="region1"></td>
        <td id="region1"></td>
        </tr>
        </div>
        <!-- 方块2 -->
        <div>
        <tr>
        <td id="region2"></td>
        <td id="region2"></td>
        <td id="region2"></td>
        </tr>
        </div>
        <!-- 方块3 -->
        <div>
        <tr>
        <td id="region3"></td>
        <td id="region3"></td>
        <td id="region3"></td>
        </tr>
        </div>
      
    </table>
    </div>
    <!-- 分区2 -->
    <div class="background2" >
        <table border="1"  cellspacing="30px" bordercolor="blue" align="center" >
            <!-- 方块1 -->
            <div>
            <tr>
            <td id="region1"></td>
            <td id="region1"></td>
            <td id="region1"></td>
            </tr>
            </div>
            <!-- 方块2 -->
            <div>
            <tr>
            <td id="region2"></td>
            <td id="region2"></td>
            <td id="region2"></td>
            </tr>
            </div>
            <!-- 方块3 -->
            <div>
            <tr>
            <td id="region3"></td>
            <td id="region3"></td>
            <td id="region3"></td>
            </tr>
            </div>
          
        </table>
        </div>
        </div>
</body>
</html>
function collectPuzzle(redPuzzles,bluePuzzles,greenPuzzles) {


    // 读取F同学收集到的不同碎片数量
    // 并且得到没有重复项的新Array
    let arr1=redPuzzles.slice();
    var killer=undefined;
    var marknumber=4;
    var mark1=marknumber;
    for (i=0; i<redPuzzles.length; i++){
      let r=redPuzzles[i];
      for (j=i+1; j<redPuzzles.length; j++){
        if(r==redPuzzles[j]){
          var mark1=mark1-1;
          var killer=i;
        }
      }
    }
    arr1.splice(killer,1);
    console.log("F同学收集到的不同碎片有：");
    console.log(mark1);


    // 读取S同学收集到的不同碎片数量
    // 并且得到没有重复项的新Array
    let arr2=bluePuzzles.slice();
    var marknumber=3;
    var mark2=marknumber;
    for (i=0; i<bluePuzzles.length; i++){
      let b=bluePuzzles[i];
      for (j=i+1; j<bluePuzzles.length; j++){
        if(b==bluePuzzles[j]){
          var mark2=mark2-1;
        }
      }
    }
    console.log("S同学收集到的不同碎片有：");
    console.log(mark2);


    // 读取L同学收集到的不同碎片数量
    // 并且得到没有重复项的新Array
    let arr3=greenPuzzles.slice();
    var marknumber=4;
    var mark3=marknumber;
    for (i=0; i<greenPuzzles.length; i++){
      let g=greenPuzzles[i];
      for (j=i+1; j<greenPuzzles.length; j++){
        if(g==greenPuzzles[j]){
          var mark3=mark3-1;
          var killer=i;
        }
      }
    }
    arr3.splice(killer,1)
    console.log("L同学收集到的不同碎片有：");
    console.log(mark3);

    
    // 将获得的三个新Array合并
    // 并读取且删除合并后的重复项
    // 最后返回三个同学所找到的所有不同碎片
    // ps：我并没有找到可以一次性删除所有重复项的办法，只能一个个很傻的删除
    let arr4 = arr1.concat(arr2);
    let arr5 = arr4.concat(arr3);
    let killnumbers=[];
    for (i=0; i<arr5.length; i++){
      let a=arr5[i];
      for (j=i+1; j<arr5.length; j++){
        if(a==arr5[j]){
         killnumbers.push(j);
        }
      }
    }
    console.log(killnumbers);
    for (i=0; i<killnumbers.length; i++){
      let k=killnumbers[i];
      for (j=i+1; j<killnumbers.length; j++){
        if(k==killnumbers[j]){
         killnumbers.splice(j,1);
        }
      }
    }
    console.log(killnumbers);

    let b=killnumbers[0];
    let b1=killnumbers[1];
    let b2=killnumbers[2];
    let b3=killnumbers[3];
    let b4=killnumbers[4];
  
    arr5.splice(b,1);
    arr5.splice(b1-1,1);
    arr5.splice(b2-2,1);
    arr5.splice(b3-3,1);
    arr5.splice(b4-4,1);
    
    console.log(arr5);
   
    return arr5;
  }
//1 Get array of node ids from tree (keys).
 let tree={
  '0':{
    '1':{
      '3':{},
      '4':{
        '6':{}
      }
    },
    '2':{
      '5':{}
    }
  }
}
function arrGet(obj,arr=[]){
  for(let key in obj){
       arr.push(key)
       
       if(typeof (obj[key])=='object'){
           arrGet(obj[key],arr)
       }
  }
  arr=arr.sort((a,b)=>a-b).map((el)=>Number(el))
  return arr
}
let result = arrGet(tree)
console.log(result)
//2 Get array of nodes from tree.
 
 let tree={
  '1':{
    '2':{
      '3':{},
      '4':{
        '5':{},
        '6':{}
      }
    },
    '7':{},
    '8':{}
  },
  '9':{},
  '10':{
    '11':{
      '12':{},
      '13':{}
    }
  }
}
function a(obj,i=0,obj2={id:'root',children:[]},result=[],newArr=[]){
  if(i==0){
    for(let key in obj){
    
    obj2['id']='root' 
    obj2['children']=newArr;
    newArr.push(key)
  }
  result.push(obj2)
}
    ++i
  newArr=[]
  obj2={}
  let key1
  for( key1 in obj){
    obj2['id']=key1;
    obj2['children']=newArr
      for(let key2 in obj[key1]){ 
           obj2['id']=key1;
           obj2['children']=newArr;
           newArr.push(key2)
      }
    result.push(obj2)
    newArr=[]
    obj2={}
    a(obj[key1],i,obj2,result)
  }    
  return result   
}
let result= a(tree);
console.log(result)

 //3 Implement binary search.
 let arr1=[1,2,3,4,5,6,7,8,9,66]
function ind(arr,x,start=0,end=arr.length-1){
   
      if(start>end){
        return false
      } 
      let mid=Math.ceil((start+end)/2)
      if(arr[mid]===x){
        return mid
      }  
      if(arr[mid]>x){
        return ind(arr,x ,start,mid-1)
      }else{
        return ind(arr,x,mid+1,end)
      }
}
let result=ind(arr1,66);
console.log(result)

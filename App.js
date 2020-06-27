import React from 'react';
import { View, Text } from 'react-native';


class Ozge extends React.Component{
  render(){
    let i,j,k;
    x=5;
    for (i=-1; i<=x-i; i++) {	
      let satir =" ";
      for (j=-1; j<=x-i; j++)satir+=" ";
      for (j=-1; j<=2*i+1; j++)(j<=x+i)?satir+="*":satir+=" ";
        console.log(satir)
    }
    //hollow full pyramid
    for (i=1; i<=x; i++) {	
      let satir2 = " ";
      for (j=1; j<=x+x; j++){
        if(i+j==x+1 | j-i ==x-1 | (i==x & k)){
              satir2+="*";
              k=0;
        }
        else{
        satir2+=" ";k=1;	
        }
        
      }   console.log(satir2)      
    }
    //inverted full pyramid
    for (i=x; i>=1; i--) {	
      let satir3 = " ";
          for (j=1; j<=x+x; j++){
            if(j>=x-(i-1) && j<=x+(i-1) && k){
              satir3+="*";
              k=0;
        }
        else{
          satir3+=" ";k=1;	
        }
      }  console.log(satir3)    
      }

      //full pyramid
      for (i=1; i<=x; i++) {	
        let satir4 = " ";
            for (j=1; j<=x+x; j++){
              if(j>=x-(i-1) && j<=x+(i-1) && k){
                satir4+="*";
                k=0;
          }
          else{
            satir4+=" ";k=1;	
          }
        }    console.log(satir4)    
      }
    return (
    <View>
    <Text>Hello World</Text>
    </View>
    );
  }
}

export default Ozge;
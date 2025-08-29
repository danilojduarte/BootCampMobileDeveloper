import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#1e1e20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraBox:{
    position: 'relative',
    borderColor: '#fff',
    width: 350,
    height: '90%',
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 10,
  },
  triangleConner:{
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#fff',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
  },
  topRight:{
    top: 0,
    right: 0,
    transform:[{rotate: '90deg' }],
  },
   bottomLeft:{
    bottom: 0,
    left: 0,
    transform:[{rotate: '270deg' }],
  },
  bottomRight:{
    bottom: 0,
    right: 0,
    transform:[{rotate: '180deg' }],
  },
})
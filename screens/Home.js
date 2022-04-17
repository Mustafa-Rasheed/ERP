import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,Modal,Pressable,
   ImageBackground ,ScrollView
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {AppStyles} from './AppStyle';
import {URL, NewSupplierInformation, showallDashboarduser} from "./config/api"
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome"
import { Col, Row, Grid } from 'react-native-easy-grid';
import HomeViewModal from "./models/HomeViewModal";
import axios from "axios";

 
export default function App({route}) {
  const [Supplier_name, setSupplier_name] = useState({
    Supplier_name: null
  });
  const [Supplier_cnic, setSupplier_cnic] = useState({
    Supplier_cnic: null
  });
  const [Supplier_company, setSupplier_company] = useState({
    Supplier_company: null
  });
  const [supplier_number, setsupplier_number] = useState({
    supplier_number: null
  });
 
   const image = {uri: "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}

   const SaveSupplierData = ()=>{
     debugger
     if(Supplier_name == null && Supplier_cnic == null && Supplier_company == null && supplier_number == null){

      axios.post(`${URL}${NewSupplierInformation}`, {
        Supplier_name : Supplier_name,
        Supplier_cnic:Supplier_cnic,
        Supplier_company:Supplier_company,
        supplier_number:supplier_number,
    }).then((res) =>{
         if( res.data.status == true ){
          alert("Data Saved!")
        } else{
            alert(" Fail!")
        }
    })
     }
     else{
      alert("Cannot be empty!")
     }
}
   
   const [getpost, setpost] = useState()
   useEffect(() =>{
     debugger
       axios.get(`${URL}${showallDashboarduser}`)
       .then((res) =>{
         debugger
         const postdata = res.data.response;
         setpost(postdata);
         console.log("getpost", getpost)
       })
       
   },[])

   const navigation = useNavigation();
   
   const Notification =(posts)=>{
     debugger
     navigation.navigate('Notifications', posts)
   }

   const ViewDetail =(posts)=>{
      // navigation.navigate('HomeViewModal', posts)
      setModalVisible(!modalVisible)
      setDetail(posts);
   }

   const [modalVisible, setModalVisible] = useState(false);
  const [Detail, setDetail] = useState({});


  return (
    // <KeyboardAwareScrollView  >
    
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{Detail.Supplier_name}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
      </Pressable> */}


    <ImageBackground source={image} resizeMode="cover" style={styles.image}  >
    <View style={styles.customrow}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholderTextColor={AppStyles.color.white}
          placeholder="Supplier Name."
          onChangeText={Supplier_name => setSupplier_name(Supplier_name)}
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholderTextColor={AppStyles.color.white}
          placeholder="Supplier CNIC"
          onChangeText={Supplier_cnic => setSupplier_cnic(Supplier_cnic)}
        />
      </View>
    </View>

    <View style={styles.customrow}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholderTextColor={AppStyles.color.white}
          placeholder="Supplier Company."
          onChangeText={Supplier_company => setSupplier_company(Supplier_company)}
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholderTextColor={AppStyles.color.white}
          placeholder="Supplier Number"
          onChangeText={supplier_number => setsupplier_number(supplier_number)}
        />
      </View>
      {/* <Text> text{postq} </Text> */}

    </View>

    <Button
      containerStyle={styles.loginContainer}
      style={styles.loginText}
      onPress={() => SaveSupplierData()}
      title="Save"
      >
      
    </Button>

    <View style={styles.containers}   >
        <ScrollView    >
           {/* <DataTable.Header>
                   <DataTable.Title >Name</DataTable.Title>
                   <DataTable.Title>Contact No.</DataTable.Title>
                   <DataTable.Title>CNIC</DataTable.Title>
                   <DataTable.Title></DataTable.Title>
                   <DataTable.Title></DataTable.Title>
                   <DataTable.Title></DataTable.Title>
          </DataTable.Header> */}

          <Row  >
           <Row style={styles.cell} >
            <Text>Name</Text>
           </Row>
           <Row style={styles.cell} >
            <Text>no</Text>
           </Row>
           {/* <Row style={styles.cell}>
            <Text>nic</Text>
           </Row> */}
           <Row style={styles.cell}>
            <Text>Delete</Text>
           </Row>

           </Row>

      
           {
            getpost !== null && getpost !== undefined ?(  
               getpost.map((posts) =>{
                 debugger
                 

                 return(
        <View style={styles.containerq}>
      <Grid>
        <Row  >
          <Col style={styles.cell} >
            <Text style={styles.cel} >{posts.Supplier_name}</Text>
          </Col>
          <Col style={styles.cell} >
            <Text style={styles.cel} >{posts.supplier_number}</Text>
          </Col>
          {/* <Col  style={styles.cell}>
            <Text style={styles.cel} >{posts.Supplier_cnic}</Text>
          </Col> */}
          <Col  style={styles.cell}>
            
            <Row style={styles.cel2} >
            <Text ><Icon name="trash"  onPress={() =>  Notification(posts)} size={20} /></Text>
            <Text><Icon name="eye"  onPress={() =>  ViewDetail(posts)} size={20} /></Text>
            <Text><Icon name="pencil"  size={20} /></Text>
            </Row>
          </Col>
          
        </Row>

        
      </Grid>
    </View>
                 );
               })
             ):(
               <Text>Error</Text>
             )
           }
        </ScrollView>
     </View> 

     

    
    </ImageBackground>
  </View>
    // </KeyboardAwareScrollView>


  );
}
 

const styles = StyleSheet.create({
  containerq: {
    width: '100%',
    height: '100%',
    padding: 5,
    paddingTop: 1,
    backgroundColor: '#ffff',
  },
  cel2: {
  
  // backgroundColor:'red',
  alignItems:'center',
  justifyContent:'space-between'
  },
  cel: {
  
    fontWeight:"bold",
    fontSize:15
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:"bold"
  },
  image: {
    height:"100%",
    alignItems : "center",
    justifyContent: "center"
  
  },
  containers: {
    paddingTop: "5%",
    paddingHorizontal: "5%",
    borderColor: 'red',
    height: '60%',
    width:"100%",
  borderWidth: 2,
  backgroundColor: 'white'
  },
  container: {
    width:"100%",
    height:"100%",
    // borderColor:'red',
    // borderWidth:5,
    
    
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.white,
    marginTop: 25,
    marginBottom: 20,
    // borderColor: 'red',
    // borderWidth:3
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: "center",
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
   
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  
  InputContainer: {
    width: AppStyles.textInputWidthHome.main,
    marginTop: 30,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  customrow:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
  
});
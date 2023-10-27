import React, { useEffect, useState } from 'react';
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View,Modal,Platform,FlatList,Dimensions, Image,} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { data } from '../files/countriesData';
import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';
const {height, width} = Dimensions.get('window')

function ListPage(): JSX.Element {

const [lastItemHeight, setLastItemHeight] = useState(195);

type FlagImages = {
  [key: string]: any; 
};

const flagImages: FlagImages = {
  'AFGHANISTAN': require('../assets/flags/AFGHANISTAN.png'),
    'ALBANIA': require('../assets/flags/ALBANIA.png'),
    'ALGERIA': require('../assets/flags/ALGERIA.png'),
    'ANDORRA': require('../assets/flags/ANDORRA.png'),
    'ANGOLA': require('../assets/flags/ANGOLA.png'),
    'ANTIGUA AND BARBUDA': require('../assets/flags/ANTIGUA&BARBUDA.png'),
    'ARGENTINA': require('../assets/flags/ARGENTINA.png'),
    'ARMENIA': require('../assets/flags/ARMENIA.png'),
    'AUSTRALIA': require('../assets/flags/AUSTRALIA.png'),
    'AUSTRIA': require('../assets/flags/AUSTRIA.png'),
    'AZERBAIJAN': require('../assets/flags/AZERBAIJAN.png'),
    'THE BAHAMAS': require('../assets/flags/THEBAHAMAS.png'),
    'BAHRAIN': require('../assets/flags/BAHRAIN.png'),
    'BANGLADESH': require('../assets/flags/BANGLADESH.png'),
    'BARBADOS': require('../assets/flags/BARBADOS.png'),
    'BELARUS': require('../assets/flags/BELARUS.png'),
    'BELGIUM': require('../assets/flags/BELGIUM.png'),
    'BELIZE': require('../assets/flags/BELIZE.png'),
    'BENIN': require('../assets/flags/BENIN.png'),
    'BHUTAN': require('../assets/flags/BHUTAN.png'),
    'BOLIVIA': require('../assets/flags/BOLIVIA.png'),
    'BOSNIA AND HERZEGOVINA': require('../assets/flags/BOSNIA&HERZEGOVINA.png'),
    'BOTSWANA': require('../assets/flags/BOTSWANA.png'),
    'BRAZIL': require('../assets/flags/BRAZIL.png'),
    'BRUNEI': require('../assets/flags/BRUNEI.png'),
    'BULGARIA': require('../assets/flags/BULGARIA.png'),
    'BURKINA FASO': require('../assets/flags/BURKINAFASO.png'),
    'BURUNDI': require('../assets/flags/BURUNDI.png'),
    'CABO VERDE': require('../assets/flags/CABOVERDE.png'),
    'CAMBODIA': require('../assets/flags/CAMBODIA.png'),
    'CAMEROON': require('../assets/flags/CAMEROON.png'),
    'CANADA': require('../assets/flags/CANADA.png'),
    'CENTRAL AFRICAN REPUBLIC': require('../assets/flags/CENTRALAFRICANREPUBLIC.png'),
    'CHAD': require('../assets/flags/CHAD.png'),
    'CHILE': require('../assets/flags/CHILE.png'),
    'CHINA': require('../assets/flags/CHINA.png'),
    'COLOMBIA': require('../assets/flags/COLOMBIA.png'),
    'COMOROS': require('../assets/flags/COMOROS.png'),
    'DEMOCRATIC REPUBLIC OF THE CONGO': require('../assets/flags/CONGO,DEMOCRATICREPUBLICOFTHE.png'),
    'REPUBLIC OF THE CONGO': require('../assets/flags/CONGO,REPUBLICOFTHE.png'),
    'COSTA RICA': require('../assets/flags/COSTARICA.png'),
    'Ivory Coast': require('../assets/flags/CÔTEDIVOIRE.png'),
    'CROATIA': require('../assets/flags/CROATIA.png'),
    'CUBA': require('../assets/flags/CUBA.png'),
    'CYPRUS': require('../assets/flags/CYPRUS.png'),
    'CZECHIA': require('../assets/flags/CZECHIA(CzechRepublic).png'),
    'DENMARK': require('../assets/flags/DENMARK.png'),
    'DJIBOUTI': require('../assets/flags/DJIBOUTI.png'),
    'DOMINICA': require('../assets/flags/DOMINICA.png'),
    'DOMINICAN REPUBLIC': require('../assets/flags/DOMINICANREPUBLIC.png'),
    'ECUADOR': require('../assets/flags/ECUADOR.png'),
    'EGYPT': require('../assets/flags/EGYPT.png'),
    'EL SALVADOR': require('../assets/flags/ELSALVADOR.png'),
    'EQUATORIAL GUINEA': require('../assets/flags/EQUATORIALGUINEA.png'),
    'ERITREA': require('../assets/flags/ERITREA.png'),
    'ESTONIA': require('../assets/flags/ESTONIA.png'),
    'ESWATINI': require('../assets/flags/ESWATINI.png'),
    'ETHIOPIA': require('../assets/flags/ETHIOPIA.png'),
    'FIJI': require('../assets/flags/FIJI.png'),
    'FINLAND': require('../assets/flags/FINLAND.png'),
    'FRANCE': require('../assets/flags/FRANCE.png'),
    'GABON': require('../assets/flags/GABON.png'),
    'THE GAMBIA': require('../assets/flags/GAMBIA,THE.png'),
    'GEORGIA': require('../assets/flags/GEORGIA.png'),
    'GERMANY': require('../assets/flags/GERMANY.png'),
    'GHANA': require('../assets/flags/GHANA.png'),
    'GREECE': require('../assets/flags/GREECE.png'),
    'GRENADA': require('../assets/flags/GRENADA.png'),
    'GUATEMALA': require('../assets/flags/GUATEMALA.png'),
    'GUINEA': require('../assets/flags/GUINEA.png'),
    'GUINEA-BISSAU': require('../assets/flags/GUINEA-BISSAU.png'),
    'GUYANA': require('../assets/flags/GUYANA.png'),
    'HAITI': require('../assets/flags/HAITI.png'),
    'HONDURAS': require('../assets/flags/HONDURAS.png'),
    'HUNGARY': require('../assets/flags/HUNGARY.png'),
    'ICELAND': require('../assets/flags/ICELAND.png'),
    'INDIA': require('../assets/flags/INDIA.png'),
    'INDONESIA': require('../assets/flags/INDONESIA.png'),
    'IRAN': require('../assets/flags/IRAN.png'),
    'IRAQ': require('../assets/flags/IRAQ.png'),
    'IRELAND': require('../assets/flags/IRELAND.png'),
    'ISRAEL': require('../assets/flags/ISRAEL.png'),
    'ITALY': require('../assets/flags/ITALY.png'),
    'JAMAICA': require('../assets/flags/JAMAICA.png'),
    'JAPAN': require('../assets/flags/JAPAN.png'),
    'JORDAN': require('../assets/flags/JORDAN.png'),
    'KAZAKHSTAN': require('../assets/flags/KAZAKHSTAN.png'),
    'KENYA': require('../assets/flags/KENYA.png'),
    'KIRIBATI': require('../assets/flags/KIRIBATI.png'),
    'KOSOVO': require('../assets/flags/KOSOVO.png'),
    'KUWAIT': require('../assets/flags/KUWAIT.png'),
    'KYRGYZSTAN': require('../assets/flags/KYRGYZSTAN.png'),
    'LAOS': require('../assets/flags/LAOS.png'),
    'LATVIA': require('../assets/flags/LATVIA.png'),
    'LEBANON': require('../assets/flags/LEBANON.png'),
    'LESOTHO': require('../assets/flags/LESOTHO.png'),
    'LIBERIA': require('../assets/flags/LIBERIA.png'),
    'LIBYA': require('../assets/flags/LIBYA.png'),
    'LIECHTENSTEIN': require('../assets/flags/LIECHTENSTEIN.png'),
    'LITHUANIA': require('../assets/flags/LITHUANIA.png'),
    'LUXEMBOURG': require('../assets/flags/LUXEMBOURG.png'),
    'MADAGASCAR': require('../assets/flags/MADAGASCAR.png'),
    'MALAWI': require('../assets/flags/MALAWI.png'),
    'MALAYSIA': require('../assets/flags/MALAYSIA.png'),
    'MALDIVES': require('../assets/flags/MALDIVES.png'),
    'MALI': require('../assets/flags/MALI.png'),
    'MALTA': require('../assets/flags/MALTA.png'),
    'MARSHALL ISLANDS': require('../assets/flags/MARSHALLISLANDS.png'),
    'MAURITANIA': require('../assets/flags/MAURITANIA.png'),
    'MAURITIUS': require('../assets/flags/MAURITIUS.png'),
    'MEXICO': require('../assets/flags/MEXICO.png'),
    'THE FEDERATED STATES OF MICRONESIA': require('../assets/flags/MICRONESIA,FEDERATEDSTATESOF.png'),
    'MOLDOVA': require('../assets/flags/MOLDOVA.png'),
    'MONACO': require('../assets/flags/MONACO.png'),
    'MONGOLIA': require('../assets/flags/MONGOLIA.png'),
    'MONTENEGRO': require('../assets/flags/MONTENEGRO.png'),
    'MOROCCO': require('../assets/flags/MOROCCO.png'),
    'MOZAMBIQUE': require('../assets/flags/MOZAMBIQUE.png'),
    'MYANMAR': require('../assets/flags/MYANMAR(Burma).png'),
    'NAMIBIA': require('../assets/flags/NAMIBIA.png'),
    'NAURU': require('../assets/flags/NAURU.png'),
    'NEPAL': require('../assets/flags/NEPAL.png'),
    'NETHERLANDS': require('../assets/flags/NETHERLANDS.png'),
    'NEW ZEALAND': require('../assets/flags/NEWZEALAND.png'),
    'NICARAGUA': require('../assets/flags/NICARAGUA.png'),
    'NIGER': require('../assets/flags/NIGER.png'),
    'NIGERIA': require('../assets/flags/NIGERIA.png'),
    'NORTH KOREA': require('../assets/flags/NORTHKOREA.png'),
    'NORTH MACEDONIA': require('../assets/flags/NORTHMACEDONIA.png'),
    'NORWAY': require('../assets/flags/NORWAY.png'),
    'OMAN': require('../assets/flags/OMAN.png'),
    'PAKISTAN': require('../assets/flags/PAKISTAN.png'),
    'PALAU': require('../assets/flags/PALAU.png'),
    'PALESTINE': require('../assets/flags/PALESTINE.png'),
    'PANAMA': require('../assets/flags/PANAMA.png'),
    'PAPUA NEW GUINEA': require('../assets/flags/PAPUANEWGUINEA.png'),
    'PARAGUAY': require('../assets/flags/PARAGUAY.png'),
    'PERU': require('../assets/flags/PERU.png'),
    'PHILIPPINES': require('../assets/flags/PHILIPPINES.png'),
    'POLAND': require('../assets/flags/POLAND.png'),
    'PORTUGAL': require('../assets/flags/PORTUGAL.png'),
    'QATAR': require('../assets/flags/QATAR.png'),
    'ROMANIA': require('../assets/flags/ROMANIA.png'),
    'RUSSIA': require('../assets/flags/RUSSIA.png'),
    'RWANDA': require('../assets/flags/RWANDA.png'),
    'SAINT KITTS AND NEVIS': require('../assets/flags/SAINTKITTS&NEVIS.png'),
    'SAINT LUCIA': require('../assets/flags/SAINTLUCIA.png'),
    'SAINT VINCENT AND THE GRENADINES': require('../assets/flags/SAINTVINCENT&THEGRENADINES.png'),
    'SAMOA': require('../assets/flags/SAMOA.png'),
    'SAN MARINO': require('../assets/flags/SANMARINO.png'),
    'SAO TOME AND PRINCIPE': require('../assets/flags/SÃOTOMÉ&PRÍNCIPE.png'),
    'SAUDI ARABIA': require('../assets/flags/SAUDIARABIA.png'),
    'SENEGAL': require('../assets/flags/SENEGAL.png'),
    'SERBIA': require('../assets/flags/SERBIA.png'),
    'SEYCHELLES': require('../assets/flags/SEYCHELLES.png'),
    'SIERRA LEONE': require('../assets/flags/SIERRALEONE.png'),
    'SINGAPORE': require('../assets/flags/SINGAPORE.png'),
    'SLOVAKIA': require('../assets/flags/SLOVAKIA.png'),
    'SLOVENIA': require('../assets/flags/SLOVENIA.png'),
    'SOLOMON ISLANDS': require('../assets/flags/SOLOMONISLANDS.png'),
    'SOMALIA': require('../assets/flags/SOMALIA.png'),
    'SOUTH AFRICA': require('../assets/flags/SOUTHAFRICA.png'),
    'SOUTH KOREA': require('../assets/flags/SOUTHKOREA.png'),
    'SOUTH SUDAN': require('../assets/flags/SOUTHSUDAN.png'),
    'SPAIN': require('../assets/flags/SPAIN.png'),
    'SRI LANKA': require('../assets/flags/SRILANKA.png'),
    'SUDAN': require('../assets/flags/SUDAN.png'),
    'SURINAME': require('../assets/flags/SURINAME.png'),
    'SWEDEN': require('../assets/flags/SWEDEN.png'),
    'SWITZERLAND': require('../assets/flags/SWITZERLAND.png'),
    'SYRIA': require('../assets/flags/SYRIA.png'),
    'TAJIKISTAN': require('../assets/flags/TAJIKISTAN.png'),
    'TANZANIA': require('../assets/flags/TANZANIA.png'),
    'THAILAND': require('../assets/flags/THAILAND.png'),
    'TIMOR-LESTE': require('../assets/flags/TIMOR-LESTE.png'),
    'TOGO': require('../assets/flags/TOGO.png'),
    'TONGA': require('../assets/flags/TONGA.png'),
    'TRINIDAD AND TOBAGO': require('../assets/flags/TRINIDAD&TOBAGO.png'),
    'TUNISIA': require('../assets/flags/TUNISIA.png'),
    'TURKIYE': require('../assets/flags/TÜRKIYE.png'),
    'TURKMENISTAN': require('../assets/flags/TURKMENISTAN.png'),
    'TUVALU': require('../assets/flags/TUVALU.png'),
    'UGANDA': require('../assets/flags/UGANDA.png'),
    'UKRAINE': require('../assets/flags/UKRAINE.png'),
    'UNITED ARAB EMIRATES': require('../assets/flags/UNITEDARABEMIRATES(UAE).png'),
    'UNITED KINGDOM': require('../assets/flags/UNITEDKINGDOM(UK)*.png'),
    'UNITED STATES OF AMERICA': require('../assets/flags/UNITEDSTATESOFAMERICA(USA).png'),
    'URUGUAY': require('../assets/flags/URUGUAY.png'),
    'UZBEKISTAN': require('../assets/flags/UZBEKISTAN.png'),
    'VANUATU': require('../assets/flags/VANUATU.png'),
    'VATICAN CITY': require('../assets/flags/VATICANCITY(HolySee).png'),
    'VENEZUELA': require('../assets/flags/VENEZUELA.png'),
    'VIETNAM': require('../assets/flags/VIETNAM.png'),
    'YEMEN': require('../assets/flags/YEMEN.png'),
    'ZAMBIA': require('../assets/flags/ZAMBIA.png'),
    'ZIMBABWE': require('../assets/flags/ZIMBABWE.png'),
};

const ListItem = ({ item, index }: { item: any; index: number }) => {
  // Look up the flag image path based on item.country
  const flagImage = flagImages[item.country];

  return (
    <View style={[styles.listItem, index % 2 === 0 ? styles.evenListItem : styles.oddListItem,
      index === lastItemHeight ? { marginBottom: height * 0.14 } : null]}
    >
      <View style={styles.numberList}><Text style={styles.numberText}>{index + 1}</Text></View>
      <View style={styles.imageList}>
        {/* Use the flagImage variable as the source */}
        <Image source={flagImage} style={styles.image} resizeMode="stretch" />
      </View>
      <View style={styles.CapitalList}>
        <Text style={styles.capitalText}>{item.capital}</Text>
        <Text style={styles.countryText}>{item.country}</Text>
      </View>
      <View style={styles.LongitudeList}><Text style={styles.longitudeText}>{item.longitude}</Text></View>
      <View style={styles.LatitudeList}><Text style={styles.latitudeText}>{item.latitude}</Text></View>
      <View style={styles.ContinentList}><Text style={styles.continentText}>{item.continent}</Text></View>
    </View>
  );
};




const [isPad, setIsPad] = useState(false);
useEffect(() => {
const checkIsiPad = () => {
if (Platform.OS === 'ios' && Platform.isPad) {
setIsPad(true);
} else {
setIsPad(false);
}
};
checkIsiPad()
})
const [selectedValue, setSelectedValue] = useState('Alphabetical');
const [infoBoxVisible, setInfoBoxVisible] = useState(false);
const toggleInfoBox = () => {
setInfoBoxVisible(!infoBoxVisible);
};
const [continentState, setContinent] = useState('The World');
const filteredData = data.filter(item =>
continentState === 'Europe' ? item.continent === 'Europe'
: continentState === 'Asia' ? item.continent === 'Asia'
: continentState === 'Africa' ? item.continent === 'Africa'
: continentState === 'North and South America' ? (item.continent === 'South America' || item.continent === 'North America')
: continentState === 'Asia and Oceania' ? (item.continent === 'Asia' || item.continent === 'Oceania')
: continentState === 'The World' || item.continent === continentState
);
const sortData = (filteredData: any[]) => {
if (selectedValue === 'Alphabetical') {
return filteredData.sort((a: { capital: string; }, b: { capital: any; }) => a.capital.localeCompare(b.capital));
} else if (selectedValue === 'Furthest North') {
return filteredData.sort((a, b) => parseFloat(b.latitude) - parseFloat(a.latitude));
}else if (selectedValue === 'Furthest East') {
return filteredData.sort((a, b) => parseFloat(b.longitude) - parseFloat(a.longitude));
}else if (selectedValue === 'Furthest South') {
return filteredData.sort((a, b) => parseFloat(a.latitude) - parseFloat(b.latitude));
}else if (selectedValue === 'Furthest West') {
return filteredData.sort((a, b) => parseFloat(a.longitude) - parseFloat(b.longitude));
}else{
return filteredData.sort((a: { capital: string; }, b: { capital: any; }) => a.capital.localeCompare(b.capital));;
}
};
const sortedData = sortData(filteredData);
return (
<View style={styles.container}>
<SafeAreaView style={styles.safeAreaView}>
<View style={styles.TopContainer}>
<Text style={styles.largeText}>List of Capitals</Text>
<Text style={styles.smallText}>The United Nations list of 196 countries and capitals.</Text>
<View style={styles.rowContainer}>
<Text style={styles.Textsmall}>
Sort by -<Text style={[{ fontWeight: 'bold' },]}> {selectedValue}</Text>{'\n'}Show -<Text style={[{ fontWeight: 'bold' },]}> {continentState}</Text>
</Text>
<TouchableOpacity onPress={toggleInfoBox} style={styles.smallblueButton}>
<Text style={styles.Textsmallwhite}>Change</Text>
</TouchableOpacity>
</View> 
</View>
<View style={{ flex: 0.2, flexDirection: 'row', padding: 4, alignItems: 'center'}}>
<View style={{ flex: 1,  }}></View >
<View style={{ flex: 1,  }}></View>
<View style={{ flex: 8,  }}>
<View  style={[styles.myText, { width: '70%' }]} ><Text style={{ alignSelf: 'center', fontWeight: 'bold',fontSize: RFValue(7),color: whiteC }}>Capital City</Text></View></View>
<View style={{ flex: 3,  }}>
<View style={[styles.myText, { width: '90%' }]}><Text style={{ alignSelf: 'center',fontWeight: 'bold', fontSize: RFValue(7), color: whiteC }}>Longitude</Text></View></View>
<View style={{ flex: 3,  }}>
<View style={[styles.myText, { width: '90%' }]}><Text style={{ alignSelf: 'center',fontWeight: 'bold', fontSize: RFValue(7),color: whiteC }}>Latitude</Text></View></View>
<View style={{ flex: 2.5,  }}>
<View style={styles.myText}><Text style={{ alignSelf: 'center',fontWeight: 'bold', fontSize: RFValue(7),color: whiteC }}>Continent</Text></View></View>
</View>
<View style={styles.BottomContainer}>
<FlatList
data={sortedData}
renderItem={({ item, index }) => <ListItem item={item} index={index} />}
keyExtractor={(item, index) => index.toString()}
showsVerticalScrollIndicator={false}
/>
</View>
<Modal transparent={true} animationType="slide"visible={infoBoxVisible} onRequestClose={toggleInfoBox}>
<View style={styles.modalContainer}>
<View style={styles.infoBox}>  
<View style={styles.rowOne}>
  <Text  style={styles.textTitle}>- Sort by</Text>
</View>
<View style={styles.rowTwo}>
<Picker
style={[styles.picker, isPad ? { marginTop: 10} : {height: '100%',}]}
selectedValue={selectedValue}
onValueChange={(itemValue) => setSelectedValue(itemValue)}
itemStyle={styles.pickerItemText}>
<Picker.Item label="Alphabetical" value="Alphabetical" />
<Picker.Item label="Furthest North" value="Furthest North" />
<Picker.Item label="Furthest East" value="Furthest East" />
<Picker.Item label="Furthest South" value="Furthest South" />
<Picker.Item label="Furthest West" value="Furthest West" />
</Picker>
</View>
<View style={styles.rowOne}>
  <Text  style={styles.textTitle}>- Show</Text>
</View>
<View style={styles.rowThree}>
<TouchableOpacity
style={[styles.containerButton,{ backgroundColor: continentState === 'The World' ? blueC : grayC, },]}
onPress={() => {setContinent('The World');setLastItemHeight(195)}}>
<Text style={{fontWeight:  'bold',fontSize: RFValue(14),color: continentState === 'The World' ? whiteC : blackC,}}>The world</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.containerButton,{ backgroundColor: continentState === 'Europe' ? blueC : grayC, },]}
onPress={() => {setContinent('Europe');setLastItemHeight(45)}}>
<Text style={{fontWeight:  'bold',fontSize: RFValue(14),color: continentState === 'Europe' ? whiteC : blackC,}}>Europe</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.containerButton,{ backgroundColor: continentState === 'Africa' ? blueC : grayC, },]}
onPress={() => {setContinent('Africa');setLastItemHeight(53)}}>
<Text style={{fontWeight:  'bold',fontSize: RFValue(14),color: continentState === 'Africa' ? whiteC : blackC,}}>Africa</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.containerButton,{ backgroundColor: continentState === 'North and South America' ? blueC : grayC, },]}
onPress={() => {setContinent('North and South America');setLastItemHeight(34)}}>
<Text style={{fontWeight:  'bold',fontSize: RFValue(14),color: continentState === 'North and South America' ? whiteC : blackC,}}>North and South America</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.containerButton,{ backgroundColor: continentState === 'Asia and Oceania' ? blueC : grayC,},]}
onPress={() => {setContinent('Asia and Oceania');setLastItemHeight(60)}}>
<Text style={{fontWeight:  'bold',fontSize: RFValue(14),color: continentState === 'Asia and Oceania' ? whiteC : blackC,}}>Asia and Oceania</Text>
</TouchableOpacity>
</View>
<View style={styles.rowFour}>
<TouchableOpacity onPress={toggleInfoBox} style={styles.blueButton}>
<Text style={styles.buttonText}>Done !</Text>
</TouchableOpacity>
</View>
</View>
</View>
</Modal> 
</SafeAreaView> 
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
},
safeAreaView: {
flex: 1,
backgroundColor: blueC,
},
TopContainer: {
width: width * 0.92,
alignItems: 'center',
justifyContent: 'space-evenly',
backgroundColor: whiteC,
borderRadius: 20,
alignSelf: 'center', 
shadowColor: blackC,
shadowOffset: {
width: 0,
height: 4,
},
shadowOpacity: 0.4,
shadowRadius: 6,
elevation: 5,
marginTop: 6,
},
largeText: {
fontSize: RFValue(24), 
fontWeight: 'bold',
color: blackC,
fontFamily: 'Montserrat',
},
smallText: {
fontSize: RFValue(7), 
color: blackC,
},
rowContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-evenly',
width: '100%',
marginTop: 10, 
paddingLeft: 20,
flexWrap: 'wrap',
paddingBottom: 10,
},
smallblueButton: {
backgroundColor: blueC,
padding: 7,
borderRadius: 10, 
},
Textsmall: {
fontSize: RFValue(16),
color: blackC,
},
Textsmallwhite: {
fontSize: RFValue(14),
color: whiteC,
fontWeight: 'bold',
},
numberList: {
flex: 1.5,
justifyContent: 'center',
alignItems: 'center', 
padding: 6,
},
imageList: {
  flex: 8,
  justifyContent: 'center',
  alignItems: 'center', 
  paddingTop: RFValue(4),
  paddingBottom: RFValue(4),
},
CapitalList:{
flex: 12,
paddingLeft: 5,
},
LongitudeList:{
flex: 6,
justifyContent: 'center',
},
ContinentList:{
flex: 5,
},
LatitudeList:{
flex: 6,
justifyContent: 'center',
},
evenListItem: {
backgroundColor: whiteC,
},
oddListItem: {
backgroundColor: blueGrayC,
},
capitalText: {
fontSize: RFValue(12),
fontWeight: 'bold',   
paddingTop: 4,
},
countryText: {
fontSize: RFValue(8),   
paddingTop: 1,
paddingBottom: 4,
},
numberText: {
fontSize: RFValue(6),
fontWeight: 'bold',    
},
longitudeText: {
fontSize: RFValue(10),    
},
latitudeText: {
fontSize: RFValue(10),   
},
continentText: {
fontSize: RFValue(8),   
},
listItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
// number: {
// fontSize: RFValue(2),
// fontWeight: 'bold',
// },
country: {
fontSize: 16,
},
capital: {
fontSize: 14,
},
BottomContainer: {
flex: 5,
width: '100%',
backgroundColor: whiteC,
},
button: {
marginTop: 20,
padding: 10,
backgroundColor: blueC,
borderRadius: 5,
},
modalContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
infoBox: {
backgroundColor: whiteC,
width: '90%',
height: '80%',
borderRadius: 10,
padding: 10,
borderWidth: 4,
shadowColor: blackC,
shadowOffset: { width: 2, height: 2 }, 
shadowOpacity: 0.4,
shadowRadius: 6,
elevation: 6, 
},
infoText: {
fontSize: RFValue(18),
fontWeight: 'bold',
marginBottom: 20,
},
rowOne: {
flex: 1,
justifyContent: 'center',
},
rowTwo: {
flex: 4,
overflow: 'hidden',
},
picker: {
backgroundColor: 'rgb(245, 245, 245)',
borderRadius: 10,
width: '100%',
},
pickerItemText: {
fontSize: RFValue(20),
},
rowThree: {
flex: 5,
},
rowFour: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
blueButton: {
backgroundColor: blueC,
padding: 10,
borderRadius: 5,
},
buttonText: {
color: whiteC,
fontSize: RFValue(18),
textAlign: 'center',
fontWeight: 'bold', 
},  
containerButton: {
width: '100%',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginBottom: 5,
borderRadius: 5,
flex: 1
},
textTitle: {
fontSize: RFValue(18),
fontWeight: 'bold',
marginLeft: 10,
},
myText: {
backgroundColor: purpleC,
padding: 5,
borderRadius: 10,
borderColor: 'black',
shadowColor: 'black',
shadowOffset: { width: 2, height: 2 }, 
shadowOpacity: 0.4,
shadowRadius: 6,
elevation: 6, 
},
image: {
  width: width * 0.2,
  height: width * 0.14,
  borderWidth: RFValue(1),
  borderColor: 'black',
  borderRadius: RFValue(3),
},
});
export default ListPage;
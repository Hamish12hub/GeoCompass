import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { greenC, orangeC, purpleC, whiteC, redC, blueC } from '../files/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../files/countriesData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');

type RootStackParamList = {
  OverallScreen: undefined; // Define your navigation stack here
};
type WrongScoreNavigationProp = NavigationProp<RootStackParamList, 'OverallScreen'>;

const FirstGameScreen = () => {
  const navigation = useNavigation<WrongScoreNavigationProp>();
  const imageWidth = height * 0.1;

  const [country, setCountry] = useState<string | null>(null);
  const [capital, setCapital] = useState<string | null>(null);
  const [continent, setContinent] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [usedCountries, setUsedCountries] = useState<string[]>([]); // Keep track of used countries
  const [loseBlocker, setLoseBlocker] = useState(false);

  const [newbackgroundColor, setNewBackgroundColor] = useState(blueC);


  const countryImageMap: Record<string, number> = {
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

const countryImageSource = countryImageMap[country || ''];



const [highScore, setHighScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  useEffect(() => {
    loadHighScore();
  }, []);
  const loadHighScore = async () => {
    try {
      const storedScore = await AsyncStorage.getItem('FirstGameScore');
      const parsedScore = parseInt(storedScore ?? '0', 10);
    const storedGameCount = await AsyncStorage.getItem('gameCount');
    const parsedGameCount = parseInt(storedGameCount ?? '0', 10);
      if (!isNaN(parsedScore)) {
        setHighScore(parsedScore);
      }
      if (!isNaN(parsedGameCount)) {
        setGamesPlayed(parsedGameCount);
      }
    } catch (error) {
    }
  };
  const updateHighScore = async () => {
    if (score > highScore) {
      try {
        await AsyncStorage.setItem('FirstGameScore', score.toString());
        setHighScore(score);
      } catch (error) {
      }
    }
  };

  

  useEffect(() => {
    fetchRandomCountry();
  }, []);

  const fetchRandomCountry = () => {
    if (usedCountries.length === data.length) {
      setNewBackgroundColor(greenC)
    setLoseBlocker(true)
    updateHighScore()
    setTimeout(() => {
      navigation.navigate('OverallScreen');
    }, 2000); 
      return;
    }else{
      setTimeout(() => {
        setNewBackgroundColor(blueC)
        setLoseBlocker(false)
      }, 400); 
    }
    let randomData: { country: any; capital: any; continent: any; latitude?: string; longitude?: string; };
    do {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomData = data[randomIndex];
    } while (usedCountries.includes(randomData.country));
    setTimeout(() => {
      setCountry(randomData.country);
    setCapital(randomData.capital);
    setContinent(randomData.continent);

    setUsedCountries([...usedCountries, randomData.country]);
    }, 400); 

  };

  const goToHomeScreen = async () => {
    setNewBackgroundColor(redC)
    setLoseBlocker(true)
    updateHighScore()
    setTimeout(() => {
      navigation.navigate('OverallScreen');
    }, 2000); 
  };

  const handleSquarePress = (number: any) => {
    if (number === 1 && continent === 'South America') {
      CorrectAnswer();
    } else if (number === 2 && continent === 'North America') {
      CorrectAnswer();
    } else if (number === 3 && continent === 'Africa') {
      CorrectAnswer();
    } else if (number === 4 && continent === 'Europe') {
      CorrectAnswer();
    } else if (number === 5 && continent === 'Asia') {
      CorrectAnswer();
    } else if (number === 6 && continent === 'Oceania') {
      CorrectAnswer();
    } else {
      wrongAnswer();
    }
  };

  const CorrectAnswer = () => {
    setScore(score + 1);
    setNewBackgroundColor(greenC)
    setLoseBlocker(true)
    fetchRandomCountry();
  };

  const wrongAnswer = () => {
    goToHomeScreen();
  };

  return (

<SafeAreaView style={[styles.container, { backgroundColor: newbackgroundColor }]}>
{loseBlocker ? (<View style={styles.blocker}/> ) : (<></>)}

<View style={styles.topContainer}>
        <View
          style={{
            height: '100%',
            width: '95%',
            backgroundColor: whiteC,
            alignSelf: 'center',
            borderRadius: 15,
            flexDirection: 'row',
          }}
        >
          <View style={styles.leftTop}>
          <Text style={{ fontWeight: 'bold',  fontSize: RFValue(14), marginBottom: 10}}>{country}</Text>
         <Text style={{ fontWeight: 'bold', fontSize: RFValue(6), }}>{capital}</Text>
          </View>
          <View style={styles.middleTop}>
          <Image source={countryImageSource} style={styles.image} resizeMode="stretch"/>
          </View>
          <View style={styles.rightTop}>
          <Text style={{ fontWeight: 'bold',  fontSize: RFValue(14),}}>{score} / 196</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
         <TouchableOpacity
          key={1}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(1)}
        ><Image
        source={require('../assets/SouthAmerica.png')}
        resizeMode="stretch"
        style={styles.imageContainer}
      /><View style={styles.BottomRow}><Text style={styles.BottomRowText}>South America</Text></View></TouchableOpacity> 
       <TouchableOpacity
          key={2}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(2)}
        ><Image
        source={require('../assets/NorthAmerica.png')}
        resizeMode="stretch"
        style={styles.imageContainer}
      /><View style={styles.BottomRow}><Text style={styles.BottomRowText}>North America</Text></View></TouchableOpacity> 
      </View>
      <View style={styles.row}>
         <TouchableOpacity
          key={3}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(3)}
        ><Image
        source={require('../assets/Africa.png')}
        resizeMode="stretch"
        style={styles.imageContainer}
      /><View style={styles.BottomRow}><Text style={styles.BottomRowText}>Africa</Text></View></TouchableOpacity> 
       <TouchableOpacity
          key={4}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(4)}
        ><Image
        source={require('../assets/Europe.jpg')}
        resizeMode="stretch"
        style={styles.imageContainer}
      /><View style={styles.BottomRow}><Text style={styles.BottomRowText}>Europe</Text></View></TouchableOpacity> 
      </View>
      <View style={styles.row}>
         <TouchableOpacity
          key={5}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(5)}
        ><Image
        source={require('../assets/Asia.png')}
        resizeMode="stretch"
        style={styles.imageContainer}
      /><View style={styles.BottomRow}><Text style={styles.BottomRowText}>Asia</Text></View></TouchableOpacity> 
       <TouchableOpacity
          key={6}
          style={styles.blueSquare}
          onPress={() => handleSquarePress(6)}
        ><Image
        source={require('../assets/Oceania.png')}
        resizeMode="stretch"
        style={styles.imageContainer}
      />
      <View style={styles.BottomRow}><Text style={styles.BottomRowText}>Oceania</Text></View></TouchableOpacity> 
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: purpleC,
  },
  blocker: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 100,
  },
  topContainer: {
    height: height * 0.14,
  },
  row: {
    height: height * 0.2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  blueSquare: {
    backgroundColor: orangeC,
    height: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  overflow: 'hidden',
  },
  text: {
    fontSize: RFValue(20),
    marginBottom: 10,
  },
  BottomRowText: {
    fontSize: RFValue(16),
    color: whiteC,
    fontWeight: 'bold',
  },
  BottomRow: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  flagImage: {
   aspectRatio: 17/13,
   borderWidth: RFValue(2),
 borderColor: 'black',
 borderRadius: RFValue(6),
 },
 leftTop: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 middleTop: {
  paddingTop: 10,
  paddingBottom: 10,
  flex: 0,
 },
 rightTop: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 image: {
  height: '100%',
 aspectRatio: 17/13,
 borderWidth: RFValue(1),
borderColor: 'black',
borderRadius: RFValue(3),
},
});

export default FirstGameScreen;
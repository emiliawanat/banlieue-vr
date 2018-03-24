import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset, StyleSheet } from 'react-vr';

const places = [
  {
    title: 'Banlieue',
    image: 'bobigny_allende.jpg',
    lead: 'Bobigny - wschodnie przedmieścia Paryża, "miasta świateł". Nieprzypadkowo robotnicze skupiska znajdują się na wschód od wielkich europejskich metropolii. Fabryki lokowano właśnie tu, żeby wiatr nie zdmuchiwał oparów przemysłowych do centrum. Smród mieli wdychać robotnicy.'
  },
  {
    title: 'Nowi przybysze',
    image: 'ile_de_france_bobigny.jpg',
    lead: 'Na początku XX wieku Francja, w wyniku industrializacji, potrzebuje taniej siły roboczej. Do banlieue sprowadzają się nowi mieszkańcy, głównie z Włoch, Hiszpanii i Polski. W międzywojniu paryskie przedmieścia są już bastionem ruchów pracowniczych, przez co zyskują sobie nowy przydomek - "czerwone banlieue".'
  },
  {
    title: 'Trzy dekady',
    image: 'bondy_moulin.jpg',
    lead: 'Zniszczona wojną Europa potrzebuje rąk do pracy. Rozpoczyna się epoka nazywana przez Francuzów "trzydziestoma chwalebnymi latami" (les trente glorieuses, 1945-1975). Trwa dekolonizacja - na kontynent, w poszukiwaniu pracy, pielgrzymują imigranci z dawnych kolonii w Afryce i na Karaibach. Europa nie ma gdzie ich upchnąć. Zaczyna się szalone betonowanie przedmieść.'
  },
  {
    title: 'Granica',
    image: 'bd_peripherique.jpg',
    lead: 'Kryzys naftowy z 1973 roku będzie początkiem końca polityki otwartych drzwi wobec imigrantów z dawnych kolonii. Przedmieścia zostaną pozostawione samym sobie. Izolację pogłębi dodatkowo geografia. Paryskie przedmieścia oddziela od centrum obwodnica Boulevard Périphérique.'
  },
  {
    title: 'Kod pocztowy',
    image: 'ile_de_france_rue_de_letoile.jpg',
    lead: 'Spójrz za siebię - oto dumny obywatel paryskich przedmieść. We Francji adres zamieszkania musi obowiązkowo widnieć w CV. Nie jest tajemnicą, że wielu pracodawców odrzuca automatycznie podanie, gdy kod pocztowy zaczyna się od cyfr 93.'
  },
  {
    title: 'Wyklęci',
    image: 'chanteloup_les_vignes_station.jpg',
    lead: 'Z bloków w centrum Chanteloup-les-Vignes łypią na mieszkańców wielkie murale z podobiznami "poetów wyklętych" - Paula Valery, Artura Rimbaud i Charlesa Baudelaire\'a. Miały symbolizować aspiracje kulturowe dla kolejnych generacji imigrantów. Stały się raczej smutnym symbolem władzy.'
  },
  {
    title: 'Domy z betonu',
    image: 'ile_de_france_la_courneuve.jpg',
    lead: 'Cité - wielki projekt mieszkaniowy, tzw "maszyna do mieszkania". Powstał w umyśle mesjasza modernizmu, Le Corbusiera. Kolejne osiedla wyrastały jak grzyby po deszczu w powojennej Europie. Utopijny projekt dla robotników przekształcił sie w zagłębie biedy i społecznej izolacji.'
  },
  {
    title: 'Front',
    image: 'clichy_sous_bois_hugo.jpg',
    lead: 'Rodziny imigrantów były często relokowane do najgorszych osiedli. Stąd wzięło się dość popularne przekonanie, że pogarszające się warunki życia w tych dzielnicach miasta są związane z pochodzeniem etnicznym swoich mieszkańców. Tymi stereotypami gra świadomie Marine Le Pen i jej Front Narodowy.'
  },
  {
    title: 'Dom?',
    image: 'clichy_sous_bois_balzac.jpg',
    lead: 'Z początku większość nowoprzybyłych imigrantów z dawnych kolonii zamieszkiwała slumsy. Mieli zostać tu tylko na chwilę, lecz wielu z nich nigdy nie powróciło do swoich domów. Slumsy zburzono, a dawnych mieszkańców przeniesiono na podmiejskie osiedla. Oto ich dzieci i wnuki.'
  }
]

class Banlieue extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      place: 'bobigny_allende.jpg',
      lead: 'Bobigny - wschodnie przedmieścia Paryża, "miasta świateł". Nieprzypadkowo robotnicze skupiska znajdują się na wschód od wielkich europejskich metropolii. Fabryki lokowano właśnie tu, żeby wiatr nie zdmuchiwał oparów przemysłowych do centrum. Smród mieli wdychać robotnicy.'
    }
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.place)}></Pano>
        <View 
          style={styles.menuButton}
          onEnter={() => this.toggleMenu()}
          >
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        <View style={styles.leadBackground}>
          <Text style={styles.lead}>
            {this.state.lead}
          </Text>
        </View>
        {
          this.state.showMenu ? 
            <View style={styles.menu}>
              {
                places.map((place, index) => {
                  return (
                    <View 
                      style={styles.menuItem} 
                      key={index}
                      onEnter={() => this.setState({place: place.image, lead: place.lead})}
                    >
                      <Text style={styles.menuItemText}>{place.title}</Text>
                    </View>
                  )
                })
              }
            </View>
          :
            <View></View>
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  menu: {
    width: 8,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {translate: [-10, 4, -7.5]},
      {rotateY: 45}
    ]
  },
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    transform: [
      {translate: [-8, 3, -5]},
      {rotateY: 45}
    ]
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000'
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000'
  },
  leadBackground: {
    backgroundColor: '#000',
    width: 5,
    height: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0.3,
    transform: [
      {translate: [-1, 7, -8]}
    ]
  },
  lead: {
    textAlign: 'left',
    fontSize: 0.3,
    color: '#fff'
  }
});

AppRegistry.registerComponent('Banlieue', () => Banlieue);
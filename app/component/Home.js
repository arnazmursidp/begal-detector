import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Card,CardItem,Left, Body   } from 'native-base';
const roads = {
  jalan_besar: [
    'Pasopati jembatan layang',
    'Kiaracondong jembatan layang',
    'Supratman',
    'Sudirman',
    'Sukarno Hatta',
    'Padjadjaran',
    'Laswi ciparay',
  ],
  jalan_kecil: [
    'PSM kiaracondong',
    'Kebaktian Kiaracondong',
    'Tongkeng',
    'Aceh',
    'Martadinata',
    'Cihampelas',
    'Kebon Kawung',
    'Sukajadi',
    'Jajaran jalan Kopo',
    'Cilaki',
    'Cikutera',
    'Sekejati kiaracondong',
    'Eyckman',
    'Terusan Buahbatu',
    'Jl. Banjaran',
    'Laswi ciparay',
    'Tamansari',
    'Siliwangi',
  ]
}

const Home = () => (
  <Content>
      <CardItem>

        <Body>
          <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>TITIK RAWAN PERAMPASAN MOTOR DI BANDUNG</Text>
        </Body>

    </CardItem>
  <Separator bordered>
    <Text style={{fontSize: 16}}>Jalan Besar</Text>
  </Separator>
  {
    roads.jalan_besar.map((besar, i) => 
    <ListItem key={i}>
     <Text>{besar}</Text>
   </ListItem>
  )
  }

  <Separator bordered>
    <Text style={{fontSize: 16}}>Jalan Kecil</Text>
  </Separator>
  {
    roads.jalan_kecil.map((kecil, i) => 
    <ListItem key={i}>
     <Text>{kecil}</Text>
   </ListItem>
  )
  }
</Content>
);

export default Home;

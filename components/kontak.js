import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const friends = [
  {
    gambar: require('../assets/memei.jpg'),
    judul: 'Meitiasari Nurlatifah',
    telpon: '085892775764',
    email : 'memey.icloud@gmail.com',
    alamat : 'jln pelda suryanta',
    gender : 'Female',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/nanat.jpg'),
    judul: 'Natya Octaviana',
    telpon: '085721884434',
    email : 'natyaoctaviana@gmail.com',
    alamat : 'jl gunung karang kp liung tutut Rt 02/Rw09',
    gender : 'Female',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/agung.jpg'),
    judul: 'Agung Bahtiar',
    telpon: '087772243468',
    email : 'Aljabarbara2@gmail.com',
    alamat : 'jln karamat',
    gender : 'Male',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/faisal.jpg'),
    judul: 'Faisal Triaputra',
    telpon: '081280230924',
    email : 'faisal.artupairt28@gmail.com',
    alamat : 'Jl. Pasir Makmur',
    gender : 'Male',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/dani.jpg'),
    judul: 'Dani Akhmad Maulana',
    telpon: '085219971516',
    email : 'dakhmad140104@gmail.com',
    alamat : 'jJl. Pelda Suryanta No.07 Kelurahan       Nanggeleng Kecamatan Citamiang',
    gender : 'Male',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/shinta.jpg'),
    judul: 'Shinta Septiani',
    telpon: '0895364674571',
    email : 'shintasptni@gmail.com',
    alamat : 'Benteng Tengah Gg.Famili',
    gender : 'Female',
    prodi : 'S1 Perawat',
  },
  {
    gambar: require('../assets/rafi.jpg'),
    judul: 'Rafi Maulana Putra',
    telpon: '085723345631',
    email : 'rafimaul82@gmail.com',
    alamat : 'Kp.cirumput RT.05/04 des. Selaawi kec Sukaraja',
    gender : 'Male',
    prodi : 'Teknik Informatika',
  },
  {
    gambar: require('../assets/nisa.jpg'),
    judul: 'Nisa Aguatianti',
    telpon: '081298674541',
    email : 'nisaagustianti90@gmail.com',
    alamat : 'Jl Letda T Asmita, Kp.Tonjong, Rt.001/Rw.002, Kec. Citamiang, Kel.Gedong Panjang',
    gender : 'Female',
    prodi : 'Manajemen',
  },
  {
    gambar: require('../assets/zakia.jpg'),
    judul: 'Zakia Zaharani',
    telpon: '085798204923',
    email : 'zakiazaharani29@gmail.com',
    alamat : 'Jl. Pemandian cigunung Desa. Sukaresmi Kec. Cisaat',
    gender : 'Female',
    prodi : 'S1 Perawat',
  },
  {
    gambar: require('../assets/esanda.jpg'),
    judul: 'Esanda Fatimah A',
    telpon: '085795381719',
    email : 'esandafatimah279@gmail.com',
    alamat : 'Jl. Goalpara, Kp. Nagrak Rt02/08',
    gender : 'Female',
    prodi : 'S1 Perawat',
  },
  {
    gambar: require('../assets/rani.jpg'),
    judul: 'Rani Febriani',
    telpon: '085846664256',
    email : 'ranifebriani2724@gmail.com',
    alamat : 'Kp.Bedeng II',
    gender : 'Female',
    prodi : 'Teknik Informatika',
  },
];

const Kontak = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail', { friend: item })}>
            <Image source={item.gambar} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.judul}</Text>
              <Text style={styles.phone}>{item.telpon}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
});

export default Kontak;
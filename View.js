import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MessagesPage = ({ navigation }) => {

  const handleImageClick = () => {
    // Tambahkan navigasi atau tindakan yang diinginkan di sini
    console.log('Image clicked!');
    navigation.navigate('MainMenu'); // Gantilah 'HalamanTujuan' dengan nama halaman tujuan yang diinginkan
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo back */}
        <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={{ uri: 'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png' }}
          style={styles.backIcon}
        />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>Messages</Text>
      </View>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        // Anda dapat menambahkan properti lain seperti onChangeText sesuai kebutuhan
      />

      {/* Account Information */}
      <View style={styles.accountInfo}>
        {/* Avatar Image */}
        <Image
          source={{ uri: 'https://registrasi.balikpapancerdas.id/akun-baru/images/icon-siswa-smp.png' }}
          style={styles.avatar}
        />
        {/* Text Information */}
        <View style={styles.textInfo}>
          <Text style={styles.accountName}>Alvareza</Text>
          <Text style={styles.lastActive}>Active 15 minutes ago</Text>
        </View>
      </View>

      <View style={styles.accountInfo}>
        {/* Avatar Image */}
        <Image
          source={{ uri: 'https://registrasi.balikpapancerdas.id/akun-baru/images/icon-siswa-smp.png' }}
          style={styles.avatar}
        />
        {/* Text Information */}
        <View style={styles.textInfo}>
          <Text style={styles.accountName}>Togar Giovano</Text>
          <Text style={styles.lastActive}>Active 15 minutes ago</Text>
        </View>
      </View>

      <View style={styles.accountInfo}>
        {/* Avatar Image */}
        <Image
          source={{ uri: 'https://registrasi.balikpapancerdas.id/akun-baru/images/icon-siswa-smp.png' }}
          style={styles.avatar}
        />
        {/* Text Information */}
        <View style={styles.textInfo}>
          <Text style={styles.accountName}>Basuki</Text>
          <Text style={styles.lastActive}>Active 15 minutes ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textInfo: {
    flexDirection: 'column',
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastActive: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MessagesPage;

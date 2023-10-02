// Beranda.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

const Beranda = ({ navigation }) => {
  const translateY = new Animated.Value(0);

  const handleMenu = () => {
    // Tidak perlu validasi, langsung pindah ke halaman MainMenu
    navigation.replace('Login');
  };

    const handleImageClick = () => {
    // Tambahkan navigasi atau tindakan yang diinginkan di sini
    console.log('Image clicked!');
    navigation.navigate('View'); // Gantilah 'HalamanTujuan' dengan nama halaman tujuan yang diinginkan
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://placekitten.com/100/100' }}
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <View style={styles.headerTitleRow}>
           <Image
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png' }}
              style={styles.checkIcon}
            />
            <Text style={styles.usernameText}>Togar Giovano</Text>
            <Image
              source={{ uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/anda-kini-dapat-memperoleh-centang-biru-instagram-hanya-dengan_230729104823-828.jpeg' }}
             style={[styles.checkIcon, {marginHorizontal :1}]}
            />
              <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/ios-icon-library/message-message-3.png' }}
          style={[styles.checkIcon, { marginLeft: 60 }]}
        />
      </TouchableOpacity>
            <Image
              source={{ uri: 'https://cdn.icon-icons.com/icons2/2716/PNG/512/dots_three_outline_icon_173181.png' }}
               style={[styles.checkIcon, {marginLeft :3}]}
            />
          </View>
          <View style={styles.headerTextRow}>
            <Text style={styles.boldText}>1232</Text>
            <Text style={styles.boldText}>5678</Text>
            <Text style={styles.boldText}>9101</Text>
          </View>
            <View style={styles.headerTextRow}>
            <Text style={styles.boldText}>POST</Text>
            <Text style={styles.boldText}>followers</Text>
            <Text style={styles.boldText}>following</Text>
          </View>
          <View style={styles.headerButtonRow}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Edit Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Share Profil</Text>
            </TouchableOpacity>
            <View style={styles.akunIcon}>
              <Text style={styles.akunText}>👤</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Konten Beranda */}

       {/* Footer */}
      <Animated.View style={[styles.footer, { transform: [{ translateY }] }]}>
       <TouchableOpacity style={styles.footerIcon} onPress={handleMenu}>
          {/* Ganti URL dengan URL ikon media player yang diinginkan */}
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/2048px-Home_Icon_by_Lakas.svg.png' }} style={styles.icontest} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          {/* Ganti URL dengan URL ikon media player yang diinginkan */}
          <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/search_magnifier_icon_145939.png' }} style={styles.icontest} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          {/* Ganti URL dengan URL ikon media player yang diinginkan */}
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/020/389/277/original/media-player-icon-png.png' }} style={styles.icontest} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          {/* Ganti URL dengan URL ikon media player yang diinginkan */}
          <Image source={{ uri: 'https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png' }} style={styles.icontest} />
        </TouchableOpacity>
         <TouchableOpacity style={styles.footerIcon}>
          {/* Ganti URL dengan URL ikon media player yang diinginkan */}
          <Image source={{ uri: 'https://placekitten.com/100/100' }} style={styles.iconImage} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 40,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  checkIcon: {
    width: 20,
    height: 20,
  },
  boldText: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  headerButtonRow: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  headerButton: {
    backgroundColor: 'gray',
    padding: 5,
    marginRight: 10,
    borderRadius: 9,
  },
  headerButtonText: {
    color: 'white',
  },
  akunIcon: {
    backgroundColor: 'grey',
    borderRadius: 9,
    padding: 5,
  },
  akunText: {
    color: 'white',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    elevation: 10,
  },
  footerIcon: {
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  icontest: {
    width: 20,
    height: 20,
  },
});

export default Beranda;

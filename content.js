import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

renderItem = item => {
  console.log(item.title);
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>}
    </View>
  );
};

class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchMovies('asc');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.headingStyle}>{this.props.movies.title}</Text>
        <Text style={styles.desStyle}>{this.props.movies.description}</Text>
        <FlatList
          data={this.props.movies.movies}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'baseline',
                }}>
                <Text>Title : </Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'baseline',
                }}>
                <Text>Year: </Text>
                <Text style={styles.title}>{item.releaseYear}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingStyle: {
    backgroundColor: 'red',
    textAlign: 'center',
    padding: 24,
    fontWeight: 'bold',
  },
  desStyle: {
    padding: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});

export default Content;

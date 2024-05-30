import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import Chip from '@/components/Chip';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <Chip />
        <Button label="Click me!" />
        <Button label="Click me!" color="secondary" />

        <TextInput />
        <TextInput />
        <Button label="Click me!" />
        <Button label="Click me!" color="secondary" />

        <TextInput />
        <TextInput />
        <Button label="Click me!" />
        <Button label="Click me!" color="secondary" />

        <TextInput />
        <TextInput />
        <Button label="Click me!" />
        <Button label="Click me!" color="secondary" />

        <TextInput />
        <TextInput />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import React from 'react';
import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Button from '../Button';
import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SelectListing({ setSelected, toggleModal }) {
  const options = [
    { key: '1', value: 'Location de voiture' },
    { key: '2', value: "Billet d'avion" },
    { key: '3', value: 'Logement' },
    { key: '4', value: 'Autre' },
  ];

  return (
    <View style={tw`w-4/5 h-auto bg-[#f7ebda] rounded-[.625rem] p-3`}>
      <View style={tw`flex-row-reverse mb-3`}>
        <FontAwesome
          name="window-close"
          color="#073040"
          size={30}
          onPress={toggleModal}
          style={tw`absolute`}
        />
      </View>
      <View style={tw`justify-center items-center`}>
        <Text style={[tw`font-bold text-[1rem] p-2`, { color: '#073040' }]}>
          Ajouter des informations
        </Text>
        <View style={tw`mb-3 w-11/12`}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={options}
            save="value"
            placeholder="Sélectionnez une activité"
            searchPlaceholder="Rechercher"
            maxHeight={150}
            boxStyles={{
              borderColor: 'transparent',
              backgroundColor: 'lightgray',
            }}
            inputStyles={{
              borderColor: 'transparent',
              backgroundColor: 'lightgray',
              margin: '10',
            }}
            dropdownStyles={{
              borderColor: 'transparent',
              backgroundColor: 'lightgray',
            }}
          />
        </View>
        <Button title="Ajouter" /*onPress={addInfos}*/ />
      </View>
    </View>
  );
}

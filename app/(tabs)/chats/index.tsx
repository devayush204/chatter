import { View, Text, ScrollView, FlatList } from 'react-native';
import chats from '@/assets/data/chats.json';
import { defaultStyles } from '@/constants/Styles';
import ChatRow from '@/components/ChatsRow';

const Page = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 40, flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatRow {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};
export default Page;
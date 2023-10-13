import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card>
    <Card.Title title="Plants" subtitle="Native Plants in the Philippines" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Mali-Mali</Text>
      <Text variant="bodyMedium">That said, Philippine Native Trees does sell potted seedlings that can also work beautifully indoors for a few years. One of the plants that are popular for their ornamental feature is the Leea guineensis, which is sometimes called mali-mali. Although a perennial plant, the mali-mali can stay up to eight years potted indoors.</Text>
    </Card.Content>
    {}
    <Card.Cover source={require('./Picture/mali-mali.jpg')} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;

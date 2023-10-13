import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccordionItem = ({ title, contents }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sign}>{isCollapsed ? '+' : '-'}</Text>
        </View>
      </TouchableOpacity>
      {!isCollapsed && (
        <View style={styles.contentContainer}>
          {contents.map((content, index) => (
            <Text key={index} style={styles.content}>
              {content}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const Accordion = () => {
  const categories = [
    {
      title: "Category 1",
      contents: ["Philippines", "Vietnam", "Thailand"],
    },
    {
      title: "Category 2",
      contents: ["Japan", "South Korea", "China"],
    },
    {
      title: "Category 3",
      contents: ["United States", "Canada", "Mexico"],
    },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <AccordionItem
          key={index}
          title={category.title}
          contents={category.contents}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#48cae4',
    width: 275,
    padding: 10,
    borderRadius: 5,
  },
  sign: {
    marginLeft: 150
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 10,
  },
  content: {
    fontSize: 16,
    color: '#000',
  },
});

export default Accordion;



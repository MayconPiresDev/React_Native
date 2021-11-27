import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
	const [newSkill, setNewSkill] = useState('');
	const [mySkills, setMySkills] = useState([]);

	function handleAddNewSkill() {
		setMySkills(oldState => [...oldState, newSkill]);


	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome, Maycon
			</Text>

			<TextInput
				style={styles.input}
				placeholder='New skill'
				placeholderTextColor='#444'
				onChangeText={setNewSkill}
			/>

			 {/* add skill */}
			<Button onPress={handleAddNewSkill} />

			{/* space of skils */}
			<Text style={[styles.title, { marginVertical: 50 }]}>
				My skills
			</Text>

			{/* show saved skill */}
			<FlatList
				data={mySkills}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<SkillCard skill={item}/>
				)}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 20,
		paddingVertical: 70,
		paddingHorizontal: 30
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1F1e25',
		color: '#fff',
		fontSize: 18,
		padding: Platform.OS === 'ios' ? 15 : 10, // adapt between iOS or Android
		marginTop: 30,
		borderRadius: 9
	}
})
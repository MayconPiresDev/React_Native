import React, { useState, useEffect } from 'react';
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

interface SkillData {
	id: String;
	name: String;
}

export function Home() {

	// store an empty state and reload when start app in state initial
	const [newSkill, setNewSkill] = useState('');
	const [mySkills, setMySkills] = useState<SkillData[]>([]);
	const [greeting, setGreeting] = useState('');


	function handleAddNewSkill() {
		// adds a new skill keeping the old ones creating a new vector
		const data = {
			id: String(new Date().getTime()),
			name: newSkill
		}
		setMySkills(oldState => [...oldState, data]);
	}

	// remove skill
	function handleRemoveSkill(id: string) {
		setMySkills(oldState => oldState.filter(
			skill => skill.id !== id
		));
	}

	// Hooks
	useEffect(() => {
		//effect observed when variable `[]` is changed
		const currentHours = new Date().getHours();

		if (currentHours < 12) {
			setGreeting('Good Morning');
		}
		else if (currentHours >= 12 && currentHours < 18) {
			setGreeting('Good Afternoon');
		}
		else {
			setGreeting('Good Night');
		}

	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome, Maycon
			</Text>

			<Text style={styles.greetings}>
				{greeting}
			</Text>

			<TextInput
				style={styles.input}
				placeholder='New skill'
				placeholderTextColor='#444'
				onChangeText={setNewSkill}
			/>

			{/* add skill */}
			<Button
				title="Add"
				onPress={handleAddNewSkill}
			/>

			{/* space of skills */}
			<Text style={[styles.title, { marginVertical: 50 }]}>
				My skills
			</Text>

			{/* show saved skill */}
			<FlatList
				data={mySkills}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<SkillCard
						skill={item.name}
						onPress={() => handleRemoveSkill(item.id)}
					/>
				)}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
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
	},
	greetings: {
		color: '#fff',
	}
})
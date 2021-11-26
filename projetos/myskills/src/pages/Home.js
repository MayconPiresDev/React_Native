import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform
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

			 // ação do add skill
			<Button onPress={handleAddNewSkill} />

			// campo das skills
			<Text style={[styles.title, { marginVertical: 50 }]}>
				My skills
			</Text>

			{
				// mostra a skill salva
				mySkills.map(skill => (
					<SkillCard skill={skill}/>
				))
			}

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
		padding: Platform.OS === 'ios' ? 15 : 10, // faz a adapitação caso seja ios ou android
		marginTop: 30,
		borderRadius: 9
	}
})
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles';
import { theme } from '../../theme';
import { Indicator } from '../../components/Indicator';
import { EmptyListItem } from '../../components/EmptyListItem';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { Task } from '../../components/Task';

export function Home(){
    const [tasks, setTasks] = useState<object>([
        {
            title: 'teste 1',
            checked: false
        },
        {
            title: 'teste 2',
            checked: true
        }
    ]);

    const [ fontLoaded ] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    if(!fontLoaded) <AppLoading />
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </View>
            <View style={styles.listContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={theme.gray300}
                    />
                    <TouchableOpacity style={styles.button}>
                        <AntDesign name='pluscircleo' size={16} color={theme.gray200} />
                    </TouchableOpacity>
                </View>
                <View style={styles.listHeader}>
                    <Indicator text='Criadas' counter='0' />
                    <Indicator text='Concluídas' counter='0' secondaryColor />
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={task => task.title} 
                    renderItem={(task) => (<Task title={task.title} checked={task.checked} onPress={()=>{}} />)}
                />
                
            </View>
        </View>
    );
}
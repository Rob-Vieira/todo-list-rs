import { FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles';
import { theme } from '../../theme';
import { Indicator } from '../../components/Indicator';
import { EmptyListItem } from '../../components/EmptyListItem';
import { useEffect, useState } from 'react';
import { Task } from '../../components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TaskType = {
    title: string;
    checked: boolean;
}

export function Home(){
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    
    const handleFocus = () => setInputFocused(true);
    const handleBlur = () => setInputFocused(false);
    const cloneTasks = () => tasks?.map(t => t);

    function handleAddTask(title: string){
        if(title == '') return

        let newTasks = cloneTasks();

        newTasks?.unshift({
            title: title,
            checked: false   
        })

        setTasks(newTasks);
        setInputValue('');
    }

    function handleCheck(index: number){
        let newTasks = cloneTasks();

        newTasks[index].checked = !newTasks[index].checked;

        setTasks(newTasks);
    }
    
    function handleDelete(index: number){
        let newTasks = cloneTasks();

        newTasks.splice(index, 1);

        setTasks(newTasks);
    }

    function getTotalChecked() : number
    {
        return (tasks.filter(t => t.checked)).length
    }
    
    useEffect(() => {
        const getTasks = async () => {
            try {
                const serializedObject = await AsyncStorage.getItem('tasks');

                if (serializedObject !== null) {
                    const storageTasks = JSON.parse(serializedObject);
                    setTasks(storageTasks.data);
                }
            } catch (error) {
                console.error('Erro ao recuperar objeto do AsyncStorage:', error);
            }
        };

        getTasks();
    }, []);
    
    useEffect(() => {
        async function saveTasks(){
            try{
                let json = JSON.stringify({data: tasks});
                await AsyncStorage.setItem('tasks', json);
            }
            catch(error){
                console.error('Erro ao salvar objeto no AsyncStorage:', error);
            }
        }

        saveTasks();
    }, [tasks]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </View>
            <View style={styles.listContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={[styles.input, inputFocused && styles.inputFocus]}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={theme.gray300}
                        cursorColor={theme.gray100}
                        value={inputValue}
                        onChangeText={setInputValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <TouchableOpacity
                        onPress={() => handleAddTask(inputValue)} 
                        style={styles.button}
                    >
                        <AntDesign name='pluscircleo' size={16} color={theme.gray200} />
                    </TouchableOpacity>
                </View>
                <View style={styles.listHeader}>
                    <Indicator text='Criadas' counter={`${tasks.length}`} />
                    <Indicator text='Concluídas' counter={`${getTotalChecked()}`} secondaryColor />
                </View>
                <FlatList
                    data={tasks}
                    renderItem={({item, index}) => (<Task title={item.title} checked={item.checked} onDelete={()=>{ handleDelete(index) }} onCheck={()=>{ handleCheck(index) }}  />)}
                    ListEmptyComponent={() => (<EmptyListItem />)}
                />
                
            </View>
        </View>
    );
}
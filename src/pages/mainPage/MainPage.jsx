import { useDispatch } from 'react-redux'
import { getMangaAct } from '../../redux/actions/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import styles from './mainPage.module.css'
import Card from '../../components/card/Card'

const MainPage = () => {

    const dispatch = useDispatch()
    const {manga} = useSelector(state => state.mangaReducer)
    
    
 
    const getManga = () =>{
        dispatch(getMangaAct())        
    }

    useEffect(() => {
        getManga()   
        console.log(manga);
             
    }, [])

    return(
        <div className={styles.wrapper}>
            {manga.map((item, index) => 
                <Card key={index} img={item.images.jpg.image_url} title={item.title} chapter={item.chapters}/>
            )}
        </div>
    )
}

export default MainPage;
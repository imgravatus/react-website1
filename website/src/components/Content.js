import { Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
// firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import { firebaseConfig } from '../components/config/Config'

export function Content(props) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    const getArticles = () => {
        return new Promise((resolve, reject) => {
            let articles = []
            const db = firebase.firestore()
            db.collection('articles').get()
                .then((snapshot) => {
                        snapshot.forEach((doc) => {
                        articles.push(doc.data())

                    })
                    resolve(articles)
                })
                .catch((error) => {
                    reject(error.message)
                })
        })
    }
    return (
        <main class="content">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home items={getArticles} />
                </Route>
            </Switch>
        </main>
    )
}
export default Content
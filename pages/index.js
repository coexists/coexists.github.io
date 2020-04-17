import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.body}>
    <div>
        <Head>
                <title>Homepage</title>
            </Head>
            </div>
            <div className={styles.list}>
                <h1 className={styles.h1}>Pokemon Search Tool</h1>
                    <div>
                        <Link href = "/name">
                            <a className={styles.a}>Name</a>
                        </Link>
                        <br />
                        <Link href = "/id">
                            <a className={styles.a}>ID</a>
                        </Link>
                        <br />
                        <Link href = "/type">
                            <a className={styles.a}>Type</a>
                        </Link>
                    </div>
                </div>
     </div>
  )
}

export default Home;
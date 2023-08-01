"use client"

import styles from '../page.module.css'
import importData from '@/data/json-to-xata'

export default function Home() {
  return (
    <main className={styles.main}>
      <button onClick={importData}>Xata that data!</button>
    </main>
  )
}

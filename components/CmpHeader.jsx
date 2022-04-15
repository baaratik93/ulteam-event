import styles from '../styles/Home.module.css'
import Link from 'next/link'
function CmpHeader() {
	return <header className={styles.header}>
				<Link href="/">
					<a><h1>Ulteam-events</h1></a>
				</Link>
				<nav>
					<ul>
						<li><Link href="/"><a>A la une</a></Link></li>
						<li><Link href="/events"><a>Evénements</a></Link></li>
						<li><Link href="/events"><a>Téléchargements</a></Link></li>
						<li><Link href="/events"><a>Favories</a></Link></li>
						<li><Link href="/events"><a>Gallery</a></Link></li>
					</ul>
				</nav>
			</header>
}

export default CmpHeader